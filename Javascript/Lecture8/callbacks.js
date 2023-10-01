

function getUsers(cb){
    let users=[];
    setTimeout(()=>{
        users=[
        {name:"Utkarsh",age:29},
        {name:"Rahul",age:30},
        {name:"Shreya",age:45}];

        cb(users);

    },2000);

}

function findUser(userName, cb){
    const getUser=function(users){
        const user=users.find((user)=> user.name === userName);
        cb(user);
    }
    getUsers(getUser);
}


findUser("Utkarsh", printUserDetails);
function printUserDetails(user){
    console.log(`My name is ${user.name} and my age is ${user.age}`);
}