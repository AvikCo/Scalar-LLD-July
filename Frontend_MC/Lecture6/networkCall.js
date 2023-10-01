

fetch("http://localhost:3000/mba/api/v1/theatres/",{
    method:"GET",
    headers:{
        'x-access-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhZG1pbiIsImlhdCI6MTY5NDI3NDg1MCwiZXhwIjoxNjk0Mjc4NDUwfQ.uadnok7Sji8CWTPNuNvOyYt4DU66gp6bwc93ZDZjvd0"
    }
})
.then(httpResponse=>{
    return httpResponse.json()
})
.then((body)=>{
    console.log(body);
})
.catch((err)=>{
    console.log(err);
})