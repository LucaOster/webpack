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
    'src/tests/providers/',
    'src/hooks/index.ts',
    'src/data/',
    'src/infra/api/',
    'src/infra/http/',
    'src/infra/store/',
    'src/ui/assets/',
    'src/types/',
    'src/tests/mocks/index.ts',
    'stories.tsx',
    'types.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.tsx?$',
  moduleNameMapper: {
    '^.+\\.svg$': '<rootDir>/src/tests/mocks/svg.ts'
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
