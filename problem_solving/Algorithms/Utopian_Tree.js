// Complete the utopianTree function below.
function utopianTree(n) {
    const arr = [];
    for(let i=0; i<=n; i++) {
        if(i===0) {
            arr.push(1)
        } else if(i%2!==0) {
            arr.push(arr[i-1]*2)
        } else if(i!==0 && i%2===0) {
            arr.push(arr[i-1]+1)
        }
    }
    return arr[arr.length-1]
    
}
