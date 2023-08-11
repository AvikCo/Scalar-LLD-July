 
// function greeting1() {
 
//   let greetText="Hello"
 
//   sayHi= function() {
//     console.log(greetText);
//   }
 
//   return sayHi   
  
// }
 
// funcSayHi = greeting1(); 
 
// function greeting2() {
//   let greetText="Hi"    
//   funcSayHi()   
// }
 
// greeting2()   



/**
 * Closure : inner fn forms closure over outer fn's variable and it's variables are persent
 * even if outer fn is removed from the stack . (only if outer variable is used inside)
 *  When closure is fromed -> when a inner fn is hoisted it form closure over outer variable
 * */

// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++;
//         return count
//     }
//     return innerFunction
// }
// const innerFunc = outerFunction();
// console.log(innerFunc())
// console.log(innerFunc())


function grandParent(a){
    

    function parent(b){


        function child(c){

            return c;

        }

        return child;
    }

    return parent;
}


const ans=grandParent(5)(6)(7);
console.log(ans);


// const f2=f1(6);
// const ans=f2(7);


/**
 * Every code is executed in an EC : 
 * 1. this , 
 * 2. local fn and var , 
 * 3. global,window obj 
 * 4. lexical scope
 * 5. closure -> till GEC
 * 
 * */