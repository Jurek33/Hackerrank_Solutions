// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
    const alphabet = Array(26).fill().map((_, i) => String.fromCharCode             ('a'.charCodeAt(0) + i));
    const letters = word.split('');
    const arr = [];
    for(let i=0; i<letters.length; i++) {
        for(let j=0; j<alphabet.length; j++) {
            if(letters[i]===alphabet[j]) {
                arr.push(h[j])
            }
        }
    }
    const height = Math.max(...arr);
    const width = arr.length;
    return width*height;
}