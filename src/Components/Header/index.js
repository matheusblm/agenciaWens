import { Flex, Image, Link, Text, HStack } from "@chakra-ui/react";
import logo from "../../Assets/Images/logo.png";

export const Header = () => {
  return (
    <>
      <Flex w="100%" p="30px" justifyContent="center">
        <Flex
          justifyContent="space-between"
          w="80%"
          h="80px"
          alignContent="flex-start"
          flexDirection={["column", "row"]}
        >
          <Image src={logo} alt="agencia wens" w="240px" h="65px" />
          <HStack alignItems="start">
            <Link
              href="#sobre"
              fontSize={["sm", "sm", "md", "xl"]}
              _hover={{ fontWeight: "bold", borderBottom: "1px solid black" }}
            >
              <Text> Sobre</Text>
            </Link>
            <Link
              href="#Servicos"
              fontSize={["sm", "sm", "md", "xl"]}
              _hover={{ fontWeight: "bold", borderBottom: "1px solid black" }}
            >
              <Text> Servicos</Text>
            </Link>
            <Link
              href="#Clientes"
              fontSize={["sm", "sm", "md", "xl"]}
              _hover={{ fontWeight: "bold", borderBottom: "1px solid black" }}
            >
              <Text> Clientes</Text>
            </Link>
            <Link
              href="#Contato"
              fontSize={["sm", "sm", "md", "xl"]}
              _hover={{ fontWeight: "bold", borderBottom: "1px solid black" }}
            >
              <Text> Contato</Text>
            </Link>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};
