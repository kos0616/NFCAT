import { fileURLToPath, URL } from 'node:url';
import loadVersion from 'vite-plugin-package-version';
import { VitePWA } from 'vite-plugin-pwa';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    loadVersion(),
    VitePWA({
      // includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'NFCAT',
        short_name: 'NFCAT',
        icons: [
          {
            '//': 'Chrome APP & Windows desk & mobile, maskable to fit container',
            src: './maskable_icon_x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            '//': 'iphone',
            src: './apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png'
          },
          {
            '//': 'for Mac OS, a no purpose icon is required',
            src: './pwa_icon.svg',
            type: 'image/svg+xml',
            sizes: '512x512'
          }
        ],
        start_url: './',
        display: 'standalone',
        background_color: '#333',
        theme_color: '#27272a'
      }
    })
  ],
  server: { host: '0.0.0.0' },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: { __Admin_VERSION__: JSON.stringify(process.env.npm_package_version) },
  base: mode === 'production' ? '/NFCAT/' : '/',
  build: {
    outDir: 'docs'
  }
}));
