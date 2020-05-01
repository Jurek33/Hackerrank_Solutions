function kaprekarNumbers(p, q) {
    const arr = [];
    for(let i=p; i<=q; i++) {
        const d = i.toString().length;
        const sqr = i*i;
        const l = Number(sqr.toString().slice(0, sqr.toString().length-d));
        const r = Number(sqr.toString().slice(sqr.toString().length-d));
        const sum = r + l;
        if(sum === i) arr.push(i);
    };
    if(arr.length>0) {
        console.log(arr.join(' '))
    } else {
        console.log('INVALID RANGE')
    }
}