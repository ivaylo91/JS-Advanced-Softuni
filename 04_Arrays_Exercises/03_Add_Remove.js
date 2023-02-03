function add_remove(input) {
    let result = [];
    let num = 0;
    for (let i = 0; i < input.length; i++) {
        num++;
        if (input[i] === "add") {
            result.push(num);
        }else if( input[i] === "remove"){
            result.pop(i);
        }
    }
    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join(' '));
    }
}
add_remove(["add","add","add","add"]);
add_remove(["add", "add", "remove", "add", "add"]);