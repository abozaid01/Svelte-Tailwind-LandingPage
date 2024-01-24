import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: 'https://github.com/abozaid01/Svelte-Tailwind-LandingPage',
});
