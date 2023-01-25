function printBiggestHalf(arr) {
    arr.sort((a, b) => a - b);
    let secondHalf = Math.ceil((arr.length - 1) / 2);
    let result = arr.slice(secondHalf);
    return result;
}

console.log(printBiggestHalf([4, 7, 2, 5]));
console.log(printBiggestHalf([3, 19, 14, 7, 2, 19, 6]));