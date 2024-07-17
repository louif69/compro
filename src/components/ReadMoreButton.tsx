"use client";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const ReadMoreButton = () => {
  return (
    <Link href="/service" aria-label="Read more about our services">
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
        w="120px"
        mx={{ base: "auto", lg: 0 }}
      >
        Read more
      </Button>
    </Link>
  );
};

export default ReadMoreButton;
