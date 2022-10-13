import {Box, Flex, Stack, Heading, Text, Container, Input, Button, SimpleGrid, Avatar, AvatarGroup, useBreakpointValue, Center, Link, Checkbox, FormControl,} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useAuth } from "../../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios"


export default function Register() {

  const navigate = useNavigate();
  const [error, setError] = useState()

  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  const {signup, loginWithGoogle} = useAuth()

  function handleChange(e) {
    e.preventDefault();
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }


  async function handleSubmit(e){
    e.preventDefault()
    try {
      await signup(user.email, user.password, user.displayName)
   /*  console.log(user) */
    navigate("/profile")
      
    } catch (error) {
      setError(error.message)
    }
  }

  async function handleGoogleSignin(){
    await loginWithGoogle()
    navigate("/profile")
  }



  return (
    <Box
      position={"relative"}
      height={"100vh"}
      backgroundColor={"#1D1D1D"}
      backgroundImage={"linear-gradient(180deg, #0000008c 20%, #0000008c 100%), url(https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/12/14/5fd73c24bebce.jpeg)"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
    >
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <Stack spacing={{ base: 10, md: 20 }}>
        {/*   <Heading
            lineHeight={1.1}
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          >
            Logueate
          </Heading> */}
   {/*        <Stack direction={"row"} spacing={4} align={"center"}>
            <AvatarGroup>
              {avatars.map((avatar) => (
                <Avatar
                  key={avatar.name}
                  name={avatar.name}
                  src={avatar.url}
                  position={"relative"}
                  zIndex={2}
                  _before={{
                    content: '""',
                    width: "full",
                    height: "full",
                    rounded: "full",
                    transform: "scale(1.125)",
                    bgGradient: "linear(to-bl, red.400,pink.400)",
                    position: "absolute",
                    zIndex: -1,
                    top: 0,
                    left: 0,
                  }}
                />
              ))}
            </AvatarGroup>
            <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
              +
            </Text>
            <Flex
              align={"center"}
              justify={"center"}
              fontFamily={"heading"}
              fontSize={{ base: "sm", md: "lg" }}
              bg={"gray.800"}
              color={"white"}
              rounded={"full"}
              minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
              minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
              position={"relative"}
              _before={{
                content: '""',
                width: "full",
                height: "full",
                rounded: "full",
                transform: "scale(1.125)",
                bgGradient: "linear(to-bl, orange.400,yellow.400)",
                position: "absolute",
                zIndex: -1,
                top: 0,
                left: 0,
              }}
            >
              YOU
            </Flex>
          </Stack> */}
        </Stack>
        <Stack
          bg={"rgba(17, 173, 152, 0.3)"}
          backdropFilter={"blur(10px)"}
          /*  opacity={".9"} */
          rounded={"xl"}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: "lg" }}
        >
          <Stack spacing={4}>
            <Heading
              color={"white"}
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            >
              Sign up
              <Text
                as={"span"}
                bgGradient="linear(to-r, red.400,pink.400)"
                bgClip="text"
              >
                !
              </Text>
            </Heading>
            {/*  <Text color={'white'} fontSize={{ base: 'sm', sm: 'md' }}>
                We’re looking for amazing engineers just like you! Become a part
                of our rockstar engineering team and skyrocket your career!
              </Text> */}
          </Stack>
          <Box as={"form"} mt={10}>
            <Stack spacing={4} >
              <Input
                placeholder="Username"
                bg={"gray.100"}
                border={0}
                name="displayName"
                type="text"
                value={user.displayName}
                onChange={(e) => {
                  handleChange(e);
                }}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <FormControl /* onSubmit={() => handleSubmit() }  */>
              <Input
                placeholder="example@email.com"
                bg={"gray.100"}
                border={0}
                name="email"
                id={1}
                type="email"
                value={user.email}
                onChange={(e) => {
                  handleChange(e);
                }}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
              <Input
                placeholder="Password"
                type="password"
                bg={"gray.100"}
                border={0}
                id={3}
                autoComplete={"none"}
                marginTop={"20px"}
                name="password"
                value={user.password}
                onChange={(e) => {
                  handleChange(e);
                }}
                color={"gray.500"}
                _placeholder={{
                  color: "gray.500",
                }}
              />
            <Button
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, blue.400,cyan.400)"
              color={"white"}
              onClick={handleSubmit}
              _hover={{
                bgGradient: "linear(to-r, blue.600,cyan.600)",
                boxShadow: "xl",
              }}
            >
              Sign Up
            </Button>

            <Center>{error && <p>{error}</p> } </Center>
              </FormControl>
            </Stack>
            <Button
              w={"full"}
              maxW={"md"}
              variant={"outline"}
              backgroundColor={"white"}
              marginTop={"30px"}
              onClick={handleGoogleSignin}
              leftIcon={<FcGoogle />}
            >
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
          </Box>
          <Stack
            direction={{ base: "flex", sm: "row" }}
            align={"start"}
            justify={"space-evenly"}
          >
            <Checkbox color={"white"}>Remember me</Checkbox>
            <Link color={"blue"}>Forgot password?</Link>
          </Stack>
          form
          <Stack
            direction={{ base: "flex", sm: "row" }}
            gap={1}
            justifyContent={"center"}
          >
            <Text color={"white"}>¿First Time in KINEMA? </Text>
            <Link color={"blue"}>Sign up</Link>
          </Stack>
        </Stack>
      </Container>
      {/* <Blur
          position={'absolute'}
          top={-10}
          left={-10}
          style={{ filter: 'blur(70px)' }}
          zIndex={-1}
        /> */}
    </Box>
  );
}
