function caesarCipher(s, k) {
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const rotated_alph = alphabet.map((letter, index) => 
    alphabet[index+k%26]? alphabet[index+k%26]: alphabet[index+k%26-alphabet.length]
    )
    let str = '';
    for(let i=0; i<s.length; i++) {
        const origIndex = alphabet.indexOf(s[i].toLowerCase());
        if(!alphabet[origIndex]) {
            str += s[i]
        } else if(s[i]===alphabet[origIndex].toUpperCase()) {
            str += rotated_alph[origIndex].toUpperCase()
        } else {
            str += rotated_alph[origIndex]
        }
    }
    return str;
}