import { Box, Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Box bg="brand.700" color="white" p={4} borderRadius="md">
          <Heading as="h1" size="xl" textAlign="center">
            Financial News Today
          </Heading>
        </Box>

        {/* Headlines Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Headlines
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">
                Headline 1
              </Heading>
              <Text mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">
                Headline 2
              </Heading>
              <Text mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Market Data Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Market Data
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">
                Market 1
              </Heading>
              <Text mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">
                Market 2
              </Heading>
              <Text mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">
                Market 3
              </Heading>
              <Text mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>

        {/* Featured Articles Section */}
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Featured Articles
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">
                Article 1
              </Heading>
              <Text mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">
                Article 2
              </Heading>
              <Text mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;