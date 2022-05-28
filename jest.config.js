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
    'src/index.tsx',
    'src/app.tsx',
    'src/pages/index.tsx',
    'src/components/index.tsx',
    'src/components/templates/index.tsx',
    'src/hooks/index.ts',
    'utils/providers',
    'src/utils/index.tsx',
    'src/assets',
    'src/types',
    'src/libs',
    'src/router',
    'src/services',
    'src/http',
    'src/store',
    'src/theme',
    'src/mocks/index.ts',
    'src/globalStyles',
    'stories.tsx',
    'types.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.tsx?$',
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/src/mocks/svg.ts'
  },
  transform: {
    '^.+\\.tsx?$': [
      '@swc/jest',
      { jsc: { transform: { react: { runtime: 'automatic' } } } }
    ]
  },
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: -10
    }
  }
}
