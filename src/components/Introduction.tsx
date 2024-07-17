import { Flex, Image, Text } from "@chakra-ui/react";

const Introduction = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap={{ base: 5, md: 10 }}
      h={{ base: "auto", md: "2xl" }}
      maxWidth="6xl"
      justifyContent="center"
      alignItems="center"
      mx="auto"
      p={{ base: 5, md: 10 }}
    >
      <Flex justifyContent="center" alignItems="center" mt={{ base: 5, md: "80px" }}>
        <Image
        boxSize={460}
          src="/img12.webp"
          alt="BenSare photo"
          objectFit="cover"
          borderRadius={20}
        />
      </Flex>
      <Flex w={{ base: "100%", md: "500px" }} mt={{ base: 5, md: "80px" }}>
        <Text
          color="#1521a4"
          fontWeight="semibold"
          textAlign={{ base: "center", md: "left" }}
          fontSize={{ base: "lg", md: "1xl" }}
        >
          Temukan kehangatan dan keramahan Surakarta di Cozy Homestay. Terletak
          di jantung kota, homestay kami menawarkan perpaduan sempurna antara
          kenyamanan dan kemudahan, menjadikannya pilihan ideal untuk menginap
          pendek maupun panjang.
        </Text>
      </Flex>
    </Flex>
  );
};

export default Introduction;
