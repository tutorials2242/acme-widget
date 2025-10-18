module.exports = {
  testEnvironment: "node",
  // ✅ Removed jest-circus/runner (no longer needed in Jest 30+)
  // You can still add other options here:
  verbose: true,
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  testMatch: ["**/__tests__/**/*.test.js"],
};
