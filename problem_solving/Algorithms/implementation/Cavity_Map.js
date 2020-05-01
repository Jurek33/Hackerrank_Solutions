// Complete the cavityMap function below.
function cavityMap(grid) {
    const arr = [];
    grid.forEach(el => arr.push([]));
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<arr.length; j++) {
            arr[i].push(Number(grid[i][j]))
        }
    }
    for(let k=1; k<arr.length-1; k++) {
        for(let m=1; m<arr.length-1; m++) {
            if(
                arr[k][m]>arr[k-1][m] && 
                arr[k][m]>arr[k+1][m] && 
                arr[k][m]>arr[k][m-1] && 
                arr[k][m]>arr[k][m+1]) {
                   arr[k][m]='X' 
                }
        }
    }
    const answ = [];
    for(let n=0; n<arr.length; n++) {
        answ.push(arr[n].join(''));
    }
    return answ
}
