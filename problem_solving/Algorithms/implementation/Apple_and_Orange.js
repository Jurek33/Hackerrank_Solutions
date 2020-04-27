// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCount = 0;
    let orangeCount = 0;
    apples.forEach(apple => {
        if(apple+a<=t&&apple+a>=s) {
            appleCount++
        }
    })
    oranges.forEach(orange => {
        if(orange+b<=t&&orange+b>=s) {
            orangeCount ++
        }
    }) 
    console.log(appleCount);
    console.log(orangeCount);

}