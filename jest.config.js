/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const config = {
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/*.test.js', '**/*.test.ts', '**/*.test.tsx'],
  setupFilesAfterEnv: ['<rootDir>/config/test/utils/setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/config/test/utils/', '<rootDir>/node_modules/', '<rootDir>/.next/'],
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1'
  },
  transform: {
    '.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
        module: {
          type: 'commonjs'
        },
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true
          },
          transform: {
            react: {
              runtime: 'automatic'
            }
          }
        }
      }
    ]
  }
}

module.exports = createJestConfig(config)
