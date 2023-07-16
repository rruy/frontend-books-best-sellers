import { Box, SimpleGrid } from '@chakra-ui/react';

import { Book } from '@/components/Book';

function BestSellersList({ booksList }) {
  return (
    <Box mt="16px">
      <SimpleGrid spacing={4} templateColumns="repeat(1, minmax(200px, 1fr))">
        {booksList.map((bookItem) => (
          <Book key={bookItem.title} {...bookItem} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export { BestSellersList };
