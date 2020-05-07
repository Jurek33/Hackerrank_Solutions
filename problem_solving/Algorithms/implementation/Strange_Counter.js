// Complete the strangeCounter function below.
function strangeCounter(t) {
    let remainder = 3;
    while(t > remainder) {
        t -= remainder;
        remainder *= 2;
    }
    return remainder - t + 1;
}