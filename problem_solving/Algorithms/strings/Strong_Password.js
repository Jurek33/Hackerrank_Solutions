function minimumNumber(n, password) {
    const nums = "0123456789";
    const l_case = "abcdefghijklmnopqrstuvwxyz";
    const u_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const s_char = "!@#$%^&*()-+";
    let isLenOk;
    n >= 6 ? isLenOk = true: isLenOk = false;
    let isNumOk = false;
    let isLok = false;
    let isUok = false;
    let isSok = false;
    let count = 0;
    for(let i=0; i<n; i++) {
        if(nums.includes(password[i])) isNumOk = true;
        if(l_case.includes(password[i])) isLok = true;
        if(u_case.includes(password[i])) isUok = true;
        if(s_char.includes(password[i])) isSok = true;
    }
    if(!isNumOk) count++;
    if(!isLok) count++;
    if(!isUok) count++;
    if(!isSok) count++;
    if(!isLenOk) {
        const newLength = n + count;
        if(newLength >= 6) {
            return count;
        } else {
            const toAdd = 6 - newLength;
            return count += toAdd
        }
    } else { return count }
}