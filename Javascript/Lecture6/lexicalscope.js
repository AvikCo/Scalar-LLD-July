
// In Lexical Scope, the child scope accesses the variable defined in the parent scope lexically.
//  The lexically means that JavaScript determines the parent scope by looking at where we created the function 
//  and not where we invoked it.


var varName = 10;
function b() {
    console.log("in b",varName);
}


function fn() {
    var varName = 20;
    b();
    console.log(varName); 
}

fn();























// let x = 10
 
// function funcParent() {
 
//   let a = 1;
 
//   funcChild = function () {
 
//     let b = 2
  
//     funcGrandChild = function () {
//       let c = 3
//       console.log("funcGrandChild",x,a,b,c)
//     }
 
//     funcGrandChild()
 
//     console.log("funcChild",x,a,b)
 
//   }
 
//   funcChild()
//   console.log("funcParent",x,a)
 
// }
 
// funcParent();