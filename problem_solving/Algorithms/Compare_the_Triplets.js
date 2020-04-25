// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    function createArr(int) {
        return Array.from(int)
    }
    const alArr = createArr(a);
    const bobArr = createArr(b);
    var alScore = 0;
    var bobScore = 0;
    for(let i=0; i<3; i++) {
        if(alArr[i]>bobArr[i]) {
            alScore++
        } else if(alArr[i]<bobArr[i]) {
            bobScore++
        }
    }
    return [alScore, bobScore]
}