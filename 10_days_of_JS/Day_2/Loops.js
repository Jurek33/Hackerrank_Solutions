function vowelsAndConsonants(s) {
    const arr = Array.from(s);
    const vov = [];
    const con = [];
    arr.forEach(el => {
        if(el==='a'||el==='e'||el==='i'||el==='o'||el==='u') {
            vov.push(el)
        } else {
            con.push(el)
        }
    })
    vov.forEach(el => console.log(el));
    con.forEach(el => console.log(el));
}