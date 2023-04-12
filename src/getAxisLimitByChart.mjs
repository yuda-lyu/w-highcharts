import get from 'lodash/get'
import isp0int from 'wsemi/src/isp0int.mjs'
import cint from 'wsemi/src/cint.mjs'


function getAxisLimitByChart(chart, opt = {}) {

    //indXAxis
    let indXAxis = get(opt, 'indXAxis')
    if (!isp0int(indXAxis)) {
        indXAxis = 0
    }
    indXAxis = cint(indXAxis)

    //indYAxis
    let indYAxis = get(opt, 'indYAxis')
    if (!isp0int(indYAxis)) {
        indYAxis = 0
    }
    indYAxis = cint(indYAxis)

    //xLimMin,xLimMax,yLimMin,yLimMax
    let xLimMin = chart.xAxis[indXAxis].min
    if (!xLimMin) {
        xLimMin = 0
    }
    let xLimMax = chart.xAxis[indXAxis].max
    if (!xLimMax) {
        xLimMax = 0
    }
    let yLimMin = chart.yAxis[indYAxis].min
    if (!yLimMin) {
        yLimMin = 0
    }
    let yLimMax = chart.yAxis[indYAxis].max
    if (!yLimMax) {
        yLimMax = 0
    }

    return {
        xLimMin,
        xLimMax,
        yLimMin,
        yLimMax,
    }
}


export default getAxisLimitByChart
