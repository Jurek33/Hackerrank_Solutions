function breakingRecords(scores) {
    let posCounter = 0;
    let negCounter = 0;
    let maxRecord = scores[0];
    let minRecord = scores[0];
    const answer = [];
    for (let i=0; i<scores.length; i++) {
        if(scores[i]>maxRecord) {
            maxRecord = scores[i];
            posCounter++
        } else if(scores[i]<minRecord) {
            minRecord = scores[i];
            negCounter++
        }
    }
    answer.push(posCounter,negCounter);
    return answer;
    

}