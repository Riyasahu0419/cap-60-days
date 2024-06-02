import { Button, Container, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

function Login(){
    // const [loading, setLoading] = useState(false)
    const [err, seterr] = useState(false)   
    const [userInput , setUserinput]  = useState({
        email:"",
        password:""
      })

    function HandleChange(e){
        const {name, value} = e.target
        setUserinput({...userInput,[name]:value})
       }

       async function Fetchlogin(){
        setLoading(true)
        try {
          let resp = await axios({
            method:"post",
            url:"https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
            data:userInput
          })
         login(resp?.data?.token,userInput.email)
         console.log(resp.data,"token")
         toast({
          title: 'Login Sucessful.',
          description: "Your login has sucessful.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        
    
        
        } catch (error) {
         setLoading(false)
         seterr(true)
        }
        }

        function HandleClick(){
            Fetchlogin()
          }
    
       
  return (
    
    <Container>
    <VStack>
    <Input type='email' name='email' value={userInput.email}  placeholder='Enter Your Email' onChange={HandleChange} />
    <Input type='password' name='password' value={userInput.password} placeholder='Enter your Password' onChange={HandleChange}/>
    <Button colorScheme='green' onClick={HandleClick}>Login</Button>
   </VStack>
    </Container>
    
  )
}


export default Login