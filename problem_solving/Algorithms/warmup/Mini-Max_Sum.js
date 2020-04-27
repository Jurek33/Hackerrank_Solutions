// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
   let c = arr.sort();   
   let a = c.slice(0,4);
   let b = c.slice(1,5);
   console.log(a.reduce((p,n)=>p+n,0),b.reduce((p,n)=>p+n,0));
}