function serviceLane(width, cases) {
    const answ = [];
    for(let i=0; i<cases.length; i++) {
        let arr = width.slice(cases[i][0], cases[i][1]+1);
        answ.push(Math.min(...arr))
    }
    return answ;
}

// 1. replace n with width in result, line 3 from the bottom: let result = serviceLane(width, cases) 2. Replace n with width in function serviceLane(width, cases)