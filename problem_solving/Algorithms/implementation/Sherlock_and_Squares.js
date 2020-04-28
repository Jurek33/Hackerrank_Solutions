function squares(a, b) {
    const begin = Math.ceil(Math.sqrt(a));
    const end = Math.floor(Math.sqrt(b));
    const answ = (end - begin) + 1;
    return answ;
}