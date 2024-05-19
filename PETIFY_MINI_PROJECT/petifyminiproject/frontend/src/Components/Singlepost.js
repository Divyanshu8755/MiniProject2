import React, { useEffect, useState } from 'react';
import {
  Box, Button, Heading, Input, HStack, Image, Text, extendTheme, ChakraProvider, FormControl, FormLabel, Spacer, VStack
} from '@chakra-ui/react';
import axios from 'axios';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtoken } from '../Store/Slice/Userslice';

const Singlepost = () => {
  const activeLabelStyles = {
    transform: "scale(0.85) translateY(-24px)"
  };
  const navigate=useNavigate()
  let token =localStorage.getItem("token")
  const dispatch=useDispatch()
  dispatch(addtoken(token))
  const userid=useSelector(state=>state.userdata._id)
  console.log(userid,userid)
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [content, setcontent] = useState('');
  const [email, setemail] = useState('');
  const handlefirstname = (e) => {
    setfirstname(e.target.value)
    console.log(firstname)
  }
  const handlelastnname = (e) => {
    setlastname(e.target.value)
    console.log(lastname)
  }
  const handleemail = (e) => {
    setemail(e.target.value)
    console.log(email)
  }
  const handlecontent = (e) => {
    setcontent(e.target.value)
    console.log(content)
  }

  const theme = extendTheme({
    components: {
      Form: {
        variants: {
          floating: {
            container: {
              _focusWithin: {
                label: {
                  ...activeLabelStyles
                }
              },
              "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
                ...activeLabelStyles
              },
              "textarea:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
                ...activeLabelStyles
              },
              label: {
                top: 0,
                left: 0,
                zIndex: 2,
                position: "absolute",
                backgroundColor: "white",
                pointerEvents: "none",
                mx: 3,
                px: 1,
                my: 2,
                transformOrigin: "left top"
              }
            }
          }
        }
      }
    }
  });

  const location = useLocation();
  const [post, setpost] = useState([]);
  let _id = '';
  const logout = async () => {
    let res = await axios.get("http://localhost:8080/api/v1/logout", {
      withCredentials: true,
    });
    localStorage.clear()
    navigate("/login");
    console.log(res);
  };
  const findpost = async () => {
    let res = await axios.get(`http://localhost:8080/api/v2/getthispost/${_id}`,{withCredentials:true}).catch((error) => {
      logout()
  console.log(error)
  });
    let data = res.data.post;
    return data;
  }

  const submithandler = async (e) => {
    e.preventDefault();
    let arr = location.pathname.split('/');
    _id = arr[2];
    console.log(_id);
    await axios.post(`http://localhost:8080/api/v3/createapplication`, {
      firstname: firstname,
      lastname: lastname,
      content: content,
      email: email,
      userid,
      postid: _id
    }).catch((err) => console.log(err));
    setfirstname('');
    setlastname('');
    setemail('');
    setcontent('');
  }

  useEffect(() => {
    console.log(location.pathname.split('/'));
    let arr = location.pathname.split('/');
    _id = arr[2];
    console.log(_id);
    findpost().then((data) => setpost(data)).catch((err)=>console.log(err));
  }, []);

  return (
        <HStack p={10}>
          <Box
          direction={{ base: "column", sm: "row" }}
          boxShadow="lg"
          padding={4}
          borderRadius="md"
          overflow="hidden"
          variant="outline"
          width="100%"
          maxW="50%"
          minH="50vh"
          bg="white"
          border="1px solid #E2E8F0"
          _hover={{ boxShadow: "xl" }}
        >
        <Image
          objectFit="cover"
          width="full"
          maxH="300px"
          src={`${post.image}`}
          alt="Caffe Latte"
        />
        <Box px={4} py={2} width="100%">
          <Heading size="md" mt={4} mb={2}>Name: {post.name}</Heading>
          <Heading size="sd" mt={4} mb={2}>Categorie: {post.categories}</Heading>
          <Text fontWeight="semibold" py="2">
            {post.content}
          </Text>
          <HStack spacing={4}>
            <Button variant="solid" colorScheme="blue">
              See Pet
            </Button>
          </HStack>
        </Box>
      </Box>
      <Box
        width="50%"
        m={3}
        border="1px solid #E2E8F0"
        borderRadius="md"
        boxShadow="md"
        p={4}
      >
        <ChakraProvider theme={theme}>
          <Heading p={3}>Application Form</Heading>
          <form onSubmit={submithandler}>
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">
              <FormControl variant="floating" isRequired width="calc(50% - 16px)" mr={3}>
                <Input
                  value={firstname}
                  onChange={handlefirstname}
                  placeholder=" "
                />
                <FormLabel>First Name</FormLabel>
              </FormControl>
              <FormControl variant="floating" isRequired width="calc(50% - 16px)">
                <Input
                  value={lastname}
                  onChange={handlelastnname}
                  placeholder=" "
                />
                <FormLabel>Last Name</FormLabel>
              </FormControl>
              <FormControl variant="floating" isRequired width="100%" mt={3}>
                <Input
                  value={email}
                  onChange={handleemail}
                  placeholder=" "
                />
                <FormLabel>Email</FormLabel>
              </FormControl>
              <FormControl variant="floating" isRequired width="100%" mt={3}>
                <Input
                  value={content}
                  onChange={handlecontent}
                  placeholder=" "
                />
                <FormLabel>Application</FormLabel>
              </FormControl>
            </Box>
            <Button mt={6} type="submit" colorScheme="blue">
              Submit
            </Button>
          </form>
        </ChakraProvider>
      </Box>
    </HStack>
  );
}

export default Singlepost;