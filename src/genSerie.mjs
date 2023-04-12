import getLineSetting from './getLineSetting.mjs'


function genSerie(displayDataMode, name, data, i) {

    //s
    let s
    if (displayDataMode === 'line' || displayDataMode === 'line(grey)') {
        let color = 'rgba(100, 140, 220, 1)'
        if (displayDataMode === 'line(grey)') {
            color = '#999'
        }
        s = {
            type: 'line',
            name,
            data,
            lineWidth: 1,
            color,
            marker: {
                enabled: false,
            },
        }
    }
    else if (displayDataMode === 'marker') {
        s = {
            type: 'scatter',
            name,
            data,
            lineWidth: 0,
            color: 'transparent',
            dashStyle: null,
            marker: {
                enabled: true,
                symbol: 'circle',
                radius: 4,
                lineWidth: 0,
                fillColor: 'rgba(100,170,255,1)',
                lineColor: 'rgba(20,100,200,1)',
            },
        }
    }
    else if (displayDataMode === 'markers') {
        let ls = getLineSetting(i)
        s = {
            type: 'scatter',
            name,
            data,
            lineWidth: 0,
            color: 'transparent',
            dashStyle: null,
            marker: {
                enabled: true,
                symbol: ls.marker,
                radius: ls.markerSize,
                lineWidth: 1,
                fillColor: ls.markerFacecolor,
                lineColor: ls.markerEdgecolor,
            },
        }
    }
    else if (displayDataMode === 'dot point') {
        s = {
            type: 'scatter',
            name,
            data,
            lineWidth: 0,
            color: 'transparent',
            dashStyle: null,
            marker: {
                enabled: true,
                symbol: 'circle',
                radius: 2,
                lineWidth: 0,
                fillColor: 'rgba(255, 34, 102, 1)', //#f26
                lineColor: 'transparent',
            },
        }
    }
    else if (displayDataMode === 'small point') {
        s = {
            type: 'scatter',
            name,
            data,
            lineWidth: 0,
            color: 'transparent',
            dashStyle: null,
            marker: {
                enabled: true,
                symbol: 'circle',
                radius: 1,
                lineWidth: 0,
                fillColor: 'rgba(100, 140, 220, 1)',
                lineColor: 'transparent',
            },
        }
    }
    else if (displayDataMode === 'marker point') {
        s = {
            type: 'scatter',
            name,
            data,
            lineWidth: 0,
            color: 'transparent',
            dashStyle: null,
            marker: {
                enabled: true,
                symbol: 'circle',
                radius: 4,
                lineWidth: 1,
                fillColor: 'transparent',
                lineColor: '#f26',
            },
        }
    }
    else {
        console.log('displayDataMode', displayDataMode)
        throw new Error(`invalid displayDataMode[${displayDataMode}]`)
    }

    return s
}


export default genSerie
