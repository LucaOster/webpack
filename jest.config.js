module.exports = {
  testEnvironment: 'jsdom',
  collectCoverage: true,
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
    'src/components/atoms/Svg',
    'src/hooks/index.ts',
    'src/templates/index.ts',
    'src/utils/index.ts',
    'src/assets',
    'src/types',
    'src/libs',
    'src/router',
    'src/services',
    'src/store',
    'src/theme',
    'src/styles',
    'stories.tsx',
    'types.ts'
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js'
  },
  roots: ['<rootDir>/src'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest'
  }
}
