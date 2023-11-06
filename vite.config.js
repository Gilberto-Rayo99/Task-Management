import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // This should be the public path from which your app will be served.
  plugins: [react()],
  build: {
    // other build options...
    outDir: 'dist', // The output directory for build files
    rollupOptions: {
      // additional options if necessary
    },
  },
  // If you need to set server-specific configurations:
  server: {
    // server options...
  }
});
