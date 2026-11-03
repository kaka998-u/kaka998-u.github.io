# Personal Website

Source for [kaka998-u.github.io](https://kaka998-u.github.io), built with
[Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions on
every push to `main`.

## Run locally

Double-click `start-site.bat` (Windows), or:

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Publish

Double-click `publish-site.bat`, or commit and push to `main`. The site
rebuilds in about two minutes.

## Where things live

| What | File |
| --- | --- |
| Name, title, bio, links | `src/data/site.ts` |
| Research matrix | `src/data/research.ts` |
| Publications | `src/data/publications.ts` |
| News | `src/data/news.ts` |
| CV page | `src/data/cv.ts` |
| Projects | `src/content/projects/*.md` |
| Styles | `src/styles/global.css` |
| Images | `public/` |

Everything in `public/` is publicly downloadable once the site is live.
