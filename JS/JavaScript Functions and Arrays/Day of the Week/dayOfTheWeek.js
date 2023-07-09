function returnDay(num){
    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"];
    
    if (num <= 7 && num >= 1){
        return days[num-1];
    }
    return null;
}

console.log(returnDay(0));