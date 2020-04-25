function jumpingOnClouds(c, k) {
    let answ = 100;
    let index = 0;
    let jumps = 0;
    for (let i=0; i<c.length; i++) {
        index = index + k;
        if (index>=c.length) {
            index = index-c.length;
            jumps ++;
            answ --;
            if(index === 0) {
                break;
            }
        } else {
            jumps ++;
            answ --;
        }
    }
    let newIndex = 0;
    for (let j=0; j<jumps; j++) {
        if(newIndex+k>c.length) {
            newIndex = k-1;
            if(c[newIndex]===1) {
                answ -=2;
            }
        } else if(newIndex+k===c.length) {
            newIndex = 0;
            if(c[newIndex]===1) {
                answ -=2;
            }
        } else {
            newIndex = newIndex+k;
            if(c[newIndex]===1) {
                answ -=2;
            }
        }
    }
    return answ; 
}