function solve(day){
    let daysOfWeek = ['Monday','Tuesday',"Wednesday", "Thursday","Friday","Saturday","Sunday"];
    for(let i=0; i<=daysOfWeek.length; i++){
        return daysOfWeek[day-1];
    }
}

console.log(solve(1));;