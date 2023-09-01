const startButton = document.querySelector("#start");
const hr = document.querySelector("#hr");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

startButton.addEventListener("click",()=>{

    const hrs= hr.value || 0;
    const minutes = minute.value || 0;
    const seconds= second.value|| 0; 

    hr.value="00";
    minute.value="00";
    second.value="00";


    let totalSeconds = parseInt(hrs)*3600 + parseInt(minutes) * 60 + parseInt(seconds);


    let newMinutes = getMinutes(totalSeconds);
    let newHours = getHours(totalSeconds);
    let newSeconds = getSeconds(totalSeconds);

    hr.value=newHours;
    minute.value=newMinutes;
    second.value=newSeconds;

    timer(newSeconds);

})


function getMinutes(nSeconds){

    return 5;
}

function getHours(nSeconds){

    return 10;

}

function getSeconds(){
    return 40;
}

function timer(secondsValue){

    second.value=secondsValue;

    if(secondsValue===0){
      // we do check for minute 
    }
    
    setTimeout(()=>{
        timer(secondsValue-1);
    },1000)
  

}
