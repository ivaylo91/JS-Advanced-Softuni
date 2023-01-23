function printSmallest(input) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] > input[i + 1]) {
            result.unshift(input[i+1]);
        }
    }
    console.log(result.join(" "));
}

printSmallest([30, 15, 50, 5]);