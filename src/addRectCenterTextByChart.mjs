import getPointXY from './getPointXY.mjs'
import getSizeWH from './getSizeWH.mjs'
import addRectByChart from './addRectByChart.mjs'
import addTextByChart from './addTextByChart.mjs'


function addRectCenterTextByChart(chart, p, rectSize, text, opt = {}) {

    //x, y
    let [x, y] = getPointXY(p)

    //w, h
    let [w, h] = getSizeWH(rectSize)

    //_lt
    let _lt = { x: x - w / 2, y: y - h / 2 }

    //p
    let _p = p

    //addRectByChart
    addRectByChart(chart, _lt, rectSize, opt)

    //addTextByChart
    addTextByChart(chart, _p, text, opt)

}


export default addRectCenterTextByChart
