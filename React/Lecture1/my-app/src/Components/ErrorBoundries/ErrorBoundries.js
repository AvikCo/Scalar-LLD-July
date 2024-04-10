import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallback/ErrorFallback";

  const user = {
    name: 'Shruti Apte'
    // personalID:{
    //     email:"test@gmail.com"
    // }
  };

  const logError = (error)=>{
    console.log(error);
  }

function Main(){

    return(
    <ErrorBoundary onError={logError} FallbackComponent={ErrorFallback} >
    <UserProfile user={user}  />
     </ErrorBoundary>
    )
}


export default Main;





 const UserProfile = ({ user }) => {
    return (
      <div>
        <h2>User Profile</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.personalID.email}</p>
      </div>
    );
  };



