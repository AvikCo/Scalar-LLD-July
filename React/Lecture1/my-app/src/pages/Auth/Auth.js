import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { userSignIn } from "../../api/auth";

function Auth(){
    //whether i am coming from login route ot signup route

    const location = useLocation();
    const navigate = useNavigate();

    const isLoginPage = location.pathname.split("/")[1] === "login";


    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");


    const updateFormData=(e)=>{

       const id=e.target.id;

        if(id==="password"){
            setPassword(e.target.value);
        }else if(id==="userid"){
            setUserId(e.target.value);
        }
    }


    const onLogin=async (e)=>{
        e.preventDefault();

        const data = {userId, password};

        try{
            const signInResponse= await userSignIn(data);
            const statusCode = signInResponse.status;

            if(statusCode === 200){

                const responseBody = await signInResponse.json();

                const {name, userId, email, userStatus, accessToken, userTypes} = responseBody;


                localStorage.setItem("name",name);
                localStorage.setItem("userId",userId);
                localStorage.setItem("email",email);
                localStorage.setItem("userStatus",userStatus);
                localStorage.setItem("userTypes",userTypes);
                localStorage.setItem("token",accessToken);



                // window.location.href="/";
                navigate("/");

            }

        }
        catch(err){

        }



    }


    return <div className="bg-dark vh-100 d-flex justify-content-center align-items-center">

        <div style={{width:"50rem"}} className="card p-5">

            <h4> 
                Log In
            </h4>

            <form onSubmit={onLogin}>

                <div className="input-group">
                    <input onChange={updateFormData} value={userId} className="form-control m-1" 
                    id="userid" type="text" placeholder="userId" />
                </div>

                     <div className="input-group">
                    <input onChange={updateFormData}  value={password} className="form-control m-1"  
                    id="password" type="password" placeholder="password" />
                </div>


                <div className="input-group">
                    <input className="btn btn-dark form-control m-1" type="submit" value="LogIn" />
                </div>


            </form>

        </div>

    </div>

}

export default Auth;