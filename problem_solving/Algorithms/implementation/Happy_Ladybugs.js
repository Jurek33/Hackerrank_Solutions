// Complete the happyLadybugs function below.
function happyLadybugs(b) {
    let sadBugs = 0;
    let happyBugs = 0;
    let emptySpots = 0;
    for(let i=0; i<b.length; i++) {
        if(b[i]==='_') {
            emptySpots++
        } else if(b[i]===b[i+1] || b[i]===b[i-1]) {
            happyBugs++
        } else { sadBugs++ }
    }//determine if we have any unhappy bugs and 
    //if there are non of them we can return an answer immidiatley
    if(sadBugs === 0) {
        return 'YES'
    } else if(sadBugs > 0 && emptySpots === 0) {
        return 'NO' //if there are no empty spots and there are unhappy bugs
        //then it is not possible to make them happy
    } else {//scenario when b has empty spots as well as unhappy bugs
        const filterB = [];
        for(let i=0; i<b.length; i++) {if(b[i]!=='_') filterB.push(b[i])};
        //remove'_' from b
        const uniqueArr = filterB.filter((v, i, a) => a.indexOf(v) === i);
        //find all types of values in b
        let hasUnique = false; 
        for(let i=0; i<uniqueArr.length; i++) {
            let count = 0;
            for(let j=0; j<filterB.length; j++) {
                if(uniqueArr[i]===filterB[j]) count++
            }
        //count how many times each value is present in b. if the value is present in
        //b only once than it is unique and a bug cannot be happy
            if (count === 1) hasUnique = true; 
        }//this part of code checks if there are any unique values in array b
        //if there is a unique bug it means it can never be happy 
        if(hasUnique) {
            return 'NO'
        } else { return 'YES'}
    }
}