import { tsConfigParser } from './tsconfig-parser.js'

export * as Errors from './errors/index.js'
export { tsConfigParser } from './tsconfig-parser.js'

const config = await tsConfigParser('tsconfig.eslint.json')
console.log(config)
