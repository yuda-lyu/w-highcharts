import get from 'lodash-es/get'
import isNumber from 'lodash-es/isNumber'
import isnum from 'wsemi/src/isnum.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import getPointXY from './getPointXY.mjs'


function addCircleByChart(chart, p, size, opt = {}) {

    //edgeWidth
    let edgeWidth = get(opt, 'edgeWidth')
    if (!isnum(edgeWidth)) {
        edgeWidth = 1
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

    //x, y
    let [x, y] = getPointXY(p)

    //renderer
    let ren = chart.renderer

    //circle
    ren.circle(x, y, size)
        .attr({
            'name': 'hcextra',
            'fill': faceColor,
            'stroke-width': edgeWidth,
            'stroke': edgeColor,
            zIndex, //attr不能用z-index
        })
        .add()

}


export default addCircleByChart
