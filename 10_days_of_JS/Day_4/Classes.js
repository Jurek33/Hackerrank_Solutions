class Polygon {
    constructor(args) {
        this.args = args;
    }

    perimeter() {
        let perimeter = 0;
        for(let i=0; i<this.args.length; i++) {
            perimeter+=this.args[i];
        }
        return perimeter;
    }
}