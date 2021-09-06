import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavLink, useHistory } from "react-router-dom";



export const Navbar = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const history = useHistory();


    const logout = () => {
        setIsAuth(false);
        history.push("/");
    }


    const authNavbar = () => {
        return (
            <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/loginregister">LoginRegister</NavLink>

            </>
        )        
    }


    const unAuthNavbar = () => {
        return (
            <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/loginregister">LoginRegister</NavLink>
            </>
        )
    }

    return (
        <div>
            {isAuth ? authNavbar() : unAuthNavbar()}
        </div>
    )


}