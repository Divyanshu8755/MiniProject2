import {
  Flex,
  Box,
  Text,
  Button,
  cookieStorageManager,
} from "@chakra-ui/react";
import axios from "axios";
import { GiSittingDog } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import "../App.css"
const Navbar = () => {
  const navigate = useNavigate();
  const item=localStorage.getItem("token")
  console.log(item)
  const logout = async () => {
    let res = await axios.get("http://localhost:8080/api/v1/logout", {
      withCredentials: true,
    });
    localStorage.clear()
    navigate("/login");
    console.log(res);
  };
  return (
    <Flex
      align="center"
      justify="space-between"
      bg="teal.500"
      p={[7, 3]}
      color="white"
      position="sticky"
      top="0"
      zIndex="999" 
    >
      <Link to="/">
        <Flex align="center" mx={10}>
         <Link to='/dashboard'>
         <Box as={GiSittingDog} /></Link> 
         <Link to='/dashboard'> <Text fontSize="xl" ml={2} fontWeight="bold">
            PETIFY
          </Text>
          </Link>
          <Link to='/Home'>
        <Text fontSize="medium" mx={"30px"} fontWeight="bold"> Home </Text>
      </Link>
        </Flex>
      </Link>
        {
          item=== null ? '' : <Flex mx={10}>
            {/* <div class="topnav">
              <input type="text" placeholder="Search.."/>
            </div> */}
            <Link to="/mypost" >
              <Text fontSize="medium" mx={"30px"} fontWeight="bold"> Myposts</Text>
            </Link>
            <Link mx={"4px"} onClick={logout}>
              <Text fontSize="medium" fontWeight="bold"> LogOut</Text>
          </Link>
        </Flex>
        }
    </Flex>
  );
};

export default Navbar;