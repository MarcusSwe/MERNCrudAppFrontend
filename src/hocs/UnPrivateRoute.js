import React, { useContext } from "react";
import {Route, Redirect} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const UnPrivateRoute = ({component: Component, ...rest}) => {
    
    
    const {isAuth} = useContext(AuthContext)

    return (
        <Route {...rest} render={ (props) => {
            if(isAuth){
                return (
                    <Redirect to={{pathname: "/", state:{ from: props.location }}} />                    
                );
            }   
            return <Component {...props} />       
        }} />
    )
}
