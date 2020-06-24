function marsExploration(s) {
    let original = 'SOS';
    while(original.length<s.length) {
        original += 'SOS'
    }
    let count = 0;
    for(let i=0; i<s.length; i++) {
        if(s[i]!==original[i]) count++
    }
    return count
}