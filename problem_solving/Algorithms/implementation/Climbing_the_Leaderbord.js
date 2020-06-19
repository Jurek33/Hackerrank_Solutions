function climbingLeaderboard(scores, alice) {
    const ranges = [...new Set(scores)];
    const answ = [];
    let k = ranges.length-1;
    for(let i=0; i<alice.length; i++) {
        for(let j=k; j>=-1; j--) {
            if(alice[i]<ranges[j] || !ranges[j]) {
                answ.push(j+2);
                k = j;
                break;
            }
        }
    }
    return answ
}