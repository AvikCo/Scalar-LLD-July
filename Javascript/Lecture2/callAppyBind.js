// const parent = {
//   health: 50,
//   addHealth(num1, num2) {
//     console.log(this);
//     this.health += num1 + num2;
//   }
// }

// const child = {
//   health: 70
// }

// parent.addHealth(10,20);

// // parent.addHealth.call(child, 20, 30);

// parent.addHealth.apply(child, [30,40]);


// //function.call(referce, parameters);




// function logThis() { 
    
//     console.log(this);
// }
// const myObj = {
    
//     name: "sag1v"

// }
// logThis.apply(myObj)



// const logThis = () => { console.log(this);
// }
// const myObj = {
    
//     name: "sag1v"

// }
// logThis.call(myObj)