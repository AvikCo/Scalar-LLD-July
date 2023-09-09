const button = document.querySelector("button");


function throatle(fn,interval=500){

    let intervalInProgress=false;

    return function(){

        console.log(" Button is clicked");

        if(intervalInProgress){
            console.log("Returning as interval is still in progress");
            return;
        }

        intervalInProgress = true;
        fn();

        setTimeout(()=>{
            intervalInProgress = false;
        },interval)

    }

}

const throattedButtonClick= throatle(buttonClick);


button.addEventListener("click",throattedButtonClick);

function buttonClick(){
    console.log("making a netowrk call");
}