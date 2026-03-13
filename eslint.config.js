import { defineConfig } from 'eslint/config';
import { javascript } from '@qumu/eslint-config';

export default defineConfig([
  {
    extends: [javascript],
    files: ['**/*.{js,mjs,cjs}'],
  },
]);
