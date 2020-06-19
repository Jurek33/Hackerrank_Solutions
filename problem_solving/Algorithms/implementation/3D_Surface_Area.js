function surfaceArea(A) {
    const topAndBottom = 2*A.length*A[0].length;
    let sides = 0;
    for(let i=0; i<A.length; i++) {
        for(let j=0; j<A[i].length; j++) {
            for(let k=1; k<=A[i][j]; k++) {
                let currentArea = 4;
                if(A[i][j+1] && k<=A[i][j+1]) currentArea--;
                if(A[i+1] && k<=A[i+1][j]) currentArea--;
                if(A[i][j-1] && k<=A[i][j-1]) currentArea--;
                if(A[i-1] && k<=A[i-1][j]) currentArea--;
                sides += currentArea;
            }
        }
    }
    return sides + topAndBottom;
}