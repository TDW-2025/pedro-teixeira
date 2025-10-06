module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript", // para TS/TSX
            tsx: true, // permite JSX em TS
            decorators: true,
          },
          transform: {
            react: {
              runtime: "automatic", // JSX moderno
            },
          },
        },
      },
    ],
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!**/node_modules/**"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
};
