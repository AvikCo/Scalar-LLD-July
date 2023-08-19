// Suppose that you need to perform three asynchronous operations in the following sequence:

// Select a user from the database.
// Get services of the user from an API.
// Calculate the service cost based on the services from the server



// getUser("1234513")
// .then((user)=>getServices(user))
// .then(services=> getServiceCost(services))
// .then((cost)=>{
//     console.log(cost);
// })
// .catch(err=>{
//     console.log("err", err);
// })



// Async/await is a language structure that complements promises. 
//It allows us to work with promises with less boilerplate.
// Under the hood, it’s just syntactic sugar 

async function getTotalCost(userId){

    const user = await getUser(userId);
    const services = await getServices(user);
    const cost = await getServiceCost(services);

    return cost;

}



getTotalCost("1234513")
.then(cost=>{
    console.log(cost)
})
.catch(err=>{
    console.log("err ",err);
})









function getUser(userId){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            if(userId==="1234513"){
            resolve({
                id:"1234513",
                name:"Utkarsh",
                age:29,
                height:180,
                gender:"Male"
            })
        }
        },2000)
    })
}

function getServices(user){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            if(user.name==="Utkarsh"){
                resolve(["Haircut","HairSpa","bodyMassage"]);
            }
        },1000)
    })
}

function getServiceCost(services){

     return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            let cost=0;
            if(services.includes("Haircut")){
                cost+=500;
            }

            if(services.includes("HairSpa")){
                cost+=1000;
            }

            if(services.includes("Shampoo")){
                cost+=100;
            }

            resolve(cost);

        },1000)
    })

}