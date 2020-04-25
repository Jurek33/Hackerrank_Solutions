// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    let counter = 0;
    for(let i=0; i<n; i++) {
        for(let j=0; j<(n-i-1); j++) {
            if((ar[i]+ar[j+i+1])%k===0) {
                counter++
            }
        }
    }
    return counter

}