import each from 'lodash/each'
import get from 'lodash/get'
import isestr from 'wsemi/src/isestr.mjs'
import getMarkers from './getMarkers.mjs'


function findMarker(smbl) {

    //check
    if (!isestr(smbl)) {
        return null
    }

    //ms
    let ms = getMarkers()

    //find
    let m = null
    each(ms, (v) => {
        let _smbl = get(v, 0, null)
        if (_smbl === smbl) {
            m = v
            return false //跳出
        }
    })

    //symbol
    let symbol = get(m, 0, null)
    let size = get(m, 1, null)

    return {
        symbol,
        size,
    }
}


export default findMarker
