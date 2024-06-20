import { Box, Flex, Link, Spacer, Text, Input } from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
    navigate("/products");
  };

  return (
    <Box bg="teal.500" p={4}>
      <Flex>
        <Text fontSize="xl" color="white" as={RouterLink} to="/">
          Electronics Store
        </Text>
        <Spacer />
        <Input
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          width="200px"
          mx={2}
        />
        <Link as={RouterLink} to="/" color="white" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/products" color="white" mx={2}>
          Products
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;