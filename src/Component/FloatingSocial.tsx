import { Box, IconButton, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaTimes,
} from "react-icons/fa";

const FloatingSocial = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    try {
      const message =
        "Hello! I'm interested in your safari tours. Can you provide more information?";
      const phoneNumber = "255679728749";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      console.log("Opening WhatsApp:", whatsappUrl);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
    }
  };

  const handleInstagram = () => {
    try {
      const webUrl = "https://www.instagram.com/sevenserenitysafaris/";
      console.log("Opening Instagram:", webUrl);
      window.open(webUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error opening Instagram:", error);
    }
  };

  const handleTwitter = () => {
    try {
      const webUrl = "https://x.com/SevenSafaris";
      console.log("Opening X (Twitter):", webUrl);
      window.open(webUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error opening X (Twitter):", error);
    }
  };

  const handleLinkedIn = () => {
    try {
      const webUrl = "https://www.linkedin.com/in/seven-serenity-safaris/";
      console.log("Opening LinkedIn:", webUrl);
      window.open(webUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error opening LinkedIn:", error);
    }
  };

  const handleYouTube = () => {
    try {
      const webUrl = "https://www.youtube.com/@SevenSerenitySafaris";
      console.log("Opening YouTube:", webUrl);
      window.open(webUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error opening YouTube:", error);
    }
  };

  const handleCall = () => {
    try {
      const tel = "tel:+255679728749";
      console.log("Initiating call:", tel);
      window.location.href = tel;
    } catch (error) {
      console.error("Error initiating call:", error);
    }
  };

  const handleEmail = () => {
    try {
      const email = "mailto:info@sevenserenity.com";
      console.log("Opening email:", email);
      window.location.href = email;
    } catch (error) {
      console.error("Error opening email:", error);
    }
  };

  const socialButtons = [
    {
      icon: FaWhatsapp,
      label: "WhatsApp Us",
      bg: "#25D366",
      hoverBg: "#128C7E",
      onClick: handleWhatsApp,
      textColor: "white",
    },
    {
      icon: FaInstagram,
      label: "Follow us!",
      bg: "#E4405F",
      hoverBg: "#C13584",
      onClick: handleInstagram,
      textColor: "white",
    },
    {
      icon: FaTwitter,
      label: "Follow on X",
      bg: "#000000",
      hoverBg: "#333333",
      onClick: handleTwitter,
      textColor: "white",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      bg: "#0077B5",
      hoverBg: "#005885",
      onClick: handleLinkedIn,
      textColor: "white",
    },
    {
      icon: FaYoutube,
      label: "YouTube",
      bg: "#FF0000",
      hoverBg: "#CC0000",
      onClick: handleYouTube,
      textColor: "white",
    },
    {
      icon: FaPhone,
      label: "Call Us",
      bg: "#8B4513",
      hoverBg: "#654321",
      onClick: handleCall,
      textColor: "white",
    },
    {
      icon: FaEnvelope,
      label: "Email Us",
      bg: "#D2B48C",
      hoverBg: "#DEB887",
      onClick: handleEmail,
      textColor: "#8B4513",
    },
  ];

  return (
    <Box
      position="fixed"
      bottom="20px"
      right="20px"
      zIndex={1000}
      display="flex"
      flexDirection="column"
      alignItems="flex-end"
      gap={3}
    >
      {/* Social Media Buttons */}
      {isOpen && (
        <VStack gap={3} align="flex-end">
          {socialButtons.map((button, index) => (
            <Box
              key={index}
              display="flex"
              alignItems="center"
              gap={3}
              opacity={1}
              transform="translateX(0)"
            >
              <Box
                bg={button.bg}
                color={button.textColor}
                px={6}
                py={4}
                borderRadius="full"
                display="flex"
                alignItems="center"
                gap={3}
                cursor="pointer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log(`Clicked ${button.label}`);
                  button.onClick();
                }}
                _hover={{
                  bg: button.hoverBg,
                  transform: "scale(1.05)",
                }}
                _active={{
                  transform: "scale(0.95)",
                }}
                transition="all 0.2s ease-in-out"
                boxShadow="xl"
                minW="160px"
                border="2px solid"
                borderColor="transparent"
                _dark={{
                  borderColor: "whiteAlpha.200",
                  boxShadow: "dark-lg",
                }}
              >
                <Box as={button.icon} fontSize="22px" />
                <Text fontWeight="bold" fontSize="md">
                  {button.label}
                </Text>
              </Box>
            </Box>
          ))}

          {/* Close Button */}
          <Box
            display="flex"
            alignItems="center"
            gap={3}
            opacity={1}
            transform="translateX(0)"
          >
            <Box
              bg="#8B4513"
              color="white"
              px={6}
              py={4}
              borderRadius="full"
              display="flex"
              alignItems="center"
              gap={3}
              cursor="pointer"
              onClick={() => setIsOpen(false)}
              _hover={{
                bg: "#654321",
                transform: "scale(1.05)",
              }}
              transition="all 0.2s ease-in-out"
              boxShadow="xl"
              minW="160px"
              border="2px solid"
              borderColor="transparent"
              _dark={{
                borderColor: "whiteAlpha.200",
                boxShadow: "dark-lg",
              }}
            >
              <Box as={FaTimes} fontSize="22px" />
              <Text fontWeight="bold" fontSize="md">
                Close
              </Text>
            </Box>
          </Box>
        </VStack>
      )}

      {/* Main Toggle Button */}
      <IconButton
        aria-label="Toggle social media menu"
        onClick={() => setIsOpen(!isOpen)}
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
          animation: isOpen ? "none" : "pulse 2s infinite",
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
        {isOpen ? <Box as={FaTimes} /> : <Box as={FaWhatsapp} />}
      </IconButton>
    </Box>
  );
};

export default FloatingSocial;
