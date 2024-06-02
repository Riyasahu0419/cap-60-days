import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate=useNavigate("")

function handleclick(){
    navigate("/login")
}

  return (
    
    <>
    <Box bg="black" textColor="white" display="flex" justifyContent="space-evenly" h="14" alignItems="center">

    <Link to="/">HOME</Link>
    <Link to="/login">LOGIN</Link>

     <Button colorScheme='teal' onClick={handleclick}>LOGOUT</Button> 
      
    </Box> 
    
  
  
    
    </>
  )
}

export default Navbar