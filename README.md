# Saclen

A modern marketing website and blog for a web development and AI automation agency.

## Overview

**Saclen** is a production-ready Next.js application that serves as the online presence for a web development and AI automation agency. The platform showcases services, captures leads through multiple conversion points, hosts a Sanity-powered blog, and integrates with third-party services for scheduling and email marketing.

**Core Value:** Helps businesses build modern websites, custom systems, and intelligent automation to scale faster and operate more efficiently.

**Who it's for:**
- Businesses seeking web development services
- Companies looking to implement AI automation
- SaaS founders needing dashboard/internal tool development
- Organizations wanting to streamline operations through custom software

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16.1.1 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3.4 |
| **UI Components** | React 19, Lucide React, Font Awesome |
| **CMS** | Sanity 4 (Headless CMS) |
| **Analytics** | Vercel Analytics |
| **Scheduling** | Cal.com Embed |
| **Forms** | Web3Forms |
| **Email Marketing** | Brevo (formerly Sendinblue) |
| **Live Chat** | Tidio |
| **Fonts** | Inter, Poppins (Google Fonts) |
| **Linting** | ESLint 9 |

## Features

- **Responsive Landing Page** - Hero section, services, testimonials, FAQ, and CTA sections
- **Blog System** - Full-featured blog with Sanity CMS, categories, authors, rich content, and table of contents
- **Lead Capture** - Contact form with Web3Forms integration and newsletter subscription via Brevo API
- **Appointment Booking** - Cal.com embedded scheduling for strategy calls
- **Cookie Consent** - GDPR-compliant cookie consent banner with localStorage persistence
- **SEO Optimized** - Dynamic metadata, Open Graph, Twitter cards, sitemap.xml, and robots.txt
- **Analytics** - Vercel Analytics integration for traffic monitoring
- **Live Chat** - Tidio integration for real-time customer support
- **Admin Dashboard** - Sanity Studio mounted at `/admin` for content management

## Project Structure

```
├── app/
│   ├── (site)/                    # Site pages (grouped layout)
│   │   ├── blog/                  # Blog listing and posts
│   │   │   ├── page.tsx           # Blog index page
│   │   │   └── [slug]/            # Dynamic blog post pages
│   │   ├── book-a-call/           # Cal.com scheduling page
│   │   ├── get-started/           # Contact form page
│   │   ├── privacy-policy/        # Legal pages
│   │   ├── terms-and-conditions/
│   │   ├── refund-policy/
│   │   ├── layout.tsx             # Site layout (Header, Footer, Tidio)
│   │   └── page.tsx               # Home page
│   ├── admin/[[...tool]]/         # Sanity Studio mount point
│   ├── api/subscribe/             # Brevo newsletter API route
│   ├── components/
│   │   ├── blog/                  # Blog-specific components (TOC, AI summary)
│   │   ├── layout/                # Header, Footer
│   │   ├── sections/              # Page sections
│   │   │   ├── home/              # Home page sections
│   │   │   └── shared/            # Reusable sections (CTA, FAQ, etc.)
│   │   └── ui/                    # UI primitives (Container, CookieConsent)
│   ├── globals.css                # Global styles & Tailwind
│   ├── layout.tsx                 # Root layout (Analytics, Fonts)
│   ├── not-found.tsx              # 404 page
│   ├── robots.ts                  # robots.txt generation
│   └── sitemap.ts                 # sitemap.xml generation
├── lib/
│   ├── sanityClient.ts            # Sanity client configuration
│   └── sanity.queries.ts          # GROQ queries
├── public/                        # Static assets
│   ├── ai/                        # AI-related images
│   ├── logos/                     # Client/partner logos
│   ├── video/                     # Video assets
│   ├── favicon.ico
│   ├── hero-video-poster.webp
│   └── logo.webp
├── sanity/                        # Sanity configuration
│   ├── schemaTypes/               # Content schemas (post, author, category)
│   ├── lib/                       # Sanity client utilities
│   ├── env.ts                     # Sanity environment config
│   └── structure.ts               # Studio structure customization
├── sanity.config.ts               # Sanity Studio config
├── sanity.cli.ts                  # Sanity CLI config
├── tailwind.config.js             # Tailwind customization
├── next.config.ts                 # Next.js configuration
└── package.json
```

## Getting Started

### Prerequisites

