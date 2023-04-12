import get from 'lodash/get'
import isNumber from 'lodash/isNumber'
import isnum from 'wsemi/src/isnum.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import getPointXY from './getPointXY.mjs'
import getStrokeFromLineStyle from './getStrokeFromLineStyle.mjs'


function addLineByChart(chart, p1, p2, opt = {}) {

    //lineWidth
    let lineWidth = get(opt, 'lineWidth')
    if (!isnum(lineWidth)) {
        lineWidth = 2
    }
    lineWidth = cdbl(lineWidth)
    lineWidth = Math.max(lineWidth, 0)

    //lineColor
    let lineColor = get(opt, 'lineColor')
    if (!isestr(lineColor)) {
        lineColor = '#000'
    }

    //lineStyle
    let lineStyle = get(opt, 'lineStyle')
    if (!isestr(lineStyle)) {
        lineStyle = 'Solid'
    }

    //zIndex
    let zIndex = get(opt, 'zIndex')
    if (!isNumber(zIndex)) {
        zIndex = undefined
    }

    //cx1,cy1,cx2,cy2
    let [cx1, cy1] = getPointXY(p1)
    let [cx2, cy2] = getPointXY(p2)

    //renderer
    let ren = chart.renderer

    //attr
    let attr = {
        'name': 'hcextra',
        'stroke-width': lineWidth,
        'stroke': lineColor,
        ...getStrokeFromLineStyle(lineStyle),
        zIndex, //attr不能用z-index
    }

    //line
    ren.path(['M', cx1, cy1, 'L', cx2, cy2])
        .attr(attr)
        .add()

}


export default addLineByChart
