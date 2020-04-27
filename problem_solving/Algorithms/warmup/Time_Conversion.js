/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    const amORpm = s.slice(8);
    const timeArr = s.slice(0,8).split(':').map(x=>+x);
    if(timeArr[0]===12&&amORpm==='AM') {
        timeArr[0]-=12;
        const arrToReturn = [];
        for(let i=0; i<timeArr.length;i++) {
            if(timeArr[i]<10) {
                arrToReturn.push('0'+timeArr[i].toString())
            } else {
                arrToReturn.push(timeArr[i])
            }
        }
        return arrToReturn.join(':')
    } 
    else if(1<=timeArr[0]<=11&&amORpm==='AM') {
        return s.slice(0,8)
    } 
    else if(timeArr[0]===12&&amORpm==='PM') {
        return s.slice(0,8)
    } 
    else if(1<=timeArr[0]<=11&&amORpm==='PM') {
        timeArr[0]+=12;
        const arrToReturn = [];
        for(let i=0; i<timeArr.length;i++) {
            if(timeArr[i]<10) {
                arrToReturn.push('0'+timeArr[i].toString())
            } else {
                arrToReturn.push(timeArr[i])
            }
        }
        return arrToReturn.join(':')
    } 

}