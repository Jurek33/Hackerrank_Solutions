// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    const newArr = ar.sort((a,b)=> b-a);
    const answ = [];
    const maxVal = Math.max(...newArr);
    for(let i = 0; i<newArr.length; i++) {
        if(newArr[i]===maxVal) {
            answ.push(newArr[i])
        }
    }
    return answ.length;
}