import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UnAuthenticated from "../pages/UnAuthenticated/UnAuthenticated";
import UnAuthorised from "../pages/UnAuthorised/UnAuthorised";


function AuthHoc(props){

    console.log(props.allowedRoles);

    const email = localStorage.getItem("email");
    const accessToken = localStorage.getItem("token");
    const loggedInUserType = localStorage.getItem("userTypes");

    const isLoggedIn = email && accessToken;
      const isAuthroised = props.allowedRoles.includes(loggedInUserType);


      if(!isLoggedIn){
        return <UnAuthenticated/>
      }

      if(!isAuthroised){
        return <UnAuthorised/>
      }

    return <div>

        {props.children}

    </div>

}


export default AuthHoc;