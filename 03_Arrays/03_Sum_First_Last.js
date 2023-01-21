function firstLast(input) {
    let firstElement = input[0];
    let lastElement = input[input.length - 1];

    return firstElement + lastElement;
}

console.log(firstLast([10, 20, 30]));