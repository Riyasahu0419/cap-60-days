import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Select, Box, Card, SimpleGrid, CardHeader, CardFooter, Heading, CardBody } from '@chakra-ui/react';

const Home = () => {
  
    const [Data ,setData] = useState([])
    const [Filter , setFilter] = useState("")
    const [Sort , setSort] = useState("")

    async function fetchdata(Filter , Sort){
        const params={}
        if(Filter){
            params.filter=Filter
        }

        if(Sort){
            params.sort="price"
            params.order=Sort
        }

        const res = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`,{params})
        setData(res.data.data)
    }

    useEffect(()=>{
        fetchdata(Filter,Sort)
    },[Filter,Sort])
 
  

  function handleFilter(e){
    const newFilter=e.target.value
    setFilter(newFilter)
  }

  function handleSort(e){
    const newSort=e.target.value
    setSort(newSort)
  }
  
  
  return (
   
    <>
    <Box display="flex" gap="30px" m="10">

      <Select placeholder='filter by category' value={Filter} onChange={handleFilter}>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="kids">Kids</option>
        <option value="homedoctor">Home Doctor</option>
      </Select>
    
   
      <Select placeholder='sort by price' value={Sort} onChange={handleSort}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </Select>
    </Box>

    <SimpleGrid spacing={4} columns={{sm:1, md:2 , lg:3}}> 
    {Data.map((el,index)=>{
        return(
            <>
            <Card>

                <CardHeader>
                    <Heading size="md">Title:{el.title}</Heading>
                </CardHeader>

                <CardBody>
                    <p>Catagory:{el.category}</p>
                </CardBody>

                <CardBody>
                    <p>Price:{el.price}</p>
                </CardBody>

                <CardFooter>
                    <Button>More details</Button>
                </CardFooter>


            </Card>
            
            
            </>
        )
    })}

    </SimpleGrid>


    </>
  );
};

export default Home;