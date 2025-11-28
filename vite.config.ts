import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Polyfill process.env.API_KEY for compatibility with existing service code
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});