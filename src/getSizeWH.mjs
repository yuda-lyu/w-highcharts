import get from 'lodash/get'
import isnum from 'wsemi/src/isnum.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'


function getSizeWH(size) {
    let w = get(size, 'w') || get(size, '0')
    if (!isnum(w)) {
        w = 0
    }
    w = cdbl(w)
    let h = get(size, 'h') || get(size, '1')
    if (!isnum(h)) {
        h = 0
    }
    h = cdbl(h)
    return [w, h]
}


export default getSizeWH
