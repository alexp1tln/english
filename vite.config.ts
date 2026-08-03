import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    
    plugins: [
      react(),
      tailwindcss(),
      legacy({
        targets: ['defaults', 'safari >= 13', 'ios >= 13'],
        modernPolyfills: true,
      }),
      VitePWA({
        registerType: 'autoUpdate',
        injectRegister: 'auto',
        includeAssets: ['icon.png'],
        manifest: {
          name: "Rabbit's English",
          short_name: "Rabbit's English",
          description: 'Английский язык в автономном режиме',
          theme_color: '#000000',
          background_color: '#000000',
          display: 'standalone',
          icons: [
            {
              src: 'icon.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ]
        },
        workbox: {
          importScripts: ['firebase-messaging-sw.js'],
          globPatterns: ['**/*.{js,css,html,ico,png,svg,ts,tsx}'],
          maximumFileSizeToCacheInBytes: 10000000,
          clientsClaim: true,
          skipWaiting: true,
          cleanupOutdatedCaches: true
        }
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      target: 'es2015',
    },
    server: {
      hmr: false,
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
