import { Box, Flex, Text, Container } from "@chakra-ui/react";

export const metadata = {
  title: "Tentang Kami - BenSare Homestay Surakarta",
  description:
    "Pelajari lebih lanjut tentang BenSare Homestay di Surakarta. Misi kami adalah memberikan pengalaman menginap yang nyaman dan berkesan bagi semua tamu. Temukan cerita dan nilai-nilai kami.",
};

const Page = () => {
  return (
    <Box pt="75px" bgColor="#fef5ee" w="100%" minH="100vh">
      <Container maxW="7xl">
        <Flex
          gap={{ base: 5, md: 10 }}
          h={{ base: "auto", md: "100vh" }}
          maxW="6xl"
          justify="center"
          align="center"
          mx="auto"
          p={{ base: 4, md: 10 }}
          direction="column"
        >
          <Flex
            w={{ base: "90%", md: "auto" }}
            mt={{ base: 8, md: -18 }}
            justify={{ base: "center", md: "flex-start" }}
          >
            <Text
              color="#1521a4"
              fontWeight="bold"
              textAlign="center"
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              Tentang kami
            </Text>
          </Flex>
          <Flex
            w={{ base: "90%", md: "500px" }}
            mt={{ base: 5, md: 0 }}
            gap={4}
            direction="column"
            textAlign="center"
          >
            <Text color="#1521a4">
              Di BenSare Homestay, kami percaya dalam menciptakan suasana
              seperti rumah bagi tamu kami. Misi kami adalah menawarkan
              lingkungan yang hangat dan nyaman, memastikan pengalaman menginap
              yang menyenangkan di Surakarta.
            </Text>
            <Text color="#1521a4">
              Didirikan pada tahun 2014, BenSare Homestay telah berkembang dari
              bisnis keluarga kecil menjadi salah satu homestay paling diminati
              di Surakarta. Komitmen kami terhadap pelayanan yang luar biasa dan
              kepuasan tamu telah menjadi dasar kesuksesan kami.
            </Text>
            <Text color="#1521a4">
              Kami berusaha membuat setiap tamu merasa seperti di rumah dengan
              layanan yang dipersonalisasi. Kamar dan fasilitas kami dirawat
              dengan standar tertinggi. Kami mendukung bisnis lokal dan
              mempromosikan pariwisata berkelanjutan di Surakarta.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Page;
