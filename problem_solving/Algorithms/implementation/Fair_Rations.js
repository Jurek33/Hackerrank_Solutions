// Complete the fairRations function below.
function fairRations(B) {
    const oddNumsIndexes = [];
    for(let i=0; i<B.length; i++){
        if(B[i]%2!==0) oddNumsIndexes.push(i)
    };
    if(oddNumsIndexes.length%2!==0) {
        return 'NO'
    } else {
        let counter = 0;
        for(let j=0; j<oddNumsIndexes.length; j++) {
            counter += Math.abs(oddNumsIndexes[j]-oddNumsIndexes[j+1])*2;
            j++;
        }
        return counter;
    }

}