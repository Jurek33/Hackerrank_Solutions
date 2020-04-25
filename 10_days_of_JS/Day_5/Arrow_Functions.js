/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    const answ = [];
    nums.forEach(el => {
        if(el%2===0) {
            answ.push(el*2)
        } else {
            answ.push(el*3)
        }
    })
    return answ
}