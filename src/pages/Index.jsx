import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="xl" mb={4}>Welcome to My Personal Website</Heading>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">About Me</Heading>
          <Text mt={4}>Hello! I'm a passionate professional with interests in technology, design, and innovation. I enjoy creating solutions that enhance user experiences and streamline processes. In my free time, I love to read, hike, and participate in community service.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;