function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let moneyLeft = s;
    let currentPrice = p;
    let games = 0;
    while(moneyLeft >= currentPrice) {
        if(currentPrice >= m) {
            moneyLeft -= currentPrice;
            games++;
            currentPrice -= d;
        } else {
            currentPrice = m;
        }
    }
    return games;
}