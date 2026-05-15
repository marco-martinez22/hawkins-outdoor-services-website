# AGENTS.md — Hawkins Outdoor Services Website

## Repo Purpose

Static marketing website for **Hawkins Outdoor Services**, a professional landscaping business. Designed to generate leads, showcase work, build trust through reviews, and rank well in local search.

## Tech Stack

- **Language**: Vanilla HTML5, CSS3, JavaScript (ES5+)
- **Dependencies**: None — zero external libraries or frameworks
- **Design approach**: Mobile-first responsive, no CSS preprocessors
- **Font stack**: System fonts (`-apple-system, BlinkMacSystemFont, 'Segoe UI', ...`) — no external font loads

## Architecture

Single-page website (`index.html`) with anchor-linked sections.

```
hawkins-outdoor-services-website/
├── index.html          # All content
├── css/styles.css      # All styles
├── js/main.js          # All JavaScript
├── images/             # Photo assets (empty, ready for images)
├── robots.txt          # Crawler configuration
├── sitemap.xml         # XML sitemap
├── CHANGELOG.md        # Project changelog
├── AGENTS.md           # This file
└── .gitignore          # Git ignore rules
```

### Section Layout (in order)

| # | Section | ID | Content |
|---|---|---|---|
| 1 | Nav | (fixed) | Sticky bar — Services, Gallery, Reviews, Contact |
| 2 | Hero | `#hero` | Heading, subtitle, CTA → `#contact` |
| 3 | Services | `#services` | 6 card grid with SVG icons |
| 4 | Gallery | `#gallery` | 3 before/after figure pairs |
| 5 | Reviews | `#reviews` | 3 blockquote cards + Google Reviews link |
| 6 | Contact | `#contact` | Info + validated form (2-column) |
| 7 | Footer | (none) | Brand, nav links, copyright |

## Design Tokens

Defined as CSS custom properties in `:root`:

```
--green:       #2D5A27
--green-dark:  #1E3D1A
--green-light: #4A7A42
--beige:       #F5F0E8
--gold:        #D4A843
--gold-dark:   #B8922E
--white:       #FFFFFF
--text:        #2C2C2C
--text-light:  #6B6B6B
--bg-light:    #F9F7F3
--shadow:      0 4px 24px rgba(0,0,0,0.08)
--radius:      12px
--max-width:   1200px
```

### Breakpoints

| Device | Max Width | Layout Changes |
|---|---|---|
| Mobile small | 480px | Narrower padding, smaller hero font |
| Mobile/tablet | 768px | Nav becomes hamburger, 1-column grids |
| Tablet | 1024px | 2-column service/review grids |
| Desktop | >1024px | 3-column service/review grids, 2-column contact |

## SEO Setup

- **On-page**: Descriptive `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<meta name="robots">`, canonical URL
- **Social**: Open Graph (`og:title`, `og:description`, `og:type`, `og:url`, `og:locale`) and Twitter Card meta tags
- **Structured data**: JSON-LD `@type: LocalBusiness` with name, phone, email, hours, price range, service area
- **Semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<blockquote>`, `<cite>`, `<footer>` used throughout
- **Heading hierarchy**: Single `<h1>` in hero, `<h2>` per section, `<h3>` per service card
- **Accessibility**: `aria-label` on nav, `aria-expanded` on mobile toggle, `role="alert"` on form errors, `role="status"` on success message, `aria-hidden="true"` on decorative SVGs
- **External link safety**: Google Reviews link uses `target="_blank" rel="noopener noreferrer"`
- **Files**: `robots.txt` allows all with sitemap link; `sitemap.xml` with single URL entry

## Placeholder Content to Replace

Before going live, update these placeholders:

1. **Gallery images** — Replace gradient backgrounds on `.gallery-pair__image--*` with actual before/after photos
2. **Google Reviews link** — In `index.html`, replace `placeid=PLACEHOLDER` with actual Google Place ID
3. **Domain** — Currently set to GitHub Pages URL (`https://marco-martinez22.github.io/hawkins-outdoor-services-website/`). Update in canonical URL, JSON-LD, `robots.txt`, and `sitemap.xml` if you move to a custom domain
4. **Contact info** — Update phone number and email to real business details
5. **Branding** — Optionally replace the green/gold color scheme; add real logo

## Hosting Notes

This site is intentionally dependency-free for maximum portability:

- **WordPress**: Paste `index.html` content into a Page or use a plugin like "Insert HTML Snippet"
- **Google Sites**: Use "Embed" → "Embed code" with the full HTML
- **Static host**: Deploy the repo folder directly to Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any S3 bucket
- **No build step required** — open `index.html` in a browser to preview

## Conventions for Future Work

- Class names use BEM-like convention: `.block__element--modifier`
- JavaScript uses IIFE pattern to avoid global scope pollution
- All colors use the custom properties from `:root`
- Add new sections as `<section id="name">` inside `<main>` and link them from the nav
- Place reusable SVGs inline in the HTML (not in separate files) to avoid extra HTTP requests
- Keep external dependencies at zero unless absolutely necessary
