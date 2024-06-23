export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  modulePaths: ["<rootDir>"],
  moduleNameMapper: {
    "\\.(scss)$": "identity-obj-proxy",
    "\\.(gif|webp|svg)$": "<rootDir>/tests/mock.ts",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@elements(.*)$": "<rootDir>/src/elements$1",
    "^@assets(.*)$": "<rootDir>/src/assets$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^@router(.*)$": "<rootDir>/src/router$1",
    "^@api-key$": "<rootDir>/api-key.json",
  },
};
