import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext  } from "../../context/AuthContext";
import AuthService from "../../services/AuthService";

export const Register = () => {

    const [user, setUser] = useState({username: "", password: ""});
    const { setIsAuth, setActiveUser } = useContext(AuthContext);
    const history = useHistory();

    const changeUserData = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };


   /* const registerUserX= async () => {
        try {
          const res = await fetch("user/register", {
            method: "post",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" },
          });
          const data = await res.json();
          return data;
        } catch (error) {
          return { error: error };
        }
      }*/

    // behövs async kan inte använda await annars.. 
    const registerUser = async (e) => {
        e.preventDefault();       

        // registerUserX();
        
            const data = await AuthService.register(user);
        
            const { message } = data;

            if(!message.msgError) {
            setIsAuth(true);
            setActiveUser(user);
            history.push("/");    
            console.log(user);
            }
        
    };

    
    return (
      
            <div className="loginDiv">                           
                <form onSubmit = {registerUser}>
                    <h4>New Account</h4>
                    <p>Input new username and password to create new user account.</p>
                    <label for="login-usenamer">Username  </label>
                    <input type="text" name="username" placeholder="Username" className="new-username" onChange={changeUserData} />
                    <label for="login-password">  Password  </label>
                    <input type="password" name="password" placeholder="Password" className="login-password" onChange={changeUserData} />
                    <button type="submit" className="new-user"> Create </button>
                </form>    
            </div>
    )
}
