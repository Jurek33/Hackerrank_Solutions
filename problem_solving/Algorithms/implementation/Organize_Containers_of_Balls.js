function organizingContainers(container) {
    const checkArr = [];
    for(let i=0; i<container[0].length; i++) {
        let total = 0;
        for(let j=0; j<container.length; j++) {
            let currentTotal = container[j][i];
            total += currentTotal;
        };
        let ifAtLeastOne = false;
        for(let k=0; k<container.length; k++) {
            const contTotal = container[k].reduce((a,b) => a+b);
            if(contTotal === total) ifAtLeastOne = true;
        };
        checkArr.push(ifAtLeastOne)
    };
    if(checkArr.includes(false)) {
        return 'Impossible'
    } else { return 'Possible' }
}