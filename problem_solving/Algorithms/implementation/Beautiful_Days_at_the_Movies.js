function beautifulDays(i, j, k) {
    const arr = [];
    for(let n=0; n<=j-i; n++) {
        arr.push(i+n)
    }
    let count = 0;
    for(let m=0; m<arr.length; m++) {
        let num = arr[m];
        let rev = Number(num.toString().split('').reverse().join(''));
        if(Math.abs(num-rev)%k===0) {
            count++
        }
    }
    return count

}