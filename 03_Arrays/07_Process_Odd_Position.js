function processNumbers(arr) {

    let result = [];

    for (let i = 0; i< arr.length; i++) {
        if (i % 2 === 1) {
            result.push(arr[i] + arr[i]);
        }
    }
console.log(result.reverse());
}
processNumbers([10,15,20,25]);
