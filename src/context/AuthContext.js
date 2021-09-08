import React, { createContext , useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [activeUser, setActiveUser] = useState({ username: "" });
    const [newNote, setNewNote] = useState(false);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth, activeUser, setActiveUser, newNote, setNewNote}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;