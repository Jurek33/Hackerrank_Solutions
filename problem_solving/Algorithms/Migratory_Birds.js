// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    const scoreArr = [];
    for(let j=1; j<6; j++) {
        scoreArr.push(arr.filter(val => val===j).length)
    }
    const winnerScore = Math.max(...scoreArr);
    for(let i=0; i<5; i++) {
        if(scoreArr[i]===winnerScore) {
            return i+1
        }
    }
    
}