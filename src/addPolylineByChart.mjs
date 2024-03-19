import each from 'lodash-es/each'
import addLineByChart from './addLineByChart.mjs'


function addPolylineByChart(chart, ps, opt = {}) {
    each(ps, (p, k) => {
        if (k === 0) {
            return true
        }
        let p1 = ps[k - 1]
        let p2 = p
        addLineByChart(chart, p1, p2, opt)
    })
}


export default addPolylineByChart
