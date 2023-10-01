/***
 * Weakset :  it also takes only object as keys
 * add 
 * delete
 * has
 * **/ 


let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john);
visitedSet.add(pete);
visitedSet.add(john);

// // visitedSet has 2 users now
john = null;

console.log(visitedSet.has(john));
console.log(visitedSet.has(mary));
visitedSet.delete(pete);
console.log(visitedSet.has(pete));