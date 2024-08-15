import esbuild from 'esbuild'

/** @type {import('esbuild').BuildOptions} */
const buildConfig = {
  entryPoints: ['src/index.js'],
  outdir: 'lib',
  platform: 'node',
  target: 'node18', // Set to Node.js 18+ because esbuild requires at least this version
  packages: 'external',
  sourcemap: 'external',
  minify: true,
  keepNames: true,
  bundle: true
}

const cjsContext = await esbuild.context({
  ...buildConfig,
  format: 'cjs',
  outExtension: { '.js': '.cjs' },
  outdir: `${buildConfig.outdir}/cjs`
})

const esmContext = await esbuild.context({
  ...buildConfig,
  format: 'esm',
  outExtension: { '.js': '.mjs' },
  outdir: `${buildConfig.outdir}/esm`
})

await cjsContext.watch()
await esmContext.watch()
console.log('watching...')
