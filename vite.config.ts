import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Markdown from 'vite-plugin-md';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueJsx(),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ],
});
