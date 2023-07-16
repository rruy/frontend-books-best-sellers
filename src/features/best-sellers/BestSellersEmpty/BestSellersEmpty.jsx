import { Box, Button, Card, Flex, SimpleGrid, Text } from '@chakra-ui/react';

function BestSellersEmpty({ pureList, setBooksList, setIsEmpty }) {
  const handleResetList = () => {
    setBooksList(pureList);
    setIsEmpty(false);
  };

  return (
    <Box mt="16px">
      <SimpleGrid spacing={4} templateColumns="repeat(1, minmax(200px, 1fr))">
        <Card variant="filled">
          <Flex
            gap="12px"
            padding="38px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text>We did not find any results for your search.</Text>
            <Button variant="solid" onClick={handleResetList}>
              Go back
            </Button>
          </Flex>
        </Card>
      </SimpleGrid>
    </Box>
  );
}

export { BestSellersEmpty };
