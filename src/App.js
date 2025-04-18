import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  Box,
  Button,
  Text,
  VStack,
  Heading,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import emailjs from "emailjs-com"; // Import Email.js

function App() {
  const [loading, setLoading] = useState(true); // State for splash screen
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    logo: null,
    services: "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const headingFontSize = useBreakpointValue({
    base: "4xl",
    md: "5xl",
    lg: "6xl",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, logo: file });
  };

  const handleServiceChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, services: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Email.js service to send the form data
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      services: formData.services,
    };

    try {
      await emailjs.send(
        "service_vg2n7nq", // Your EmailJS service ID
        "template_gn9pstl", // Your EmailJS template ID
        templateParams,
        "8qP50PABfvecD9rGQ" // Your EmailJS public key
      );

      toast({
        title: "Request Sent!",
        description: "We’ll be in touch shortly.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        logo: null,
        services: "",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your request.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const getFormFields = () => {
    switch (formData.services) {
      case "businessCard":
        return (
          <>
            <FormControl isRequired>
              <FormLabel>
                Tell us about your vision for the business card
              </FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your instructions"
                backgroundColor="white"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Upload Your Logo (optional)</FormLabel>
              <Input type="file" name="logo" onChange={handleFileUpload} />
            </FormControl>
          </>
        );
      case "websiteDesign":
        return (
          <FormControl isRequired>
            <FormLabel>What type of website are you looking for?</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter website details"
              backgroundColor="white"
            />
          </FormControl>
        );
      case "branding":
        return (
          <FormControl isRequired>
            <FormLabel>Describe your branding and logo design needs</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter branding instructions"
              backgroundColor="white"
            />
          </FormControl>
        );
      default:
        return null;
    }
  };

  return (
    <Box position="relative" minHeight="100vh" bg="brand.dark" color="white">
      <AnimatePresence mode="wait">
        <motion.div
          key="main"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Navbar onGetStartedClick={onOpen} />

          <Box
            as={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            minHeight="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="relative"
            overflow="hidden"
            pt="100px"
            zIndex="1"
          >
            {/* 🔥 Video background */}
            <Box
              as="video"
              autoPlay
              loop
              muted
              playsInline
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              objectFit="cover"
              zIndex="-2" // Ensure video is behind content
              filter="brightness(0.6)"
            >
              <source src="/background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Box>

            <VStack textAlign="center" spacing={6} maxWidth="900px">
              <Heading
                fontSize={headingFontSize}
                fontFamily="'Kiosk', sans-serif"
                fontWeight="700"
                letterSpacing="1px"
                textTransform="uppercase"
                lineHeight="1.2"
              >
                Empowering Tomorrow, Building Today
              </Heading>
              <Text
                fontSize="lg"
                fontWeight="medium"
                color="gray.300"
                maxWidth="800px"
                mx="auto"
                lineHeight="1.6"
              >
                At Emspire, we bring your vision to life through innovative
                software, design, and engineering.
              </Text>
              <Button
                onClick={onOpen}
                bg="brand.teal"
                _hover={{
                  bg: "brand.aqua",
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                }}
                size="lg"
                color="white"
                fontWeight="bold"
                letterSpacing="1px"
                transition="all 0.3s ease"
              >
                Get Started
              </Button>
            </VStack>
          </Box>
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Services />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Portfolio />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Contact id="contact-section" />
      </motion.div>

      {/* Footer Section */}
      <Box
        as="footer"
        bg="brand.deep"
        color="white"
        py="6"
        textAlign="center"
        mt="auto"
      >
        <Text fontSize="sm">&copy; {new Date().getFullYear()} Emspire</Text>
        <Box mt="2">
          <FontAwesomeIcon icon={faTwitter} size="lg" />
          <FontAwesomeIcon icon={faFacebook} size="lg" ml="4" />
          <FontAwesomeIcon icon={faLinkedin} size="lg" ml="4" />
        </Box>
      </Box>

      {/* Contact Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Us</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Your Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  backgroundColor="white"
                />
              </FormControl>
              <FormControl isRequired mt={4}>
                <FormLabel>Email Address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  backgroundColor="white"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Phone Number (optional)</FormLabel>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  backgroundColor="white"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Services Needed</FormLabel>
                <Select
                  name="services"
                  value={formData.services}
                  onChange={handleServiceChange}
                  backgroundColor="white"
                >
                  <option value="">Select a service</option>
                  <option value="businessCard">Business Card</option>
                  <option value="websiteDesign">Website Design</option>
                  <option value="branding">Branding</option>
                </Select>
              </FormControl>

              {getFormFields()}

              <Button
                type="submit"
                mt={6}
                colorScheme="teal"
                size="lg"
                width="full"
              >
                Send Message
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default App;
