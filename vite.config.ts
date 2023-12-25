import { defineConfig, createLogger } from 'vite';
import react from '@vitejs/plugin-react';
import monacoEditorPlugin from 'vite-plugin-monaco-editor';
import * as path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  customLogger: createLogger('info', { prefix: '[coderpad]' }),
  plugins: [react(), monacoEditorPlugin({})],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    hmr: {
      clientPort: parseInt(process.env.WEBSOCKET_PORT!)
    }
  },
  // @ts-ignore
  test: {
    globals: true,
    setupFiles: ['./setupTest.ts'],
    environment: 'jsdom'
  }
});
