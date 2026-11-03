import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Projects collection: every .md file in src/content/projects/ is one project.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.number(),
    /** Shown on the timeline, e.g. "2025 – 2027". Falls back to `year`. */
    period: z.string().optional(),
    tags: z.array(z.string()).default([]),
    repo: z.string().optional(),
    link: z.string().optional(),
    /** Funder's full name, shown under the title in the project list. */
    sponsor: z.string().optional(),
    /** Revealed under the card in the project list when it is selected. */
    funding: z
      .object({
        program: z.string().optional(),
        award: z.string().optional(),
        lead: z.string().optional(),
        partners: z.string().optional(),
        links: z
          .array(z.object({ label: z.string(), href: z.string() }))
          .default([]),
      })
      .optional(),
    /** Lower numbers sort first. */
    order: z.number().default(99),
    /** true = draft, excluded from the built site. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
