function printDaysInMonths(month,year){
    return new Date(month,year,0).getDate();
}
console.log(printDaysInMonths(1,2021));