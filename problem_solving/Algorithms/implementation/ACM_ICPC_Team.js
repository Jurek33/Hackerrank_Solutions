// Complete the acmTeam function below.
function acmTeam(topic) {
    let maxValue = 0;
    let numOfMaxValues = 0;
    for(let i=0; i<topic.length; i++) {
        for(let j=i+1; j<topic.length; j++) {
            let counter = 0;
            for(let p=0; p<topic[i].length; p++) {
                if(topic[i][p]==='1' || topic[j][p]==='1') counter++;
            }
            if(counter>maxValue) {
                maxValue = counter;
                numOfMaxValues = 1;
            } else if(counter===maxValue) numOfMaxValues++;
        }  
    }
    return [maxValue, numOfMaxValues]

}