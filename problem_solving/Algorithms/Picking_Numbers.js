function pickingNumbers(a) {
    const arr = a.sort((a,b)=>a-b);
    let record = 0;
    for(let i=0; i<arr.length; i++) {
        let score = 1;
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j]-arr[i]<=1) {
                score++;
            }
        }
        if(score>record) {
            record = score;
        }
    }
    return record;

}