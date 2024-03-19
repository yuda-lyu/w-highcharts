import isNumber from 'lodash-es/isNumber'


function getPicCenter(xLimMin, xLimMax, yLimMin, yLimMax, invXY = false) {

    //check
    if (!isNumber(xLimMin)) {
        xLimMin = 0
    }
    if (!isNumber(xLimMax)) {
        xLimMax = 0
    }
    if (!isNumber(yLimMin)) {
        yLimMin = 0
    }
    if (!isNumber(yLimMax)) {
        yLimMax = 0
    }

    //xmean,ymean
    let xmean = (xLimMin + xLimMax) / 2
    let ymean = (yLimMin + yLimMax) / 2

    //p
    let p = [xmean, ymean]
    if (invXY) {
        p = [ymean, xmean]
    }

    return p
}


export default getPicCenter
