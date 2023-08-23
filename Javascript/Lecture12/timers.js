/*****setTimeout -> clearTimeout****/

//  console.log("Before");

// function cb() {
//     console.log("Settimouts cb has been called");
// }

// const timerID = setTimeout(cb, 3000);

// function canceller() {
//     console.log("Cancelling the timeout");
//     clearTimeout(timerID);
// }

//  setTimeout(canceller, 4000);

//  console.log("After");


console.log("Before");
function cb() {
    console.log("Interval called ")
}

const timerId = setInterval(cb, 2000);

function cancelInterval() {
    console.log("cancelling the interval timer");
    clearInterval(timerId);
}

setTimeout(cancelInterval, 4000);
console.log("After");


// setTimout -> higher precedence then cb of setInterval 