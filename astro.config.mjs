// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // The repository is named kaka998-u.github.io (GitHub's "user site" pattern),
  // so the site is served from the root path and no `base` is needed.
  // When you move to a custom domain, change `site` to 'https://your-domain'.
  site: 'https://kaka998-u.github.io',

  markdown: {
    shikiConfig: {
      // The site is light-only, so one code-block theme is enough.
      theme: 'github-light',
      wrap: true,
    },
  },
});
