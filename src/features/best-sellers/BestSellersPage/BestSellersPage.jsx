import { useRef } from 'react';

import {
  Button,
  Container,
  Divider,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import { BestSellersList } from '@/features/best-sellers';

function BestSellersPage() {
  const inputRef = useRef(null);

  const handleFilterBooks = () => {
    console.log('filter book:', inputRef.current.value);
  };

  return (
    <Container maxW="1200px" color="#262626" paddingY="50px">
      <Heading as="h1" marginBottom="16px">
        Best Sellers Page
      </Heading>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type="text"
          placeholder="Type something"
          ref={inputRef}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleFilterBooks}>
            Find
          </Button>
        </InputRightElement>
      </InputGroup>
      <Divider marginY="22px" />
      <BestSellersList />
    </Container>
  );
}

export { BestSellersPage };