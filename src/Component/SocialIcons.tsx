// components/SocialIcons.tsx
import { HStack, IconButton, Link } from "@chakra-ui/react";
import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const SocialIcons = () => (
  <HStack spaceX={1} mt={2}>
    <Link href="https://wa.me/255767728749">
      <IconButton
        aria-label="WhatsApp"
        colorScheme="whatsapp"
        rounded="full"
        size="xs"
      >
        <FaWhatsapp />
      </IconButton>
    </Link>
    <Link href="https://www.instagram.com/sevenserenitysafaris/">
      <IconButton
        aria-label="Instagram"
        colorScheme="pink"
        rounded="full"
        size="xs"
      >
        <FaInstagram />
      </IconButton>
    </Link>
    <Link href="https://x.com/SevenSafaris">
      <IconButton
        aria-label="X (Twitter)"
        colorScheme="gray"
        rounded="full"
        size="xs"
        bg="black"
        color="white"
        _hover={{ bg: "gray.800" }}
      >
        <FaTwitter />
      </IconButton>
    </Link>
    <Link href="https://www.linkedin.com/in/seven-serenity-safaris/">
      <IconButton
        aria-label="LinkedIn"
        colorScheme="linkedin"
        rounded="full"
        size="xs"
      >
        <FaLinkedin />
      </IconButton>
    </Link>
    <Link href="https://www.youtube.com/@SevenSerenitySafaris">
      <IconButton
        aria-label="YouTube"
        colorScheme="red"
        rounded="full"
        size="xs"
      >
        <FaYoutube />
      </IconButton>
    </Link>
  </HStack>
);

export default SocialIcons;
