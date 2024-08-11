import esbuild from 'esbuild'

const context = await esbuild.context({
  entryPoints: ['src/index.ts'],
  outdir: 'lib',
  platform: 'node',
  target: 'node18', // Set to Node.js 18+ because esbuild requires at least this version
  format: 'cjs',
  packages: 'external',
  sourcemap: 'inline',
  bundle: true,
  minify: true,
  keepNames: true
})

await context.watch()
console.log('watching...')
