import { Box, Button , GridItem, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Tickets() {
  const navigate = useNavigate()
  const [Data , setData] = useState([])
  const [sort , setSort] = useState("")
  const [filter , setFilter] = useState("")
  
// console.log(sort)
// console.log(filter)


  function handleTicket(){
      navigate("/tickets/createTicket")
  }

async function datafetch(filter , sort){

  const params={}
  
  if(filter){
    params.Status=filter
  }

  if(sort){
    params._sort ="Priority"
    params._order= sort
  }

  
  const res = await axios.get(`http://localhost:3000/Tickets`,{params}) 
 
  
  setData(res?.data)

}

useEffect(()=>{
  datafetch(filter , sort)
},[filter , sort])


function handleView(id){

  navigate(`/tickets/viewticket/${id}`)

}

function handleSort(e){
   const newSort=(e.target.value)
   setSort(newSort)
}

function handlefilter(e){
    const newFilter=(e.target.value)
    setFilter(newFilter)
}



  return (


    <>

     <Box display="flex" flexDirection="row-reverse" m="10">
        <Button colorScheme='teal' onClick={handleTicket} >Create Ticket</Button> 
      </Box> 

      <Box m="10">
        <select name="" id="" value={sort} onChange={handleSort}>
          <option value="">Sort by Priority</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>

        <select name="" id="" value={filter} onChange={handlefilter}>

          <option value="">Filter by Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">Progress</option>
          <option value="Completed">Completed</option>

        </select>
      </Box>

      <SimpleGrid columns={{sm:1, md:2 , lg:3}} gap={6}>
      {Data.map((el , index)=>{
        
        // console.log(el)
        
        return(
          <>
          
            <GridItem w='100%' h='auto' bg='blue.500'>

            <h2>title: {el.Title}</h2>
            <p>Status: {el.Status}</p>
            <p>Priority: {el.Priority}</p>

          <Button colorScheme='teal' onClick={()=>handleView(el.id)}>view detail</Button> 



            </GridItem>
           
        
          </>
        )


      })}
       </SimpleGrid> 
    
    </>


    
  )

}

export default Tickets