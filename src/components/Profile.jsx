import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login";
import Button from "./Button";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();



  if (isLoading) {
    return <div>Please Wait...</div>;
  }
  const hasLoggedIn = sessionStorage.getItem('loggedIn');

if (!hasLoggedIn) {
    // Show the "login successful" pop-up
    // Your code to show the pop-up here
      {isAuthenticated ? (
        toast.success('Log In Successfull', {
            toastId:"success2",
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
      ) : (
      
        " "
      )}
    // Set flag indicating the user has logged in
    sessionStorage.setItem('loggedIn', 'true');
}


  return (
    <div className="flex justify-center align-center w-[10rem]">
    {isAuthenticated ? (
      <>
        <div className="w-[1rem] h-[1rem] ">
          User
        </div>
      </>
    ) : (
   
           <LoginButton>Login</LoginButton>
    )}
  </div>
  );
};

export default Profile;