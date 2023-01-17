function getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);

    return previous;
}

console.log(getPreviousDay()); // 👉️ yesterday

console.log(getPreviousDay(new Date('2022-12-24')));

console.log(getPreviousDay(new Date('2023-01-01')));
