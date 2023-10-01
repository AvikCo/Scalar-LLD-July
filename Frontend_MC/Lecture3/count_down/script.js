const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const hrInput = document.querySelector("#hr");
const minuteInput = document.querySelector("#minute");
const secondInput = document.querySelector("#second");

startButton.addEventListener("click",()=>{

    startButton.style.display="none";
    pauseButton.style.display="block";

    const hrs= parseInt(hrInput.value) || 0;
    const minutes =parseInt(minuteInput.value) || 0;
    const seconds= parseInt(secondInput.value)|| 0; 

    hrInput.value="00";
    minuteInput.value="00";
    secondInput.value="00";




    const {trasformedSecs, transformedMins, transformedHrs} = transFormInputs(seconds, minutes, hrs);

    secondInput.value = trasformedSecs;
    minuteInput.value=transformedMins;
    hrInput.value = transformedHrs;



    let countDownTime = transformedHrs * 3600 + transformedMins * 60 + trasformedSecs;



    timer(countDownTime);

})





function transFormInputs(secs,mins,hrs){
    return {
        trasformedSecs:secs,
        transformedMins:mins,
        transformedHrs:hrs
    }

}



let stop=false;

function timer(countDownTime){


    countDownTime--;
     updateUIEverySecond(countDownTime);

    if(stop){
        return;
    }


    
    setTimeout(()=>{
        timer(countDownTime);
    },1000)
}

function updateUIEverySecond(countDownTime){

    console.log(typeof countDownTime);

    //1. countDownTime -> hrs:min:seconds 

    let hrs= Math.floor(countDownTime/3600);
    let mins = Math.floor((countDownTime%3600)/60);
    let seconds = countDownTime % 60;

        hrInput.value=hrs;
         minuteInput.value=mins;
         secondInput.value=seconds;

        

    if(hrs===0 && mins===0 && seconds===0){
        stop=true;
        return ;
    }


}


pauseButton.addEventListener("click",()=>{
    stop=true;
})