
/**
 * 取得Highcharts時間單位格式物件
 *
 * @returns {Object} 回傳時間單位格式物件
 */
function getDefDateFmt() {
    return {
        //millisecond: ['%A, %m/%d, %H:%M:%S.%L', '%A, %m/%d, %H:%M:%S.%L', '-%H:%M:%S.%L'],
        //second: ['%A, %m/%d, %H:%M:%S', '%A, %m/%d, %H:%M:%S', '-%H:%M:%S'],
        //minute: ['%A, %m/%d, %H:%M', '%A, %m/%d, %H:%M', '-%H:%M'],
        //hour: ['%A, %m/%d, %H:%M', '%A, %m/%d, %H:%M', '-%H:%M'],
        //day: ['%A, %Y/%m/%d', '%A, %m/%d', '-%A, %Y/%m/%d'],
        //week: ['%Y/%m/%d', '%A, %m/%d', '-%A, %Y/%m/%d'],
        //month: ['%Y/%m', '%m', '-%m %Y'],
        //year: ['%Y', '%Y', '-%Y']
        millisecond: ['%Y/%m/%d %H:%M:%S.%L', '%Y/%m/%d %H:%M:%S.%L', ' ~ %H:%M:%S.%L'],
        second: ['%Y/%m/%d %H:%M:%S', '%Y/%m/%d %H:%M:%S', ' ~ %H:%M:%S'],
        minute: ['%Y/%m/%d %H:%M', '%Y/%m/%d %H:%M', ' ~ %H:%M'],
        hour: ['%Y/%m/%d %H:%M', '%Y/%m/%d %H:%M', ' ~ %H:%M'],
        day: ['%Y/%m/%d', '%Y/%m/%d', ' ~ %Y/%m/%d'],
        week: ['%Y/%m/%d', '%Y/%m/%d', ' ~ %Y/%m/%d'],
        month: ['%Y/%m', '%Y/%m', ' ~ %Y/%m'],
        year: ['%Y', '%Y', ' ~ %Y']
    }
}


export default getDefDateFmt
