import { Flex, Text } from "@chakra-ui/react";

const HeaderForReviewCards = () => {
  return (
    <Flex
      maxWidth="6xl"
      mx="auto"
      p="4"
      justifyContent="center"
      gap={{ base: 4, md: 20 }}
      alignItems="center"
    >
      <Text
        color="#1521a4"
        fontWeight="bold"
        fontSize={{ base: "2xl", md: "6xl" }}
      >
        Apa Kata Mereka?
      </Text>
    </Flex>
  );
};

export default HeaderForReviewCards;
