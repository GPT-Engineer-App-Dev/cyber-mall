import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Electronics Store</Text>
        <Text>Find the best electronics at unbeatable prices.</Text>
        <Button as={Link} to="/products" colorScheme="teal" size="lg">
          Shop Now
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;