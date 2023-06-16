import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  noExternal: ['openapi-fetch'],
  dts: true,
  clean: true,
  platform: 'node',
});
