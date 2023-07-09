var count = 10;

function countDownTimer(){
    console.log("Count Down:", (count--));

    if(count==0){
        console.log("Times Up!")
        clearInterval(inc_id)
    }

}

inc_id = setInterval(countDownTimer, 1000);