import { Box, IconButton } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message =
      "Hello! I'm interested in your safari tours. Can you provide more information?";
    const phoneNumber = "255767728749"; // Replace with actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Box
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex={1000}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
    >
      {/* WhatsApp Button */}
      <IconButton
        aria-label="Contact us on WhatsApp"
        onClick={handleWhatsAppClick}
        size="lg"
        borderRadius="full"
        bg="#25D366"
        color="white"
        _hover={{
          bg: "#128C7E",
          transform: "scale(1.1)",
        }}
        _active={{
          bg: "#075E54",
          transform: "scale(0.95)",
        }}
        boxShadow="lg"
        transition="all 0.2s ease-in-out"
        w="60px"
        h="60px"
        fontSize="24px"
        css={{
          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%": {
              transform: "scale(1)",
              boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)",
            },
            "70%": {
              transform: "scale(1.05)",
              boxShadow: "0 0 0 10px rgba(37, 211, 102, 0)",
            },
            "100%": {
              transform: "scale(1)",
              boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)",
            },
          },
        }}
      >
        <FaWhatsapp size="24px" />
      </IconButton>

      {/* Tooltip text */}
      <Box
        bg="gray.800"
        color="blackAlpha.800"
        px={3}
        py={1}
        borderRadius="md"
        fontSize="sm"
        fontWeight="medium"
        opacity={0}
        transform="translateY(10px)"
        transition="all 0.2s ease-in-out"
        _groupHover={{
          opacity: 1,
          transform: "translateY(0)",
        }}
        whiteSpace="nowrap"
        pointerEvents="none"
        position="absolute"
        bottom="70px"
        right="0"
      >
        Chat with us!
        {/* Arrow pointing down */}
        <Box
          position="absolute"
          top="100%"
          right="20px"
          w={0}
          h={0}
          borderLeft="6px solid transparent"
          borderRight="6px solid transparent"
          borderTop="6px solid gray.800"
        />
      </Box>
    </Box>
  );
};

export default WhatsAppFloat;
