function minimumDistances(a) {
    let distance;
    const arr = [];
    for(let i=0; i<a.length; i++) {
        for(let j=i+1; j<a.length; j++) {
            if(a[i]===a[j]) {
                distance = j-i;
                arr.push(distance)
            }
        }
    }
    if(arr.length>0) {
        return Math.min(...arr)
    } else {
        return -1
    }
}