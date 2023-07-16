## Tecnologias usadas

This project has the following technologies:

- NextJS - React Framework
- Chakra UI - UI library
- Axios - HTTP Client

## Pattern of Project

This project use the following pattern in order to help in struture and division of responsabilities that features:

- [Feature sliced](https://feature-sliced.design/docs)

## Struture

Below is the description of the structure used to separate the pages and components

- `components`: It has all the components that can be reused in every application.
- `features`: Centralizes application features by name.
- `features/feature-name`: It has all the components referring to the functionality in the case, and there may be N components separated by responsabilities.
- `pages`: Responsible for defining application routing.
- `services`: HTTP client abstraction to handle requests.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js` or `features` folder. The page auto-updates as you edit the file.

## Responsabilities

Below is a description of the functioning of the components with their specific functions:

- `BestSellersPage`: Fetch the data from the API and store it in a local state, also pass this data to `BestSellersFilter` and `BestSellersList` via props.
- `BestSellersFilter`: Uses the data received via props to filter the list of books according to the term typed in the search field using the `setBooksList` function.
- `BestSellersList`: Receives the data coming from the API and takes care of extracting the relevant data and rendering it on screen.
  
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!