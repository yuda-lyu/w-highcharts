import get from 'lodash-es/get'
import isestr from 'wsemi/src/isestr.mjs'
import getHighchart from './getHighchart.mjs'


let key = '__fontFamily__'

function getFontfamily() {

    //getHighchart
    let hc = getHighchart()

    //fontFamily
    let fontFamily = get(hc, key)

    //check
    if (!isestr(fontFamily)) {
        fontFamily = `'Times New Roman', 'DFKai-SB', 'DFKaiShu-SB-Estd-BF', 'KaiU', '標楷體'`
        // let fontFamilyEng = `'微軟正黑體'`
        // let fontFamilyCht = `'DFKai-SB', 'DFKaiShu-SB-Estd-BF', 'KaiU', '標楷體'`
    }
    return fontFamily
}


export default getFontfamily
