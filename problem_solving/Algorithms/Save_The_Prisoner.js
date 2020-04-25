function saveThePrisoner(n, m, s) {
    if(m>n) {
        const sweets_left = m-(Math.floor(m/n)*n);
        if(sweets_left===0) {
            if(s===1) {
                return n
            } else {
                return s-1
            }
        } else if((sweets_left+s)-1<=n) {
            const answ = sweets_left+s-1;
            return answ;
        } else {
            const answ = sweets_left-(n-s)-1;
            return answ;
        }
    } else {
        if((m+s)-1<=n) {
            const answ = m+s-1;
            return answ;
        } else {
            const answ = (m-(n-s)-1);
            return answ;
        }
    }
}