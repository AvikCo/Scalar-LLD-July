

export const userSignIn  = async (data)=>{
    const loginResp = await fetch(`https://movie-booking-application.onrender.com/mba/api/v1/auth/signin`,{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
       "Content-Type": "application/json"
    }
    });

    return loginResp;
}