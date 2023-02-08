function printBiggestSubset(input) {
    let result = [];
    let currentBiggest = input[0];
    for (let i = 0; i <= input.length; i++) {
        if (currentBiggest < input[i]) {
            currentBiggest = input[i];
            result.push(currentBiggest);
        }
    }
    return result;
}

console.log(printBiggestSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));