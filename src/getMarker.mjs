import getMarkers from './getMarkers.mjs'


function getMarker(i, opt = {}) {

    //ms
    let ms = getMarkers(opt)

    //j
    let j = i % ms.length

    return {
        symbol: ms[j][0],
        size: ms[j][1],
    }
}


export default getMarker
