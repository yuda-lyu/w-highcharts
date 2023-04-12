import each from 'lodash/each'
import map from 'lodash/map'
import get from 'lodash/get'
import filter from 'lodash/filter'
import max from 'lodash/max'
import min from 'lodash/min'
import isnum from 'wsemi/src/isnum.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'


function getSeriesLimit(ltseries) {

    //getDataLim
    let getDataLim = (ps, key) => {
        let vs = map(ps, key)
        vs = filter(vs, isnum)
        vs = map(vs, cdbl)
        let limMin = min(vs)
        if (!isnum(limMin)) {
            limMin = 0
        }
        let limMax = max(vs)
        if (!isnum(limMax)) {
            limMax = 0
        }
        return { limMin, limMax }
    }

    //getSerieLim
    let getSerieLim = (serie) => {
        let data = get(serie, 'data', [])
        let ps = []
        each(data, (v) => {
            let x = null
            let y = null
            if (iseobj(v)) {
                x = get(v, 'x', null)
                y = get(v, 'y', null)
            }
            else {
                x = get(v, '0', null)
                y = get(v, '1', null)
            }
            ps.push({ x, y })
        })
        let xLim = getDataLim(ps, 'x')
        let xLimMin = xLim.limMin
        let xLimMax = xLim.limMax
        let yLim = getDataLim(ps, 'y')
        let yLimMin = yLim.limMin
        let yLimMax = yLim.limMax
        return { xLimMin, xLimMax, yLimMin, yLimMax }
    }

    //getSerieLim
    let ss = map(ltseries, getSerieLim)
    let _xLimMin = getDataLim(ss, 'xLimMin').limMin
    let _xLimMax = getDataLim(ss, 'xLimMax').limMax
    let _yLimMin = getDataLim(ss, 'yLimMin').limMin
    let _yLimMax = getDataLim(ss, 'yLimMax').limMax

    return {
        xLimMin: _xLimMin,
        xLimMax: _xLimMax,
        yLimMin: _yLimMin,
        yLimMax: _yLimMax,
    }
}


export default getSeriesLimit
