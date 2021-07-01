module.exports = {
  client: {
    includes: ['./src/**/*.{ts,tsx,js,jsx}'],
    tagName: 'gql',
    service: {
      name: 'sepetim',
      url: 'http://localhost:5000/graphql',
    },
  },
};
