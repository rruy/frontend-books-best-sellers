import { useState, useEffect } from 'react';

import { Center, Container, Divider, Heading, Spinner } from '@chakra-ui/react';
import { getBestSellers } from '@/services/best-sellers';

import {
  BestSellersEmpty,
  BestSellersList,
  BestSellersFilter,
} from '@/features/best-sellers';

function BestSellersPage() {
  const [pureList, setPureList] = useState([]);
  const [booksList, setBooksList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    getBestSellers().then((data) => {
      setBooksList(data.results);
      setPureList(data.results);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <Center height="100vh">
        <Spinner />
      </Center>
    );
  }

  return (
    <Container maxW="1200px" color="#262626" paddingY="50px">
      <Heading as="h1" marginBottom="16px">
        Best Sellers Page
      </Heading>

      <BestSellersFilter
        booksList={booksList}
        pureList={pureList}
        setBooksList={setBooksList}
        setIsEmpty={setIsEmpty}
      />
      <Divider marginY="22px" />
      {isEmpty ? (
        <BestSellersEmpty
          pureList={pureList}
          setBooksList={setBooksList}
          setIsEmpty={setIsEmpty}
        />
      ) : (
        <BestSellersList booksList={booksList} />
      )}
    </Container>
  );
}

export { BestSellersPage };
