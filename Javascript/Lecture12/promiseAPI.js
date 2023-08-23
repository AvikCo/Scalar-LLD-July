function CustomPromise(){


}


const executorFn = (resolve,reject)=>{

    setTimeout(()=>{
        resolve("Hello i am resolved");
    },2000);

};


const promise= new CustomPromise(executorFn)


const cb = (data) => {
    console.log(data);
}



promise.then(cb);
