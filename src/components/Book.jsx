import { useRouter } from 'next/router';

import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  Flex,
  Heading,
  Text,
  CardFooter,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

export const Book = ({
  author,
  contributor,
  description,
  title,
  publisher,
}) => {
  const router = useRouter();

  const handleRedirect = () => {
    const slugify = title.toLowerCase().split(' ').join('-');
    router.replace(`/book/${slugify}`);
  };

  return (
    <Card variant="filled">
      <Flex gap="12px" padding="8px" alignItems="center">
        <Box
          backgroundColor="blue.200"
          color="blue.50"
          width="150px"
          minWidth="150px"
          height="230px"
          padding="6px 16px"
          borderTop="20px solid"
          borderColor="blue.300"
        >
          <Text as="b" noOfLines={2} fontSize="xs">
            {title}
          </Text>
          <Text fontSize="xs">{author}</Text>
        </Box>
        <Box>
          <CardHeader>
            <Heading as="h3" size="md">
              {title.toUpperCase()}
            </Heading>
            <Text fontSize="sm">
              {author} | {publisher}
            </Text>
            <Text fontSize="xs">{contributor}</Text>
          </CardHeader>
          <CardBody>
            <Text>{description}</Text>
          </CardBody>
          <CardFooter>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="outline"
              onClick={handleRedirect}
            >
              View more
            </Button>
          </CardFooter>
        </Box>
      </Flex>
    </Card>
  );
};
