function extraLongFactorials(n) {
    let answ = BigInt(n);
    for(let i=1; i<n; i++) {
        const coef = BigInt(n - i);
        answ *= coef;
    }
    console.log(answ.toString())
}