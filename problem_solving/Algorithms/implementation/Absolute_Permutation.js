function absolutePermutation(n, k) {
    let numbers = [...Array(n).keys()].map(x => x + 1);
    //1. if k=0 just return the array from 1 to n
    if(k===0) return numbers
    //2. if n/k is even then calculate permutation
    if(n/k%2===0) {
        const result = [];
        for(let i=0; i<n/k; i++) {
          if(i%2===0) {
            result.push(numbers.slice(i*k,(i+1)*k).map(x=>x+k).join(' '))
          } else {
            result.push(numbers.slice(i*k,(i+1)*k).map(x=>x-k).join(' '))
          }
        }
        return result
    }
    //3. if permutation is not possible return -1
    return [-1]
}