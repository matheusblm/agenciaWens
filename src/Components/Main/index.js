import {
  Box,
  Button,
  Flex,
  Heading,
  VStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";

import elementMain from "../../Assets/Images/elementMain.png";
import animationData from "../../Assets/Animations/animation-main.json";

export const Main = () => {
  return (
    <>
      <Flex w="100%" justifyContent="center">
        <Flex w="70%" maxW="1500px">
          <Flex
            alignContent="center"
            p="20px"
            w={["100%", "100%", "100%", "50%"]}
            alignItems="center"
          >
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
                _hover={{ bg: "#D3A88C" }}
              >
                Consulte
              </Button>
            </VStack>
          </Flex>
          <Box w="50%" p="20px" display={["none", "none", "none", "block"]}>
            <Player
              autoplay
              loop
              src={animationData}
              style={{ height: "645px", width: "650px" }}
            />
          </Box>
        </Flex>
        <Box
          position="absolute"
          top="22%"
          right={["86%", "86%", "82%", "94%", "94%"]}
          h="490px"
          w="130px"
          opacity={["0.6", "0.6", "1", "1"]}
        >
          <Image src={elementMain} m="5px" />
          <Image src={elementMain} m="5px" />
          <Image src={elementMain} m="5px" />
        </Box>
        <Box
          position="absolute"
          top="22%"
          right={["50%", "50%", "70%", "86%", "88%"]}
          h="490px"
          w="130px"
          opacity={["0.6", "0.6", "1", "1"]}
        >
          <Image src={elementMain} m="5px" />
          <Image src={elementMain} m="5px" />
          <Image src={elementMain} m="5px" />
        </Box>
      </Flex>
    </>
  );
};
