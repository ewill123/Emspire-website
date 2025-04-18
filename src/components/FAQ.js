import React from "react";
import {
  Box,
  Text,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const FAQ = () => {
  return (
    <Box maxW="7xl" mx="auto" py={10} px={5}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>
        Frequently Asked Questions
      </Heading>

      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What services does Emspire offer?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Emspire offers a wide range of services including software
            development, website building, digital business card creation, video
            editing, graphic design, and light engineering.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How can I request a project or service from Emspire?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            You can simply reach out to us via the contact page on our website,
            fill in your details, and our team will get back to you with a
            customized proposal.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What is the turnaround time for a project?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            The turnaround time varies depending on the complexity of the
            project. We aim to deliver all services in a timely manner while
            maintaining quality. You will receive a timeline estimate upon
            request.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Do you offer custom digital business cards?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes, we specialize in creating custom digital business cards
            tailored to your branding and personal preferences. You can contact
            us for customization details.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FAQ;
