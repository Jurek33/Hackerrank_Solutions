function findDigits(n) {
    const numsToCheck = n.toString().split('');
    let counter = 0;
    for(let i=0; i<numsToCheck.length; i++) {
        if(n%numsToCheck[i]===0) {
            counter++;
        }
    }
    return counter;
}