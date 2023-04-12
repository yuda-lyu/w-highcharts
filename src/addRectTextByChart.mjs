import getPointXY from './getPointXY.mjs'
import getSizeWH from './getSizeWH.mjs'
import addRectByChart from './addRectByChart.mjs'
import addTextByChart from './addTextByChart.mjs'


function addRectTextByChart(chart, rectLeftTop, rectSize, text, opt = {}) {

    //x, y
    let [x, y] = getPointXY(rectLeftTop)

    //w, h
    let [w, h] = getSizeWH(rectSize)

    //_lt
    let _lt = rectLeftTop

    //_p
    let _p = { x: x + w / 2, y: y + h / 2 }

    //addRectByChart
    addRectByChart(chart, _lt, rectSize, opt)

    //addTextByChart
    addTextByChart(chart, _p, text, opt)

}

export default addRectTextByChart
