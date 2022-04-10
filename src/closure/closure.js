const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox= $${saveCoins}`);
};
moneyBox(5);
moneyBox(10);


//ejemplo de closure
const moneyBox2 = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox= $${saveCoins}`);
    };
    return countCoins;
};

let miMoneyBox = moneyBox2();
miMoneyBox(4);
miMoneyBox(6);
miMoneyBox(10);