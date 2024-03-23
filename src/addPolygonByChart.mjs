import each from 'lodash-es/each.js'
import get from 'lodash-es/get.js'
import isNumber from 'lodash-es/isNumber.js'
import isnum from 'wsemi/src/isnum.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'


function addPolygonByChart(chart, ps, opt = {}) {

    //edgeWidth
    let edgeWidth = get(opt, 'edgeWidth')
    if (!isnum(edgeWidth)) {
        edgeWidth = 2
    }
    edgeWidth = cdbl(edgeWidth)
    edgeWidth = Math.max(edgeWidth, 0)

    //edgeColor
    let edgeColor = get(opt, 'edgeColor')
    if (!isestr(edgeColor)) {
        edgeColor = '#000'
    }

    //faceColor
    let faceColor = get(opt, 'faceColor')
    if (!isestr(faceColor)) {
        faceColor = 'transparent'
    }

    //zIndex
    let zIndex = get(opt, 'zIndex')
    if (!isNumber(zIndex)) {
        zIndex = undefined
    }

    //renderer
    let ren = chart.renderer

    //p
    let p = []
    each(ps, (v, k) => {
        if (k === 0) {
            p.push('M')
        }
        else {
            p.push('L')
        }
        p.push(v[0])
        p.push(v[1])
    })

    //line
    ren.path(p)
        .attr({
            'name': 'hcextra',
            'stroke-width': edgeWidth,
            'stroke': edgeColor,
            'fill': faceColor,
            zIndex, //attr不能用z-index
        })
        .add()

}


export default addPolygonByChart
