function pageCount(n, p) {
    const book = [];
    for(let i=0; i<=n; i++) {
        book.push(i)
    }
    let pageCount1 = 0;
    let stepCount1 = 0;
    for(let j=0; j<book.length; j++) {
        if(book[j]===p) {
            break;
        } else {
            stepCount1++;
            if(stepCount1%2===0) {
                pageCount1++
            }
        }
    }
    let pageCount2 = 0;
    let stepCount2 = 0;
    for(let k=book.length; k>0; k--) {
        if(book[k]===p) {
            break;
        } else {
            stepCount2++;
            if(book[k]%2===0) {
                pageCount2++;
            }
        }
    }
    return Math.min(pageCount2, pageCount1)
}