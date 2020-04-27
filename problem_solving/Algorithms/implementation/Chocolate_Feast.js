// Complete the chocolateFeast function below.
function chocolateFeast(n, c, m) {
    //n=6, c=2, m=2
    let bars = Math.floor(n/c); 
    let wraps = bars;
    for(let i=0; i<bars; i++) {
        let addBars = Math.floor(wraps/m);
        bars = bars+addBars;
        wraps = wraps - addBars*m;
        wraps = wraps + addBars;
    }
    return bars;
}