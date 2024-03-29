import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import AuthService from "../../services/AuthService";

export const Login = () => {

    const [user, setUser] = useState({username: "", password: ""});
    const { setIsAuth, setActiveUser } = useContext(AuthContext);
    const history = useHistory();

    const changeUserData = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const loginUser = async (e) => {
        e.preventDefault();
       
        const data = await AuthService.login(user);

        const { message } = data;
        
        if(!message.msgError) {
            setIsAuth(true);
            console.log(user);
            setActiveUser(user);
            history.push("/");
        } else alert("Wrong password or user dont exist!");


    }
  


    return (      
            <div className="loginDiv">                            
                <form onSubmit = {loginUser}>
                    <h4>Login</h4>
                    <p>Input username and and password to login.</p>
                    <label for="login-usenamer">Username  </label>
                    <input type="text" name="username" placeholder="Username" className="login-username" onChange={changeUserData} />
                    <label for="login-password">  Password  </label>
                    <input type="password" name="password" placeholder="Password" className="login-password" onChange={changeUserData} />
                    <button type="submit" className="user-login">   Login   </button>
                </form>    
            </div>
    )
}
