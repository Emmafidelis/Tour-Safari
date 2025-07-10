import {
  SimpleGrid,
  Box,
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Button,
  VStack,
  List,
  Collapsible,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { tours } from "@/data/tours";

const TourCard = ({ tour }: { tour: typeof tours[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card.Root borderRadius="xl" overflow="hidden" boxShadow="lg" bg="white" _dark={{ bg: "gray.800" }}>
      <Image
        src={tour.image}
        alt={tour.title}
        h="250px"
        objectFit="cover"
      />
      <CardBody>
        <VStack align="stretch" spaceY={4}>
          <Heading size="md" color="gray.900" _dark={{ color: "white" }}>{tour.title}</Heading>
          <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.300" }} fontWeight="medium">
            {tour.duration}
          </Text>
          <Text fontSize="md" color="gray.800" _dark={{ color: "gray.100" }} lineHeight="1.6">
            {tour.description}
          </Text>

          <Button
            variant="outline"
            colorScheme="blue"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            display="flex"
            alignItems="center"
            gap={2}
            color="blue.600"
            _dark={{ color: "blue.300", borderColor: "blue.300" }}
            _hover={{
              bg: "blue.50",
              _dark: { bg: "blue.900" }
            }}
          >
            {isExpanded ? "Show Less" : "Read More"}
            <Icon as={isExpanded ? FiChevronUp : FiChevronDown} />
          </Button>

          <Collapsible.Root open={isExpanded}>
            <Collapsible.Content>
              <VStack
                align="stretch"
                spaceY={4}
                pt={4}
                borderTop="1px"
                borderColor="gray.300"
                bg="gray.50"
                _dark={{ borderColor: "gray.600", bg: "gray.700" }}
                p={4}
                borderRadius="md"
                mt={2}
              >
                <Box>
                  <Heading size="sm" mb={2} color="gray.900" _dark={{ color: "white" }} fontWeight="bold">
                    Overview
                  </Heading>
                  <Text fontSize="sm" color="gray.800" _dark={{ color: "gray.200" }} lineHeight="1.6">
                    {tour.detailedInfo.overview}
                  </Text>
                </Box>

                <Box>
                  <Heading size="sm" mb={2} color="gray.900" _dark={{ color: "white" }} fontWeight="bold">
                    Highlights
                  </Heading>
                  <List.Root fontSize="sm" color="gray.800" _dark={{ color: "gray.200" }} spaceY={2}>
                    {tour.detailedInfo.highlights.map((highlight, index) => (
                      <List.Item key={index} display="flex" alignItems="flex-start" gap={2}>
                        <List.Indicator color="green.600" _dark={{ color: "green.400" }} fontWeight="bold">
                          •
                        </List.Indicator>
                        <Text flex="1">{highlight}</Text>
                      </List.Item>
                    ))}
                  </List.Root>
                </Box>

                <Box>
                  <Heading size="sm" mb={2} color="gray.900" _dark={{ color: "white" }} fontWeight="bold">
                    What's Included
                  </Heading>
                  <List.Root fontSize="sm" color="gray.800" _dark={{ color: "gray.200" }} spaceY={2}>
                    {tour.detailedInfo.included.map((item, index) => (
                      <List.Item key={index} display="flex" alignItems="flex-start" gap={2}>
                        <List.Indicator color="green.600" _dark={{ color: "green.400" }} fontWeight="bold">
                          ✓
                        </List.Indicator>
                        <Text flex="1">{item}</Text>
                      </List.Item>
                    ))}
                  </List.Root>
                </Box>

                <Box>
                  <Heading size="sm" mb={2} color="gray.900" _dark={{ color: "white" }} fontWeight="bold">
                    Itinerary
                  </Heading>
                  <List.Root fontSize="sm" color="gray.800" _dark={{ color: "gray.200" }} spaceY={2}>
                    {tour.detailedInfo.itinerary.map((day, index) => (
                      <List.Item key={index} display="flex" alignItems="flex-start" gap={2}>
                        <List.Indicator
                          color="blue.600"
                          _dark={{ color: "blue.400" }}
                          fontWeight="bold"
                          minW="20px"
                        >
                          {index + 1}.
                        </List.Indicator>
                        <Text flex="1">{day}</Text>
                      </List.Item>
                    ))}
                  </List.Root>
                </Box>
              </VStack>
            </Collapsible.Content>
          </Collapsible.Root>

          <Button
            colorScheme="green"
            size="md"
            asChild
            bg="green.600"
            color="white"
            _hover={{ bg: "green.700" }}
            _dark={{ bg: "green.500", _hover: { bg: "green.600" } }}
            fontWeight="semibold"
          >
            <a href="#booking">Book This Tour</a>
          </Button>
        </VStack>
      </CardBody>
    </Card.Root>
  );
};

const FeaturedTours = () => (
  <Box as="section" py={8} bg="gray.50">
    <Heading
      color="blackAlpha.900"
      as="h2"
      size="3xl"
      textAlign="center"
      mb={3}
    >
      Featured Tours
    </Heading>
    <Text
      textAlign="center"
      mb={8}
      fontSize="2xl"
      mx="auto"
      maxW="2xl"
      color="gray.500"
    >
      Discover our most popular Tanzania experiences, from wildlife safaris to
      beach getaways and mountain adventures.
    </Text>

    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 3 }}
      gap={8}
      px={4}
      maxW="1200px"
      mx="auto"
    >
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </SimpleGrid>
  </Box>
);

export default FeaturedTours;
