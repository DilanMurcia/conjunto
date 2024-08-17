import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react'; 
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  output: 'server',  // Cambiado de 'server' a 'static' si estás sirviendo archivos estáticos
  adapter: vercel(),
  integrations: [react(), tailwind()]
});
