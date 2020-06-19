function gridSearch(G, P) {
    let hasTotalMatch = false;
    for(let i=0 ;i<=G.length - P.length; i++) {
        let hasLocalMatch = false;
        for (let j=0; j<=G[0].length - P[0].length; j++) {
            let iMatch = true;
            for(let i1=0; i1<P.length; i1++) {
                for(let j1=0; j1<P[0].length; j1++) {
                    if(P[i1][j1]!==G[i+i1][j+j1]) {
                        iMatch = false;
                        break;
                    }
                }
            }
            if(iMatch) hasLocalMatch = true;
        }
        if(hasLocalMatch) {
            hasTotalMatch = true;
            break;
        }
    }
    if(hasTotalMatch) {
        return 'YES'
    } else { return 'NO'}
}