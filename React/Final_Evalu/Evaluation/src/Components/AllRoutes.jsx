import React from 'react'
import {Routes , Route} from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import Home from '../Pages/Home'
import Login from '../Pages/Login'

function AllRoutes() {
  return (
   <Routes>
    <Route path="/" element={
          <PrivateRoutes>
            <Home/>
          </PrivateRoutes>
        }/>

        <Route path="/login" element={
        <Login/>}/>

   </Routes>
   
  )
}

export default AllRoutes