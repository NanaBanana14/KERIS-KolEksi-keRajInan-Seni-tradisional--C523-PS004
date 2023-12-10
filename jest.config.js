module.exports = {
  // Stop running tests after `n` failures
  bail: 0,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: false,

  // A set of global variables that need to be available in all test environments
  globals: {},

  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-jsdom',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/tests/**/*.test.[jt]s',
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['jest-mock'],
};
