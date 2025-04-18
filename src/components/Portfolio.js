import React, { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  Heading,
  Badge,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import Lottie from "react-lottie"; // Import Lottie
import animationData from "../assets/lottie/Animation - 1744592426733.json"; // Correct relative path to Lottie JSON file

const portfolioData = [
  {
    image: "/1.jpg", // Corrected image path
    title: "Website Redesign",
    description:
      "A complete redesign of a small business website to improve UX/UI and increase user engagement.",
    technologies: ["React", "Chakra UI", "CSS"],
    link: "https://ewill123.github.io/emspire-business-card/",
    process:
      "We analyzed the existing site, conducted user research, and created wireframes. We focused on simplifying navigation, improving the UI, and making it mobile-responsive.",
  },
  {
    image: "/5.png", // Corrected image path
    title: "Digital Card",
    description:
      "Developed a Digital Card platform with a secure payment system and real-time inventory updates.",
    technologies: ["Node.js", "MongoDB", "Stripe API"],
    link: "#",
    process:
      "The project involved integrating a secure payment system with Stripe API. We also implemented real-time updates for card inventory using MongoDB and Node.js.",
  },
  {
    image: "/3.jpg", // Corrected image path
    title: "Mobile App for Fitness",
    description:
      "Created a mobile app that tracks user fitness progress and provides workout suggestions based on user goals.",
    technologies: ["Flutter", "Firebase", "Dart"],
    link: "",
    process:
      "The app uses Firebase for real-time data storage and user authentication. It tracks user progress and suggests workouts based on preferences stored in the app.",
  },
  {
    image: "/4.jpg", // Corrected image path
    title: "Blog Platform",
    description:
      "Developed a custom blog platform with features like post categorization, comment sections, and user authentication.",
    technologies: ["WordPress", "PHP", "MySQL"],
    link: "#",
    process:
      "I built a custom WordPress blog with features for categorizing posts, adding comments, and user authentication, ensuring the platform is scalable and secure.",
  },
];

const Portfolio = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  // Lottie animation settings
  const lottieOptions = {
    loop: true,
    autoplay: true, // Animation will autoplay
    animationData: animationData, // Path to your Lottie JSON animation
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box
      id="portfolio"
      py={16}
      bg="brand.deep"
      color="white"
      position="relative"
    >
      {/* Lottie Background Animation */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        zIndex="-1" // Ensure the animation stays behind the cards
      >
        <Lottie options={lottieOptions} height="100%" width="100%" />
      </Box>

      {/* Portfolio Section */}
      <Heading textAlign="center" mb={12} color="brand.aqua" fontSize="4xl">
        Our Portfolio
      </Heading>

      {/* Responsive Grid */}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)", // 1 card on small screens
          sm: "repeat(2, 1fr)", // 2 cards on small screens
          md: "repeat(3, 1fr)", // 3 cards on medium screens
        }}
        gap={6} // Adjusted gap between cards
        px={4}
        maxWidth="1200px"
        mx="auto"
      >
        {portfolioData.map((project, index) => (
          <GridItem
            key={index}
            bg="brand.dark"
            borderRadius="xl"
            boxShadow="xl"
            overflow="hidden"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease-in-out",
              bg: "brand.teal",
              cursor: "pointer", // Change cursor to pointer
            }}
            onClick={() => handleOpenModal(project)}
          >
            <Box position="relative">
              <Image
                src={project.image}
                alt={project.title}
                objectFit="cover"
                height="300px" // Set fixed height to keep card layout intact
                width="100%"
                opacity="0.7" // Slightly higher opacity for better text visibility
              />
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textAlign="center"
                color="white"
                px={4}
                py={6} // Add padding to give space around the text
                bg="rgba(0, 0, 0, 0.6)" // Add a semi-transparent black background
                borderRadius="lg" // Optional: Add rounded corners to the background
              >
                <Heading
                  size="md"
                  mb={4}
                  fontSize={{ base: "lg", md: "xl" }} // Make title responsive
                >
                  {project.title}
                </Heading>
                <Text
                  mb={4}
                  fontSize={{ base: "sm", md: "md" }} // Make description font size responsive
                >
                  {project.description}
                </Text>
                <Box
                  mb={4}
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="center"
                >
                  {project.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      colorScheme="teal"
                      mr={2}
                      mb={2}
                      fontSize={{ base: "xs", sm: "sm" }} // Adjust badge font size for mobile
                    >
                      {tech}
                    </Badge>
                  ))}
                </Box>

                {/* "Click to View" Text */}
                <Text
                  color="brand.aqua"
                  fontWeight="bold"
                  _hover={{ textDecoration: "underline" }}
                  fontSize={{ base: "sm", md: "md" }} // Responsive font size for "Click to View"
                >
                  Click to View
                </Text>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>

      {/* Modal for Project Details */}
      {selectedProject && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedProject.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text mb={4}>{selectedProject.process}</Text>
              <Text fontSize="sm">Technologies used:</Text>
              <Box mt={2}>
                {selectedProject.technologies.map((tech, i) => (
                  <Badge key={i} colorScheme="teal" mr={2}>
                    {tech}
                  </Badge>
                ))}
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="teal" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Portfolio;
