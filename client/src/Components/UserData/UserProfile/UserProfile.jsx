import { useAuth } from "../../AuthContext/AuthContext"
import { useNavigate } from "react-router-dom"
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button
  } from '@chakra-ui/react';
import { Link as RouteLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserProfile(){
    const navigate = useNavigate()
    const {logout, loadingUser} = useAuth()
    const userData = useSelector(state => state.user)

    async function logOut(){
       await logout()
        navigate("/")
    }
   

    if(loadingUser) return <h1>loading</h1>

    return (
        <div style={{"background": "black", "height": "100vh"}}  >
            
            <Center py={6} >
      <Box
      marginTop={"70px"}
        maxW={'320px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'lg'}
        bg={"white"}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={userData.avatar}
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
         
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
             {userData.username}
        </Heading>
        <Text fontWeight={600} color={'gray.500'}  mb={4} marginTop={"10px"} >
         Email: {userData.email}
        </Text>
        <Text fontWeight={600} color={'gray.500'}  mb={4} marginTop={"10px"} >
         Plan: {userData.subscription === 1 ? "Basic" : "Premium" }
        </Text>
        <Button
           /*  flex={1} */
            fontSize={'sm'}
            bg={'gray.500'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'gray.600',
            }}
            >
             <RouteLink style={{"color": "white"}}  to={"/home"}> Go Home</RouteLink>
          </Button>
          <Center marginTop={"20px"} >
          {
            userData.admin ? <Button
            fontSize={'sm'}
            bg={'orange.700'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'orange.800',
            }}
            >
             <RouteLink style={{"color": "white"}}  to={"/admin"}>Admin Panel</RouteLink>
          </Button> : null
          }
          </Center>

        <Stack mt={8} direction={'row'} spacing={4}>
          
          <Button
            flex={1}
            fontSize={'sm'}
            color={"white"}
            bg={'orange.300'}
            _hover={{
                bg: 'orange.500',
              }}
            >
            Edit Profile
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.600',
            }}
            _focus={{
              bg: 'blue.500',
            }}
            onClick={logOut}
            >
                Log Out
          </Button>
          
        </Stack>
      </Box>
    </Center>

        </div>
    )
}