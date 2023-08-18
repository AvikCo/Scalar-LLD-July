const { runMlalgo, pRunMLalgo } = require("./lib");
console.log("Before");
let amount = 100;
let priceofOne = 20;
/**
 * takes the amount and callbacks as paramas
 * and it calls the cb for us
 * */

function cb() {
        amount = amount - priceofOne;
        console.log("Amount: ", amount);
}

runMlalgo(amount, cb);

console.log("After");


