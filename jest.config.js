export default {
  testEnvironment: "node",
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|png|jpg|jpeg|gif)$": "identity-obj-proxy",
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
