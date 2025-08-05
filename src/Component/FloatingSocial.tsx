/**
 * FloatingSocial Component
 *
 * A floating social media menu that appears as a fixed button on the bottom-right
 * corner of the screen. When clicked, it expands to show various social media
 * and contact options for Seven Serenity Safaris.
 *
 * Features:
 * - Compact floating design that doesn't interfere with main content
 * - Click-outside functionality to automatically close the menu
 * - Smooth animations and hover effects
 * - Direct links to WhatsApp, Instagram, X (Twitter), LinkedIn, YouTube
 * - Contact options for phone and email
 * - Responsive design with appropriate sizing
 */

import { Box, IconButton, Text, VStack } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
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
  // State to control whether the social menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Ref to track the container element for click-outside detection
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Effect to handle clicking outside the component
   * Automatically closes the menu when user clicks anywhere else on the page
   */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Only add event listener when menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on unmount or when menu closes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  /**
   * Handler Functions for Social Media and Contact Actions
   * Each function opens the respective platform or initiates contact
   */

  // Opens WhatsApp with pre-filled message for safari inquiries
  const handleWhatsApp = () => {
    try {
      const message =
        "Hello! I'm interested in your safari tours. Can you provide more information?";
      const phoneNumber = "255767728749";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;
      console.log("Opening WhatsApp:", whatsappUrl);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
    }
  };

  // Opens Seven Serenity Safaris Instagram page
  const handleInstagram = () => {
    try {
      const webUrl = "https://www.instagram.com/sevenserenitysafaris/";
      console.log("Opening Instagram:", webUrl);
      window.open(webUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error opening Instagram:", error);
    }
  };

  // Opens Seven Serenity Safaris X (Twitter) page
  const handleTwitter = () => {
    try {
      const webUrl = "https://x.com/SevenSafaris";
      console.log("Opening X (Twitter):", webUrl);
      window.open(webUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error opening X (Twitter):", error);
    }
  };

  // Opens Seven Serenity Safaris LinkedIn page
  const handleLinkedIn = () => {
    try {
      const webUrl = "https://www.linkedin.com/in/seven-serenity-safaris/";
      console.log("Opening LinkedIn:", webUrl);
      window.open(webUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error opening LinkedIn:", error);
    }
  };

  // Opens Seven Serenity Safaris YouTube channel
  const handleYouTube = () => {
    try {
      const webUrl = "https://www.youtube.com/@SevenSerenitySafaris";
      console.log("Opening YouTube:", webUrl);
      window.open(webUrl, "_blank", "noopener,noreferrer");
    } catch (error) {
      console.error("Error opening YouTube:", error);
    }
  };

  // Initiates phone call to Seven Serenity Safaris
  const handleCall = () => {
    try {
      const tel = "tel:+255679728749";
      console.log("Initiating call:", tel);
      window.location.href = tel;
    } catch (error) {
      console.error("Error initiating call:", error);
    }
  };

  // Opens default email client with Seven Serenity Safaris email
  const handleEmail = () => {
    try {
      const email = "mailto:info@sevenserenity.com";
      console.log("Opening email:", email);
      window.location.href = email;
    } catch (error) {
      console.error("Error opening email:", error);
    }
  };

  /**
   * Configuration for all social media and contact buttons
   * Each button includes icon, label, colors, and click handler
   * Colors match the official brand colors of each platform
   */
  const socialButtons = [
    {
      icon: FaWhatsapp,
      label: "WhatsApp Us",
      bg: "#25D366", // WhatsApp green
      hoverBg: "#128C7E",
      onClick: handleWhatsApp,
      textColor: "white",
    },
    {
      icon: FaInstagram,
      label: "Follow us!",
      bg: "#E4405F", // Instagram pink/red
      hoverBg: "#C13584",
      onClick: handleInstagram,
      textColor: "white",
    },
    {
      icon: FaTwitter,
      label: "Follow on X",
      bg: "#000000", // X (Twitter) black
      hoverBg: "#333333",
      onClick: handleTwitter,
      textColor: "white",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      bg: "#0077B5", // LinkedIn blue
      hoverBg: "#005885",
      onClick: handleLinkedIn,
      textColor: "white",
    },
    {
      icon: FaYoutube,
      label: "YouTube",
      bg: "#FF0000", // YouTube red
      hoverBg: "#CC0000",
      onClick: handleYouTube,
      textColor: "white",
    },
    {
      icon: FaPhone,
      label: "Call Us",
      bg: "#8B4513", // Safari brown theme
      hoverBg: "#654321",
      onClick: handleCall,
      textColor: "white",
    },
    {
      icon: FaEnvelope,
      label: "Email Us",
      bg: "#D2B48C", // Light brown for email
      hoverBg: "#DEB887",
      onClick: handleEmail,
      textColor: "#8B4513",
    },
  ];

  return (
    <Box
      ref={containerRef}
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
                px={2}
                py={1.5}
                borderRadius="full"
                display="flex"
                alignItems="center"
                gap={1.5}
                cursor="pointer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log(`Clicked ${button.label}`);
                  button.onClick();
                  // Keep the menu open after clicking a social media button
                }}
                _hover={{
                  bg: button.hoverBg,
                  transform: "scale(1.05)",
                }}
                _active={{
                  transform: "scale(0.95)",
                }}
                transition="all 0.2s ease-in-out"
                boxShadow="sm"
                minW="100px"
                border="1px solid"
                borderColor="transparent"
                _dark={{
                  borderColor: "whiteAlpha.200",
                  boxShadow: "dark-lg",
                }}
              >
                <Box as={button.icon} fontSize="14px" />
                <Text fontWeight="medium" fontSize="xs">
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
              px={2}
              py={1.5}
              borderRadius="full"
              display="flex"
              alignItems="center"
              gap={1.5}
              cursor="pointer"
              onClick={() => setIsOpen(false)}
              _hover={{
                bg: "#654321",
                transform: "scale(1.05)",
              }}
              transition="all 0.2s ease-in-out"
              boxShadow="sm"
              minW="100px"
              border="1px solid"
              borderColor="transparent"
              _dark={{
                borderColor: "whiteAlpha.200",
                boxShadow: "dark-lg",
              }}
            >
              <Box as={FaTimes} fontSize="14px" />
              <Text fontWeight="medium" fontSize="xs">
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
        size="sm"
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
        boxShadow="sm"
        transition="all 0.2s ease-in-out"
        w="40px"
        h="40px"
        fontSize="16px"
        css={{
          animation: isOpen ? "none" : "pulse 2s infinite",
          "@keyframes pulse": {
            "0%": {
              transform: "scale(1)",
              boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)",
            },
            "70%": {
              transform: "scale(1.05)",
              boxShadow: "0 0 0 6px rgba(37, 211, 102, 0)",
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
