// astro.config.mjs
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react'; // Asegúrate de importar react desde '@astrojs/react'

// Cargar variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [react(), tailwind()] // Integraciones en el mismo array
});
