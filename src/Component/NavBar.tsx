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
import { FaCreditCard } from "react-icons/fa";
import { FiMenu as HamburgerIcon } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { open, onToggle } = useDisclosure();

  // Function to handle Pesapal payment
  const handlePesapalPayment = () => {
    try {
      // Open Pesapal payment page in a new window
      const pesapalUrl = "https://store.pesapal.com/paymentforbooking";
      window.open(pesapalUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error opening Pesapal payment:", error);
    }
  };

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Destinations", link: "#tours" },
    { name: "Tours", link: "#tours" },
    { name: "Activities", link: "#activities" },
    { name: "About", link: "#about" },
    { name: "Book Now", link: "#booking" },
    {
      name: "Pay Now",
      link: "#",
      onClick: handlePesapalPayment,
      icon: FaCreditCard
    },
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
      <Flex as="nav" p={4} align="center" maxW="1200px" mx="auto" w="100%">
        {/* Logo - Fixed Left Side */}
        <Flex align="center" flex="0 0 auto">
          <Link
            href="/"
            _hover={{
              textDecoration: "none",
              transform: "scale(1.05)",
            }}
            transition="all 0.2s ease-in-out"
          >
            <Image
              src="/images/WhatsApp Image 2025-05-02 at 10.26.35.jpeg"
              alt="Seven Serenity Safaris Logo"
              h="50px"
              w="auto"
              objectFit="contain"
              borderRadius="md"
            />
          </Link>
        </Flex>

        {/* Spacer to push navigation to the right */}
        <Box flex="9" />

        {/* Desktop Navigation - Squeezed Right */}
        <Flex
          display={{ base: "none", md: "flex" }}
          align="center"
          gap={1}
          flex="0 0 auto"
        >
          {navItems.map((item) => (
            <Box key={item.name}>
              {item.onClick ? (
                <Button
                  variant="ghost"
                  size="sm"
                  px={3}
                  fontSize="sm"
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
                  onClick={item.onClick}
                  display="flex"
                  alignItems="center"
                  gap={2}
                >
                  {item.icon && <Icon as={item.icon} />}
                  {item.name}
                </Button>
              ) : (
                <Link
                  href={item.link}
                  px={3}
                  py={2}
                  borderRadius="md"
                  fontWeight="medium"
                  fontSize="sm"
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
                {item.onClick ? (
                  <Button
                    w="full"
                    justifyContent="flex-start"
                    variant="ghost"
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
                    onClick={item.onClick}
                    display="flex"
                    alignItems="center"
                    gap={2}
                  >
                    {item.icon && <Icon as={item.icon} />}
                    {item.name}
                  </Button>
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
