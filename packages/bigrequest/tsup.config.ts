import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  cjsInterop: true,
  dts: true,
  clean: true,
  platform: 'node',
});
