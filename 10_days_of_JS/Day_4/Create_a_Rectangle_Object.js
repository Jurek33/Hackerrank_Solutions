function Rectangle(a, b) {
    const rect = {
        length: a,
        width: b,
        perimeter: (a+b)*2,
        area: a*b
    }
    return rect;
}