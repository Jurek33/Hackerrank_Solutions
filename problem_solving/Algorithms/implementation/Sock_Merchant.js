function sockMerchant(n, ar) {
    let pairCounter = 0;
    const sortAr = ar.sort((a,b)=>a-b);
    const arOfArs = [];
    for(let i=0; i<ar.length; i++) {
        if(sortAr[i]!=sortAr[i+1]) {
            arOfArs.push(sortAr.filter(val=>val===sortAr[i]))
        }
    }
    for(let j=0; j<arOfArs.length; j++) {
        if(arOfArs[j].length>=2) {
            const coef = arOfArs[j].length;
            if(coef%2===0) {
                pairCounter+=(coef/2)
            } else {
                pairCounter+=(Math.floor(coef/2))
            }
        }
    }
    return pairCounter;

}