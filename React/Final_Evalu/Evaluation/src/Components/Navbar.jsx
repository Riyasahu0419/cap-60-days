import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
    <>
    <Box bg="black" textColor="white" display="flex" justifyContent="space-evenly" h="14" alignItems="center">

    <Link to="/">HOME</Link>
    <Link to="/login">LOGIN</Link>

     <Button colorScheme='teal'>LOGOUT</Button> 
      
    </Box> 
    
  
  
    
    </>
  )
}

export default Navbar