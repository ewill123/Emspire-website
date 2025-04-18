import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Box maxW="7xl" mx="auto" py={10} px={5}>
      <Heading as="h1" size="2xl" textAlign="center" mb={8}>
        Privacy Policy
      </Heading>

      <Text fontSize="lg" mb={4}>
        At Emspire, we value your privacy. This Privacy Policy outlines how we
        collect, use, and protect your personal information. By using our
        services, you agree to the terms outlined below.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        1. Information We Collect
      </Heading>
      <Text mb={4}>
        We collect personal information such as name, email address, and other
        contact details when you fill out our contact form or request a service.
        We may also collect non-personally identifiable information to improve
        our website's functionality.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        2. How We Use Your Information
      </Heading>
      <Text mb={4}>
        The information we collect is used to provide you with the best possible
        services, communicate with you regarding your requests, and improve our
        offerings. We may also send you promotional emails with your consent.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        3. Data Protection
      </Heading>
      <Text mb={4}>
        We implement a variety of security measures to protect your personal
        data. However, please note that no method of transmission over the
        internet or electronic storage is 100% secure.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        4. Sharing of Your Information
      </Heading>
      <Text mb={4}>
        We do not sell, trade, or otherwise transfer your personal information
        to third parties. We may share information with trusted third-party
        service providers who assist us in operating our website or servicing
        you, as long as they agree to keep this information confidential.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        5. Your Rights
      </Heading>
      <Text mb={4}>
        You have the right to access, correct, or delete your personal
        information. If you wish to exercise these rights, please contact us
        through the contact page on our website.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        6. Changes to This Privacy Policy
      </Heading>
      <Text mb={4}>
        We reserve the right to update this Privacy Policy at any time. When we
        do, we will post the updated policy on this page with the effective
        date.
      </Text>

      <Heading as="h2" size="lg" mb={4}>
        7. Contact Us
      </Heading>
      <Text mb={4}>
        If you have any questions about this Privacy Policy, please contact us
        at the contact page on our website.
      </Text>
    </Box>
  );
};

export default PrivacyPolicy;
