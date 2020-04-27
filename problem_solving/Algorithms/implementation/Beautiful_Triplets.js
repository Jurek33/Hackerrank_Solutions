// Complete the beautifulTriplets function below.
function beautifulTriplets(d, arr) {
    let counter = 0;
    for(let i=0; i<arr.length; i++) {
        let index = i;
        const tripletsArr = [arr[i]];
        for(let j=i+1; j<arr.length; j++) {
            if(arr[index]+d === arr[j]) {
                tripletsArr.push(arr[j]);
                index = j;
                if(tripletsArr.length === 3) {
                    counter++;
                    break;
                }
            }
        }
    }
    return counter;
}