import isestr from 'wsemi/src/isestr.mjs'
import getHighchart from './getHighchart.mjs'


let key = '__fontFamily__'

function setFontfamily(fontFamily) {

    //check
    if (!isestr(fontFamily)) {
        throw new Error(`invalid fontFamily[${fontFamily}]`)
    }

    //getHighchart
    let hc = getHighchart()

    //save
    hc[key] = fontFamily

}


export default setFontfamily
