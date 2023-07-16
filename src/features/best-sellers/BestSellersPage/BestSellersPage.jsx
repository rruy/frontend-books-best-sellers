import { useRef, useState, useEffect } from 'react';

import { Container, Divider, Heading } from '@chakra-ui/react';
import { getBestSellers } from '@/services/best-sellers';

import { BestSellersList, BestSellersFilter } from '@/features/best-sellers';

function BestSellersPage() {
  const [booksList, setBooksList] = useState([]);
  const [pureList, setPureList] = useState([]);

  useEffect(() => {
    getBestSellers().then((data) => {
      setBooksList(data.results);
      setPureList(data.results);
    });
  }, []);

  return (
    <Container maxW="1200px" color="#262626" paddingY="50px">
      <Heading as="h1" marginBottom="16px">
        Best Sellers Page
      </Heading>

      <BestSellersFilter
        booksList={booksList}
        pureList={pureList}
        setBooksList={setBooksList}
      />
      <Divider marginY="22px" />
      <BestSellersList booksList={booksList} />
    </Container>
  );
}

export { BestSellersPage };
