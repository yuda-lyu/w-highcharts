

/**
 * 取得Highcharts時間單位陣列
 *
 * @returns {Array} 回傳時間單位陣列
 */
function getDefUnits() {
    return [
        [
            'day',
            [1], //允許1天為群組單位
        ],
        [
            'week',
            [1], //允許1週為群組單位
        ],
        [
            'month',
            [1, 3, 6], //允許1月,1季,半年為群組單位
        ]
    ]
}


export default getDefUnits
