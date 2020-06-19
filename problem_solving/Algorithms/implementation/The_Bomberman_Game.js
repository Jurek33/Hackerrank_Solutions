function bomberMan(n, grid) {
    if(n===0 || n===1) return grid;
    //for seconds 0 and 1 initial grid must be returned 
    if(n%2===0) { //for every even secon the grid is full of bombs
        const arr = [...Array(grid.length).keys()].map(x=>
        x=[...Array(grid[0].length).keys()].map(x=>x='O').join(''))
        return arr
    } else {
        const arr1 = grid.map(string => {
            let newString = '';
            for(let i=0; i<string.length; i++) {
                if(string[i]==='O'||string[i+1]==='O'||string[i-1]==='O') {
                   newString += '.' 
                } else { newString += 'O'}
            }
            return newString;
        })
        const arr2 = arr1.map(string => {
            let newString = '';
            for(let i=0; i<string.length; i++) {
                if(string[i]==='O'||string[i+1]==='O'||string[i-1]==='O') {
                   newString += '.' 
                } else { newString += 'O'}
            }
            return newString;
        });
        //these arrays handle testcases when there is only 1 row
        if(grid.length===1 && ((n+3)/2)%2!==0) return arr1;
        if(grid.length===1 && ((n+3)/2)%2===0) return arr2;
        const conf1 = grid.map((string,index) => {
            let newString = '';
            for(let i=0; i<string.length; i++) {
                if(string[i]==='O') {
                    newString += '.'
                } else if(string[i+1]==='O' || string[i-1]==='O') {
                    newString += '.'
                } else if(grid.length>1) {
                    if(!grid[index-1]) {
                        if(grid[index+1][i]==='O') {
                            newString += '.'
                        } else { newString += 'O'}
                    }
                    if(!grid[index+1]) {
                        if(grid[index-1][i]==='O') {
                            newString += '.'
                        } else { newString += 'O'}
                    }
                    if(grid[index+1] && grid[index-1]) {
                        if(grid[index+1][i]==='.'&&grid[index-1][i]==='.') {
                            newString += 'O'
                        } else { newString += '.'}
                    }
                }
            }
            return newString
        })
        if(((n+3)/2)%2!==0) {
            //go with configuration 1
            return conf1
        } else {
            //go with confirugation 2
            const conf2 = conf1.map((string,index) => {
            let newString = '';
            for(let i=0; i<string.length; i++) {
                if(string[i]==='O') {
                    newString += '.'
                } else if(string[i+1]==='O' || string[i-1]==='O') {
                    newString += '.'
                } else if(conf1.length>1) {
                    if(!conf1[index-1]) {
                        if(conf1[index+1][i]==='O') {
                            newString += '.'
                        } else { newString += 'O'}
                    }
                    if(!conf1[index+1]) {
                        if(conf1[index-1][i]==='O') {
                            newString += '.'
                        } else { newString += 'O'}
                    }
                    if(conf1[index+1] && conf1[index-1]) {
                        if(conf1[index+1][i]==='.'&&conf1[index-1][i]==='.') {
                            newString += 'O'
                        } else { newString += '.'}
                    }
                }
            }
            return newString
        })
        return conf2
        }
    }
    //if n is even -> return grid filled with bombs
    //if ((n+3)/2)%2 !== 0 (odd) (3,7,11,...) -> retrurn configuration 1
    //if ((n+3)/2)%2 === 0 (even) (5,9,13,...) -> return configuration 2
}