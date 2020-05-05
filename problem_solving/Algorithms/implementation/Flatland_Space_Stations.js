// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    const distances = [];
    for(let i=0; i<n; i++) {
        const curDist = [];
        for(let j=0; j<c.length; j++) {
            curDist.push(Math.abs(c[j] - i))
        };
        distances.push(Math.min(...curDist));   
    };
    return Math.max(...distances)
}