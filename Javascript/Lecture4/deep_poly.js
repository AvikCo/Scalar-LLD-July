// This object  -> copy of it 
let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }]
};


function clone(obj){

    let newObj={};

    for(let key in obj){

        if(typeof obj[key] === 'object'){

            let innerCopiedObj = clone(obj[key]);

            if(Array.isArray(obj[key])){
                newObj[key]=Object.values(innerCopiedObj)
            }else{
            newObj[key]=innerCopiedObj;
            }
        }
        else{
           newObj[key]=obj[key];
        }
    }
    return newObj;
}


let clonedPerson = clone(person);
clonedPerson.friends[3].age=54;
console.log(person);
console.log(clonedPerson);








// let arr=[1,2,{name:"Utkarsh"}];

// let arr2= Object.values(arr);
// arr2[2].age=29;

// console.log(arr);
// console.log(arr2);

