# SportsHub React

> 🚀 A sleek React + Vite sports app with Supabase-powered survey storage, smooth UI flow, and modern web redirect handling.

SportsHub React is built to feel fast, polished, and ready for real web interaction:
- smooth transitions and responsive layout
- Supabase-backed survey save + preview workflow
- clean redirect flow between sections and form results
- modern Vite development experience

## What makes it special

- **React + Vite** for instant hot reload and fast bundle builds
- **Supabase integration** for live backend storage without server setup
- **Survey preview + direct submit** for quick feedback and production-ready form flow
- **Web redirect-friendly** structure for landing pages, content sections, and results navigation
- **Clean sports UI** for managing cards, categories, and featured sports content

## Features

- Dynamic sports content display
- Supabase form submission with preview
- Smooth page and state transitions
- Redirect-ready routes and flow-friendly user paths
- Easy local setup and deployment


> ### 🚀 [Click Here to View Code](https://github.com/dhruvdube07/sportshub-react/tree/main/Webdev/src)
> Click the link above to explore the main React source components (`src` folder).

A simple React website project for managing sports content.

<img width="1164" height="623" alt="image" src="https://github.com/user-attachments/assets/56ce47c4-226a-4e77-9a6e-a409b8be053c" />
<img width="1170" height="501" alt="image" src="https://github.com/user-attachments/assets/6b1a0ea3-7c42-4bda-9ddb-f6dbe52b88f2" />
<img width="1167" height="460" alt="image" src="https://github.com/user-attachments/assets/2cdcf83f-2009-47ea-b47f-596c27cfeb61" />
<img width="1180" height="655" alt="image" src="https://github.com/user-attachments/assets/bdfd9236-d204-4d6a-8ff9-555a88437ad9" />
<img width="1169" height="587" alt="image" src="https://github.com/user-attachments/assets/75cd2d2c-28b0-4253-849e-134ef8643d79" />
<img width="1163" height="626" alt="image" src="https://github.com/user-attachments/assets/686ea4d0-6c88-40f1-8e32-6c6d4ffd1a73" />
<img width="1169" height="646" alt="image" src="https://github.com/user-attachments/assets/5f31084b-163e-4761-b1ca-e4f914c4d86f" />
<img width="1161" height="628" alt="image" src="https://github.com/user-attachments/assets/1f8fd0c6-683c-4ccb-90c4-278b5162f0e0" />
<img width="1319" height="650" alt="image" src="https://github.com/user-attachments/assets/311ca520-710c-47fc-a592-548634476879" />
<img width="1321" height="296" alt="image" src="https://github.com/user-attachments/assets/8a851012-b04e-4645-b8dd-32099ff23cf7" />


## Project structure

- `Webdev/src/` — main React app source
- `Webdev/src/components/` — UI components
- `Webdev/src/lib/supabaseClient.js` — Supabase setup (reads Vite env vars)
- `Webdev/.env.local` — local environment variables (gitignored)

## Deployment (Vercel)

This repository's active app lives in the `Webdev` subfolder. To deploy to Vercel, the project includes a `vercel.json` that tells Vercel to build from `Webdev/package.json`.

Required environment variables on Vercel (project Settings → Environment Variables):

- `VITE_SUPABASE_URL` — your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` — your Supabase anon/public key

After adding the variables, trigger a redeploy in the Vercel dashboard.

Note: Do NOT commit real secrets to the repository. Use Vercel project variables or a local `.env.local` file for development.

## Local setup

1. Clone the repository and change into the app folder:

```bash
git clone https://github.com/dhruvdube07/sportshub-react.git
cd Webdev
```

2. Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

3. For production build preview:

```bash
npm run build
npm run preview
```

## Creating a Pull Request

I will create a branch `update-all` with the requested updates and push it to GitHub. You can open a PR at:

https://github.com/dhruvdube07/sportshub-react/compare/main...update-all?expand=1

