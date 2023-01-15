function calc(fruit, kilos, price) {
    let money = (kilos * price) / 1000;
    let kilograms = kilos / 1000;

    return `I need $${money.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}`;

}

console.log(calc('orange', 2500, 1.80));