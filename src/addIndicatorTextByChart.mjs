import get from 'lodash/get'
import size from 'lodash/size'
import isNumber from 'lodash/isNumber'
import isnum from 'wsemi/src/isnum.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import getPointXY from './getPointXY.mjs'
import getSizeWH from './getSizeWH.mjs'
import addLineByChart from './addLineByChart.mjs'
import addCircleByChart from './addCircleByChart.mjs'
import addTextByChart from './addTextByChart.mjs'


function addIndicatorTextByChart(chart, ps, rectShift, rectSize, text, opt = {}) {

    //lineWidth
    let lineWidth = get(opt, 'lineWidth')
    if (!isnum(lineWidth)) {
        lineWidth = 1
    }
    lineWidth = cdbl(lineWidth)
    lineWidth = Math.max(lineWidth, 0)

    //lineColor
    let lineColor = get(opt, 'lineColor')
    if (!isestr(lineColor)) {
        lineColor = '#aaa'
    }

    //circleColor
    let circleColor = get(opt, 'circleColor')
    if (!isestr(circleColor)) {
        circleColor = '#999'
    }

    //connAlign
    let connAlign = get(opt, 'connAlign')
    if (connAlign !== 'left' && connAlign !== 'right') {
        connAlign = 'left'
    }

    //shiftLen
    let shiftLen = get(opt, 'shiftLen')
    if (!isnum(shiftLen)) {
        shiftLen = 20
    }
    shiftLen = cdbl(shiftLen)
    shiftLen = Math.max(shiftLen, 0)

    //circleSize
    let circleSize = get(opt, 'circleSize')
    if (!isnum(circleSize)) {
        circleSize = 4
    }
    circleSize = cdbl(circleSize)
    circleSize = Math.max(circleSize, 0)

    //px,py 指向處
    let px1 = null
    let py1 = null
    let px2 = null
    let py2 = null
    if (size(ps) === 1) {
        let r1 = getPointXY(ps[0])
        px1 = r1[0]
        py1 = r1[1]
    }
    else if (size(ps) === 2) {
        let r1 = getPointXY(ps[0])
        px1 = r1[0]
        py1 = r1[1]
        let r2 = getPointXY(ps[1])
        px2 = r2[0]
        py2 = r2[1]
    }
    else {
        throw new Error('ps尚不支援3點以上')
    }

    //sx,sy 平移量
    let [sx, sy] = getPointXY(rectShift)

    //nx,ny 拉遠處
    let nx = px1 + sx
    let ny = py1 + sy

    //ntx,nty 拉遠平移圓點處
    let ntx = nx + shiftLen
    if (connAlign === 'right') {
        ntx = nx - shiftLen
    }
    let nty = ny

    //w, h
    let [w, h] = getSizeWH(rectSize)

    //x, y 矩形左上角座標
    let x = ntx + circleSize
    if (connAlign === 'right') {
        x = ntx - w - circleSize
    }
    let y = nty - h / 2

    //addLineByChart 指向線
    if (isNumber(px1) && isNumber(py1)) {
        addLineByChart(chart, { x: px1, y: py1 }, { x: nx, y: ny }, { ...opt, lineWidth, lineColor })
    }
    if (isNumber(px2) && isNumber(py2)) {
        addLineByChart(chart, { x: px2, y: py2 }, { x: nx, y: ny }, { ...opt, lineWidth, lineColor })
    }

    //addLineByChart 拉遠平移線
    addLineByChart(chart, { x: nx, y: ny }, { x: ntx, y: nty }, { ...opt, lineWidth, lineColor })

    //addCircleByChart 拉遠平移圓點
    addCircleByChart(chart, { x: ntx, y: nty }, circleSize, { edgeWidth: 0, faceColor: circleColor })

    //addTextByChart 文字
    addTextByChart(chart, { x: x + w / 2, y: y + h / 2 }, text, opt)

}


export default addIndicatorTextByChart
