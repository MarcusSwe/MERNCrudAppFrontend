import React, { createContext , useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [activeUser, setActiveUser] = useState({ username: "" });

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth, activeUser, setActiveUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;