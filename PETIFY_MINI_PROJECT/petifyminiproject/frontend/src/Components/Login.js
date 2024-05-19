import {
  Box,
  Input,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { GiSittingDog } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addtoken } from "../Store/Slice/Userslice";

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  
  const dipatch = useDispatch();
  const navigation = useNavigate();
  const submithandler = async () => {
    try {
      let res = await axios.post(
        " http://localhost:8080/api/v1/login",
        {
          email: username,
          password: password,
        },
        { withCredentials: true }
      );
      let data = res.data;
      
      dipatch(addtoken(data));


      localStorage.setItem("token",data)
      navigation("/dashboard");
    } catch (error) {
      console.log(error);
      setpassword("");
      setusername("");
    }
  };

  const handlepassword = (e) => {
    setpassword(e.target.value);
  };
  const handleusername = (e) => {
    setusername(e.target.value);
  };
  useEffect(()=>{
    localStorage.clear()
  },[])
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingBottom:"50px"
      }}
    >
      <HStack spacing={10}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <VStack>
            <GiSittingDog size={{ base: 25, md: 50, lg: 75, xl: 125 }} />
            <Text>petify</Text>
            <Text>Find Your New Friends</Text>
          </VStack>
        </Box>
        <Box
          w={["full", "md"]}
          p={[8, 10]}
          mt={[20, "10vh"]}
          border={["none", "1px"]}
          borderColor={["", "gray.300"]}
          borderRadius={10}
          boxShadow="lg"
        >
          <VStack spacing={4} align={"flex-start"} w={"full"}>
            <VStack spacing={1} align={["flex-start", "center"]} w={"full"}>
              <Heading>Login</Heading>
              <Text>Enter your e-mail and password to login</Text>
            </VStack>
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input
                rounded="none"
                variant={"outline"}
                value={username}
                onChange={handleusername}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                rounded={"none"}
                variant={"outline"}
                type="password"
                value={password}
                onChange={handlepassword}
              />
            </FormControl>
            <HStack w={"full"} justify={"space-between"}>
              <Text variant={"Link"} colorScheme="blue">
                Forgot Password?
              </Text>
              <Link to="/signup">
                <Text variant={"Link"} colorScheme="blue">
                  Create New account
                </Text>
              </Link>
            </HStack>
            <Button rounded={"none"} onClick={submithandler}>
              Login
            </Button>
          </VStack>
        </Box>
      </HStack>
    </div>
  );
};

export default Login;