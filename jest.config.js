module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  passWithNoTests: true,
  fakeTimers: {
    enableGlobally: true
  },
  testPathIgnorePatterns: ['/node_modules', '/.dist'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  globalSetup: '<rootDir>/.jest/timezoneMock.ts',
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    'src/ui/theme/',
    'src/ui/globalStyles/',
    'src/ui/providers/',
    'src/ui/assets/',
    'src/tests/providers/',
    'src/types/',
    'src/testHelpers/',
    'stories.tsx',
    'types.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.tsx?$',
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/src/testHelpers/mocks/svg.ts',
    '^.+\\.css$': '<rootDir>/src/testHelpers/mocks/style.ts'
  },
  transform: {
    '^.+\\.tsx?$': [
      '@swc/jest',
      {jsc: {transform: {react: {runtime: 'automatic'}}}}
    ],
    '\\.(webp|png|gif|svg|jpg)$':
      '<rootDir>/src/testHelpers/mocks/assetsTransformer.js'
  }
}
