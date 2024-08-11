import { defineCollection, z } from 'astro:content';
//npx astro sync
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
    ).optional()//cierro card
  }),
});//cierro sección de inicio
export const collections = { inicio };
