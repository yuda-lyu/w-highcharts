import getDefUnits from './getDefUnits.mjs'
import getDefDateFmt from './getDefDateFmt.mjs'


/**
 * 取得Highcharts時間群組設定物件
 *
 * @returns {Object} 回傳時間群組設定物件
 */
function getDefDataGrouping() {
    return {
        enabled: true,
        units: getDefUnits(),
        dateTimeLabelFormats: getDefDateFmt(),
    }
}


export default getDefDataGrouping
