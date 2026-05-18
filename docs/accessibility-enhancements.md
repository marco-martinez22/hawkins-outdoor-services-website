# Accessibility Enhancements — Roadmap for an Agent

This document lists prioritized, actionable accessibility improvements for the Hawkins Outdoor Services website. Each item contains a short description, suggested files to change, acceptance criteria, estimated effort, and implementation notes an autonomous agent can follow.

Overview
- Location: root `index.html`, `css/styles.css`, `js/main.js`.
- Goal: Make the mobile navigation and site controls accessible by keyboard and screen reader, improve focus management, and respect user motion preferences.

Priority: High
1) Focus trap & restore focus for mobile navigation
- Why: When the mobile menu opens, keyboard and screen-reader users must not be able to tab to content behind the overlay. Focus should move into the menu and be restored after close.
- Files: `js/main.js`, small CSS in `css/styles.css`
- Acceptance criteria:
  - When the menu opens, focus moves to the first interactive menu item (or the close button).
  - Tab/Shift+Tab cycles within the menu only.
  - Pressing Escape closes the menu and returns focus to the toggle button.
  - No keyboard focusable element outside the menu is reachable while the menu is open.
- Estimated effort: 2–3 hours
- Implementation notes:
  - Implement a focus trap: save previously focused element, query all focusable elements inside `.nav__links`, and on Tab/Shift+Tab wrap focus.
  - Add Escape key handler to close the menu.
  - On close, call `previouslyFocused.focus()`.
  - Keep aria-expanded updates and `no-scroll` toggle.
  - Prefer a small, tested helper (IIFE) inside `js/main.js` rather than adding dependencies.

Priority: High
2) ARIA roles and attributes for the nav
- Why: Clarify semantics for assistive tech (screen readers) and treat menu as a dialogue or mobile menu properly.
- Files: `index.html`, `js/main.js`
- Acceptance criteria:
  - Toggle button has `aria-controls` referencing the menu element id.
  - Menu container includes `role="menu"` or `role="dialog"` with `aria-modal="true"` when open (use dialog if focus trap implemented).
  - Menu items use `role="menuitem"` (if using role=menu) or remain links (if role=dialog) depending on approach.
  - Screen readers announce menu open/close via `aria-expanded` and/or aria-live if needed.
- Estimated effort: 1 hour
- Implementation notes:
  - Add `id` to `<ul class="nav__links">` (e.g., `id="main-nav"`) and set `aria-controls="main-nav"` on the toggle.
  - If implementing focus trap, treat the menu as a dialog: add `role="dialog" aria-modal="true" aria-labelledby="nav-label"`.

Priority: Medium
3) Keyboard accessible hamburger with visual focus styles
- Why: Visually indicate focus and ensure full keyboard operability.
- Files: `css/styles.css`, `index.html`
- Acceptance criteria:
  - The toggle button is reachable via Tab and shows a visible focus ring (high contrast) that meets WCAG contrast for focus indicators.
  - Each menu link shows a visible focus state when tabbed.
- Estimated effort: 30–60 minutes
- Implementation notes:
  - Create a focused state for `.nav__toggle:focus` and `.nav__links a:focus` using an outline or box-shadow with sufficient contrast.

Priority: Medium
4) Respect prefers-reduced-motion
- Why: Users with vestibular disorders can be harmed by motion-heavy UI.
- Files: `css/styles.css`
- Acceptance criteria:
  - When `prefers-reduced-motion: reduce` is set, transitions for the menu and hamburger should be reduced or removed.
- Estimated effort: 15–30 minutes
- Implementation notes:
  - Wrap animation rules in `@media (prefers-reduced-motion: no-preference)` or add overrides that set `transition: none` when `reduce` is active.

Priority: Medium
5) Skip-to-content link
- Why: Keyboard users should be able to jump directly to the main content.
- Files: `index.html`, `css/styles.css`
- Acceptance criteria:
  - An off-screen link appears on keyboard focus: `<a class="skip-link" href="#main">Skip to content</a>`.
  - The link is first in the DOM and becomes visible when focused.
- Estimated effort: 15–30 minutes

Priority: Low
6) Add `aria-hidden` toggling for background content
- Why: Screen readers may still access content behind a modal/menu when it's visually hidden.
- Files: `index.html`, `js/main.js`
- Acceptance criteria:
  - When the menu opens, main content (`<main>`) and other regions have `aria-hidden="true"` or are inert (if supported).
  - On close, `aria-hidden` is removed.
- Estimated effort: 30–45 minutes
- Implementation notes:
  - Use `document.querySelectorAll('main, header:not(.nav), footer')` and set `aria-hidden` while menu is open.
  - Alternatively, add `inert` if polyfilled/desired.

Priority: Low
7) Ensure color contrast & visible focus for form errors
- Why: Form error messages and focused inputs must meet contrast and be programmatically linked to their inputs.
- Files: `css/styles.css`, `js/main.js`
- Acceptance criteria:
  - Error text color contrast meets WCAG AA (contrast ratio >= 4.5:1) on relevant backgrounds.
  - Inputs with errors have `aria-invalid="true"` and the related error `<span>` is linked via `aria-describedby`.
- Estimated effort: 45–90 minutes

Testing checklist (for agent or human)
- Automated:
  - Run Lighthouse accessibility audit and capture the report (CLI or DevTools).
  - Run axe-core (CLI or browser extension) and report failures.
- Manual checks:
  - Keyboard navigation: Tab through page, open menu, Tab cycles inside menu, Escape closes and focus restores.
  - Screen reader smoke test (NVDA/VoiceOver): Announce of menu, toggle state, and when menu opens reads controlled content.
  - Reduced motion: verify no unexpected animation.

Implementation order recommendation
1. Focus trap + Escape close + focus restore (High).
2. aria-controls / role dialog + id on nav (High).
3. Focus styles + skip link + reduced motion (Medium).
4. aria-hidden/inert for background + form error ARIA (Low).

Notes for the agent
- Keep changes minimal and additive. Prefer small, well-scoped JS helper functions in `js/main.js` and small CSS additions in `css/styles.css`.
- Add unit-like acceptance checks (console warnings) where appropriate so a follow-up run can assert behaviors.
- Provide a short PR description that lists the automated checks added and the manual testing steps.

End of document
