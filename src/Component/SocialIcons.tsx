// components/SocialIcons.tsx
import { HStack, IconButton, Link } from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => (
  <HStack spaceX={2} mt={2}>
    <Link href="https://wa.me/255123456789">
      <IconButton aria-label="WhatsApp" colorScheme="whatsapp" rounded="full">
        <FaWhatsapp />
      </IconButton>
    </Link>
    <Link href="https://instagram.com">
      <IconButton aria-label="Instagram" colorScheme="pink" rounded="full">
        <FaInstagram />
      </IconButton>
    </Link>
    <Link href="https://twitter.com">
      <IconButton aria-label="Twitter" colorScheme="twitter" rounded="full">
        <FaTwitter />
      </IconButton>
    </Link>
    <Link href="https://linkedin.com">
      <IconButton aria-label="LinkedIn" colorScheme="linkedin" rounded="full">
        <FaLinkedin />
      </IconButton>
    </Link>
  </HStack>
);

export default SocialIcons;
