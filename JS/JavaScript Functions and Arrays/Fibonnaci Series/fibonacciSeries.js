function fibonacciSeries(num){
    var n1 = [0,1];
    var sum;
    
    if (num===n1[0] || num===n1[1]){
        return true;
    }
    
    do {
        sum = n1[0]+n1[1];
        n1[0]=n1[1];
        n1[1]=sum;
        if (sum===num){
            return true;
        }
    } while(sum<num);
    
    return false;
}

console.log(fibonacciSeries(5));