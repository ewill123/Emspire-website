import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Lottie from "react-lottie";
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
import Cursor from "./components/Cursor";
import emailjs from "emailjs-com"; // Import Email.js

// Lottie animation imports
import animationData from "./assets/lottie/Animation - 1744592426733.json";
import animationData2 from "./assets/lottie/Animation - 1744592426733.json";
import animationData3 from "./assets/lottie/Animation - 1744592426733.json";
import animationData4 from "./assets/lottie/lottie.json";

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

  const [positions, setPositions] = useState([
    { top: 0, left: 0, interval: 5000 },
    { top: 0, left: 0, interval: 7000 },
    { top: 0, left: 0, interval: 9000 },
    { top: 0, left: 0, interval: 11000 },
  ]);

  const lottieAnimations = [
    animationData,
    animationData2,
    animationData3,
    animationData4,
  ];

  // Move Lotties at different intervals
  useEffect(() => {
    const moveLotties = () => {
      setPositions((prevPositions) =>
        prevPositions.map((pos) => ({
          ...pos,
          top: Math.floor(Math.random() * window.innerHeight),
          left: Math.floor(Math.random() * window.innerWidth),
        }))
      );
    };

    const intervals = positions.map(
      (pos, index) =>
        setInterval(() => {
          moveLotties();
        }, pos.interval + index * 2000) // Stagger movement by an additional 2 seconds per animation
    );

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [positions]);

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

  const lottieOptions = (animationData, className) => ({
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: className,
    },
  });

  return (
    <Box position="relative" minHeight="100vh" bg="brand.dark" color="white">
      <Cursor />

      {/* Floating Lottie animations across the entire app */}
      {positions.map((position, index) => (
        <Box
          key={index} // Use the index as the key
          position="absolute"
          top={`${position.top}px`}
          left={`${position.left}px`}
          width="150px"
          zIndex="2" // Ensure Lottie is above the content
          pointerEvents="none"
          transition="all 2s ease-in-out"
        >
          <Lottie
            options={lottieOptions(
              lottieAnimations[index],
              `lottie-anim${index + 1}`
            )}
            height="150px"
            width="150px"
          />
        </Box>
      ))}

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
              zIndex="-2" // Ensure video is behind Lottie
              filter="brightness(0.6)"
            >
              <source src="/background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </Box>

            {/* 🔥 Lottie blurred glow effect */}
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              bgGradient="linear(to-r, brand.deep, brand.teal, brand.aqua)"
              opacity="0.3"
              filter="blur(90px)"
              zIndex="-1"
            />

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
          <Button
            variant="link"
            color="white"
            href="https://twitter.com"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </Button>
          <Button
            variant="link"
            color="white"
            href="https://facebook.com"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </Button>
          <Button
            variant="link"
            color="white"
            href="https://linkedin.com"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </Button>
        </Box>

        {/* Social Media Links */}
        <Box display="flex" justifyContent="center" gap="4" mb="4">
          <Button
            variant="link"
            color="white"
            href="https://twitter.com"
            target="_blank"
            fontSize="xl"
            _hover={{ color: "brand.aqua" }}
          >
            <i className="fab fa-twitter"></i>
          </Button>
          <Button
            variant="link"
            color="white"
            href="https://facebook.com"
            target="_blank"
            fontSize="xl"
            _hover={{ color: "brand.aqua" }}
          >
            <i className="fab fa-facebook"></i>
          </Button>
          <Button
            variant="link"
            color="white"
            href="https://linkedin.com"
            target="_blank"
            fontSize="xl"
            _hover={{ color: "brand.aqua" }}
          >
            <i className="fab fa-linkedin"></i>
          </Button>
          <Button
            variant="link"
            color="white"
            href="https://instagram.com"
            target="_blank"
            fontSize="xl"
            _hover={{ color: "brand.aqua" }}
          >
            <i className="fab fa-instagram"></i>
          </Button>
        </Box>

        {/* Footer Navigation */}
        <Box display="flex" justifyContent="center" gap="8" mb="4">
          <Button
            variant="link"
            color="white"
            fontSize="sm"
            _hover={{ color: "brand.aqua" }}
          >
            Privacy Policy
          </Button>
          <Button
            variant="link"
            color="white"
            fontSize="sm"
            _hover={{ color: "brand.aqua" }}
          >
            Terms of Service
          </Button>
          <Button
            variant="link"
            color="white"
            fontSize="sm"
            _hover={{ color: "brand.aqua" }}
          >
            FAQ
          </Button>
        </Box>

        {/* Contact Info */}
        <Box mb="4">
          <Text fontSize="sm" fontWeight="medium">
            Contact Us:{" "}
            <a href="mailto:info@emspire.com" style={{ color: "white" }}></a>
          </Text>
        </Box>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
        closeOnOverlayClick={false}
        motionPreset="none"
      >
        <ModalOverlay />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <ModalContent
            bg="white"
            color="black"
            p="6"
            borderRadius="8px"
            boxShadow="lg"
          >
            <ModalHeader>Get In Touch</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <VStack spacing="4">
                  <FormControl isRequired>
                    <FormLabel>Your Name</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      backgroundColor="white"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Your Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      backgroundColor="white"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Your Phone Number (optional)</FormLabel>
                    <Input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      backgroundColor="white"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Select Your Service</FormLabel>
                    <Select
                      name="services"
                      value={formData.services}
                      onChange={handleServiceChange}
                      placeholder="Select a service"
                      backgroundColor="white"
                    >
                      <option value="businessCard">Business Card Design</option>
                      <option value="websiteDesign">Website Design</option>
                      <option value="branding">Branding</option>
                    </Select>
                  </FormControl>

                  {getFormFields()}

                  <Button
                    type="submit"
                    colorScheme="teal"
                    size="lg"
                    width="full"
                    mt="4"
                  >
                    Submit Request
                  </Button>
                </VStack>
              </form>
            </ModalBody>
          </ModalContent>
        </motion.div>
      </Modal>
    </Box>
  );
}

export default App;
