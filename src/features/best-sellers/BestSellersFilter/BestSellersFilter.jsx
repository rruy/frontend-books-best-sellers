import { useRef } from 'react';

import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

function BestSellersFilter({ booksList, pureList, setBooksList, setIsEmpty }) {
  const inputRef = useRef(null);

  const handleFilterBooks = (e) => {
    e.preventDefault();

    const searchTerm = inputRef.current.value;

    if (searchTerm) {
      const updatedBooksList = [...booksList].filter(({ title }) => {
        return title.toLowerCase().includes(searchTerm.toLowerCase());
      });

      setBooksList(updatedBooksList);
      setIsEmpty(updatedBooksList.length === 0);
    }
  };

  const handleClear = (e) => {
    const searchTerm = inputRef.current.value;

    if (!searchTerm) {
      setBooksList(pureList);
      setIsEmpty(false);
    }
  };

  return (
    <form onSubmit={handleFilterBooks}>
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type="text"
          placeholder="Type something"
          ref={inputRef}
          onChange={handleClear}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" type="submit">
            Find
          </Button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
}

export { BestSellersFilter };
