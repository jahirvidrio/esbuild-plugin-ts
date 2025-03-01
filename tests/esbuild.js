import esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/main.ts'],
  outfile: 'dist/main.js',
  format: 'esm',
  platform: 'node',
  target: 'node18',
  packages: 'external',
  sourcemap: 'external',
  minify: true,
  keepNames: true,
  bundle: true,
  plugins: [
    {
      name: 'my-plugin',
      setup: (options) => {
        console.log(options)
      }
    }
  ]
}).catch(console.error)
