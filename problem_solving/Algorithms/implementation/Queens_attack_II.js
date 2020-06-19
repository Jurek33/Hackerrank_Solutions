function queensAttack(n, k, r_q, c_q, obstacles) {
    if(n===1) return 0;
    //1. remove duplicates from obstacles array
    const uniqueObst = Array.from(new Set(obstacles.map(JSON.stringify)),JSON.parse)
    //2. leave only ones that  share column/row/diagonal with the queen
    const uniqeFiltObst = uniqueObst.filter(arr =>
    arr[0]===r_q||arr[1]===c_q||Math.abs(r_q-arr[0])===Math.abs(c_q-arr[1]))
    //3. create 8 variables represinting the directions the queen can go
    let minUp = n-r_q;
    let minDown = r_q-1;
    let minRight = n-c_q;
    let minLeft = c_q-1;
    let minUpRight = Math.min(minUp,minRight);
    let minDownRight = Math.min(minDown, minRight);
    let minUpLeft = Math.min(minLeft, minUp);
    let minDownLeft = Math.min(minDown, minLeft)
    //4. calculate the distance between the queen and each obstacle and if 
    //it is less than the min distance in this direction than replace it
    for(let i=0; i<uniqeFiltObst.length; i++) {
        if(uniqeFiltObst[i][0]===r_q) {
    //if share the row, check if obstacle is rightwards or leftwards
            let distance = c_q-uniqeFiltObst[i][1]
            if(distance>0) {
                if(minLeft>=distance) minLeft = distance-1;
            } else {
                if(minRight>=distance*(-1)) minRight = distance*(-1)-1
            }
        } else if(uniqeFiltObst[i][1]===c_q) {
    //if share the column, check if obstacle is upwards or downwards
            let distance = r_q-uniqeFiltObst[i][0]
            if(distance>0) {
                if(minDown>=distance) minDown = distance-1;
            } else {
                if(minUp>=distance*(-1)) minUp = distance*(-1)-1
            }    
        } else {
    //if share diagonal, check which one is it
            if(uniqeFiltObst[i][0]>r_q && uniqeFiltObst[i][1]>c_q) {
                let distance = uniqeFiltObst[i][0]-r_q
                if(minUpRight>=distance) minUpRight = distance-1;
            } else if(uniqeFiltObst[i][0]<r_q && uniqeFiltObst[i][1]>c_q) {
                let distance = r_q-uniqeFiltObst[i][0]
                if(minDownRight>=distance) minDownRight = distance-1;
            } else if(uniqeFiltObst[i][0]<r_q && uniqeFiltObst[i][1]<c_q) {
                let distance = r_q-uniqeFiltObst[i][0]
                if(minDownLeft>=distance) minDownLeft = distance-1;
            } else if(uniqeFiltObst[i][0]>r_q && uniqeFiltObst[i][1]<c_q) {
                let distance = uniqeFiltObst[i][0]-r_q
                if(minUpLeft>=distance) minUpLeft = distance-1;
            }
        }
    }
    //5. sum all 8 variables 
    const answer = minUp+minDown+minLeft+minRight+minUpRight+minUpLeft+minDownRight+minDownLeft;
    return answer
}