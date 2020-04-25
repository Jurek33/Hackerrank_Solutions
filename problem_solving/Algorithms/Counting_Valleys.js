function countingValleys(n, s) {
    const arr = Array.from(s);
    let level = 0;
    const pathArr = [];
    arr.forEach(el => {
        if(el==='U') {
            level++;
            pathArr.push(level)
        } else {
            level--;
            pathArr.push(level)
        }
    })
    let valueCount = 0;
    for(let i=0; i<pathArr.length; i++) {
        if(pathArr[i]===-1 && pathArr[i+1]===0) {
            valueCount++
        }
    }
    return valueCount;
}