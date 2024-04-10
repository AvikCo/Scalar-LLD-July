const parent = {
  health: 50,
  addHealth(num1, num2) {
    console.log(this);
    this.health += num1 + num2;
  }
}

//method borrowing

const child = {
  health: 70
}

// parent.addHealth(10,20);

 //parent.addHealth.call(child, 20, 30);
 //console.log(child);    


 //parent.addHealth.apply(child, [30,40]);


// //function.call(referce, parameters);




// function logThis() { 
    
//     console.log(this);
// }

// const myObj = {
    
//     name: "sag1v"
// }



// logThis.call(myObj)



// const logThis = () => { 
//     console.log(this);
// }

// const myObj = {
    
//     name: "sag1v"

// }
// logThis.call(myObj)



//bind


let cap = {
    name: "Steve",
    team: "Cap",
    petersTeam: function (mem1, mem2, ...otherMem) {
        console.log(`Hey ${this.name} I am your neighborhood's  spiderman and i belong to ${this.team}'s team`);
        console.log(`I am working with ${mem1} & ${mem2} with ${otherMem}`);
    }
}

let ironMan = {
    name: "Tony",
    team: "Iron Man"
}

//cap.petersTeam("avik", "tushar", "tua", "rwittick");


 //const importantFn = cap.petersTeam.bind(ironMan);


// //10000 years


 //importantFn("Utkarsh", "Rahul", "Jay");





// const intro = function (...args) {
//   console.log(`${this.name} lives in city: ${args[0]} state:${args[1]} country:${args[2]} planet:${args[3]}`);
// }


// const obj = {
//   name: "Utkarsh",
// }

// // normal bind :
// const giveInro = intro.bind(obj, "Dehradun", "Uttrakhand", "India")



//  giveInro("earth")


// const person = { name: 'Piyush' };

// function sayHi(age) {
//   return `${this.name} is ${age} years`;
// }

// console.log(sayHi.call(person, 24)); 
// console.log(sayHi.bind(person, 24));



var status = '😎';

setTimeout(() => {
 
    const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);
