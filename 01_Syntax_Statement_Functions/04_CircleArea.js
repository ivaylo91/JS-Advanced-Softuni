function solve(input) {
    let inputType = typeof (input);
    let result;
    if (inputType === "number") {
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    }
}
solve(5);