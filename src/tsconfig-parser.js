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
    /** @type {{ tsconfig?: TsConfig }} */
    const { tsconfig: { compilerOptions = { } } = {} } = await parse(filepath)

    return {
      compilerOptions: {
        rootDir: compilerOptions.rootDir,
        rootDirs: compilerOptions.rootDirs,
        baseUrl: compilerOptions.baseUrl,
        outDir: compilerOptions.outDir,
        outFile: compilerOptions.outFile,
        paths: compilerOptions.paths,
        experimentalDecorators: compilerOptions.experimentalDecorators,
        emitDecoratorMetadata: compilerOptions.emitDecoratorMetadata,
        declaration: compilerOptions.declaration,
        declarationDir: compilerOptions.declarationDir,
        resolveJsonModule: compilerOptions.resolveJsonModule,
        resolvePackageJsonExports: compilerOptions.resolvePackageJsonExports,
        resolvePackageJsonImports: compilerOptions.resolvePackageJsonImports
      }
    }
  } catch (error) {
    throw new TsConfigParseError({ filepath }, error)
  }
}
