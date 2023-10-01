
/***********************
 * Map and strong refreences
 * 
 * ******************/


// let john = { name: "John" };

// let map = new Map();
// map.set(john, "hi");
// john = null;
// console.log("in map",map);
// console.log("48",map.get(john));

// Due to the nature of WeakMaps, its properties cannot be directly iterated through - 
// an item can only be accessed if you have the item's key. If either the key no longer exists (an old object) or if the key is 
// not accessible from that part of the code then you have no way of accessing the value.

//  * WeakMap : In weakMap you cannot have primitives a key
/****
 * weakMap.set(key, value)
      weakMap.get(key)
      weakMap.delete(key)
      weakMap.has(key)
 * 
 * */

// let john = { name: "John" };

// let weakMap = new WeakMap();
// weakMap.set(john, "hi");
// john = null;
// console.log("in map",weakMap);
// console.log("48",weakMap.get(john));

// let weakMap = new WeakMap();
// weakMap.set("100", "hello");



 let john = { name: "John" };
let john2 = { name: "steve" };
let weakMap = new WeakMap();
weakMap.set(john, "hi");
weakMap.set(john2, "Bi");
john = null;
console.log("in map", weakMap);
console.log("48", weakMap.get(john));
console.log("48", weakMap.get(john2));

