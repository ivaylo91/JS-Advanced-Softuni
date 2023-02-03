const getGreatest = (arr, greatest = -Infinity) => {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            return getGreatest(arr[i], greatest);
        }
        if (arr[i] > greatest) {
            greatest = arr[i];
        }
    }
    return greatest;
}

console.log(getGreatest([[20, 50, 10], [8, 33, 145]]));