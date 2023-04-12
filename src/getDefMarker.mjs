

/**
 * 產生Highcharts標記物件
 *
 * @returns {Object} 回傳標記物件
 */
function getDefMarker() {
    return {
        enabled: true,
        symbol: 'circle',
        fillColor: 'rgba(255,255,255,0.5)', //'#fff',
        lineWidth: 2,
        lineColor: null,
        radius: 5,
    }
}

export default getDefMarker
