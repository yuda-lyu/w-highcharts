// import Highcharts from 'highcharts' //統一使用window的


function getHighchart() {

    //Highcharts
    let Highcharts = null
    try {
        Highcharts = window['Highcharts']
    }
    catch (err) {}

    return Highcharts
}


export default getHighchart
