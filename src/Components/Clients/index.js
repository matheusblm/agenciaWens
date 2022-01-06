import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import clientImage from "../../Assets/Images/ClientsPictures/pura.png";
export const Clients = () => {
  return (
    <Flex w="100%" justifyContent="center" zIndex="10000">
      <VStack pt="100px">
        <Heading fontFamily="Spartan">Clientes</Heading>
        <Spacer />
        <Box w="56px" borderTop="2px solid black" borderRadius="10px"></Box>
        <Text textAlign="center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the{" "}
        </Text>
        <SimpleGrid
          minChildWidth="200px"
          spacing={1}
          w="100%"
          maxW="1120px"
          pt="100px"
        >
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20,
            21,
          ].map(() => (
            <Image
              src={clientImage}
              w="200px"
              h="200px"
              _hover={{ bg: "black", opacity: "0.8" }}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Flex>
  );
};
