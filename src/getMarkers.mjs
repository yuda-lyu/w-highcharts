import get from 'lodash-es/get'
import isnum from 'wsemi/src/isnum.mjs'


function getMarkers(opt = {}) {

    //scale
    let scale = get(opt, 'scale')
    if (!isnum(scale)) {
        scale = 1
    }

    //ms
    let ms = []
    ms.push(['circle', 5]) //cir

    ms.push(['square', 5]) //squ

    ms.push(['diamond', 6]) //dia

    ms.push(['cross', 5]) //line

    ms.push(['plus', 5]) //line

    ms.push(['eradiate', 6]) //cir

    ms.push(['rdout', 6]) //squ

    ms.push(['gateway', 7]) //dia

    ms.push(['hloff', 7]) //cir

    ms.push(['star', 5]) //非軸對稱但加減用

    //以下icon非軸對稱, 會於xy座標交換時出現旋轉問題, 故先放最後
    ms.push(['triangle', 5])
    ms.push(['triangle-down', 5])
    ms.push(['triangle-right', 5])
    ms.push(['checkok', 5])
    ms.push(['crescent', 5])
    ms.push(['lightning', 5])
    ms.push(['spades', 5])
    ms.push(['waterdrop', 5])
    ms.push(['bird', 5])
    ms.push(['fire', 5])
    ms.push(['music', 5])
    ms.push(['apple', 5])
    ms.push(['cloud', 5])
    ms.push(['heart', 5])
    // //ms.push(['bread', 5])

    return ms
}


export default getMarkers
