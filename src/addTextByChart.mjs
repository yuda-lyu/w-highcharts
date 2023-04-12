import get from 'lodash/get'
import isNumber from 'lodash/isNumber'
import isnum from 'wsemi/src/isnum.mjs'
import iseobj from 'wsemi/src/iseobj.mjs'
import cdbl from 'wsemi/src/cdbl.mjs'
import getPointXY from './getPointXY.mjs'
import getFontfamily from './getFontfamily.mjs'


function addTextByChart(chart, p, text, opt = {}) {

    //fontSize
    let fontSize = get(opt, 'fontSize')
    if (!isnum(fontSize)) {
        fontSize = 11
    }
    fontSize = cdbl(fontSize)
    fontSize = Math.max(fontSize, 6) //最小6pt

    //textAlign
    let textAlign = get(opt, 'textAlign')
    if (textAlign !== 'left' && textAlign !== 'center' && textAlign !== 'rigth') {
        textAlign = 'center' //預設center, 文字中點在點p上
    }
    let kpTextAligh = {
        'left': 'start',
        'center': 'middle',
        'rigth': 'end',
    }
    textAlign = kpTextAligh[textAlign]

    //zIndex
    let zIndex = get(opt, 'zIndex')
    if (!isNumber(zIndex)) {
        zIndex = undefined
    }

    //style
    let style = get(opt, 'style')
    if (!iseobj(style)) {
        style = {}
    }

    //attr
    let attr = get(opt, 'attr')
    if (!iseobj(attr)) {
        attr = {}
    }

    //x, y
    let [x, y] = getPointXY(p)

    //renderer
    let ren = chart.renderer

    //g
    let g = chart.renderer.g().add()
    g.attr({
        'transform': `translate(${x},${y})`,
        zIndex, //attr不能用z-index
    })

    //text
    ren.text(text, 0, 0)
        .css({
            color: '#000',
            fontFamily: getFontfamily(),
            fontSize: `${fontSize}pt`,
            ...style,
        })
        .attr({ //attr不能用kebab-case會無法識別
            'name': 'hcextra',
            'text-anchor': textAlign,
            'alignment-baseline': 'central', //http://bl.ocks.org/eweitnauer/7325338
            zIndex, //attr不能用z-index
            ...attr,
        })
        .add(g)

}


export default addTextByChart
