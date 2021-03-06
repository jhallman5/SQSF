const generateMockListings10 = () => {
  const mockListings = []
  for(let i = 0; i < 12; i++){
    mockListings.push(
      {
        message: { code: 0 },
        response: {
          results: [
            {
              address: [`${i}`],
              bathrooms: ['3.0'],
              bedrooms: ['4'],
              finishedSqFt: ['3470']
            }
          ]
        }
      }
    )
  }
  return mockListings
}

module.exports = {
  generateMockListings10
}
