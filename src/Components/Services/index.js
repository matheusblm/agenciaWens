import {
  Flex,
  Heading,
  VStack,
  Image,
  SimpleGrid,
  Text,
  Spacer,
  Box,
} from "@chakra-ui/react";

import servicesElement from "../../Assets/Images/servicesElement.png";
import { servicesWens } from "../../Utils/services.js";

export const Services = () => {
  return (
    <>
      <Flex w="100%" justifyContent="center">
        <VStack pt="100px">
          <Heading fontFamily="Spartan">Servicos</Heading>
          <Spacer />
          <Box w="56px" borderTop="2px solid black" borderRadius="10px"></Box>
          <Text textAlign="center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the{" "}
          </Text>
          <Spacer />

          <SimpleGrid
            minChildWidth="330px"
            spacing={5}
            w="100%"
            maxW="1120px"
            zIndex="1000"
            pt="100px"
          >
            {servicesWens.map((item) => (
              <VStack
                maxW="350px"
                h="350px"
                boxShadow="10px 40px 50px rgba(229, 233, 246, 0.4);"
                borderRadius="20px"
                p="50px"
                textAlign="left"
                bg="white"
              >
                <Image src={item.icon} alt="icon" h="85px" />
                <Spacer />
                <Heading fontSize="2xl" w="100%" fontFamily="Spartan">
                  {item.title}
                </Heading>
                <Spacer />
                <Text>{item.description}</Text>
              </VStack>
            ))}
          </SimpleGrid>
          <Image
            src={servicesElement}
            position="absolute"
            top="45%"
            right="55%"
          />
        </VStack>
      </Flex>
    </>
  );
};
