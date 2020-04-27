// Complete the plusMinus function below.
function plusMinus(arr) {
    var pos = 0;
    var neg = 0;
    var zer = 0;
    const lth = arr.length;
    for(let i=0;i<lth;i++) {
        if(arr[i]>0) {
            pos++
        } else if(arr[i]<0) {
            neg ++
        } else if(arr[i]===0) {
            zer++
        }
    }
     console.log( (Math.round((pos/lth) * 1000000) / 1000000).toFixed(6));
     console.log( (Math.round((neg/lth) * 1000000) / 1000000).toFixed(6));
     console.log( (Math.round((zer/lth) * 1000000) / 1000000).toFixed(6));

}