import React, { useState } from "react";
import Lottie from "lottie-react";
import contactAnim from "../assets/lottie/contact-animation.json";
import emailjs from "emailjs-com";
import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  VStack,
  Fade,
  IconButton,
  Link,
  Grid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaFacebook, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // Adding loading state
  const toast = useToast();

  // Form data change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Email validation regex
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Check if all fields are filled
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true); // Start loading state

    // Send email via EmailJS
    emailjs
      .send(
        "service_vg2n7nq", // Service ID
        "template_hw368kw", // Template ID
        { name, email, message }, // Form data
        "8qP50PABfvecD9rGQ" // Public key
      )
      .then(() => {
        toast({
          title: "Message Sent",
          description: "We will get back to you soon.",
          status: "success",
          duration: 4000,
          isClosable: true,
          icon: <CheckCircleIcon />,
        });

        setFormData({ name: "", email: "", message: "" }); // Reset form data
        setIsSubmitting(false); // Reset loading state
      })
      .catch((error) => {
        console.error("EmailJS Error:", error?.text || error);
        toast({
          title: "Error",
          description: "Something went wrong. Please try again later.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        setIsSubmitting(false); // Reset loading state
      });
  };

  return (
    <Box
      id="contact"
      py={16}
      bg="brand.deep"
      color="white"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={-1}
        opacity={0.2}
        overflow="hidden"
      >
        <Lottie
          animationData={contactAnim}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      <Fade in={true} delay={0.2}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr" }}
          gap={8}
          maxWidth="1200px"
          margin="auto"
          padding="6"
        >
          <VStack
            spacing={6}
            bg="brand.dark"
            borderRadius="lg"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            padding="8"
            transition="all 0.3s ease-in-out"
            _hover={{ boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)" }}
            width="600px"
            height="auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Lottie Animation */}
              <Box display="flex" justifyContent="center" mb={2}>
                <Lottie
                  animationData={contactAnim}
                  loop
                  style={{ width: 200 }}
                />
              </Box>

              <Heading textAlign="center" mb={6} color="brand.aqua">
                Get In Touch
              </Heading>

              <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    bg="white"
                    color="black"
                    _focus={{ borderColor: "brand.teal" }}
                    mb={4}
                    _hover={{ borderColor: "brand.aqua" }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    bg="white"
                    color="black"
                    _focus={{ borderColor: "brand.teal" }}
                    mb={4}
                    _hover={{ borderColor: "brand.aqua" }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    bg="white"
                    color="black"
                    _focus={{ borderColor: "brand.teal" }}
                    mb={6}
                    _hover={{ borderColor: "brand.aqua" }}
                    rows={6}
                  />
                </FormControl>

                <Button
                  type="submit"
                  bg="brand.teal"
                  color="white"
                  size="lg"
                  width="full"
                  _hover={{ bg: "brand.aqua" }}
                  mb={4}
                  isLoading={isSubmitting} // Chakra UI's isLoading property
                  loadingText="Sending..."
                >
                  Send Message
                </Button>
              </form>

              {/* Socials */}
              <Box mt={6} textAlign="center">
                <Heading size="md" color="brand.aqua" mb={4}>
                  Follow Us
                </Heading>
                <Box
                  display="flex"
                  justifyContent="center"
                  flexWrap="wrap"
                  gap={4}
                >
                  {[
                    {
                      href: "https://www.facebook.com/emmanuel.cheeseman.5",
                      icon: <FaFacebook />,
                      bg: "#1877F2",
                      hover: "#3b5998",
                    },
                    {
                      href: "https://www.tiktok.com/notfound",
                      icon: <FaTiktok />,
                      bg: "#000000",
                      hover: "#000000",
                    },
                    {
                      href: "https://www.instagram.com/chees.eman1/",
                      icon: <FaInstagram />,
                      bg: "#E1306C",
                      hover: "#C13584",
                    },
                    {
                      href: "https://x.com/EmmanuelCh39270",
                      icon: <FaTwitter />,
                      bg: "#1DA1F2",
                      hover: "#1DA1F2",
                    },
                  ].map((social, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Link href={social.href} isExternal>
                        <IconButton
                          icon={social.icon}
                          bg={social.bg}
                          borderRadius="full"
                          size="lg"
                          _hover={{ bg: social.hover }}
                          aria-label="Social Icon"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </Box>
              </Box>

              {/* QR Section */}
              <Box
                mt={8}
                textAlign="center"
                bg="brand.dark"
                padding={6}
                borderRadius="lg"
                boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Heading size="md" color="brand.aqua" mb={4}>
                  Scan or Click My Digital Business Card
                </Heading>
                <Link
                  href="https://ewill123.github.io/emspire-business-card/"
                  isExternal
                >
                  <Box
                    border="2px solid #00b3b3"
                    borderRadius="8px"
                    padding="16px"
                  >
                    <img
                      src="QR.png"
                      alt="QR Code"
                      style={{
                        width: "256px",
                        height: "256px",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>
                </Link>
              </Box>
            </motion.div>
          </VStack>
        </Grid>
      </Fade>
    </Box>
  );
};

export default Contact;
