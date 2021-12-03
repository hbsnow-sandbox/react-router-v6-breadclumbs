/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
  testEnvironment: "jsdom",
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/src/**/*.d.ts",
    "!**/node_modules/**",
  ],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  testPathIgnorePatterns: ["/node_modules/"],
};

module.exports = config;
