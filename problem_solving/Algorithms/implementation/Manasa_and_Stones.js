function stones(n, a, b) {
    const max = Math.max(a,b);
    const min = Math.min(a,b);
    const max_possible = max*(n-1);
    const diff = max-min;
    const answ = [min*(n-1)];
    while(answ[answ.length-1]<max_possible) {
        answ.push(answ[answ.length-1]+diff)
    };
    return answ;
}