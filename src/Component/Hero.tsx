import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "/images/Mountain-Kilimanjaro-with-Animals.jpeg",
    "/images/Lion-with-is-young-ones.jpeg",
    "https://images.unsplash.com/photo-1621414050345-53db43f7e7ab",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box
      position="relative"
      h={["70vh", "85vh"]}
      overflow="hidden"
      bg="gray.50"
    >
      {images.map((img, index) => (
        <Box
          key={index}
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bgImage={`url(${img})`}
          bgSize="cover"
          backgroundPosition="center"
          opacity={index === activeIndex ? 1 : 0}
          transition="opacity 1s ease-in-out"
        />
      ))}

      {/* Overlay */}
      <Box
        position="absolute"
        inset={0}
        // bg="linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)"
      />

      {/* Content */}
      <Flex
        position="relative"
        zIndex={2}
        h="100%"
        direction="column"
        justify="center"
        align="center"
        textAlign="center"
        px={4}
      >
        <Box maxW="3xl">
          <Heading
            as="h1"
            fontSize={["4xl", "5xl", "6xl"]}
            fontWeight="bold"
            color="teal.50"
            mb={6}
            textShadow="2px 2px 4px rgba(0,0,0,0.5)"
            textAlign="center"
            lineHeight="1.2"
          >
            <Box as="span" display="block">
              Tanzania Safari Tours &
            </Box>
            <Box as="span" display="block">
              Wildlife Adventures
            </Box>
          </Heading>

          <Text
            fontSize={["xl", "2xl"]}
            color="whiteAlpha.700"
            mb={8}
            maxW="2xl"
            mx="auto"
            as="p"
          >
            Experience authentic Tanzania safari tours with Seven Serenity
            Safaris. Expert-guided wildlife adventures, Serengeti safaris,
            Kilimanjaro trekking, and Zanzibar beach getaways await you.
          </Text>

          <Flex gap={4} justify="center" wrap="wrap">
            <Button size="lg" colorScheme="green" px={8} asChild>
              <a href="#booking">Plan Your Adventure</a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              color="white"
              borderWidth={2}
              _hover={{ bg: "whiteAlpha.200" }}
              px={8}
              asChild
            >
              <a href="#tours">Explore Tours</a>
            </Button>
          </Flex>
        </Box>
      </Flex>

      <Flex
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        gap={2}
        zIndex={3}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            w={3}
            h={3}
            borderRadius="full"
            bg={index === activeIndex ? "green.400" : "whiteAlpha.600"}
            cursor="pointer"
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Hero;
