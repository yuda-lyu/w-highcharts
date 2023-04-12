import getColor from './getColor.mjs'
import getMarker from './getMarker.mjs'


function getLineSetting(i, opt = {}) {
    let cb = getColor(i, opt)
    let cl = getColor(i, { opacity: 0.2 })
    let mb = getMarker(i, opt)
    let lineStyle = 'Solid' //getLineStyle(i);
    let lineColor = cb
    let marker = mb.symbol
    let markerSize = mb.size
    let markerEdgecolor = cb
    let markerFacecolor = cl
    return {
        lineColor,
        lineStyle,
        marker,
        markerEdgecolor,
        markerFacecolor,
        markerSize,
    }
}


export default getLineSetting
