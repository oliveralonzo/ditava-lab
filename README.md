# Updating the ditava lab website

## People

Each person has a Markdown file inside `src/content/people/`:

- `faculty/` — Faculty
- `student/` — Current Students
- `alumni/` — Alumni

The folder determines the group; no `type` field is needed. To add someone, copy
`src/content/people/_template.md` into the appropriate folder, rename it, and fill
in `name`, `position`, `role`, and optionally `image`. Photo paths refer to files
in `public/`, for example `/images/people/oliver.jpg`.

To move someone to alumni, move their file from `student/` to `alumni/` and update
their position or role as needed. People appear in filename order within each group.

## Other content

- Introduction: `src/content/sections/hero.md`
- Projects: one file per project in `src/content/projects/`
- Publications: one file per publication in `src/content/publications/`;
  filenames sort in descending order, so higher numeric prefixes appear first.

## Preview and publish

To archive a project, prefix its filename with `x-` (for example,
`project2.md` → `x-project2.md`). Archived projects stay in the repository but
are hidden from the site. Remove `x-` to show a project again.

Run `npm run dev` to preview changes locally and `npm run build` to check the
production build. Pushing changes to `main` triggers the GitHub Pages deployment.

---

# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
