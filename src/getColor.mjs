import each from 'lodash-es/each.js'
import get from 'lodash-es/get.js'
import times from 'lodash-es/times.js'
import oc from 'wsemi/src/color.mjs'
import ispint from 'wsemi/src/ispint.mjs'
import isnum from 'wsemi/src/isnum.mjs'
import isearr from 'wsemi/src/isearr.mjs'
import cint from 'wsemi/src/cint.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'


function getColor(i, opt = {}) {

    //listL
    let listL = get(opt, 'listL')
    if (!isearr(listL)) {
        listL = [0.35, 0.7]
    }

    //listS
    let listS = get(opt, 'listS')
    if (!isearr(listS)) {
        listS = [0.9, 0.5, 0.2]
    }

    //opacity
    let opacity = get(opt, 'opacity')
    if (!isnum(opacity)) {
        opacity = 1
    }
    opacity = cdbl(opacity)
    opacity = Math.max(opacity, 0)
    opacity = Math.min(opacity, 1)

    //hueSliceNum
    let hueSliceNum = get(opt, 'hueSliceNum')
    if (!ispint(hueSliceNum)) {
        hueSliceNum = 5
    }
    hueSliceNum = cint(hueSliceNum)

    //ltcolor
    let ltcolor = []
    each(listL, function (rl) {
        each(listS, function (rs) {
            times(hueSliceNum, function (i) {
                let tc = oc.toRgbaString({
                    h: (360 * i / hueSliceNum),
                    s: rs,
                    l: rl,
                    a: opacity,
                })
                ltcolor.push(tc)
            })
        })
    })

    //j
    let j = i % ltcolor.length

    return ltcolor[j]
}


export default getColor
