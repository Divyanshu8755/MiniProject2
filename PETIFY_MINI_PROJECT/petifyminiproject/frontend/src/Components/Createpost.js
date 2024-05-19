
import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Flex
} from '@chakra-ui/react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Createpost= () => {
  const [petName, setPetName] = useState('');
  const [category, setCategory] = useState('');
  const [image,setimage]=useState('');
  const [content, setContent] = useState('');
  const location=useLocation()
  const navigation=useNavigate()
  const handlecreatepost=async(e)=>{
    e.preventDefault()
    const id=location.pathname.split('/')[2]
    let res=await axios.post(`http://localhost:8080/api/v2/createpost/${id}`,{
        name:petName,
        content,
        image,
        categories:category
    }).catch((err)=>{
        console.log(err)
    })
    navigation('/dashboard')
  }
  return (
    <Flex
    width="100%"
    height="100vh"
    alignItems="center"
    justifyContent="center"
  >
    <VStack
      width="300px"
      bg="gray.100"
      p={6}
      borderRadius="md"
      boxShadow="md"
    >
      <FormControl id="pet-name" isRequired>
        <FormLabel>Pet Name</FormLabel>
        <Input
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          placeholder="Enter pet name"
          borderRadius="md"
          border="1px solid"
          borderColor="gray.300"
          px={3}
        />
      </FormControl>
      <FormControl id="image" isRequired>
        <FormLabel>Image</FormLabel>
        <Input
          type="text"
          value={image}
          onChange={(e) => setimage(e.target.value)}
          placeholder="enter link"
          borderRadius="md"
          border="1px solid"
          borderColor="gray.300"
          px={3}
        />
      </FormControl>
      <FormControl id="category" isRequired>
        <FormLabel>Category</FormLabel>
        <Input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Enter category"
          borderRadius="md"
          border="1px solid"
          borderColor="gray.300"
          px={3}
        />
      </FormControl>
      <FormControl id="content" isRequired>
        <FormLabel>Content</FormLabel>
        <Input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter content"
          borderRadius="md"
          border="1px solid"
          borderColor="gray.300"
          px={3}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        onClick={handlecreatepost}
        borderRadius="md"
        px={6}
        py={3}
        fontSize="md"
        fontWeight="semibold"
        boxShadow="lg"
        _hover={{ bg: 'blue.500' }}
      >
        Submit
      </Button>
    </VStack>
  </Flex>
  );
};

export default Createpost;
