function biggerIsGreater(w) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let nums = [];
    const sortedNums = [];
    for(let i=0; i<w.length; i++) {
        nums.push(alphabet.indexOf(w[i])+1);
        sortedNums.push(alphabet.indexOf(w[i])+1);
    }
    sortedNums.sort((a,b)=>b-a);
    let equal = true;
    for(let i=0; i<nums.length; i++) {
        if(nums[i]!==sortedNums[i]) {equal = false; break}
    }
    if(equal) {//checks if all the letters are sorted in descent order
        //if they are, then there is no way to complete the task
        return 'no answer'
    } else {
        let suffix = [];
        let sortedSuffix = [];
        for(let i=nums.length-1; i>=0; i--) {
            suffix.push(nums[i]);
            sortedSuffix.push(nums[i]);
            if(nums[i-1]<nums[i]) break;
        }
        sortedSuffix.sort((a,b)=>a-b)
        suffix.reverse();//find the longest non-increasing suffix
        const pivot = nums[nums.length-suffix.length-1];
        const pivotIndex = nums.length-suffix.length-1;
        //find pivot and its index
        let successor;
        for(let i=0; i<sortedSuffix.length; i++) {
            if(sortedSuffix[i]>pivot) {successor = sortedSuffix[i];break}
        }
        const succIndex = nums.length-suffix.length+suffix.indexOf(successor);
        //find rightmost successor to the pivot in suffix and its index
        const first = nums[pivotIndex];
        const second = nums[succIndex];
        nums[pivotIndex] = second;
        nums[succIndex] = first;
        //swap pivot with the successor
        const part1 = nums.slice(0,pivotIndex+1);
        const part2 = nums.slice(part1.length);
        //separate nums array in two parts - begining and suffix
        part2.sort((a,b)=>a-b);
        const sum = part1.concat(part2);
        //reverse the suffix and concatenating 2 parts back
        const final = [];
        sum.forEach(el => final.push(alphabet[el-1]));
        return final.join('')
        //return letters according to its alphabet indexes
    }
    //great resource for a better explanation:
    //https://www.nayuki.io/page/next-lexicographical-permutation-algorithm 
}
