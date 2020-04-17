module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: './coverage',
  testPathIgnorePatterns: ['/node_modules/', '/__tests__/.eslintrc.js', '/__tests__/setupTests.js'],
  notify: true,
  collectCoverageFrom: ['src/**'],
  coverageReporters: ['lcov'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['./__tests__/setupTests.js'],
};
