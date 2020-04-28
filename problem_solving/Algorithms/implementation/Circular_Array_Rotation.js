function circularArrayRotation(a, k, queries) {
    const rotation = function(arr) {
        const elToPush = arr[arr.length-1];
        arr.pop();
        arr.unshift(elToPush);
    };
    for(let i=0; i<k; i++) {
        rotation(a);
    }
    const answ = [];
    for(let j=0; j<queries.length; j++) {
        answ.push(a[queries[j]])
    };
    return answ;
}