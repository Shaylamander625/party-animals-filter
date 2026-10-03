import { useState, useCallback, useMemo } from 'react';
import { ChakraProvider, Box, Container, Heading, Button, Flex } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import FilterSection from './components/FilterSection';
import CharacterGrid from './components/CharacterGrid';
import { charactersData } from './data/characters.js';
import { characteristicsTranslation, nameTranslation } from './data/translations.js';

const theme = extendTheme({
  fonts: {
    heading: `'Fredoka', sans-serif`,
    body: `'Fredoka', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'orange.700',
        color: 'white'
      }
    }
  }
});

function App() {
  const [filters, setFilters] = useState({});
  const [isKorean, setIsKorean] = useState(false);

  const filteredCharacters = useMemo(() => charactersData.filter(character => {
    return Object.entries(filters).every(([key, value]) => !value || character[key] === 'TRUE');
  }), [filters]);

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" py={8}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" mb={8}>
            <Heading textAlign="center" color="white">
              {isKorean ? '파티 애니멀즈 캐릭터 필터' : 'Party Animals Characters Filter'}
            </Heading>
            <Button
              onClick={() => setIsKorean(prev => !prev)}
              bg="white"
              color="orange.700"
              _hover={{ bg: 'orange.100' }}
              fontWeight="bold"
              px={6}
              boxShadow="md"
            >
              {isKorean ? 'ENG' : 'KOR'}
            </Button>
          </Flex>
          <Box bg="orange.500" p={6} borderRadius="xl" mb={6}>
            <FilterSection 
              filters={filters} 
              setFilters={setFilters} 
              isKorean={isKorean}
              translations={characteristicsTranslation}
            />
          </Box>
          <CharacterGrid 
            characters={filteredCharacters} 
            isKorean={isKorean}
            translations={characteristicsTranslation}
            nameTranslations={nameTranslation}
            filters={filters}
          />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App; 
