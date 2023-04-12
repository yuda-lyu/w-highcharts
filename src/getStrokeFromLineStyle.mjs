import getStrokeDasharrayFromLineStyle from './getStrokeDasharrayFromLineStyle.mjs'


function getStrokeFromLineStyle(lineStyle) {
    let sd = getStrokeDasharrayFromLineStyle(lineStyle)
    if (sd === '') {
        return {}
    }
    return {
        'stroke-dasharray': sd,
    }
}


export default getStrokeFromLineStyle
