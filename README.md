
> [!CAUTION]
> This is in-development and is not feature complete.

# esbuild-plugin-ts

An [esbuild plugin](https://esbuild.github.io/plugins/) that integrates TypeScript’s advanced features, such as type checking, emitting decorator metadata and more. It leverages the TypeScript compiler (`tsc`) under the hood to address the limitations of [esbuild](https://esbuild.github.io/) in handling TypeScript.

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

# Motivation

While [esbuild](https://esbuild.github.io/) is renowned for its speed and efficiency, it lacks full support for some of TypeScript’s advanced features. This includes type checking, emit decorator metadata and path alias resolution. These features are crucial for many TypeScript projects, especially those utilizing decorators and complex type definitions.

The goal of `esbuild-plugin-ts` is to bridge this gap by leveraging the TypeScript compiler (`tsc`) under the hood. This integration ensures that you can benefit from esbuild’s fast builds while still having access to the complete set of TypeScript functionalities.

# Features

- [ ] Declaration Files: Generates `.d.ts` declaration files.
- [ ] Path Aliases: Resolves path aliases defined in `tsconfig.json`.
- [ ] Decorator Metadata: Emits decorator's metadata.
- [ ] Type Checking: Runs `tsc` in a worker thread to ensure type checking.
