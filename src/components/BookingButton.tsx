import { Flex, Text, Button } from "@chakra-ui/react";

const BookingButton = () => {
  return (
    <Flex
      maxWidth="7xl"
      mx="auto"
      p="10"
      justifyContent="center"
      gap={{ base: 4, md: 20 }}
      alignItems="center"
    >
      <Button
        color="#1521a4"
        variant="outline"
        borderColor="#1521a4"
        border="2px solid"
        borderRadius="20px"
        _hover={{
          color: "#FD5B2F",
          borderColor: "#FD5B2F",
        }}
        w="auto"
        mx={{ base: "auto", lg: 0 }}
      >
        Booking Jadwal Sekarang!
      </Button>
    </Flex>
  );
};

export default BookingButton;
