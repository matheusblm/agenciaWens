import {
  Box,
  Button,
  Flex,
  Heading,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import imageMain from "../../Assets/Images/imageMain.png";
import elementMain from "../../Assets/Images/elementMain.png";

export const Main = () => {
  return (
    <>
      <Flex w="100%" justifyContent="center">
        <Flex w="70%" maxW="1500px">
          <Flex alignContent="center" p="20px" w="50%" alignItems="center">
            <VStack textAlign="left" justifyContent="space-evenly" h="300px">
              <Heading w="100%">Agencia de Marketing Digital</Heading>
              <Heading w="100%"> </Heading>

              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the{" "}
              </Text>
              <Button
                w="200px"
                h="60px"
                borderRadius="55px"
                bg="#FFBC92"
                color="#FFFFFF"
                alignSelf="start"
                _hover={{ bg: "#FCE5D7" }}
              >
                Consulte
              </Button>
            </VStack>
          </Flex>
          <Box w="50%" p="20px">
            <Image src={imageMain} />
          </Box>
        </Flex>
        <Image
          src={elementMain}
          w="134px"
          h="100px"
          position="absolute"
          top="20%"
          right="92%"
        />{" "}
        <Image
          src={elementMain}
          w="134px"
          h="100px"
          position="absolute"
          top="35%"
          right="92%"
        />
      </Flex>
    </>
  );
};
