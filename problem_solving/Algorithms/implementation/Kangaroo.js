// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    if((x2>x1 && v2>v1) || (x1>x2 && v1>v2) || (x1!=x2 && v1===v2)) {
        return 'NO'
    } else {
        let location1 = x1;
        let location2 = x2;
        for (let i=0; i<Math.max(x1,v1,x2,v2); i++) {
            location1+=v1;
            location2+=v2;
            if(location1 === location2) {
                return 'YES'
            }
        } 
        return 'NO'
    }
}
