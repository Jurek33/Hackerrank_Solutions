function getTotalX(a, b) {
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    const podozr = range(a[a.length-1],b[0],1);
    let counter = 0;
    for(let i=0; i<podozr.length; i++) {
        let cond = 0;
        for(let j=0; j<a.length; j++) {
            if(podozr[i]%a[j]===0) {
                cond++
            }
        }
        if(cond===a.length) {
            let cond2 = 0;
            for(let n=0; n<b.length; n++) {
                if(b[n]%podozr[i]===0) {
                    cond2++
                }
            }
            if(cond2===b.length) {
                counter++
            }
        }
    }
    return counter;
}