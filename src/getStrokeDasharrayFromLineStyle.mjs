import toLower from 'lodash/toLower'
import get from 'lodash/get'


function getStrokeDasharrayFromLineStyle(lineStyle) {
    lineStyle = toLower(lineStyle)
    let kp = {
        'shortdashdotdot': '3,1,1,1,1,1',
        'shortdashdot': '3,1,1,1',
        'shortdot': '1,1',
        'shortdash': '3,1',
        'longdash': '8,3',
        'dot': '1,3',
        'dash': '4,3',
    }
    let sd = get(kp, lineStyle, '')
    return sd
}


export default getStrokeDasharrayFromLineStyle
