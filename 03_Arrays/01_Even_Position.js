function evenPositionElements(input) {
    let evenEl = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            evenEl.push(input[i]);
        }
    }
    console.log(evenEl.join(" "));
}

evenPositionElements(['20', '30', '40', '50', '60']);