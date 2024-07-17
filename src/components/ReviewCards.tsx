"use client";
import React, { FC } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { HiStar } from "react-icons/hi";

interface BlogProps {
  author: string;
  description: string;
  thumbnail: string;
}

const ReviewCards: FC<BlogProps> = ({ author, description }) => {
  return (
    <Flex
      direction="column"
      h="auto"
      maxWidth="280px"
      justifyContent="center"
      mx="auto"
      p={5}
      borderRadius="20px"
      border="2px solid"
      borderColor="#1521a4"
      bgColor="#fef5ee"
    >
      <Box textAlign="center">
        <Image
          w="50px"
          h="50px"
          src="pfp.png"
          borderRadius="50%"
          mx="auto"
          mb={4}
        />
        <Text color="#1521a4" fontWeight="semibold" mb={2}>
          {author}
        </Text>
        <Text color="#1521a4" fontSize="14px" mb={4}>
          {description}
        </Text>
        <Flex color="#1521a4" justifyContent="center">
          <HiStar />
          <HiStar />
          <HiStar />
          <HiStar />
          <HiStar />
        </Flex>
      </Box>
    </Flex>
  );
};

export default ReviewCards;
