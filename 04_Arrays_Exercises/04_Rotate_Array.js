function rotate(input, rotation) {
    let rotationExecuted = 0;
    let lastItem = ``;

    while (rotation > rotationExecuted) {
        let newArr = [];
        lastItem = input[0];
        for (let i = 0; i < input.length - 1; i++) {
            newArr.push(input[i + 1]);
        }
        newArr.push(lastItem);
        rotationExecuted++;
        input = newArr;
    }
    console.log(input.join(` `));
}

rotate(['1', '2', '3', '4'], 2);