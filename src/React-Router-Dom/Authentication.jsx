import { createContext, useContext, useState } from "react";


const AuthContext = createContext("")


export const AuthProvider = ({children})=>{
    const [user, setUSer] = useState(null)

    const login = (profile) =>{
        setUSer(profile)
    }


    const logOut = ()=>{
        setUSer(null)
    }


    return (
            <AuthContext.Provider value={{logOut, login, user}}>
                {children}
            </AuthContext.Provider>
    )

}


export const userAuth = ()=>{
    return useContext(AuthContext)
}