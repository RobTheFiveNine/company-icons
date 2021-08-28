module.exports = {
  moduleNameMapper: {
    '@src/(.*)$': '<rootDir>/src/$1',
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
  testEnvironment: 'jsdom',
};
