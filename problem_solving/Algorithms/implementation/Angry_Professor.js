// Complete the angryProfessor function below.
function angryProfessor(k, a) {
    let attendance = 0;
    a.forEach(student => {
        if(student<=0) {
            attendance++
        }
    });
    if(attendance>=k) {
        return `NO`
    } else {
        return `YES`
    }

}