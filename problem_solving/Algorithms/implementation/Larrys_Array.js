function larrysArray(A) {
    let inversions = 0;
    for(let i=0; i<A.length; i++) {
        for(let j=i+1; j<A.length; j++) {
            if(A[i]>A[j]) inversions++
        }
    }
    if(inversions%2===0) return 'YES';
    return 'NO';
}