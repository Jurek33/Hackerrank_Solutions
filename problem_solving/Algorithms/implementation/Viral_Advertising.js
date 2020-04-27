function viralAdvertising(n) {
    let shared = 0;
    let liked = 0;
    let cumulative = 0;
    const arr = Array(n).fill().map((_, i) => i+1);
    for (let i=0; i<arr.length; i++) {
        if(i===0) {
            shared = 5;
            liked = Math.floor(shared/2);
            cumulative = liked;
        } else {
            shared = liked*3;
            liked = Math.floor(shared/2);
            cumulative = liked+cumulative;
        }
    }
    return cumulative;
}
