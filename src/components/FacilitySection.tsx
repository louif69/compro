import { Box, Flex, Text } from "@chakra-ui/react";
import { TbAirConditioning, TbBrandNetflix } from "react-icons/tb";
import { FaWifi } from "react-icons/fa6";
import { GiHeatHaze } from "react-icons/gi";

const FacilitySection = () => {
  return (
    <Flex
      flexDirection="column"
      h={{ base: "auto", md: "500px" }}
      maxWidth="6xl"
      justifyContent="center"
      alignItems="center"
      mx="auto"
      p={{ base: 4, md: "none" }}
    >
      <Box h={{ base: "auto", md: "140px" }} w="full" p={{ base: 4, md: 10 }}>
        <Text
          color="#1521a4"
          textAlign="center"
          fontSize={{ base: "2xl", md: "6xl" }}
          fontWeight="bold"
        >
          Fasilitas Kami
        </Text>
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        height={{ base: "auto", md: "350px" }}
        gap={{ base: 4, md: 10 }}
        wrap="wrap"
      >
        <Box
          h={{ base: "auto", md: "350px" }}
          w={{ base: "full", md: "250px" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={4}
        >
          <TbAirConditioning size={80} color="#1521a4" />
          <Text fontWeight="semibold" color="#1521a4" textAlign="center">
            Air Conditioner ✓
          </Text>
        </Box>
        <Box
          h={{ base: "auto", md: "350px" }}
          w={{ base: "full", md: "250px" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={4}
        >
          <TbBrandNetflix size={80} color="#1521a4" />
          <Text fontWeight="semibold" color="#1521a4" textAlign="center">
            TV & Netflix ✓
          </Text>
        </Box>
        <Box
          h={{ base: "auto", md: "350px" }}
          w={{ base: "full", md: "250px" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={4}
        >
          <FaWifi size={80} color="#1521a4" />
          <Text fontWeight="semibold" color="#1521a4" textAlign="center">
            WiFi ✓
          </Text>
        </Box>
        <Box
          h={{ base: "auto", md: "350px" }}
          w={{ base: "full", md: "250px" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={4}
        >
          <GiHeatHaze size={80} color="#1521a4" />
          <Text fontWeight="semibold" color="#1521a4" textAlign="center">
            Water Heater ✓
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default FacilitySection;
