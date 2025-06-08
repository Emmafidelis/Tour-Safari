import {
  SimpleGrid,
  Box,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { tours } from "@/data/tours";

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

    <SimpleGrid columns={[1, 2, 3]} gap={10} px={4}>
      {tours.map((tour) => (
        <Card.Root key={tour.id} borderRadius="xl" overflow="hidden">
          <Image
            src={tour.image}
            alt={tour.title}
            h="250px"
            objectFit="cover"
          />
          <CardBody>
            <Stack spaceX={4} spaceY={4}>
              <Heading size="md">{tour.title}</Heading>
              <Text fontSize="sm" color="gray.600">
                {tour.duration}
              </Text>
              <Text fontSize="xl" fontWeight="bold">
                {tour.price}
              </Text>
              <Button colorScheme="green">Book Now</Button>
            </Stack>
          </CardBody>
        </Card.Root>
      ))}
    </SimpleGrid>
  </Box>
);

export default FeaturedTours;
