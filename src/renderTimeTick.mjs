import get from 'lodash-es/get.js'
import padStart from 'lodash-es/padStart.js'
import ot from 'dayjs'
import isestr from 'wsemi/src/isestr.mjs'
import isbol from 'wsemi/src/isbol.mjs'
import cstr from 'wsemi/src/cstr.mjs'


function renderTimeTickCore(v, c = '') {

    //ms
    let ms = v.value

    //c, 若未給使用預設
    if (!isestr(c)) {
        c = v.dateTimeLabelFormat
    }

    //t
    let t = ot(ms)

    //只針對模板指定標記做渲染: %Y %m %d %H %M %S %L
    c = c.replaceAll('%Y', cstr(t.year()))
    c = c.replaceAll('%m', padStart(cstr(t.month() + 1), 2, '0'))
    c = c.replaceAll('%d', padStart(cstr(t.date()), 2, '0'))
    c = c.replaceAll('%H', padStart(cstr(t.hour()), 2, '0'))
    c = c.replaceAll('%M', padStart(cstr(t.minute()), 2, '0'))
    c = c.replaceAll('%S', padStart(cstr(t.second()), 2, '0'))
    c = c.replaceAll('%L', padStart(cstr(t.millisecond()), 3, '0'))

    return c
}


/**
 * 渲染Highcharts時間軸刻度標籤文字
 *
 * @param {Object} v 輸入Highcharts刻度標籤物件，需含value(毫秒時間戳)與dateTimeLabelFormat(預設模板字串)
 * @param {Object} [opt={}] 輸入設定物件，預設{}
 * @param {String} [opt.format=''] 輸入模板字串，可用標記為%Y %m %d %H %M %S %L，預設''，代表使用v.dateTimeLabelFormat
 * @param {Boolean} [opt.useRenderTimeFirstTickToDay=false] 輸入首個刻度是否改渲染為年與日期布林值，預設false
 * @returns {String} 回傳渲染後刻度標籤字串
 */
function renderTimeTick(v, opt = {}) {

    //format
    let format = get(opt, 'format')
    if (!isestr(format)) {
        format = ''
    }

    //useRenderTimeFirstTickToDay
    let useRenderTimeFirstTickToDay = get(opt, 'useRenderTimeFirstTickToDay')
    if (!isbol(useRenderTimeFirstTickToDay)) {
        useRenderTimeFirstTickToDay = false
    }

    //首個刻度改渲染為年與日期
    if (useRenderTimeFirstTickToDay && v.isFirst) {
        let fmtDay = '%Y<br/>%m/%d'
        return renderTimeTickCore(v, fmtDay)
    }

    return renderTimeTickCore(v, format)
}


export default renderTimeTick
