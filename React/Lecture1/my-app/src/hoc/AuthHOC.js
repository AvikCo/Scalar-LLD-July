import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UnAuthenticated from "../pages/UnAuthenticated/UnAuthenticated";
import UnAuthorised from "../pages/UnAuthorised/UnAuthorised";
import { isUserLoggedIn } from "../utils/helper";


function AuthHoc(props){

    console.log(props.allowedRoles);

    const loggedInUserType = localStorage.getItem("userTypes");

    const isLoggedIn = isUserLoggedIn();
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