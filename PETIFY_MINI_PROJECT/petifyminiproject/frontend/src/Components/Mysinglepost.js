
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {HStack,Box,Image,Heading,Text,Button, Flex,Avatar,VStack, Container} from "@chakra-ui/react"
import { useLocation } from 'react-router-dom'

export const Mysinglepost = () => {
    const [post,setpost]=useState([])
    const [appliction,setapplication]=useState([])
    const [user,setuser]=useState([])
    const [image,setimage]=useState([])
    const location=useLocation()
    let _id='';
    console.log(post)
    const findpost=async()=>{
      let res=await axios.get( `http://localhost:8080/api/v2/getthispost/${_id}`,{withCredentials:true}).catch((error)=>console.log(error))
      let data=res.data.post
      return data
    }
    const findallplicatioins=async()=>{
        let res=await axios.get(`http://localhost:8080/api/v3/getapplicaton/${_id}`).catch((err)=>{
            console.log(err)
        })
        console.log(res.data.allapplication)
        return res.data.allapplication
    }
     
    useEffect(()=>{
        console.log(location.pathname.split('/'))
      let arr=location.pathname.split('/')
      _id=arr[2]
      console.log(_id)
      findpost().then((data)=>setpost(data))
      findallplicatioins().then((data)=>setapplication(data))
      
    },[])
    console.log(appliction)
    return (
    <Flex padding={4}>
        <Container>
        <Box
          flex="1"
            direction={{ base: "column", sm: "row" }}
            boxShadow="lg"
            padding={4}
            borderRadius="md"
            overflow="hidden"
            variant="outline"
            width="550px"
             
            bg="white"
            border="1px solid #E2E8F0"
            _hover={{ boxShadow: "xl" }}
        >
            <Image
              objectFit="cover"
              width="full"
              maxH="300px"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROKudm6aylL9w7sWsDkaCkZ_SmJ-mbY8zyLiSYJyL0g&s"
              alt="Pet image is loading"
            />
          <Box px={4} py={2} width="100%">
            <Heading size="md" mt={4} mb={2}>Name: {post.name}</Heading>
            <Heading size="sd" mt={4} mb={2}>Categorie: {post.categories}</Heading>
            <Text fontWeight="semibold" py="2">
              {post.content}
            </Text>
            {/* <HStack spacing={4}>
              <Button variant="solid" colorScheme="blue">
                Buy Latte
              </Button>
            </HStack> */}
          </Box>
        </Box>
</Container>


<Container marginTop={0}>
        {
            appliction.map((item,index)=>{
                return <Box
                key={index}
                direction={{ base: "column", sm: "row" }}
                boxShadow="md"
                borderRadius="lg"
                overflow="visible"
                variant="outline"
                width="100%"
                position="relative"
                minW="400px"
                maxW="full" 
                minH="200px" // Set maximum width // Set fixed height
              >
                <HStack px={4} py={2} spacing={4} width=" 100%" height="100%"> 
                  <VStack align="start" spacing={2} flex="1" maxW="calc(100% - 200px)" py={4}>
                    <Heading size="md">{item.firstname}</Heading>
                    <Heading size="md">{item.lastname}</Heading>
                    <Box maxW="100%" overflow="hidden" overflowY="auto">
                      <Text>
                          {item.content}
                      </Text>
                    </Box>
                  </VStack>
                </HStack>
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      position="absolute"
                      bottom="4"
                      right="4"
                      fontSize="sm" // Set font size
                      width="100px" // Set fixed width
                      height="40px" // Set fixed height
                      lineHeight="40px" // Center button content vertically
                      borderRadius="md" // Apply border radius
                    >
                      Adopt it
                    </Button>
              </Box>
            })
        }
        </Container> 
    </Flex>
  )
}