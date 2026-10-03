import { SimpleGrid, Box, Button, Text, Flex } from '@chakra-ui/react';

const FilterSection = ({ filters, setFilters, isKorean, translations }) => {
  const characteristics = Object.keys(translations)

  const handleFilterChange = (characteristic) => {
    setFilters(prev => ({
      ...prev,
      [characteristic]: prev[characteristic] ? undefined : true
    }));
  };

  const getButtonColor = (value) => value ? 'green.400' : 'white';

  const getButtonText = (value) => value ? '✓' : '';

  return (
    <Box p={4}>
      <SimpleGrid columns={[3, 4, 6]} spacing={4}>
        {characteristics.map(characteristic => (
          <Flex 
            key={characteristic}
            align="center"
            gap={2}
          >
            <Button
              size="sm"
              onClick={() => handleFilterChange(characteristic)}
              bg={getButtonColor(filters[characteristic])}
              color={filters[characteristic] ? 'black' : 'white'}
              _hover={{ opacity: 0.8 }}
              w="30px"
              h="30px"
              p={0}
              border="1px solid"
              borderColor="gray.200"
            >
              {getButtonText(filters[characteristic])}
            </Button>
            <Text fontSize="sm" color="white">
              {isKorean ? translations[characteristic] : characteristic}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FilterSection; 