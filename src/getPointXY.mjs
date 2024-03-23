import get from 'lodash-es/get.js'
import isnum from 'wsemi/src/isnum.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'


function getPointXY(p) {
    let x = get(p, 'x') || get(p, '0')
    if (!isnum(x)) {
        x = 0
    }
    x = cdbl(x)
    let y = get(p, 'y') || get(p, '1')
    if (!isnum(y)) {
        y = 0
    }
    y = cdbl(y)
    return [x, y]
}


export default getPointXY
