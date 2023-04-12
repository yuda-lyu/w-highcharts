import getDefDateFmt from './getDefDateFmt.mjs'


/**
 * 取得Highcharts繪圖設定物件
 *
 * @returns {Object} 回傳繪圖設定物件
 */
function getDefOpt() {
    return {

        credits: {
            enabled: false
        },

        global: {
            useUTC: false, //輸入資料自訂UTC時間, 此處關閉避免被強制轉換
        },

        lang: {
            decimalPoint: '.',
            thousandsSep: ',',
            contextButtonTitle: '圖表匯出功能表',
            downloadJPEG: '下載 JPEG 圖片',
            downloadPDF: '下載 PDF 文件',
            downloadPNG: '下載 PNG 文件',
            downloadSVG: '下載 SVG 文件',
            downloadXLS: '下載 XLS 文件',
            openInCloud: '在 Highcharts Cloud 中打開',
            drillUpText: '返回 {series.name}',
            invalidDate: '無效的時間',
            loading: '載入中...',
            months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            noData: '沒有資料',
            printChart: '列印圖表',
            resetZoom: '重置縮放比例',
            resetZoomTitle: '重置為原始大小',
            shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            weekdays: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            viewData: '查看資料',
            rangeSelectorFrom: '開始時間',
            rangeSelectorTo: '結束時間',
            rangeSelectorZoom: '範圍',
            zoomIn: '縮小',
            zoomOut: '放大',
        },

        tooltip: {
            dateTimeLabelFormats: {
                millisecond: '%H:%M:%S.%L',
                second: '%H:%M:%S',
                minute: '%H:%M',
                hour: '%H:%M',
                day: '%Y/%m/%d',
                week: '%Y/%m/%d',
                month: '%Y/%m',
                year: '%Y'
            },
        },

        xAxis: {
            dateTimeLabelFormats: {
                second: '%Y<br/>%m/%d',
                minute: '%Y<br/>%m/%d',
                hour: '%Y<br/>%m/%d',
                day: '%Y<br/>%m/%d',
                week: '%Y<br/>%m/%d',
                month: '%Y<br/>%m/%d',
                year: '%Y<br/>%m/%d',
            },
        },

        rangeSelector: { //選擇起訖時間輸入框與按鈕區
            enabled: false
        },
        // rangeSelector,

        // navigator: { //選擇時間起訖拖曳區
        //     enabled: false
        // },
        // scrollbar: { //選擇時間起訖捲軸區
        //     enabled: false
        // },

        plotOptions: {
            series: {
                dataGrouping: {
                    dateTimeLabelFormats: getDefDateFmt()
                }
            },
        }

    }

}


export default getDefOpt
