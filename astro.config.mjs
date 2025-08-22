import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ditava.cdm.depaul.edu/',
  base: '/', 
  vite: {
    plugins: [tailwindcss()],
  },
});