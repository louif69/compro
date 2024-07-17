import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import CompanyGrid from "@/components/CompanyGrid";
import FacilitySection from "@/components/FacilitySection";
import FacilitySection2 from "@/components/FacilitySection2";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import { getEntries } from "@/libs/contentful";
import ReviewCards from "@/components/ReviewCards";
import HeaderForReviewCards from "@/components/HeaderForReviewCards";

export default async function Home() {
  const blogs = await getEntries();

  return (
    <Box bgColor="#fef5ee" w="100%">
      <Container maxW="7xl">
        <Hero />
        <CompanyGrid />
        <Introduction />
        <HeaderForReviewCards/>
        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          spacing={{ base: 5, md: 10 }} 
          maxWidth="6xl"
          mx="auto"
          p={{ base: 5, md: 10 }}
        >
          {blogs?.map((blog, index) => (
            <ReviewCards
              key={index}
              thumbnail={blog.thumbnail}
              author={blog.author}
              description={blog.description}
            />
          ))}
        </SimpleGrid>

        <FacilitySection />
        <FacilitySection2 />
      </Container>
    </Box>
  );
}
