function camelcase(s) {
    const upAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const divCamel = s.split('');
    const upper = divCamel.map(x => upAlphabet.includes(x)? x: null);
    return upper.filter(x => x!==null).length+1  
}