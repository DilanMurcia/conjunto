import { defineCollection, z } from 'astro:content';

// Definir la colección 'inicio'
const inicio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    cards: z.array(
      z.object({
        title: z.string(),
        body: z.string(),
        href: z.string(),
      })
    )//cierro card
  }),
});//cierro sección de inicio
export const collections = { inicio };
