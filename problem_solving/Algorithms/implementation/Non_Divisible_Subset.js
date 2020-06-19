function nonDivisibleSubset(k, s) {
    if(k===1) return 1;
    let counter = 0;
    const remainders = [];
    let hasDivisible = false;
    for(let i=0; i<s.length; i++) {
        remainders[i] = s[i] % k;
        if(remainders[i] === 0) hasDivisible = true;
    }
    if(hasDivisible) counter++;
    for(let i=1; i<=k; i++) {
        const num1 = i;
        const num2 = k-i;
        let num1Count = 0;
        let num2Count = 0;
        if(num1>num2) break;
        for(let j=0; j<remainders.length; j++) {
            if(num1 === remainders[j]) num1Count++;
            if(num2 === remainders[j]) num2Count++;
        }
        if(num1Count>0 && num1 === num2) {
            counter++;
            break;
        } else if(num1Count>num2Count) {
            counter+=num1Count
        } else {
            counter+=num2Count
        }
    }
    return counter
}
