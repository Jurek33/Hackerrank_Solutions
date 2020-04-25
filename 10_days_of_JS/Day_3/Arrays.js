function getSecondLargest(nums) {
    // Complete the function
    let num;
    const newNums = nums.sort((a,b)=>b-a);
    for(let i=0; i<newNums.length; i++) {
        if(newNums[i]>newNums[i+1]) {
            num = newNums[i+1];
            return num
        }
    }
}