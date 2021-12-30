import typescript from '@rollup/plugin-typescript';

/** * @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/index.esm.js',
      format: 'esm',
      inlineDynamicImports: true,
      exports: 'named',
      globals: {
        chalk: 'chalk',
      },
    },
    {
      file: 'lib/index.umd.js',
      format: 'umd',
      name: 'LuosUtils',
      inlineDynamicImports: true,
      exports: 'named',
      globals: {
        chalk: 'chalk',
      },
    },
  ],
  plugins: [typescript()],
  external: ['chalk'],
};
