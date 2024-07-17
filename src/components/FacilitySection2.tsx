import { Flex, Image, Text } from "@chakra-ui/react";
import ReadMoreButton from "./ReadMoreButton";

const FacilitySection2 = () => {
  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      h={{ base: "auto", md: "auto" }}
      maxWidth="6xl"
      justifyContent="center"
      alignItems="center"
      mx="auto"
      p={{ base: 4, md: 10 }}
      gap={{ base: 10, lg: 20 }}
    >
      <Flex
        w={{ base: "100%", md: "50%" }}
        justifyContent={{ base: "center", lg: "flex-start" }}
      >
        <Flex flexDirection="column" gap={4}>
          <Text
            color="#1521a4"
            fontWeight="semibold"
            textAlign={{ base: "center", lg: "left" }}
            fontSize={{ base: "lg", md: "xl" }}
          >
            Temukan kehangatan dan keramahan Surakarta di BenSare Homestay.
            Terletak di jantung kota, homestay kami menawarkan perpaduan
            sempurna antara kenyamanan dan kemudahan, menjadikannya pilihan
            ideal untuk menginap pendek maupun panjang.
          </Text>
          <Flex justifyContent={{ base: "center", lg: "flex-start" }}>
            <ReadMoreButton />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justifyContent="center"
        alignItems="center"
        w={{ base: "100%", md: "50%" }}
      >
        <Image
          src="/img3.webp"
          alt="BenSare photo"
          objectFit="cover"
          w={{ base: "100%", md: "700px" }}
          borderRadius={40}
        />
      </Flex>
    </Flex>
  );
};

export default FacilitySection2;
