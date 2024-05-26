import React, { useState, createContext } from 'react'

export const BulbContext = createContext()

function BulbContextProvider({children}) {
  const [isOn,setisOn]=useState(false)
  const switchOn=()=>{
    return setisOn(true)
  }
  const switchOff=()=>{
    return(setisOn(false))
  }
  return (
    
    (<BulbContext.Provider value={{isOn,switchOff,switchOn}}>
      {children}
    </BulbContext.Provider>)
    
  )
}

export default BulbContextProvider