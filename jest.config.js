// jest.config.js
module.exports = {
  testEnvironment: "node",
  verbose: true,
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testMatch: ["**/__tests__/**/*.test.js"]
};
