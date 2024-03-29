import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink, useHistory } from "react-router-dom";
import omegapog2 from '../../omegapog2.png';
import notes2 from '../../notes2.png';
import '../../index.css';
import AuthService from '../../services/AuthService';

export const Navbar = () => {

    const {isAuth, setIsAuth, activeUser, newNote, setNewNote, setActiveUser} = useContext(AuthContext);
    const history = useHistory();



    const logout = async () => {
        
        const data = await AuthService.logout();

        const { message } = data;
        
        if(!message.msgError) {
            setIsAuth(false);
            setNewNote(false);
            setActiveUser("");
            history.push("/");
        } else alert("Error try again!");

        history.push("/");
    }

    const showNewPost = () => {
        setNewNote(!newNote);
        console.log(newNote);
    }
  
    const authNavbar = () => {
        return (            
            <div className="topmenuWrapper">
            <div className="firstMenu">
            <button className="newNote2"><img src={omegapog2} alt ="nein"></img></button>
             <img src={notes2} alt ="nein" className="logga"></img>              
             <button className="topMenuButtons" onClick={e => {showNewPost()}} >New Note</button>                   
             <button className="topMenuButtons" onClick={logout}>Logoff</button>     
             
             <p className="topMenuLoginState">Logged in as: {activeUser.username}</p>
       
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
              <NavLink to="/login"><button className="topMenuButtons">Login</button></NavLink>                      
              <NavLink to="/register"><button className="topMenuButtons">Register</button></NavLink>                      
        
              <p className="topMenuLoginState">Not Logged In</p>
        
            </div>            
          </div>
        )
    }
  


    useEffect (() => {

        async function checkifLogin(){        
            
            const data = await AuthService.isAuthenticated()            
            const { message } = data;         
           

            if(!message.msgError) {
                setIsAuth(true);                   
                setActiveUser({username: data.user.username});                 
                
            } else {
                setIsAuth(false);
                setNewNote(false);
                setActiveUser("");                
            }     

        }

        checkifLogin();
    },[]);
 

    return (
        <div>      
              
            {isAuth ? authNavbar() : unAuthNavbar()}
        </div>
    )


}

