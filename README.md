# nodejs-test-suite

# Initialize a simple TS project
`npm init -y
npx tsc --init
`

# Change rootDir and srcDir
`
"rootDir": "./src",
"outDir": "./dist",
`

# Add dependencies
`npm install --save-dev ts-jest  @jest/globals @types/express
npm i supertest @types/supertest
npm install express `

# Initialize jest.config.ts
`npx ts-jest config:init

# Update jest.config.js
`/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["<rootDir>/src/tests/**/*.ts"]
};`


Moving to vitest 

Why vitest?
- Faster
- Better DX
- Native ESM support
- Built-in coverage
- Snapshot testing
- First class TS support
- Great watch mode
- Seamless integration with Vite

