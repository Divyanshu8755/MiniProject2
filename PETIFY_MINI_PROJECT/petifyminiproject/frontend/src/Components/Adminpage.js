import React, { useEffect, useState } from 'react'
import {Container,Heading,Text,CardBody,CardFooter,Image,Stack,Button,Card, Center, Box, Wrap, WrapItem, Flex, HStack,} from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate, useNavigation } from 'react-router-dom'
 
const Adminpage = () => {
  const [users,setusers]=useState([])
  const navigate=useNavigate()
  const findusers=async()=>{
    let res=await axios.get(` http://localhost:8080/api/v1/getallusers`).catch((err)=>{
      console.log(err)
    })
    return res.data.users
  }
  const handledelete=async()=>{
    // let res=await axios.delete(`http://localhost:8080/api/v1/deleteuser/${id}`).catch((err)=>console.log(err))
    console.log("chala") 
  }
  const handleadmin=async(id)=>{
    let res=await axios.patch(`http://localhost:8080/api/v1/makeadmin/${id}`).catch((err)=>console.log(err))
    setusers(res.data.user)
  }
  const removeadmin=async(id)=>{
    let res=await axios.patch(`http://localhost:8080/api/v1/removeadmin/${id}`).catch((err)=>console.log(err))
    setusers(res.data.user)
  }
  const handlehllo=async(id)=>{
    let res=await axios.delete(`http://localhost:8080/api/v1/deleteuser/${id}`).catch((err)=>console.log(err))
    setusers(res.data.user)
  }
  const handleuser=(id)=>{
    navigate(`/seeuser/${id}`)
  }
  useEffect(()=>{ 
    findusers().then((data)=>setusers(data)).catch((err)=>console.log("users set nhi hua"))
  },[])
  console.log(users)
  return (
    < Container   padding={5} backgroundColor={"white"} maxW="30%">
        {
         users.map((user,index)=>{
            return <Card key={index}
              m={2}
              // direction={{ base: 'column', sm: 'column' }}
              // overflow='hidden'
              variant='outline'
            >
            <Image
              marginLeft={8}
              marginTop={4}
              // objectFit='cover'
              maxW={{ base: '80%', sm: '250px' }}
              src='https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png'
              alt='User image loading....'
            />


            <Stack direction="column" align="center" justify="center" maxHeight="50vh">
              <Box marginTop={2} marginBottom={1} textAlign="center">
                <Heading size="md">{user.username}</Heading>
                <Text>{user.email}</Text>
              </Box>
              <Box marginTop={1} marginBottom="4" textAlign="center">
                <Button colorScheme="blue" onClick={() => handleuser(user._id)} marginRight={2}>
                  View
                </Button>
                <Button  colorScheme="red" onClick={() => handlehllo(user._id)}>
                 Delete
                </Button>
                <Button margin={1} colorScheme={user.role=="admin"? "orange": "green"} onClick={() => {
                  if(user.role=="user")
                  handleadmin(user._id)
                else
                removeadmin(user._id)}
                }>
                 {
                  user.role=="admin"? "remove admin": "make admin"
                 }
                </Button>
              </Box>
            </Stack>
          </Card>
          })
        }
    </Container>
  )
}

export default Adminpage