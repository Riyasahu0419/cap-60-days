import {Link} from 'react-router-dom';
import React from 'react'
import { Box, Button } from '@chakra-ui/react';

 function Navbar() {
  return (
    <>
    
<Box bg="black" textColor="white" display="flex" justifyContent="space-evenly" h="14" alignItems="center"> 

   <Link to="//">HOME</Link>
   <Link to="/about">ABOUT</Link>
   <Link to="/contact">CONTACT</Link>
   <Link to="/tickets">TICKETS</Link>
   <Link to="/login">LOGIN</Link>
   
   
   
   <Button colorScheme='teal'>LOGOUT</Button>

</Box>
    
    </>
    


  )
}

export default Navbar