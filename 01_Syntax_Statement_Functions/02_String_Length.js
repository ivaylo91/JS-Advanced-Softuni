function solve(arr1, arr2, arr3) {
    let sumLength;
    let averageLength;

    let firstArg = arr1.length;
    let secondArg = arr2.length;
    let thirdArg = arr3.length;

    sumLength = firstArg + secondArg + thirdArg;
    averageLength = Math.floor(sumLength / 3);

    return ` ${sumLength}\n ${averageLength}`;
}

console.log(solve('chocolate', 'ice cream', 'cake'));