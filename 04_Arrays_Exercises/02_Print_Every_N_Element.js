function printEveryNElement(input, n) {
    for (let i = 0; i < input.length; i += n) {
        console.log(input[i]);
    }
}

printEveryNElement(['5', '20', '31', '4', '20'], 2);
printEveryNElement(['dsa', 'asd', 'test', 'tset'],2)