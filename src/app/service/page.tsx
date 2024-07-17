import BookingButton from "@/components/BookingButton";
import FacilityAccordion from "@/components/FacilityAccordion";
import { Box, Flex, Text, Container, Image } from "@chakra-ui/react";

export const metadata = {
  title: "Fasilitas di BenSare Homestay Surakarta",
  description:
    "Jelajahi berbagai fasilitas yang ditawarkan di BenSare Homestay Surakarta. Dari Wi-Fi gratis hingga dapur bersama, kami memastikan pengalaman menginap yang nyaman dan praktis bagi semua tamu.",
};

const Page = () => {
  return (
    <Box pt="75px" bgColor="#fef5ee" w="100%" minH="100vh">
      <Container maxW="7xl">
        <Flex
          maxW="6xl"
          gap={{ base: 5, md: 10 }}
          h="auto"
          justifyContent="center"
          alignItems="center"
          p={{ base: 4, md: 10 }}
          flexDirection="column"
          m="auto"
        >
          <Flex
            mt={{ base: "30px", md: "75px" }}
            justifyContent="center"
            w="auto"
          >
            <Text
              color="#1521a4"
              fontWeight="bold"
              textAlign="center"
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              Fasilitas di BenSare Homestay Solo
            </Text>
          </Flex>
          <Flex w={{ base: "90%", md: "500px" }} gap={4} flexDirection="column">
            <Text textAlign="center" color="#1521a4" >
              Temukan kehangatan dan keramahan Surakarta di BenSare Homestay.
              Terletak di jantung kota, homestay kami menawarkan perpaduan
              sempurna antara kenyamanan dan kemudahan, menjadikannya pilihan
              ideal untuk menginap pendek maupun panjang. Nikmati suasana yang
              tenang dan damai di tengah hiruk-pikuk kota, sambil menikmati
              layanan terbaik dari tim kami yang berdedikasi.
            </Text>
          </Flex>
          <Image
            borderRadius={40}
            objectFit="cover"
            src="img3.webp"
            w={{ base: "100%", md: "600px" }}
            alt="BenSare logo"
          />
          <Box w={{ base: "100%", md: "50%" }} h="100%" overflowY="auto">
            <FacilityAccordion />
          </Box>
        </Flex>
        <Box maxW="6xl" m="auto">
          <BookingButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Page;
