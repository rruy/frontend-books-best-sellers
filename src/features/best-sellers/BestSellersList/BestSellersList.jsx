import { useEffect, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

import { Book } from '@/components/Book';
import { getBestSellers } from '@/services/best-sellers';

function BestSellersList() {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    getBestSellers().then((data) => {
      setBooksList(data.results);
    });
  }, []);

  return (
    <Box mt="16px">
      <SimpleGrid spacing={4} templateColumns="repeat(1, minmax(200px, 1fr))">
        {booksList.map((bookItem) => (
          <Book
            key={bookItem.title}
            title={bookItem.title}
            description={bookItem.description}
            author={bookItem.author}
            contributor={bookItem.contributor}
            publisher={bookItem.publisher}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export { BestSellersList };