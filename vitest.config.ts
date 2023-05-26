import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'html']
    },
   // setupFiles: ['dotenv/config'],
    exclude: [...configDefaults.exclude]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});