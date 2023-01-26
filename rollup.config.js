import typescript from '@rollup/plugin-typescript'
import replace from '@rollup/plugin-replace'
import { readFileSync } from 'node:fs'
import { dirname } from 'node:path'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: dirname(pkg.main),
        format: 'cjs',
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        exclude: ['**/__tests__/**', '**/index.umd.ts'],
        tsconfig: './tsconfig.cjs.json',
      }),
      replace({
        __COREUI_VERSION__: `v${process.env.npm_package_version}`
      })
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        dir: dirname(pkg.module),
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        exclude: ['**/__tests__/**', '**/index.umd.ts'],
        tsconfig: './tsconfig.esm.json',
      }),
      replace({
        __COREUI_VERSION__: `v${process.env.npm_package_version}`
      })
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/umd/index.js',
        format: 'umd',
        name: 'coreui.Utils',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        exclude: ['**/__tests__/**'],
        tsconfig: './tsconfig.umd.json',
      }),
      replace({
        __COREUI_VERSION__: `v${process.env.npm_package_version}`
      })
    ],
  },
]
