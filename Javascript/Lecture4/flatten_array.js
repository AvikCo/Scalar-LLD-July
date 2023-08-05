// input  -> nested array
let input = [1, 2, 3, [4, 5], [6, 7, 8, [9, 10, 11]]];
// output -> single level of array with num 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// [4, 5] -> [4,5]
// [6, 7, 8, [9, 10, 11]] -> [6, 7, 8, 9, 10, 11]

Array.prototype.flat=function(){
    let newArray=[];
    for(let i=0;i<this.length;i++){
        if(Array.isArray(this[i])){
            let innerFlat = this[i].flat();
            newArray.push(...innerFlat);
        }else{
            newArray.push(this[i]);
        }
    }
    return newArray;
}


let flattenOutput = input.flat();
console.log(flattenOutput);
