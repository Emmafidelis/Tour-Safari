// src/pages/Home.tsx
import { Box, Heading, Text, SimpleGrid, VStack } from "@chakra-ui/react";
import Navbar from "@/Component/NavBar";
import BookingForm from "@/Component/BookingForm";
import FeaturedTours from "@/Component/FeaturedTour";
import Activities from "@/Component/Activities";
import Footer from "@/Component/Footer";
import Hero from "@/Component/Hero";
import FloatingSocial from "@/Component/FloatingSocial";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Box as="main" p={1} maxW="100%" mx="auto">
        <Hero />
        <Box as="section" id="tours">
          <FeaturedTours />
        </Box>
        <Box as="section" id="activities">
          <Activities />
        </Box>

        {/* About Section */}
        <Box
          as="section"
          id="about"
          py={16}
          bg="gray.900"
          _dark={{ bg: "gray.900" }}
        >
          <Box maxW="1200px" mx="auto" px={4}>
            <SimpleGrid
              columns={{ base: 1, lg: 3 }}
              gap={12}
              alignItems="start"
            >
              {/* About Us */}
              <VStack gap={6} textAlign="left" alignItems="start">
                <Heading
                  as="h2"
                  size="2xl"
                  color="yellow.400"
                  fontWeight="bold"
                >
                  About Us
                </Heading>
                <Text fontSize="md" color="gray.300" lineHeight="tall">
                  Based in Arusha, Tanzania, Seven Serenity Safaris is your
                  dedicated partner for unforgettable safari adventures. We
                  craft bespoke journeys that immerse you in Tanzania's iconic
                  wildlife and breathtaking landscapes.
                </Text>
                <Text fontSize="md" color="gray.300" lineHeight="tall">
                  Our team of local experts is committed to providing seamless,
                  personalized, and responsible travel experiences. We believe
                  in connecting you with the true essence of Tanzania, ensuring
                  every moment of your safari is filled with both thrilling
                  discovery and profound serenity.
                </Text>
                <Text fontSize="md" color="gray.300" lineHeight="tall">
                  Choose Seven Serenity Safaris for an authentic, high-quality,
                  and deeply enriching exploration of Africa's wild heart.
                </Text>
              </VStack>

              {/* Mission */}
              <VStack gap={6} textAlign="left" alignItems="start">
                <Heading
                  as="h2"
                  size="2xl"
                  color="yellow.400"
                  fontWeight="bold"
                >
                  Mission
                </Heading>
                <Text fontSize="md" color="gray.300" lineHeight="tall">
                  At Seven Serenity Safaris, our mission is to deliver
                  unforgettable, authentic, and responsible safari experiences
                  in Tanzania. We are dedicated to showcasing the country's
                  unparalleled natural beauty and diverse wildlife, while
                  fostering genuine connections with local cultures and
                  contributing positively to conservation efforts. We strive to
                  create journeys that not only thrill and inspire but also
                  bring a profound sense of peace and wonder to every traveler.
                </Text>
              </VStack>

              {/* Vision */}
              <VStack gap={6} textAlign="left" alignItems="start">
                <Heading
                  as="h2"
                  size="2xl"
                  color="yellow.400"
                  fontWeight="bold"
                >
                  Vision
                </Heading>
                <Text fontSize="md" color="gray.300" lineHeight="tall">
                  Our vision at Seven Serenity Safaris is to be the leading and
                  most trusted safari operator in Tanzania, recognized globally
                  for our commitment to excellence, sustainable tourism, and
                  creating deeply transformative journeys. We aim to inspire a
                  lifelong appreciation for Tanzania's wilderness and culture,
                  while continuously enriching the lives of our guests, our
                  team, and the communities we partner with.
                </Text>
              </VStack>
            </SimpleGrid>

            {/* Statistics */}
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} w="full" mt={16}>
              <VStack gap={4} textAlign="center">
                <Heading size="lg" color="yellow.400">
                  500+
                </Heading>
                <Text color="gray.300">Happy Travelers</Text>
              </VStack>
              <VStack gap={4} textAlign="center">
                <Heading size="lg" color="yellow.400">
                  15+
                </Heading>
                <Text color="gray.300">Years Experience</Text>
              </VStack>
              <VStack gap={4} textAlign="center">
                <Heading size="lg" color="yellow.400">
                  50+
                </Heading>
                <Text color="gray.300">Tour Packages</Text>
              </VStack>
            </SimpleGrid>
          </Box>
        </Box>

        <Box
          as="section"
          id="booking"
          bg="gray.100"
          _dark={{ bg: "gray.700" }}
          p={8}
          borderRadius="lg"
        >
          <Heading
            color="gray.900"
            _dark={{ color: "white" }}
            as="h2"
            size="2xl"
            mb={6}
            textAlign={"center"}
          >
            Book Your Adventure
          </Heading>
          <BookingForm />
        </Box>
      </Box>
      <Footer />

      {/* Floating Social Media Buttons */}
      <FloatingSocial />
    </Box>
  );
}
