import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const TermsOfReference = () => {
  return (
    <Box maxW="7xl" mx="auto" py={10} px={5}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>
        Terms of Reference
      </Heading>

      <Text fontSize="lg" mb={4}>
        These Terms of Reference (ToR) govern the services provided by Emspire.
        Please read them carefully before engaging with our services.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        1. Scope of Services
      </Heading>
      <Text mb={4}>
        Emspire offers a variety of services, including but not limited to
        software development, website design, digital business card creation,
        video editing, graphic design, and light engineering. All services are
        delivered based on client requirements and specifications.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        2. Client Responsibilities
      </Heading>
      <Text mb={4}>
        The client is responsible for providing all necessary content,
        information, and specifications needed for project completion. Emspire
        is not responsible for delays due to incomplete or unclear information
        provided by the client.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        3. Payment Terms
      </Heading>
      <Text mb={4}>
        All services require a signed agreement and a deposit before work
        begins. Payment terms will be outlined in the service agreement provided
        to the client. Final payment is due upon project completion.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        4. Confidentiality
      </Heading>
      <Text mb={4}>
        Emspire will treat all client information as confidential. No client
        data will be shared with third parties unless required by law or agreed
        upon by both parties.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        5. Limitation of Liability
      </Heading>
      <Text mb={4}>
        Emspire will not be held liable for any indirect, consequential, or
        special damages arising from the use of our services. Our liability is
        limited to the amount paid by the client for the services rendered.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        6. Governing Law
      </Heading>
      <Text mb={4}>
        These Terms of Reference are governed by the laws of Liberia. Any
        disputes will be resolved under the jurisdiction of Liberian courts.
      </Text>
    </Box>
  );
};

export default TermsOfReference;
