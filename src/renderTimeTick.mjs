
// let xTickFormatterCore = (v, c = '') => {
//     // console.log('v', v)

//     //ms
//     let ms = v.value

//     //c, 若未給使用預設
//     if (!isestr(c)) {
//         c = v.dateTimeLabelFormat
//     }

//     //t
//     let t = ot(ms)
//     // console.log('t', t)
//     // t.year()
//     // t.month() //起始為0
//     // t.date()
//     // t.hour()
//     // t.minute()
//     // t.second()
//     // t.millisecond()

//     //只針對模板指定標記做渲染: %Y %m %d %H %M %S %L
//     c = c.replaceAll('%Y', cstr(t.year()))
//     c = c.replaceAll('%m', padStart(cstr(t.month() + 1), 2, '0'))
//     c = c.replaceAll('%d', padStart(cstr(t.date()), 2, '0'))
//     c = c.replaceAll('%H', padStart(cstr(t.hour()), 2, '0'))
//     c = c.replaceAll('%M', padStart(cstr(t.minute()), 2, '0'))
//     c = c.replaceAll('%S', padStart(cstr(t.second()), 2, '0'))
//     c = c.replaceAll('%L', padStart(cstr(t.millisecond()), 3, '0'))
//     // console.log('c', c)

//     return c
// }

// let xTickFormatterForFirstToDay = (v) => {
//     if (v.isFirst) {
//         let fmtDay = '%Y<br/>%m/%d'
//         return xTickFormatterCore(v, fmtDay)
//     }
//     else {
//         return xTickFormatterCore(v)
//     }
// }

// //xTickFormatter
// let xTickFormatter = xTickFormatterCore
// if (useRenderTimeFirstTickToDay) {
//     xTickFormatter = xTickFormatterForFirstToDay
// }
