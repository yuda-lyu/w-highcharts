import get from 'lodash-es/get.js'
import isNumber from 'lodash-es/isNumber.js'
import isnum from 'wsemi/src/isnum.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import getPointXY from './getPointXY.mjs'
import getSizeWH from './getSizeWH.mjs'


function addRectByChart(chart, rectLeftTop, rectSize, opt = {}) {

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

    //radius
    let radius = get(opt, 'radius')
    if (!isnum(radius)) {
        radius = 0
    }
    radius = cdbl(radius)
    radius = Math.max(radius, 0)

    //zIndex
    let zIndex = get(opt, 'zIndex')
    if (!isNumber(zIndex)) {
        zIndex = undefined
    }

    //x, y
    let [x, y] = getPointXY(rectLeftTop)

    //w, h
    let [w, h] = getSizeWH(rectSize)

    //renderer
    let ren = chart.renderer

    //rect
    ren.rect(x, y, w, h)
        .attr({
            'name': 'hcextra',
            'fill': faceColor,
            'stroke-width': edgeWidth,
            'stroke': edgeColor,
            'r': radius,
            zIndex, //attr不能用z-index
        })
        .add()

}


export default addRectByChart
