import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion"; // Importing framer-motion for animations

// Reusable styles for nav links
const navLinkStyles = () => ({
  color: "white",
  position: "relative",
  fontSize: "xl",
  fontWeight: "bold",
  textAlign: "center",
  _hover: {
    textDecoration: "none",
    color: "#A2C4C9",
    _after: {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      height: "3px",
      width: "100%",
      background:
        "linear-gradient(90deg, #A2C4C9 0%, #A2C4C9 50%, transparent 50%)",
      backgroundSize: "200% 100%",
      backgroundPosition: "100% 0",
      transition: "background-position 0.4s ease-in-out",
    },
  },
  _after: {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    height: "3px",
    width: "100%",
    background:
      "linear-gradient(90deg, #A2C4C9 0%, #A2C4C9 50%, transparent 50%)",
    backgroundSize: "200% 100%",
    backgroundPosition: "0% 0",
    transition: "background-position 0.4s ease-in-out",
  },
  _hoverAfter: {
    backgroundPosition: "100% 0",
  },
});

const Navbar = ({ onGetStartedClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  // Scroll to Get Started section (hero-section)
  const scrollToGetStarted = () => {
    const section = document.getElementById("hero-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      as="nav"
      bg="#4D8B8C"
      w="100%"
      p={4}
      boxShadow="lg"
      position="fixed"
      top="0"
      zIndex="10"
    >
      <Flex align="center" justify="space-between">
        {/* Logo - Breathing and clickable */}
        <Box onClick={scrollToGetStarted} ml={4}>
          <img
            src="/logo.png"
            alt="Emspire Logo"
            style={{
              maxHeight: "50px",
              width: "auto",
              cursor: "pointer",
              animation: "breathing 3s ease-in-out infinite",
            }}
          />
        </Box>

        {/* Desktop Nav Links */}
        <HStack
          spacing={8}
          display={{ base: "none", md: "flex" }}
          justify="center"
          w="100%"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link as="button" onClick={handleHomeClick} {...navLinkStyles()}>
              Home
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="#services" {...navLinkStyles()}>
              Services
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="#portfolio" {...navLinkStyles()}>
              Portfolio
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="#contact" {...navLinkStyles()}>
              Contact
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button
              bg="#007D7E"
              color="white"
              _hover={{ bg: "#A2C4C9" }}
              onClick={onGetStartedClick}
              fontSize="xl"
              fontWeight="bold"
            >
              Get Started
            </Button>
          </motion.div>
        </HStack>

        {/* Mobile Hamburger Icon */}
        <IconButton
          icon={<HamburgerIcon />}
          onClick={toggleDrawer}
          variant="unstyled"
          color="white"
          aria-label="Open menu"
          display={{ base: "block", md: "none" }}
        />
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} onClose={toggleDrawer} placement="right">
        <DrawerOverlay />
        <DrawerContent bg="#4D8B8C">
          <DrawerCloseButton />
          <DrawerHeader color="white">Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link
                  as="button"
                  onClick={() => {
                    closeDrawer();
                    handleHomeClick();
                  }}
                  {...navLinkStyles()}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  href="#services"
                  onClick={closeDrawer}
                  {...navLinkStyles()}
                >
                  Services
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Link
                  href="#portfolio"
                  onClick={closeDrawer}
                  {...navLinkStyles()}
                >
                  Portfolio
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link
                  href="#contact"
                  onClick={closeDrawer}
                  {...navLinkStyles()}
                >
                  Contact
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <Button
                  bg="#007D7E"
                  color="white"
                  _hover={{ bg: "#A2C4C9" }}
                  onClick={() => {
                    closeDrawer();
                    onGetStartedClick();
                  }}
                  fontSize="xl"
                  fontWeight="bold"
                >
                  Get Started
                </Button>
              </motion.div>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* CSS breathing animation */}
      <style>
        {`
          @keyframes breathing {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </Box>
  );
};

export default Navbar;
