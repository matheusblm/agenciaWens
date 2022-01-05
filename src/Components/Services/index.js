import {
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

export const Services = () => {
  return (
    <>
      <Flex w="100%" justifyContent="center">
        <HStack w="60%">
          <Heading>Servicos</Heading>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the{" "}
          </Text>
          <SimpleGrid columns={3} spacing={10}>
            <HStack>
              <Image alt="icon" />
              <Heading>Criacao de Sites</Heading>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </HStack>
            <HStack>
              <Image alt="icon" />
              <Heading>Criacao de Sites</Heading>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </HStack>
            <HStack>
              <Image alt="icon" />
              <Heading>Criacao de Sites</Heading>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </HStack>
            <HStack>
              <Image alt="icon" />
              <Heading>Criacao de Sites</Heading>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </HStack>
            <HStack>
              <Image alt="icon" />
              <Heading>Criacao de Sites</Heading>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </HStack>
          </SimpleGrid>
        </HStack>
      </Flex>
    </>
  );
};
