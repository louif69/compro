import { Flex, Image, Text } from "@chakra-ui/react";

const SectionAbout = () => {
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
        justifyContent="center"
        alignItems="center"
        mt={{ base: 5, md: "80px" }}
      >
        <Image
          boxSize={300}
          src="/pfp1.webp"
          alt="BenSare photo"
          objectFit="cover"
          borderRadius="50%"
        />
      </Flex>
      <Flex
        w={{ base: "100%", md: "500px" }}
        mt={{ base: 5, md: "80px" }}
        flexDirection="column"
      >
        <Text
          color="#1521a4"
          fontWeight="semibold"
          textAlign={{ base: "center", md: "left" }}
          fontSize={{ base: "lg", md: "1xl" }}
        >
          "Di BenSare Homestay, kami tidak hanya menyediakan tempat untuk
          beristirahat, tetapi juga menciptakan kenangan yang tak terlupakan.
          Kami berkomitmen untuk memberikan pengalaman menginap yang hangat dan
          nyaman, karena di sini, Anda adalah keluarga."
        </Text>
        <Text
          color="#1521a4"
          fontWeight="semibold"
          textAlign={{ base: "center", md: "left" }}
          fontSize={{ base: "lg", md: "1xl" }}
        >
          — Guinevere, CEO BenSare Homestay
        </Text>
      </Flex>
    </Flex>
  );
};

export default SectionAbout;
