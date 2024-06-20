import { Box, SimpleGrid, Image, Text, Button, VStack, Select, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: 299, category: "Electronics", rating: 4.5, image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: 799, category: "Electronics", rating: 4.7, image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: 199, category: "Accessories", rating: 4.2, image: "/images/headphones.jpg" },
];

const Products = ({ searchTerm }) => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    let products = sampleProducts;

    if (searchTerm) {
      products = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (category) {
      products = products.filter((product) => product.category === category);
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-");
      products = products.filter((product) => product.price >= min && product.price <= max);
    }

    if (rating) {
      products = products.filter((product) => product.rating >= rating);
    }

    setFilteredProducts(products);
  }, [searchTerm, category, priceRange, rating]);
  return (
    <Box p={4}>
      <Box mb={4}>
        <Select placeholder="Select category" onChange={(e) => setCategory(e.target.value)}>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
        </Select>
        <Select placeholder="Select price range" onChange={(e) => setPriceRange(e.target.value)} mt={2}>
          <option value="0-100">0 - 100</option>
          <option value="101-500">101 - 500</option>
          <option value="501-1000">501 - 1000</option>
        </Select>
        <Select placeholder="Select rating" onChange={(e) => setRating(e.target.value)} mt={2}>
          <option value="1">1 & Up</option>
          <option value="2">2 & Up</option>
          <option value="3">3 & Up</option>
          <option value="4">4 & Up</option>
        </Select>
      </Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map((product) => (
          <VStack key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src={product.image} alt={product.name} boxSize="150px" objectFit="cover" />
            <Text fontSize="xl">{product.name}</Text>
            <Text>${product.price}</Text>
            <Text>Rating: {product.rating}</Text>
            <Button as={Link} to={`/products/${product.id}`} colorScheme="teal">
              View Details
            </Button>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Products;