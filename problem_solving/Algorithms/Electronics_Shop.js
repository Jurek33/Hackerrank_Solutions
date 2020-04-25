function getMoneySpent(keyboards, drives, b) {
    const combArr = [];
    for(let i=0; i<keyboards.length; i++) {
        for(let j=0; j<drives.length; j++) {
            combArr.push(keyboards[i]+drives[j])
        }
    }
    const filtArr = combArr.filter(el => el<=b);
    if(filtArr.length===0) {
        return -1
    } else {
        return Math.max(...filtArr)
    }
}