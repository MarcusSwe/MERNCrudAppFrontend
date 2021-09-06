import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink, useHistory } from "react-router-dom";
import omegapog2 from '../../omegapog2.png';
import notes2 from '../../notes2.png';
import '../../index.css';

export const Navbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const history = useHistory();


    const logout = () => {
        setIsAuth(false);
        history.push("/");
    }


    const authNavbar = () => {
        return (
            
            <div className="topmenuWrapper">

            <div className="firstMenu">
            <button className="newNote2"><img src={omegapog2} alt ="nein"></img></button>
             <img src={notes2} alt ="nein" className="logga"></img>
       
             <NavLink to="/"><button className="topMenuButtons">Home</button></NavLink>
             <NavLink to="/loginregister"><button className="topMenuButtons">Logoff</button></NavLink>                      
       
             <p className="topMenuLoginState">Not Logged In</p>
       
           </div>            

         </div>
          
        )        
    }


    const unAuthNavbar = () => {
        return (
            <div className="topmenuWrapper">

             <div className="firstMenu">
             <button className="newNote2"><img src={omegapog2} alt ="nein"></img></button>
              <img src={notes2} alt ="nein" className="logga"></img>
        
              <NavLink to="/"><button className="topMenuButtons">Home</button></NavLink>
              <NavLink to="/loginregister"><button className="topMenuButtons">LoginRegister</button></NavLink>                      
        
              <p className="topMenuLoginState">Not Logged In</p>
        
            </div>            

          </div>
        )
    }

    return (
        <div>
            {isAuth ? authNavbar() : unAuthNavbar()}
        </div>
    )


}