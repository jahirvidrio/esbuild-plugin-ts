export default interface TsConfig {
  compilerOptions?: {
    /** Specify the root folder within your source files. */
    rootDir?: string
    /** Allow multiple folders to be treated as one when resolving modules. */
    rootDirs?: string[]
    /** Specify the base directory to resolve non-relative module names. */
    baseUrl?: string
    /** Specify a file that bundles all outputs into one JavaScript file. If `declaration` is true, also designates a file that bundles all .d.ts output. */
    outFile?: string
    /** Specify an output folder for all emitted files. */
    outDir?: string
    /** Specify a set of entries that re-map imports to additional lookup locations. */
    paths?: Record<string, string[]>
    /** Enable experimental support for TC39 stage 2 draft decorators. */
    experimentalDecorators?: boolean
    /** Emit design-type metadata for decorated declarations in source files. */
    emitDecoratorMetadata?: boolean
    /** Generate .d.ts files from TypeScript and JavaScript files in your project. */
    declaration?: boolean
    /** Specify the output directory for generated declaration files. */
    declarationDir?: string
    /** Enable importing .json files */
    resolveJsonModule?: boolean
    /** Use the package.json 'exports' field when resolving package imports. */
    resolvePackageJsonExports?: boolean
    /** Use the package.json 'imports' field when resolving imports. */
    resolvePackageJsonImports?: boolean
  }
}
