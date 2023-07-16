/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: 'c5qsIcf9Yj6lyoeEfvqUsbttT5rcASwA',
    API_BASE_URL: 'https://api.nytimes.com/svc/books/v3/lists',
  },
};

module.exports = nextConfig;