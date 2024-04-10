
//console.log(this);



// var person={
//     name:"Utkarsh"
// }

// console.log(person);
// console.log(window.person);
// console.log(this.person);


// function sayHi(){
//     console.log(this);
// }

// sayHi();
// window.sayHi();



// var person = {

//     name:"Utkarsh",
//     age:29,
//     sayHi:function(){
//         console.log(this);
//         return `My name is ${this.name} and my age is ${this.age}`
//     }
// }
// let newFn = person.sayHi;
// console.log(window.newFn())
// console.log(person.sayHi());


// var person = {

//     name:"Utkarsh",
//     age:29,
//     sayHi:function(){
//         console.log("sayHi this",this);

//         function child(){
//         console.log("child this",this);
//         }

//         child();
//     }
// }

// person.sayHi();




// function Person(name, age){
//     // this={}
//    this.name=name;
//    this.age=age;
//    return this;
// }


// const person1=  new Person("Utkarsh",29);

// console.log(person1);



// function logThis(){ 
//     console.log(this);
// }

// const myObj = { 
//   name:"Avik",
//     logThis:logThis
// } 

// myObj.logThis()


//  function logThis{ 
//     console.log(this);
// }
// const myObj = { 
//   name:"Avik",
//     foo: function(){

//       console.log("inside myObj foo",this);

//         logThis(); 
//     },
//     fn: logThis
// } 

// myObj.foo()
// myObj.fn();


// const add=(a,b)=>{
//     console.log(this);
//  return a+b;
// }

// add(1,2);

// var person = {
//     name:"Utkarsh",
//     age:29,
//     sayHi:()=>{
//         console.log(this);
//     }
// }

// person.sayHi();


//  var person = {

//     name:"Utkarsh",
//     age:29,
//     sayHi:function(){
//         console.log("inside sayhi",this);//person object

//         var child=()=>{
//         console.log("inside child",this); // person
//         }

//         child();
//     }
// }

  //person.sayHi();


// const logThis = () => { 
//     console.log(this);
// }

// const myObj = { 
//     name: "I m myObj",
//     foo: logThis
// } 

// myObj.foo()


// const a = function () {
//   console.log('a', this)

//   const b = function () {
//     console.log('b', this)

//     const c = {
//       h1: function () {
//         console.log('c', this)
//       }
//     }

//     c.h1()
//   }
//   b()
// }


// a()




// const obj = {

//   name: 'Billy',

//   sing() {
//     console.log('a', this);
//     var anotherFunc = function () {
//       console.log('b', this)
//     }
//     anotherFunc()
//   }
// }

// obj.sing()


// const obj1 = {

//   name: 'Billy',

//   sing() {
//     console.log('a', this);
//     var anotherFunc = () => {
//       console.log('b', this)
//     }
//     anotherFunc()
//   }
// }

// obj1.sing()








// const obj2 = {

//   name: 'Billy',

//   sing() {
//     console.log('a', this);
//     var self = this;
//     var anotherFunc = function () {
//       console.log('b', self)
//     }
//     anotherFunc()
//   }
// }

// obj2.sing()


// var b = {
//   name: 'Tua',
//   say() { console.log(this) }
// }

// var c = {
//   name: 'Avik',
//   say() { return function () { console.log(this) } }
// }

// var d = {
//   name: 'Tushar',
//   say() { 
//     return () => console.log(this) 
// }
// }

// b.say()
// c.say()()
// d.say()()  