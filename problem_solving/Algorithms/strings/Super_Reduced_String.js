function superReducedString(s) {
    let str = s;
    for(let i=1; i<str.length; i++) {
        if(str[i]===str[i-1]) {
            str = str.slice(0,i-1)+str.slice(i+1);
            i=0;
        }
    }
    if(str) return str
    return 'Empty String'
}