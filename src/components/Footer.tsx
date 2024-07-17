import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <Box as="footer" position="static" bottom={0} w="100%" bgColor="#fef5ee">
      <Container maxW="6xl" borderTop="2px solid" borderColor="#1521a4">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          textAlign={{ base: "center", md: "left" }}
          mx="auto"
          py={4}
        >
          <Flex justify={{ base: "center", md: "flex-start" }} mb={{ base: 4, md: 0 }}>
            <Image w={{ base: "150px", md: "200px" }} src="/logoBenSareHD.png" alt="BenSare logo"/>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems={{ base: "center", md: "flex-start" }}
            mx={{ base: 0, md: 8 }}
          >
            <Text color="#1521a4" mt={{ base: 2, md: 0 }}>
              Jl. Pleret Utara I No.18, Banyuanyar, Kec. Banjarsari, Kota
              Surakarta, Jawa Tengah 57137
            </Text>
            <Flex mt="8px" gap={2} align="center">
              <BsFillTelephoneFill color="#1521a4" />
              <Text color="#1521a4">+62817-7904-1765</Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
