import { Box, Grid, GridItem, Text, Link, Flex } from "@chakra-ui/react";
import { Phone, Mail, MapPin } from "lucide-react";
import SocialIcons from "./SocialIcons";

const Footer = () => (
  <Box
    as="footer"
    bg="gray.800"
    color="white"
    _light={{ bg: "gray.100", color: "gray.900" }}
    py={12}
  >
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      gap={8}
      maxW="1200px"
      mx="auto"
      px={4}
    >
      {/* Company Info */}
      <GridItem>
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Seven Serenity Safaris
        </Text>
        <Text mb={4}>
          Discover the magic of Tanzania with our expert-led tours. From
          wildlife safaris to beach getaways and mountain adventures.
        </Text>
        <SocialIcons />
      </GridItem>

      {/* Quick Links */}
      <GridItem>
        <Text fontWeight="bold" mb={4}>
          Quick Links
        </Text>
        <Flex direction="column" gap={2}>
          <Link
            href="/"
            color="gray.300"
            _light={{ color: "gray.700" }}
            _hover={{ color: "green.400", _light: { color: "green.600" } }}
          >
            Home
          </Link>
          <Link
            href="#about"
            color="gray.300"
            _light={{ color: "gray.700" }}
            _hover={{ color: "green.400", _light: { color: "green.600" } }}
          >
            About Us
          </Link>
          <Link
            href="#tours"
            color="gray.300"
            _light={{ color: "gray.700" }}
            _hover={{ color: "green.400", _light: { color: "green.600" } }}
          >
            Tours & Safaris
          </Link>
          <Link
            href="#contact"
            color="gray.300"
            _light={{ color: "gray.700" }}
            _hover={{ color: "green.400", _light: { color: "green.600" } }}
          >
            Destinations
          </Link>
        </Flex>
      </GridItem>

      {/* Contact Info */}
      <GridItem>
        <Text fontWeight="bold" mb={4}>
          Contact Us
        </Text>
        <Flex direction="column" gap={3}>
          <Flex align="start" gap={3}>
            <MapPin size={20} color="#68D391" />
            <Text color="gray.300" _light={{ color: "gray.700" }}>
              13855 Bondeni street, Makongoro Road Arusha, Tanzania
            </Text>
          </Flex>
          <Flex align="center" gap={3}>
            <Phone size={20} color="#68D391" />
            <Text color="gray.300" _light={{ color: "gray.700" }}>
              +255 767 728 749
            </Text>
          </Flex>
          <Flex align="center" gap={3}>
            <Mail size={20} color="#68D391" />
            <Text color="gray.300" _light={{ color: "gray.700" }}>
              sevenserenitysafaris@gmail.com
            </Text>
          </Flex>
        </Flex>
      </GridItem>
    </Grid>

    <Text
      textAlign="center"
      mt={8}
      pt={8}
      borderTop="1px"
      borderColor="gray.700"
      _light={{ borderColor: "gray.300" }}
    >
      © {new Date().getFullYear()} Seven Serenity Safaris. All rights reserved.
    </Text>
  </Box>
);

export default Footer;
