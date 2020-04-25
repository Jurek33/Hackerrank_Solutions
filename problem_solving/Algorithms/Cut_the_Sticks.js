function cutTheSticks(arr) {
    const answ = [];
    const length = arr.length;
    for(let i=0; i<length; i++) {
        if(arr.length===0) {
            break;
        } else {
            answ.push(arr.length);
            const min = Math.min(...arr);
            arr.forEach((el, index) => {
                arr[index] = el-min;
            });
            for(let j=0; j<arr.length; j++) {
                if(arr[j]===0) {
                    arr.splice(j,1);
                    j--
                }
            }
        }
    }
    return answ;
}