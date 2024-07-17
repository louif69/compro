"use client";
import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  IconButton,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position="fixed" w="100%" bgColor="#fef5ee" zIndex={1} top={0}>
      <Container
        backdropFilter="blur(4px)"
        maxW="6xl"
        borderBottom="2px solid"
        borderColor="#1521a4"
        px={{ base: 2, md: 4 }}
      >
        <Flex
          h={{ base: "80px", md: "100px" }}
          alignItems="center"
          fontSize={{ base: "16px", md: "20px" }}
          justify="space-between"
        >
          <Box h={{ base: "40px", md: "60px" }}>
            <Image
              objectFit="cover"
              boxSize="100%"
              src="/logoBenSareHD.png"
              alt="BenSare logo"
            />
          </Box>
          <Flex
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            h="full"
            fontWeight="semibold"
            color="#1521a4"
            gap={{ base: 2, md: 10 }}
          >
            <Link href="/">
              <Text cursor="pointer" _hover={{ color: "#FD5B2F" }}>
                Home
              </Text>
            </Link>
            <Link href="/about">
              <Text cursor="pointer" _hover={{ color: "#FD5B2F" }}>
                About
              </Text>
            </Link>
            <Link href="/service">
              <Text cursor="pointer" _hover={{ color: "#FD5B2F" }}>
                Service
              </Text>
            </Link>
            <Link href="/teams">
              <Text cursor="pointer" _hover={{ color: "#FD5B2F" }}>
                Teams
              </Text>
            </Link>
          </Flex>
          <IconButton
            display={{ base: "flex", md: "none" }}
            icon={
              isOpen ? <IoClose color="#1521a4" /> : <CgMenu color="#1521a4" />
            }
            onClick={onToggle}
            variant="transparent"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <Flex
            direction="column"
            align="center"
            mt={0}
            mr={4}
            display={{ base: "flex", md: "none" }}
            fontWeight="semibold"
            color="#1521a4"
            gap={2}
            h="140px"
          >
            <Link href="/">
              <Text w="full" _hover={{ color: "#FD5B2F" }}>
                Home
              </Text>
            </Link>
            <Link href="/about">
              <Text w="full" _hover={{ color: "#FD5B2F" }}>
                About
              </Text>
            </Link>
            <Link href="/service">
              <Text w="full" _hover={{ color: "#FD5B2F" }}>
                Service
              </Text>
            </Link>
            <Link href="/teams">
              <Text w="full" _hover={{ color: "#FD5B2F" }}>
                Teams
              </Text>
            </Link>
          </Flex>
        </Collapse>
      </Container>
    </Box>
  );
};

export default Navbar;
