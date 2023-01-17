function checkIsSame(input) {
    input = String(input);
    let areSame = true;
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        if (i < input.length - 1) {
            if (input[i] !== input[i + 1]) {
                areSame = false;
            }
        }
        sum += Number(input[i]);
    }
    console.log(areSame);
    console.log(sum);
}
checkIsSame("2222222");