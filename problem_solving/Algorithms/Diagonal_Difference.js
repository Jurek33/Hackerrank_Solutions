/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    const lRdig = [];
    const rLdig = [];
    for (let i = 0; i<arr.length; i++) {
        lRdig.push(arr[i][i])
    }
    let count = arr.length-1;
    for (let i = 0; i<arr.length; i++) {
        rLdig.push(arr[i][count]);
        count --;
    }
    const lSum = lRdig.reduce((a,b)=> a+b);
    const rSum = rLdig.reduce((a,b)=> a+b);
    return Math.abs(lSum-rSum)
}