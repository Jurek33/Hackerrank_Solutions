function equalizeArray(arr) {
    let maxFreq = 1;
    let count = 0;
    let item;
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length; j++) {
            if(arr[i]===arr[j]) {
                count++
            }
            if(maxFreq<count) {
                maxFreq = count;
                item = arr[i]
            }
        }
        count = 0;
    }
    const newArr = [];
    arr.forEach(el => {
        if(el===item) newArr.push(item)
    })
    if(newArr.length!==0) {
        return arr.length-newArr.length
    } else {
        return arr.length -1
    }
}
