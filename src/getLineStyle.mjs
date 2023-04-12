

function getLineStyle(i) {

    //ds
    let ds = [
        'Solid',
        'LongDash',
        'Dash',
        'ShortDash',
        'ShortDot',
        'Dot',
        'DashDot',
    ]

    //j
    let j = i % ds.length

    return ds[j]
}


export default getLineStyle
