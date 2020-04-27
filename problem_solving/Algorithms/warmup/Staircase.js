// Complete the staircase function below.
function staircase(n) {
    const array = [];
    for (let i=0; i<n; i++) {
       array.push('#')
    }
    for (let i=0; i<array.length; i++) {
        const arrToReturn = Array.from(array, x=> x=' ');
        arrToReturn.fill('#', arrToReturn.length-i-1);
        console.log(arrToReturn.join(''))
    }
}