- **Node.js** - Version 18.x or higher (20.x recommended)
- **npm** - Comes with Node.js
- **Sanity Account** - For CMS (free tier available at [sanity.io](https://sanity.io))
- **Brevo Account** - For email subscriptions (free tier available at [brevo.com](https://brevo.com))

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd saclen
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (see next section)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Brevo (formerly Sendinblue) - Email Newsletter
BREVO_API_KEY=your_brevo_api_key_here
BREVO_LIST_ID=your_brevo_list_id

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-13
```

**Variable Descriptions:**

| Variable | Required | Description |
|----------|----------|-------------|
| `BREVO_API_KEY` | Yes | API key from Brevo (Settings → SMTP & API → API Keys) |
| `BREVO_LIST_ID` | Yes | ID of the contact list in Brevo (found in Contacts → Lists) |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Yes | Your Sanity project ID (from sanity.io/manage) |
| `NEXT_PUBLIC_SANITY_DATASET` | Yes | Usually `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | No | API version date (defaults to `2026-01-13`) |

### Running Locally

```bash
# Development server (hot reload)
npm run dev

# Build for production (test locally)
npm run build
npm start

# Run ESLint
npm run lint
```

## Build & Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

The build output goes to `.next/` directory.

## Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Add environment variables** in Vercel Dashboard → Settings → Environment Variables
3. **Deploy** - Vercel auto-deploys on push to main branch

### Environment Variables on Vercel

Add these in your Vercel project settings:

- `BREVO_API_KEY` → Production
- `BREVO_LIST_ID` → Production
- `NEXT_PUBLIC_SANITY_PROJECT_ID` → Production
- `NEXT_PUBLIC_SANITY_DATASET` → Production

### Sanity CORS Configuration

Add your production domain to Sanity's CORS origins:
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project → API → CORS Origins
3. Add: `https://your-domain.com` and `http://localhost:3000`

## Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start development server on `localhost:3000` |
| `build` | `npm run build` | Create production build |
| `start` | `npm start` | Start production server |
| `lint` | `npm run lint` | Run ESLint on the codebase |

## Customization Guide

### Changing UI/Colors

**Primary Color:** Edit `tailwind.config.js`
```javascript
colors: {
  primary: "#8ff23d",  // Change this hex code
}
```

**Global Styles:** Edit `app/globals.css`

### Adding/Editing Content

**Blog Posts:** Visit `/admin` when running locally to access Sanity Studio

**Home Page Sections:** Edit files in `app/components/sections/home/`

**Navigation:** Edit `app/components/layout/Header.tsx`

**Footer:** Edit `app/components/layout/Footer.tsx`

**FAQ Content:** Edit `app/components/sections/shared/FAQSection.tsx`

**CTA Sections:** Edit `app/components/sections/shared/CTASection.tsx`

### Updating Metadata

Edit `app/layout.tsx` - update the `metadata` object:
```typescript
export const metadata: Metadata = {
  title: {
    default: "Your Site Name",
    template: "%s — Your Site Name",
  },
  description: "Your description",
  // ... rest of metadata
};
```

### Adding New API Routes

Create new files in `app/api/` following Next.js App Router conventions. Example: `app/api/new-route/route.ts`

### Sanity Schema Changes

1. Edit files in `sanity/schemaTypes/`
2. Run `npx sanity deploy` to deploy studio changes (if using Sanity's hosting)

## Common Issues & Fixes

### Issue: Sanity images not loading
**Fix:** Check that `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` are correct. Verify CORS origins in Sanity dashboard.

### Issue: Brevo subscription not working
**Fix:** Verify `BREVO_API_KEY` is valid and `BREVO_LIST_ID` corresponds to an existing list in your Brevo account.

### Issue: Cal.com calendar not showing
**Fix:** The calendar uses `sameerrahman/schedule` by default. Update the `calLink` prop in `app/(site)/book-a-call/page.tsx`.

### Issue: Tidio chat not appearing
**Fix:** Check the Tidio script URL in `app/(site)/layout.tsx`. The current embed URL should match your Tidio account.

### Issue: Build fails with TypeScript errors
**Fix:** Run `npm run lint` to identify issues. Check that all imports use the `@/` path alias correctly.

### Issue: Styles not applying
**Fix:** Ensure Tailwind content paths in `tailwind.config.js` include your component files.

## Future Improvements

- [ ] Add i18n (internationalization) support
- [ ] Implement search functionality for blog posts
- [ ] Add newsletter archive page
- [ ] Integrate with more analytics tools (Plausible, Fathom)
- [ ] Add storybook for component documentation
- [ ] Implement dark mode toggle
- [ ] Add E2E tests with Playwright
- [ ] Set up CI/CD pipeline with GitHub Actions

## License

Private - All rights reserved.

---

**Questions?** Check the [Next.js Documentation](https://nextjs.org/docs) or [Sanity Documentation](https://www.sanity.io/docs).