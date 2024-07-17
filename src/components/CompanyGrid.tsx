import { Box, Image, Flex } from "@chakra-ui/react";

const CompanyGrid = () => {
  return (
    <Flex
      filter="grayscale(100%)"
      maxWidth="6xl"
      mx="auto"
      p="4"
      justifyContent="center"
      gap={{ base: 4, md: 20 }}
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
    >
      <Box w={{ base: "80px", md: "120px" }}>
        <Image src="/comLogo1.webp" alt="company logo" objectFit="cover" />
      </Box>
      <Box w={{ base: "80px", md: "120px" }}>
        <Image src="/comLogo2.webp" alt="company logo" objectFit="cover" />
      </Box>
      <Box w={{ base: "80px", md: "120px" }}>
        <Image src="/comLogo3.webp" alt="company logo" objectFit="cover" />
      </Box>
      <Box w={{ base: "80px", md: "120px" }}>
        <Image src="/comLogo4.webp" alt="company logo" objectFit="cover" />
      </Box>
      <Box w={{ base: "80px", md: "120px" }}>
        <Image src="/comLogo5.webp" alt="company logo" objectFit="cover" />
      </Box>
    </Flex>
  );
};

export default CompanyGrid;
