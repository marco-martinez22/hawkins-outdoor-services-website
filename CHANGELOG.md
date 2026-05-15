# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.0.0] — 2026-05-15

### Added

- **Single-page website** (`index.html`) with 5 content sections + navigation + footer
  - Hero section with full-screen gradient, tagline, and "Get a Free Quote" CTA
  - Services section with 6 cards: Lawn Maintenance, Landscape Design, Hardscaping, Tree Care, Seasonal Cleanup, Irrigation Systems
  - Gallery section with 3 before/after pairs using gradient placeholder images
  - Reviews section with 3 testimonial cards and Google Reviews call-to-action button
  - Contact section with phone (`(555) 123-4567`), email (`info@hawkinsoutdoor.com`), service area, and validated contact form
  - Fixed nav with mobile hamburger toggle and scroll-based styling
  - Footer with brand, nav links, and copyright

- **Responsive stylesheet** (`css/styles.css`, 646 lines)
  - Mobile-first responsive grid layouts (1/2/3 columns adapting at 480px, 768px, 1024px)
  - CSS custom properties for all design tokens
  - Hover/transition effects on cards, buttons, and links
  - Form validation styling (error states, focus states)

- **JavaScript** (`js/main.js`, 101 lines)
  - Mobile nav toggle with `aria-expanded` accessibility
  - Nav scroll effect (adds shadow on scroll)
  - Contact form validation (name, email, message) with inline error messages and success state

- **SEO infrastructure**
  - Meta description, keywords, and `robots` tag
  - Open Graph and Twitter Card meta tags
  - Canonical URL tag
  - JSON-LD `LocalBusiness` structured data
  - `robots.txt` allowing all crawlers
  - `sitemap.xml` with single URL entry

- **Configuration**
  - `.gitignore` for OS and editor artifacts
  - `images/` directory ready for photo assets

### Design

- Color palette: deep green `#2D5A27`, warm beige `#F5F0E8`, gold accent `#D4A843`
- System font stack for fast loading (no external dependencies)
- Staggered section backgrounds (light/dark) for visual rhythm
- Smooth scrolling and scroll-padding for fixed nav offset
- `scroll-behavior: smooth` for anchor link navigation
