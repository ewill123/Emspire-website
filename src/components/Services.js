// Services.js
import emailjs from "emailjs-com";
import React, { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Heading,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tooltip,
  useBreakpointValue,
  Avatar,
  VStack,
  Button,
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
  useToast,
} from "@chakra-ui/react";
import { FaCode, FaPaintBrush, FaVideo, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionGridItem = motion.create(GridItem);
const MotionBox = motion.create(Box);

const servicesWithTestimonials = [
  {
    icon: FaCode,
    title: "Software Development",
    description:
      "We create custom software solutions tailored to your needs, ensuring scalability and efficiency.",
    moreInfo:
      "We specialize in full-stack development using modern technologies like React, Node.js, and Firebase.",
    testimonial: {
      quote: "Their software development skills are top-notch!",
      name: "John Doe, CEO of TechCorp",
      photo: "",
    },
  },
  {
    icon: FaPaintBrush,
    title: "Graphic Design",
    description:
      "Our designers craft stunning visual experiences that represent your brand with creativity and style.",
    moreInfo:
      "From logos to full brand kits, we ensure your brand looks professional and unique.",
    testimonial: {
      quote: "Their designs truly captured our brand identity!",
      name: "Alice Brown, Brand Manager",
      photo: "",
    },
  },
  {
    icon: FaVideo,
    title: "Video Editing",
    description:
      "We provide professional video editing services to bring your content to life with creativity and precision.",
    moreInfo:
      "We edit promos, vlogs, documentaries, and more with cinematic quality.",
    testimonial: {
      quote: "The video editing team brought our content to life!",
      name: "Jane Smith, Content Creator",
      photo: "",
    },
  },
  {
    icon: FaTools,
    title: "Light Engineering",
    description:
      "Our engineers provide innovative solutions, building tools and devices that enhance your workflow.",
    moreInfo:
      "We build custom hardware solutions using precise digital engineering and prototyping techniques.",
    testimonial: {
      quote: "They built exactly what we needed. Reliable and efficient!",
      name: "Michael Green, Engineer",
      photo: "",
    },
  },
];

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  services: "",
  message: "",
};

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormState);
  const [formError, setFormError] = useState("");
  const cardPadding = useBreakpointValue({ base: 4, md: 6 });
  const toast = useToast();

  const handleOpenModal = (selectedService) => {
    setFormError("");
    setFormData({ ...initialFormState, services: selectedService });
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setFormData(initialFormState);
    setFormError("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, services, message } = formData;
    if (!name || !email || !services || !message) {
      setFormError("All required fields must be filled.");
      return false;
    }
    setFormError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const templateParams = {
      ...formData,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_vg2n7nq",
        "template_gn9pstl",
        templateParams,
        "8qP50PABfvecD9rGQ"
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description: "We'll get back to you shortly.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });

          setTimeout(() => {
            handleCloseModal();
          }, 500); // Add delay for smooth UX
        },
        (err) => {
          console.error("FAILED...", err);
          setFormError("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <Box id="services" py={16} bg="brand.deep" color="white">
      <Heading as="h2" size="xl" textAlign="center" mb={12} color="brand.aqua">
        Our Services
      </Heading>

      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={10}
        px={{ base: 4, md: 8 }}
        maxW="7xl"
        mx="auto"
      >
        {servicesWithTestimonials.map((service, index) => (
          <React.Fragment key={index}>
            <MotionGridItem
              bg="brand.dark"
              p={cardPadding}
              borderRadius="lg"
              boxShadow="lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Box textAlign="center">
                <Tooltip label={service.title} hasArrow>
                  <Icon
                    as={service.icon}
                    boxSize={12}
                    mb={4}
                    color="brand.aqua"
                    _hover={{
                      color: "brand.teal",
                      transform: "scale(1.1)",
                      transition: "all 0.3s ease",
                    }}
                  />
                </Tooltip>

                <Heading size="md" mb={4} fontWeight="bold">
                  {service.title}
                </Heading>

                <Text color="gray.200">{service.description}</Text>
                <Text fontWeight="bold" color="gray.300" mt={2}>
                  Contact us for pricing
                </Text>

                <Accordion allowToggle mt={4}>
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Learn More
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Text>{service.moreInfo}</Text>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                <Button
                  mt={4}
                  bg="brand.teal"
                  color="white"
                  onClick={() => handleOpenModal(service.title)}
                  _hover={{
                    bg: "brand.aqua",
                    transform: "scale(1.05)",
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                  }}
                >
                  Contact Us
                </Button>
              </Box>
            </MotionGridItem>

            <MotionBox
              mt={6}
              p={6}
              bg="brand.teal"
              borderRadius="xl"
              textAlign="center"
              boxShadow="xl"
              color="white"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <VStack spacing={4}>
                <Avatar
                  src={service.testimonial.photo || ""}
                  name={service.testimonial.name}
                  size="xl"
                  border="2px solid"
                  borderColor="white"
                />
                <Text fontStyle="italic" fontSize="md">
                  "{service.testimonial.quote}"
                </Text>
                <Text fontWeight="bold" fontSize="sm">
                  - {service.testimonial.name}
                </Text>
              </VStack>
            </MotionBox>
          </React.Fragment>
        ))}
      </Grid>

      {/* Modal Form */}
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Us</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              {formError && (
                <Text color="red.500" mb={4}>
                  {formError}
                </Text>
              )}

              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  bg="white"
                  color="black"
                />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  bg="white"
                  color="black"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Phone (optional)</FormLabel>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  bg="white"
                  color="black"
                />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Services</FormLabel>
                <Select
                  name="services"
                  value={formData.services}
                  onChange={handleInputChange}
                  placeholder="Select a service"
                  bg="white"
                  color="black"
                >
                  {servicesWithTestimonials.map((service, idx) => (
                    <option key={idx} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message"
                  bg="white"
                  color="black"
                />
              </FormControl>

              <Button
                type="submit"
                bg="brand.teal"
                _hover={{
                  bg: "brand.aqua",
                  transform: "scale(1.05)",
                  boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
                }}
                color="white"
                mt={4}
                w="100%"
                fontWeight="bold"
              >
                Send Message
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Services;
