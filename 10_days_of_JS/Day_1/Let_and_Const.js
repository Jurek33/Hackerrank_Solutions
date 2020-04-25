function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const readline = require('readline');
    let r = readLine(25)
    // Print the area of the circle:
    const PI = Math.PI;
    console.log(PI*r*r)

    
    // Print the perimeter of the circle:
    console.log(2*PI*r)