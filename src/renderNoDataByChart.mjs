import get from 'lodash-es/get'
import isbol from 'wsemi/src/isbol.mjs'
import getConvertLocByChart from './getConvertLocByChart.mjs'
import addRectCenterTextByChart from './addRectCenterTextByChart.mjs'


function renderNoDataByChart(chart, opt = {}) {

    //invXY
    let invXY = get(opt, 'invXY')
    if (!isbol(invXY)) {
        invXY = false
    }

    //rectSize
    let rectSize = { w: 100, h: 24 }

    //getConvertLocByChart
    let cl = getConvertLocByChart(chart, opt)

    //p
    let { xLimMin, xLimMax, yLimMin, yLimMax } = cl.lims
    let xmean = (xLimMin + xLimMax) / 2
    let ymean = (yLimMin + yLimMax) / 2
    let p = [xmean, ymean]
    p = cl.cvp(p, invXY)

    //addRectCenterTextByChart
    addRectCenterTextByChart(chart, p, rectSize, '無有效資料', { edgeColor: '#f26', faceColor: '#fff', zIndex: 10 })

}


export default renderNoDataByChart
