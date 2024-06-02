import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function TicketView() {

  const [Data , setData] = useState({})

  console.log(Data)

  const {id} = useParams()


  async function datafetch(id){

    const res = await axios.get(`http://localhost:3000/Tickets/${id}`)  
    setData(res?.data)

  }

  useEffect(()=>{
    datafetch(id)
  },[id])
  
  

  return (
    <Box m="10">


      <h1>id: {Data.id}</h1>
      <h2>title: {Data.Title}</h2>
      <p>Discription: {Data.Description}</p>
      <p>Assignee: {Data.Assignee}</p>
      <p>Status: {Data.Status}</p>
      <p>Priority: {Data.Priority}</p>

    </Box>

      

   

  )
}

export default TicketView