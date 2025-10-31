# ch1ch0.me

> Personal portfolio showcasing Linux infrastructure expertise, DevOps practices, and full-stack development

[![Live Site](https://img.shields.io/badge/live-ch1ch0.me-blue)](https://www.ch1ch0.me)
[![Vercel](https://img.shields.io/badge/deployed-vercel-black)](https://vercel.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)

## Overview

Professional portfolio demonstrating modern web development and infrastructure automation. Features automated deployment pipeline: Forgejo (local-first) → GitHub (mirror) → Vercel (production).

**Live Site:** https://www.ch1ch0.me

## Tech Stack

- **Frontend:** Next.js 16.0.1, React 18, TypeScript
- **Hosting:** Vercel (auto-deploy on push)
- **Version Control:** Forgejo (primary), GitHub (public mirror)
- **DNS:** Namecheap, Vercel infrastructure
- **SSL:** Vercel-managed

## Architecture

Local Development (Forgejo)
↓ push
GitHub Mirror (ch1ch0-FOSS/ch1ch0.me)
↓ webhook
Vercel Production
↓ serves
www.ch1ch0.me (DNS)

## Local Development

**Prerequisites:**
- Node.js 18+ and npm
- Git configured with SSH keys

**Setup:**

git clone git@github.com:ch1ch0-FOSS/ch1ch0.me.git
cd ch1ch0.me
npm install
npm run dev

Visit `http://localhost:3000`

## Deployment

Production deployments happen automatically on push to `main` branch.

Push to local Forgejo (source of truth)
git push origin main

Mirror to GitHub (triggers Vercel deployment)
git push github main

ch1ch0.me/
├── pages/ # Next.js pages (index, about, projects)
├── components/ # Reusable React components
├── public/ # Static assets
├── styles/ # Global and component styles
└── README.md

## Features

- **Responsive Design:** Mobile-first, accessible UI
- **Auto-deployment:** Push to GitHub triggers production build
- **TypeScript:** Type-safe development
- **Performance:** HTTP/2, Vercel Edge Network

## Roadmap

- [ ] Portfolio pages (about, projects, infrastructure)
- [ ] GitHub API integration for repo showcase
- [ ] Contact form
- [ ] Analytics integration
- [ ] Blog section

## Contributing

This is a personal portfolio. Issues and suggestions welcome via GitHub Issues.

## License

MIT License - see LICENSE file for details

---

**Maintained by:** ch1ch0  
**Last Updated:** 2025-10-30

# Verified location: /mnt/data/git/ch1ch0.me
