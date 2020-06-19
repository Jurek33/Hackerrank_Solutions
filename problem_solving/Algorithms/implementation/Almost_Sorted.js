function almostSorted(arr) {
    const sortedString = arr.slice().sort((a,b)=>a-b).toString();
    const inputString = arr.toString();
    if(sortedString===inputString) {
        console.log('yes');
        return;
    } else {
        const segments = [];
        for(let i=0; i<arr.length; i++) {
            if(arr[i]>arr[i+1] || arr[i]<arr[i-1]) {
                segments.push(arr[i]);
            }
        }
        const l = arr.indexOf(segments[0]);
        const r = arr.indexOf(segments[segments.length-1]);
        if((segments.length===4 && r-l!==3) || segments.length===2) {
            let one = arr[l];
            let two = arr[r];
            arr[l] = two;
            arr[r] = one;
            const sortStrToCompare = arr.toString();
            if(sortedString===sortStrToCompare) {
                console.log(`yes`);
                console.log(`swap ${l+1} ${r+1}`);
                return;
            } else {console.log('no'); return}
        } else {
            const first = arr.slice(0,l);
            const second = arr.slice(l,r+1).reverse();
            const third = arr.slice(r+1);
            const sum = first.concat(second,third).toString();
            if(sum === sortedString) {
                console.log(`yes`);
                console.log(`reverse ${l+1} ${r+1}`)
                return;
            } else {console.log('no'); return}
        }
    }
}

// A bit of explanation
// 1. First of all check if the string is already sorted and if so print yes and exit.
// 2. Then find all the elements sorted descend. If there are only 2 such elements then
//    swap them and see if the array we get after swap is the same as sorted array
//    this can be done without looping by converting both arrays to strings. If both strings
//    match then we print yes, swap 1-based indexes and then exit.
// 3. If there are 4 such elements but they are not arranged one after another
//    for example: in array [1,2,3,15,5,6,7,4] there are two pairs of descend sorted elements: 15,5 and 7,4
//    but they do not come one after another. In this case we do the same thing as above.
//    Swap first and last elements of the segments and compare the result to orginal array using the same string method
//4.  In the last case we have to separate given array in 3 pieces and reverse the middle one
//    to check if what we get matches sorted array. If so we can use string comparison and print the answer
