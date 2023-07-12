import {
  Box,
  InputGroup,
  InputLeftElement,
  Flex,
  Button,
  Center,
  Input,
  Image,
} from "@chakra-ui/react";

const handleLogin = () => {
  //console.log(e.target.value);
};
const LoginMJ = () => {
  return (
    // <Box __css={{ ...BoxStyles }}>
    <Flex
      flexDirection="column"
      justify="center"
      align="center"
      minH="100vh"
      style={{}}
    >
      <Flex
        flexDirection="column"
        justify="space-around"
        align="center"
        border="1px solid lightgray"
        w="500px"
        h="500px"
      >
        <Center h="100px">
          <Image src="./images/logo.png" alt="Dan Abramov" w="200px" m="10px" />
        </Center>
        <Box>
          <InputGroup w="300px" m="10px">
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="ID"
            />
            <Input variant="flushed" placeholder="아이디를 입력하세요." />
          </InputGroup>
          <InputGroup w="300px" m="10px">
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="PW"
            />
            <Input
              variant="flushed"
              type="password"
              placeholder="비밀번호를 입력하세요."
            />
          </InputGroup>
        </Box>

        <Center>
          <Button
            variant="solid"
            m="10px"
            onClick={() => {
              handleLogin();
            }}
          >
            로그인
          </Button>
        </Center>
      </Flex>
    </Flex>
  );
};

export default LoginMJ;
