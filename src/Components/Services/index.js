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

import siteIcon from "../../Assets/Images/siteIcon.png";
import servicesElement from "../../Assets/Images/servicesElement.png";

export const Services = () => {
  return (
    <>
      <Flex w="100%" justifyContent="center">
        <VStack pt="100px">
          <Heading>Servicos</Heading>
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
            {[1, 2, 3, 4, 5, 6].map(() => (
              <VStack
                maxW="350px"
                h="350px"
                boxShadow="10px 40px 50px rgba(229, 233, 246, 0.4);"
                borderRadius="20px"
                p="50px"
                textAlign="left"
              >
                <Image src={siteIcon} alt="icon" w="100px" h="95px" />
                <Spacer />
                <Heading fontSize="2xl" w="100%">
                  Criacao de Sites
                </Heading>
                <Spacer />
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Text>
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
