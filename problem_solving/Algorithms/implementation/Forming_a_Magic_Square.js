// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
    const getCost = (matrix1, matrix2) => {
        let totalCost = 0;
        for(let i=0; i<matrix1.length; i++) {
            for(let j=0; j<matrix2.length; j++) {
                totalCost+= Math.abs(matrix1[i][j]-matrix2[i][j])
            }
        }
        return totalCost;
    }
    const magicArr = [
        [[8, 1, 6], [3, 5, 7], [4, 9, 2]],
        [[6, 1, 8], [7, 5, 3], [2, 9, 4]],
        [[4, 9, 2], [3, 5, 7], [8, 1, 6]],
        [[2, 9, 4], [7, 5, 3], [6, 1, 8]], 
        [[8, 3, 4], [1, 5, 9], [6, 7, 2]],
        [[4, 3, 8], [9, 5, 1], [2, 7, 6]], 
        [[6, 7, 2], [1, 5, 9], [8, 3, 4]], 
        [[2, 7, 6], [9, 5, 1], [4, 3, 8]],
    ];
    const c1 = getCost(s, magicArr[0]);
    const c2 = getCost(s, magicArr[1]);  
    const c3 = getCost(s, magicArr[2]);
    const c4 = getCost(s, magicArr[3]);
    const c5 = getCost(s, magicArr[4]);
    const c6 = getCost(s, magicArr[5]);
    const c7 = getCost(s, magicArr[6]);
    const c8 = getCost(s, magicArr[7]); 
    return Math.min(c1,c2,c3,c4,c5,c6,c7,c8)
}