const factorial = function(num) {
    let answ = num;
    for(let i=1; i<num; i++) {
        answ*=i;
    }
    return answ
}