function jumpingOnClouds(c) {
    let index = 0;
    let jumps = 0;
    const increase = function(n) {
        index = index+n;
        jumps++;
            if(index>c.length-1) {
                jumps--;
            }
    }
    for(let i=0; i<c.length; i++) {
        if(c[index+2]===0) {
            increase(2)
        } else {
            increase(1)
        }
    }
    return jumps;
}