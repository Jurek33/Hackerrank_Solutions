function taumBday(b, w, bc, wc, z) {
    // Write your code here
    return BigInt(b) * BigInt(Math.min(bc, wc+z)) + BigInt(w) * BigInt(Math.min(wc, bc+z));
}