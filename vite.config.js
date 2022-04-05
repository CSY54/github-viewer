import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: '0.0.0.0',
    port: '30000',
  },
  plugins: [
    react(),
    mode === 'production' &&
      visualizer({
        gzipSize: true,
        brotliSize: true,
      }),
  ],
}));
