import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Tag,
  HStack,
  VStack,
  Card,
  CardBody,
  Flex,
} from "@chakra-ui/react";
import { MdMonitorHeart } from "react-icons/md";
import { activities } from "@/data/activities";

const getIntensityColor = (intensity: string) => {
  switch (intensity.toLowerCase()) {
    case "low":
      return { bg: "green.100", text: "green.800" };
    case "medium":
      return { bg: "yellow.100", text: "yellow.800" };
    case "high":
      return { bg: "red.100", text: "red.800" };
    default:
      return { bg: "gray.100", text: "gray.800" };
  }
};

const Activities = () => (
  <Box as="section" py={10} bg="gray.50">
    <Heading size="3xl" textAlign="center" mb={4} color="gray.900">
      Unforgettable Activities
    </Heading>
    <Text
      textAlign="center"
      mb={8}
      fontSize="xl"
      maxW="2xl"
      mx="auto"
      color="gray.500"
    >
      From thrilling adventures to serene experiences, discover the diverse
      activities Tanzania has to offer.
    </Text>

    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8} px={4}>
      {activities.map((activity) => {
        const intensityColors = getIntensityColor(activity.intensity);
        return (
          <Card.Root
            key={activity.id}
            borderRadius="xl"
            overflow="hidden"
            boxShadow="md"
            bg="gray.100"
          >
            <Image
              src={activity.image}
              alt={activity.title}
              objectFit="cover"
              w="100%"
            />
            <CardBody>
              <VStack align="start" spaceX={3} spaceY={3}>
                <HStack spaceX={2}>
                  <MdMonitorHeart color="green" />
                  <Heading size="md" color="blackAlpha.950">
                    {activity.title}
                  </Heading>
                </HStack>
                <Text fontSize="sm" color="gray.600">
                  {activity.description}
                </Text>
                <Flex justify="space-between" align="center" w="100%">
                  <Text color="blackAlpha.800">
                    <Text as="span" fontWeight="bold">
                      Duration:
                    </Text>{" "}
                    {activity.duration}
                  </Text>
                  <Tag.Root
                    bg={intensityColors.bg}
                    borderRadius="full"
                    fontSize="sm"
                  >
                    <Tag.Label color="blackAlpha.800">
                      {activity.intensity}
                    </Tag.Label>
                  </Tag.Root>
                </Flex>
                <HStack spaceX={2} pt={2}>
                  {activity.locations.map((location) => (
                    <Tag.Root
                      key={location}
                      borderRadius="full"
                      variant="solid"
                      bg="rgba(30, 144, 255, 0.1)"
                      fontWeight="semibold"
                    >
                      <Tag.Label color="#1E90FF">{location}</Tag.Label>
                    </Tag.Root>
                  ))}
                </HStack>
              </VStack>
            </CardBody>
          </Card.Root>
        );
      })}
    </SimpleGrid>
  </Box>
);

export default Activities;
