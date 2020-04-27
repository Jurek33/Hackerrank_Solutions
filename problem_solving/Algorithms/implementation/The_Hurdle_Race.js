function hurdleRace(k, height) {
    const b = Math.max(...height);
    if(k<b) {
        return b-k;
    }
    return 0;
}