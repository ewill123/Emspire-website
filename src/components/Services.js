import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  Grid,
  GridItem,
  Tooltip,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Avatar,
  VStack,
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
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import motion
import {
  FaTools,
  FaRegHandshake,
  FaChartLine,
  FaBullhorn,
} from "react-icons/fa";

const servicesWithTestimonials = [
  {
    title: "Web Development",
    icon: FaTools,
    description: "Build modern and scalable websites.",
    moreInfo:
      "We offer cutting-edge web development services including front-end, back-end, and full-stack solutions.",
    testimonial: {
      name: "John Doe",
      photo: "https://via.placeholder.com/150",
      quote:
        "The best web development team I’ve worked with. Highly recommend!",
    },
  },
  {
    title: "Consulting",
    icon: FaRegHandshake,
    description: "Provide expert guidance and strategies.",
    moreInfo:
      "Our consulting services help you develop efficient strategies for your business.",
    testimonial: {
      name: "Jane Smith",
      photo: "https://via.placeholder.com/150",
      quote: "Their advice transformed our business. A great investment!",
    },
  },
  {
    title: "Digital Marketing",
    icon: FaBullhorn,
    description: "Grow your business online with effective marketing.",
    moreInfo:
      "Our digital marketing strategies help you reach the right audience and grow your online presence.",
    testimonial: {
      name: "Mary Johnson",
      photo: "https://via.placeholder.com/150",
      quote: "A fantastic marketing team that delivers results!",
    },
  },
  {
    title: "SEO Services",
    icon: FaChartLine,
    description: "Improve your website's visibility on search engines.",
    moreInfo:
      "Our SEO services help you rank higher in search results and attract more visitors.",
    testimonial: {
      name: "James Williams",
      photo: "https://via.placeholder.com/150",
      quote:
        "Their SEO strategy took us to the top of Google search results. Incredible!",
    },
  },
];

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });
  const [formError, setFormError] = useState("");

  const handleOpenModal = (serviceTitle) => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <Box id="services" py={{ base: 8, md: 16 }} bg="brand.deep" color="white">
      <Heading as="h2" size="xl" textAlign="center" mb={12} color="brand.aqua">
        Our Services
      </Heading>

      <Grid
        templateColumns={{
          base: "1fr", // Single column on small screens
          md: "1fr 1fr", // Two columns on medium screens
          lg: "1fr 1fr", // Two columns on large screens
          xl: "1fr 1fr", // Two columns on extra-large screens
        }}
        gap={10}
        px={{ base: 4, md: 8 }}
        maxW="7xl"
        mx="auto"
      >
        {servicesWithTestimonials.map((service, index) => (
          <React.Fragment key={index}>
            <GridItem colSpan={{ base: 1, md: 1 }}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  bg="brand.dark"
                  p={6}
                  borderRadius="lg"
                  boxShadow="lg"
                  textAlign="center"
                >
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
                    w={{ base: "100%", md: "auto" }}
                  >
                    Contact Us
                  </Button>
                </Box>
              </motion.div>
            </GridItem>

            <GridItem colSpan={{ base: 1, md: 1 }}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Box
                  mt={6}
                  p={6}
                  bg="brand.teal"
                  borderRadius="xl"
                  textAlign="center"
                  boxShadow="xl"
                  color="white"
                >
                  <VStack spacing={4}>
                    <Avatar
                      src={service.testimonial.photo || ""}
                      name={service.testimonial.name}
                      size={{ base: "lg", md: "xl" }}
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
                </Box>
              </motion.div>
            </GridItem>
          </React.Fragment>
        ))}
      </Grid>

      {/* Modal Form */}
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent maxW={{ base: "100%", md: "lg" }}>
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
