// Complete the birthday function below.
function birthday(s, d, m) {
    let counter = 0;
    for (let i=0; i<s.length; i++) {
        const segmArr = s.slice(i, i+m);
        const segmSum = segmArr.reduce((a,b) => a+b);
        if(segmSum === d) {
            counter++
        }
    }
    return counter;

}