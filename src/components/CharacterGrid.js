import { SimpleGrid, Box, Text, Image, Flex, Wrap, WrapItem, Tag } from '@chakra-ui/react';

const CharacterCard = ({ character, isKorean, translations, nameTranslations, filters }) => {
  const characterName = character['Character Name'];
  
  return (
    <Box h="100%" p={4} borderWidth="1px" borderRadius="lg" bg="orange.500" borderColor="orange.400" boxShadow="lg">
      <Flex gap={4} h="100%">
        <Box flex="1" >
          <Text fontSize="lg" fontWeight="bold" color="white">
            {isKorean ? nameTranslations[characterName] : characterName}
          </Text>
          <Wrap spacing={1} mt={1}>
            {Object.entries(character)
              .filter(([key, value]) => value === 'TRUE' && key !== 'Character Name')
              .map(([key]) => (
                <WrapItem key={key}>
                  <Tag size="sm" borderRadius="full" bg={filters[key] ? 'green.500' : 'orange.600'} color="orange.100">
                    {isKorean ? translations[key] : key}
                  </Tag>
                </WrapItem>
              ))}
          </Wrap>
        </Box>
        <Image
        src={`${process.env.PUBLIC_URL}/images/${characterName}.webp`}
        alt={characterName}
        boxSize="80px"
        objectFit="cover"
        borderRadius="md"
        alignSelf="center"
      />
      </Flex>
    </Box>
  );
};

const CharacterGrid = ({ characters, isKorean, translations, nameTranslations, filters }) => {
  return (
    <SimpleGrid columns={[2, 3, 4, 5]} spacing={4}>
      {characters.map(character => (
          <CharacterCard 
            key={character['Character Name']}
            character={character} 
            isKorean={isKorean}
            translations={translations}
            nameTranslations={nameTranslations}
            filters={filters}
          />
      ))}
    </SimpleGrid>
  );
};

export default CharacterGrid; 