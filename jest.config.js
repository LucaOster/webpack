module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  fakeTimers: {
    enableGlobally: true
  },
  testPathIgnorePatterns: ['/node_modules'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: [
    'src/main/',
    'src/ui/app.tsx',
    'src/ui/pages/index.tsx',
    'src/ui/components/index.tsx',
    'src/ui/components/templates/index.tsx',
    'src/ui/theme/',
    'src/ui/globalStyles/',
    'src/ui/providers/',
    'src/ui/assets/',
    'src/tests/providers/',
    'src/hooks/index.ts',
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
      { jsc: { transform: { react: { runtime: 'automatic' } } } }
    ],
    '\\.(webp|png|gif|jpg|svg)$':
      '<rootDir>/src/testHelpers/mocks/assetsTransformer.js'
  }
}
