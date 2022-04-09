/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.css$': 'jest-transform-css'
  }
}
