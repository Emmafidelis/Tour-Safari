import {
  Flex,
  IconButton,
  Link,
  Button,
  useDisclosure,
  Box,
  Stack,
  Collapsible,
  Icon,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiMenu as HamburgerIcon } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { open, onToggle } = useDisclosure();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { name: "Home", link: "/" },
    {
      name: "Destinations",
      subItems: ["Serengeti", "Zanzibar", "Kilimanjaro"],
    },
    {
      name: "Tours",
      subItems: ["Safari", "Beach", "Cultural"],
    },
    { name: "Activities", link: "#activities" },
    { name: "About", link: "#about" },
    { name: "Book Now", link: "#booking" },
  ];

  return (
    <Box
      bg="gray.100"
      color="gray.900"
      boxShadow="lg"
      position="sticky"
      top={0}
      zIndex={10}
      borderBottom="1px"
      borderColor="gray.200"
      _dark={{
        bg: "gray.700",
        color: "white",
        borderColor: "gray.700",
      }}
    >
      <Flex
        as="nav"
        p={4}
        justify="space-between"
        align="center"
        maxW="1200px"
        mx="auto"
        w="100%"
      >
        <Link
          href="/"
          _hover={{
            textDecoration: "none",
            transform: "scale(1.05)",
          }}
          transition="all 0.2s ease-in-out"
          ml={2}
        >
          <Image
            src="/images/WhatsApp Image 2025-05-02 at 10.26.35.jpeg"
            alt="Safari Tanzania Logo"
            h="45px"
            w="auto"
            objectFit="contain"
            borderRadius="md"
          />
        </Link>

        {/* Desktop Navigation */}
        <Flex display={{ base: "none", md: "flex" }} align="center" gap={6}>
          {navItems.map((item) => (
            <Box
              key={item.name}
              position="relative"
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.subItems ? (
                <Collapsible.Root open={activeDropdown === item.name}>
                  <Button
                    variant="ghost"
                    _hover={{
                      color: "green.600",
                      bg: "green.50",
                      transform: "translateY(-1px)",
                    }}
                    _active={{
                      bg: "green.100",
                      transform: "translateY(0px)",
                    }}
                    transition="all 0.2s ease-in-out"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      )
                    }
                  >
                    {item.name}
                    <Icon
                      as={FaChevronDown}
                      ml={2}
                      transform={
                        activeDropdown === item.name
                          ? "rotate(180deg)"
                          : "rotate(0deg)"
                      }
                      transition="transform 0.2s ease-in-out"
                    />
                  </Button>

                  <Collapsible.Content
                    position="absolute"
                    bg="gray.100"
                    boxShadow="xl"
                    p={3}
                    borderRadius="lg"
                    minW="220px"
                    zIndex={1}
                    border="1px"
                    borderColor="gray.200"
                    _dark={{
                      bg: "gray.700",
                      borderColor: "gray.700",
                    }}
                    mt={2}
                  >
                    <Stack gap={1}>
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub}
                          href={`#${sub.toLowerCase()}`}
                          px={4}
                          py={3}
                          borderRadius="md"
                          _hover={{
                            bg: "green.50",
                            color: "green.700",
                            transform: "translateX(4px)",
                          }}
                          transition="all 0.2s ease-in-out"
                          fontWeight="medium"
                        >
                          {sub}
                        </Link>
                      ))}
                    </Stack>
                  </Collapsible.Content>
                </Collapsible.Root>
              ) : (
                <Link
                  href={item.link}
                  px={4}
                  py={2}
                  borderRadius="md"
                  fontWeight="medium"
                  _hover={{
                    color: "green.600",
                    bg: "green.50",
                    transform: "translateY(-1px)",
                  }}
                  _active={{
                    bg: "green.100",
                    transform: "translateY(0px)",
                  }}
                  transition="all 0.2s ease-in-out"
                >
                  {item.name}
                </Link>
              )}
            </Box>
          ))}

          {/* Theme Toggle */}
          <ThemeToggle />
        </Flex>

        {/* Mobile Navigation */}
        <Flex display={{ md: "none" }} align="center" gap={2}>
          <ThemeToggle />
          <IconButton
            onClick={onToggle}
            aria-label="Toggle menu"
            variant="outline"
            _hover={{
              bg: "green.50",
              borderColor: "green.200",
              transform: "scale(1.05)",
            }}
            _active={{
              bg: "green.100",
              transform: "scale(0.95)",
            }}
            transition="all 0.2s ease-in-out"
          >
            <HamburgerIcon />
          </IconButton>
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      <Collapsible.Root open={open}>
        <Collapsible.Content>
          <Stack
            bg="gray.100"
            _dark={{ bg: "gray.700", borderColor: "gray.700" }}
            p={4}
            display={{ md: "none" }}
            borderTop="1px"
            borderColor="gray.200"
            boxShadow="lg"
          >
            {navItems.map((item) => (
              <Box key={item.name}>
                {item.subItems ? (
                  <Collapsible.Root open={activeDropdown === item.name}>
                    <Button
                      w="full"
                      justifyContent="space-between"
                      variant="ghost"
                      _hover={{
                        bg: "green.50",
                        color: "green.600",
                      }}
                      _active={{
                        bg: "green.100",
                      }}
                      transition="all 0.2s ease-in-out"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                    >
                      {item.name}
                      <Icon
                        as={FaChevronDown}
                        ml={2}
                        transform={
                          activeDropdown === item.name
                            ? "rotate(180deg)"
                            : "rotate(0deg)"
                        }
                        transition="transform 0.2s ease-in-out"
                      />
                    </Button>

                    <Collapsible.Content pl={4} mt={2}>
                      <Stack gap={1}>
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub}
                            href={`#${sub.toLowerCase()}`}
                            py={3}
                            px={3}
                            borderRadius="md"
                            _hover={{
                              color: "green.600",
                              bg: "green.50",
                              transform: "translateX(4px)",
                            }}
                            transition="all 0.2s ease-in-out"
                            fontWeight="medium"
                          >
                            {sub}
                          </Link>
                        ))}
                      </Stack>
                    </Collapsible.Content>
                  </Collapsible.Root>
                ) : (
                  <Link
                    href={item.link}
                    display="block"
                    py={3}
                    px={3}
                    borderRadius="md"
                    fontWeight="medium"
                    _hover={{
                      color: "green.600",
                      bg: "green.50",
                      transform: "translateX(4px)",
                    }}
                    transition="all 0.2s ease-in-out"
                  >
                    {item.name}
                  </Link>
                )}
              </Box>
            ))}
          </Stack>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
};

export default Navbar;
