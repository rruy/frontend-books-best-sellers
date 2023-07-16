import { useRef } from 'react';

import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

function BestSellersFilter({ booksList, pureList, setBooksList }) {
  const inputRef = useRef(null);

  const handleFilterBooks = () => {
    const searchTerm = inputRef.current.value;

    if (searchTerm) {
      const updatedBooksList = [...booksList].filter(({ title }) => {
        return title.toLowerCase().includes(searchTerm);
      });

      setBooksList(updatedBooksList);
      return;
    }

    setBooksList(pureList);
  };

  return (
    <>
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
    </>
  );
}

export { BestSellersFilter };
