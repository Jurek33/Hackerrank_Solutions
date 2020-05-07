// Complete the encryption function below.
function encryption(s) {
    const str = [];
    for(let i=0; i<s.length; i++) {
        if(s[i]!==' ') str.push(s[i])
    };//remove spaces
    let rows = Math.floor(Math.sqrt(str.length));
    const columns = Math.ceil(Math.sqrt(str.length));
    //count num of columns and rows
    if(rows*columns<str.length) rows = columns;
    //ensure that rows x columns >= L
    const newS = str.join('').toString();
    const grid = [];
    for(let i=0; i<newS.length; i++) {
        if((i+1)%columns === 0) grid.push(newS.slice(i+1-columns, i+1));
    };
    if(grid.length<rows) grid.push(newS.slice(columns*grid.length, newS.length));
    //get the grid
    const final = [];
    for(let i=0; i<columns; i++) {
        let string = '';
        for(let j=0; j<rows; j++) {
            if(grid[j][i]) string += grid[j][i];
        };
        final.push(string)
    };
    //get the answer
    return final.join(' ')
}