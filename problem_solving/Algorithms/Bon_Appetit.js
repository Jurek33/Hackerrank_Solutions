// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    const dontPay = Number(bill.splice(k,1));
    const herPayment = bill.reduce((a,b)=>a+b)/2;
    if(herPayment===b) {
        console.log('Bon Appetit')
    } else {
        console.log(Math.abs(b-herPayment))
    }
}