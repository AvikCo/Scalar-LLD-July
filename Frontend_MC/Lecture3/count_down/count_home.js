const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const startBtn = document.querySelector("#start")
const pauseBtn = document.querySelector("#pause")
const resetBtn = document.querySelector("#reset")
let timerId;
let objTime
startBtn.addEventListener("click",(e)=>{
objTime = getTransformedTime(hours.value || 0, seconds.value || 0, minutes.value || 0)
showStart(false)
makeLablesReadOnly(true)
updateUI()
timerId = setTimeout(()=>startTimer(objTime), 1000);
})

pauseBtn.addEventListener("click", (e)=> {
    clearTimeout(timerId)
    showStart(true)
})


resetBtn.addEventListener("click", (e)=>{

    clearTimeout(timerId)
    hours.value = ""
    minutes.value = ""
    seconds.value = ""
    makeLablesReadOnly(false)
    showStart(true)

  
})

function getTransformedTime(hr, sec, min){
    console.log("hour", hr, "sec", sec, "min", min)
    const totalSeconds = Number(hr)*3600 + Number(min)*60 + Number(sec);
    console.log(totalSeconds)
    const resHr = Math.floor(totalSeconds/3600);
    const resMin = Math.floor((totalSeconds%3600) / 60)
    const resSec = totalSeconds%60
    return {resMin, resSec, resHr};
}

function startTimer(objTime){
    objTime.resSec -= 1;
    if(objTime.resSec === 0){
        if(objTime.resMin !== 0){
            objTime.resMin -= 1;
            objTime.resSec = 60;
        }
        else if(objTime.resHr !== 0){
            objTime.resHr -= 1;
            objTime.resMin = 59;
            objTime.resSec = 60;
        }
        else{
            updateUI()
            makeLablesReadOnly(false)
            hours.value = ""
            minutes.value = ""
            seconds.value = ""
            showStart(true)
            // alert("Time Up !!!")
             return;
        }
    }
    updateUI()
    timerId = setTimeout(()=>{
        startTimer(objTime);
    }, 1000)
    
}
function updateUI(){
    hours.value = objTime.resHr
    minutes.value = objTime.resMin
    seconds.value = objTime.resSec
}
function makeLablesReadOnly(isReadonly){
    hours.readOnly = isReadonly;
    minutes.readOnly = isReadonly;
    seconds.readOnly = isReadonly;
}
function showStart(isShow){
    if(isShow){
    startBtn.style.display = "block"
    pauseBtn.style.display = "none"
    }else {
    startBtn.style.display = "none"
    pauseBtn.style.display = "block"
    }
}