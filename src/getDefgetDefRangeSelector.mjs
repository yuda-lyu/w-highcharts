

function getDefgetDefRangeSelector() {
    let rangeSelector = {
        inputDateFormat: '%Y/%m/%d',
        // buttonTheme: {
        //     width: 'auto',
        //     style: {
        //         fontSize: '12px',
        //         padding: '4px'
        //     }
        // },
        buttons: [{
            type: 'month',
            count: 1,
            text: '月'
        },
        {
            type: 'month',
            count: 3,
            text: '季度'
        },
        {
            type: 'month',
            count: 6,
            text: '半年'
        },
        // {
        //     type: 'ytd',
        //     text: 'YTD'
        // },
        {
            type: 'year',
            count: 1,
            text: '年'
        },
        {
            type: 'all',
            text: '所有'
        }]
    }
    return rangeSelector
}


export default getDefgetDefRangeSelector
