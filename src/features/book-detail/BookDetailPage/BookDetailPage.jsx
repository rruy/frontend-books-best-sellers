import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Center, Container, Divider, Heading, Spinner } from '@chakra-ui/react';
import { getBookDetail } from '@/services/book-detail';

function BookDetailPage() {
  const router = useRouter();

  const [booksDetail, setBooksDetail] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getBookDetail({ name: router.query.name })
      .then((data) => {
        setBooksDetail(data.results);
        setIsLoading(false);
      })
      .catch(() => {
        setHasError(true);
        setIsLoading(false);
      });
  }, [router.query.name]);

  if (isLoading) {
    return (
      <Center height="100vh">
        <Spinner />
      </Center>
    );
  }

  if (hasError) {
    return <h1>Something wrong...</h1>;
  }

  return (
    <Container maxW="1200px" color="#262626" paddingY="50px">
      <Heading as="h1" marginBottom="16px">
        Book detail
      </Heading>

      <Divider marginY="22px" />
      <p>My book name: {booksDetail}</p>
    </Container>
  );
}

export { BookDetailPage };
