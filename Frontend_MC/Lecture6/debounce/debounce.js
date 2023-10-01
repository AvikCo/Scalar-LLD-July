const input = document.querySelector("input");



function debounce(fn, delay=500){

    let timerId=null;

    return function(e){

        console.log("input added");

        if(timerId){
            console.log("clearing the previous timer");
            clearTimeout(timerId);
        }

        console.log("starting the timer");
     timerId = setTimeout(()=>{
            fn(e);
        },delay);
        

    }

}


const debouncedInputChange =  debounce(onInputChange);

input.addEventListener("input",debouncedInputChange)



function onInputChange(e){
    console.log("making a network call with input ",e.target.value);
}


