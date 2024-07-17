import { Flex, Image, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      mt={{ base: "75", md: "0" }}
      gap={{ base: 5, md: 10 }}
      h={{ base: "auto", md: "2xl" }}
      maxWidth="6xl"
      justifyContent="center"
      alignItems="center"
      mx="auto"
      p={{ base: 4, md: 10 }}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Flex w={{ base: "100%", md: "400px" }} mt={{ base: 4, md: "80px" }}>
        <Text
          color="#1521a4"
          fontWeight="bold"
          textAlign="center"
          fontSize={{ base: "2xl", md: "5xl" }}
        >
          Welcome to the undiscovered part of Solo
        </Text>
      </Flex>
      <Flex w={{ base: "100%", md: "600px" }} mt={{ base: 4, md: "80px" }}>
        <Image
          src="/img23.webp"
          alt="BenSare photo"
          objectFit="cover"
          w="600px"
        />
      </Flex>
    </Flex>
  );
};

export default Hero;
