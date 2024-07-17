import TeamsCard from "@/components/TeamsCard";
import { Box, Flex, Text, Container } from "@chakra-ui/react";

export const metadata = {
  title: "Temui Tim di BenSare Homestay Surakarta",
  description:
    "Kenali tim berdedikasi di balik BenSare Homestay Surakarta. Staf kami berkomitmen untuk memberikan pelayanan yang luar biasa demi membuat pengalaman menginap Anda berkesan.",
};

const Page = () => {
  return (
    <Box pt="75px" bgColor="#fef5ee" minH="100vh" w="100%">
      <Container maxW="7xl">
        <Flex
          maxW="6xl"
          flexDirection="column"
          gap={{ base: 5, md: 10 }}
          minH={{ base: "auto", md: "100vh" }}
          justifyContent="center"
          alignItems="center"
          mx="auto"
          p={{ base: "4", md: "10" }}
        >
          <Text
            color="#1521a4"
            fontWeight="bold"
            fontSize={{ base: "3xl", md: "5xl" }}
            textAlign="center"
          >
            Tim Kami
          </Text>
          <Flex gap={10} flexWrap="wrap" justifyContent="center" w="100%">
            <TeamsCard />
            <TeamsCard />
            <TeamsCard />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Page;
