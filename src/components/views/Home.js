import React, { useContext } from "react";
import { AuthContext  } from "../../context/AuthContext";





export const Home = () => {

    const {isAuth} = useContext(AuthContext);

    const isAuthyes = () => {
        return (
            <>
            INLOGGAD
            </>
        )
    }

    const unAuth = () => {
        return (
        <>
        hästen
        </>
        )
    }

    return (
        <>
            <h1>Home</h1>
            <h3>Routing Turorial</h3>

            {isAuth ? isAuthyes() : unAuth()}
        </>
    )
}
