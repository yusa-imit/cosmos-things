const swcConfig = {
  jsc: {
    parser: { syntax: "typescript", decorators: true },
    transform: { legacyDecorator: true, decoratorMetadata: true },
  },
}
const config = {
  transform: {
    ".(ts|tsx)$": ["@swc/jest", swcConfig],
    ".(js|jsx)$": ["@swc/jest", swcConfig],
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  rootDir: ".",
  // coverageDirectory: "<rootDir>/coverage/",
  // collectCoverageFrom: ["<rootDir>/packages/*/src/**/*.{ts,tsx}"],
  moduleDirectories: ["node_modules"],
  globals: {
    window: undefined,
  }
}

export default config