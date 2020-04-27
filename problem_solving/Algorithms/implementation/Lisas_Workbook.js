function workbook(n, k, arr) {
    let totalPages = 0;
    arr.forEach(el => totalPages+= Math.ceil(el/k));
    let currentPage = 0;
    let currentChapter = 1;
    let problemNum = 1;
    let special = 0;
    for(let i=0; i<totalPages; i++) {
        const currentProblemArr = [];
        for(let j=0; j<k; j++) {
            if(problemNum === arr[currentChapter-1]) {
                currentProblemArr.push(problemNum);
                currentChapter++;
                problemNum = 1;
                break;
            } else {
                currentProblemArr.push(problemNum);
                problemNum++;
            }
        }
        currentPage++;
        for(let p=0; p<currentProblemArr.length; p++) {
            if(currentProblemArr[p]===currentPage) special++;
        }

    }
    return special
    
}