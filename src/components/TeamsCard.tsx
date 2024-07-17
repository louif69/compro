"use client";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const professions = ["Customer Service", "Owner", "Cleaning Service"];
let currentIndex = 0;
const getNextProfession = () => {
  const profession = professions[currentIndex];
  currentIndex = (currentIndex + 1) % professions.length;
  return profession;
};

const TeamsCard = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <Flex
      bgColor="#1521a4"
      h="300px"
      w="200px"
      borderRadius={20}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        borderRadius={20}
        src={user.picture.large}
        objectFit="cover"
        h="220px"
        w="150px"
        alt={`${user.name.first} ${user.name.last}`}
      />
      <Text mt={2} color="white">
        {user.name.first} {user.name.last}
      </Text>
      <Text color="white">{getNextProfession()}</Text>
    </Flex>
  );
};

export default TeamsCard;
