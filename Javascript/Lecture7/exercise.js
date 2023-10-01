// const obj = {
//     "user": {
//         "key_value_map": {
//             "CreatedDate": "123424",
//             "Department": {
//                 "Name": "XYZ"
//             }
//         }
//     }
// }


// {
//     "user.key_value_map.CreatedDate": "123424",
//     "user.key_value_map.Department.Name": "XYZ"
// }









const obj =  {
    user: {
        key_value_map: {
            CreatedDate: "123424",
            Department: {
                Name: "XYZ"
            }
        }
    }
}



Object.defineProperty(Object.prototype, "flatten" , {

    value:function(){

    let res={};

    for(let key in this){

        let value = this[key];

        if(typeof value === "object"){

            let innerFlattenObj = this[key].flatten();

            for(let subKey in innerFlattenObj){

                res[key + "." + subKey] = innerFlattenObj[subKey];
            }

        }else{
            res[key]=value;
        }
    
    }

    return res;
},
enumerable:false
})



console.log(obj.flatten());


