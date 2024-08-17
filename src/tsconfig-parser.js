import path from 'path'
import { TsConfigParseError } from './errors/index.js'

/** @typedef {import('./tsconfig.d.ts').default} TsConfig */

/**
 * Parses a `tsconfig.json`
 *
 * @param {string} filepath - The full path, including the filename, to the `tsconfig.json` file.
 * @returns {Promise<TsConfig>}
 */
export async function tsConfigParser (filepath) {
  const { parse } = await import('tsconfck')

  try {
    const { tsconfig = { }, tsconfigFile } = await parse(filepath)
    /** @type {TsConfig} */
    const { compilerOptions = { } } = tsconfig
    const {
      rootDir,
      baseUrl,
      outDir,
      outFile,
      declarationDir,
      declaration,
      emitDecoratorMetadata,
      experimentalDecorators,
      paths = { }
    } = compilerOptions

    const dirname = path.dirname(tsconfigFile)

    return {
      compilerOptions: {
        rootDir: path.resolve(dirname, rootDir ?? '.'),
        baseUrl: path.resolve(dirname, baseUrl ?? rootDir ?? '.'),
        outDir: path.resolve(dirname, outDir ?? rootDir ?? '.'),
        outFile: outFile ? path.resolve(dirname, outFile) : undefined,
        declarationDir: path.resolve(dirname, declarationDir ?? outDir ?? rootDir ?? '.'),
        declaration: declaration ?? false,
        experimentalDecorators: experimentalDecorators ?? false,
        emitDecoratorMetadata: emitDecoratorMetadata ?? false,
        paths: paths ?? { }
      }
    }
  } catch (error) {
    throw new TsConfigParseError({ filepath }, error)
  }
}
