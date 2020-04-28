function repeatedString(s, n) {
    const countA = str => str.split('a').length - 1;
    const coef = Math.floor(n/s.length);
    const numOfLettersRemain = n-(s.length*coef);
    return (countA(s)*coef)+countA(s.substr(0,numOfLettersRemain));   
}