import React, { createContext, useState } from 'react'

export const ValContext = createContext()
const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState({ isAuthenticated: false, token: null, email: null })
    const login = (token,email)=>{
        setIsAuth({ isAuthenticated: true, token:token, email: email })
    }
   
  return (
    <ValContext.Provider value={{isAuth,setIsAuth,login}}>
      {children}
    // </ValContext.Provider>
  )
}

export default AuthContextProvider