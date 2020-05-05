// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {
    const maxL = Math.max(s.length,t.length);
    //finding the largest length
    let difCount = 0;
    for(let i=0; i<maxL; i++) {
        if(s[i]!==t[i] || s[i]==undefined || t[i]==undefined) {
            difCount = maxL - i; break}
    }
    //count the difference between 2 strings
    if(difCount + 2 > k) {
        return 'No'
        //if difference is too big and there are not enough steps it is clear that we return no
    } else {
        const stepsLeft = k - difCount;
        const common = maxL - difCount;
        //count how many steps left and common part 
        if(stepsLeft === k) {
            if((k<=s.length*2 && k%2===0) || (k>s.length*2)) {
                return 'Yes'
            } else {
                return 'No'
            }//if two arrays are the same then depending on the condition check whether its possible to make exactly k steps and have the same strings
        } else if(stepsLeft!==k && stepsLeft+common === t.length) {
            return 'Yes'
            //if there are exactly the same number of steps left as the length of second string then it is clear that the answer is yes
        } else {
            const diff = t.length - (s.length - difCount);
            //this constant hepls determine which scenario will be under consideration next
            if(diff === 0) {
                if(stepsLeft%2 === 0) return 'Yes';
                if(stepsLeft%2 !==0 && t.length%2 !==0) {return 'Yes'}
                else {return 'No'}
                //depending on 2nd string length and number of steps left check if its possible to perform k steps to make them equal
            } else {
                if(stepsLeft < t.length) return 'No';
                if(stepsLeft%2 === 0 && t.length%2 !==0 ) return 'No';
                if(stepsLeft%2 !== 0 && t.length%2 !== 0) {return 'No'}
                else {return 'Yes'}
            }
        }

    }
}