import map from 'lodash/map'
import get from 'lodash/get'
import isNumber from 'lodash/isNumber'
import isfun from 'wsemi/src/isfun.mjs'
import getAxisLimitByChart from './getAxisLimitByChart.mjs'


function getConvertLocByChart(chart, opt = {}) {

    //size
    let rl = chart.plotLeft
    let rt = chart.plotTop
    let rw = chart.plotWidth
    let rh = chart.plotHeight
    // console.log('rl', rl, 'rt', rt, 'rw', rw, 'rh', rh)

    //getAxisLimitByChart
    let lims = getAxisLimitByChart(chart, opt)

    //cvLim
    let cvLim = get(opt, 'cvLim')
    if (isfun(cvLim)) {
        lims = cvLim(lims)
    }

    //spread
    let { xLimMin, xLimMax, yLimMin, yLimMax } = lims
    // console.log('chart.yAxis', chart.yAxis)
    // console.log('xLimMax', xLimMax)
    // console.log('xLimMin', xLimMin)
    // console.log('yLimMax', yLimMax)
    // console.log('yLimMin', yLimMin)

    //getType
    let getType = (p) => {
        let len1 = get(p, '0')
        if (isNumber(len1)) {
            return 'point'
        }
        let len2 = get(p, '0.0')
        if (isNumber(len2)) {
            return 'points'
        }
        console.log('p', p)
        throw new Error('invalid type of p')
    }

    //cv
    let cv = (p, invXY = false) => {

        //xr,yr
        let xr = (p[0] - xLimMin) / (xLimMax - xLimMin)
        let yr = (p[1] - yLimMin) / (yLimMax - yLimMin)
        if (invXY) {
            let t = xr
            xr = yr
            yr = t
        }

        //xn,yn
        let xn = xr * (rw) + rl
        let yn = (1 - yr) * (rh) + rt

        return [xn, yn]
    }

    //cvp
    let cvp = (p, invXY = false) => {
        let type = getType(p)
        if (type === 'point') {
            return cv(p, invXY)
        }
        else if (type === 'points') {
            let ps = p
            return map(ps, (p) => {
                return cv(p, invXY)
            })
        }
        throw new Error('invalid type')
    }

    return {
        lims,
        cvp,
    }
}


export default getConvertLocByChart
