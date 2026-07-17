# Build & Deployment Status

**Last Updated:** 2026-07-17
**Latest Commit:** `f2f8292` — Fix counter jumping to final value

**Build Status:** ✅ SUCCESSFUL  
**Current Issues:** None  
**Ready for Deployment:** Yes
**Live:** https://1-six-beige.vercel.app

---

## Build & Error Summary

| Item | Status | Notes |
|------|--------|-------|
| **Compilation** | ✅ Pass | No TypeScript errors |
| **Build Output** | ✅ Pass | Single-file Vite build, ~365KB |
| **Preloader** | ✅ Working | Pure CSS animation, no JS timing |
| **Counter Animation** | ✅ Fixed | Delayed start synced with preloader |
| **Gallery** | ✅ Working | GSAP-powered parallax, zoom, text reveal |
| **Mobile Scroll** | ✅ Fixed | Gallery doesn't block page scroll |
| **Footer** | ✅ Updated | Copyright, credits, phone numbers |
| **Console Errors** | ✅ None | Clean console |

---

## Tech Stack

- **React** 19.2.6
- **Vite** 7.3.2
- **Tailwind CSS** 4.1.17
- **TypeScript** 5.9.3
- **GSAP** 3.12.7 (gallery animations)
- **Lenis** 1.3.25 (smooth scroll)
- **Framer Motion** 12.42.2

---

## Changes Made (2026-07-17)

### Preloader
- Removed broken JS-based preloader (RAF/interval issues with React StrictMode)
- Replaced with **pure CSS animation** — gold gradient bar fills over 2s, "Kerala Heritage" text fades in
- Component removed from DOM after 3.2s via single `setTimeout`
- No `requestAnimationFrame`, no state updates during animation

### Hero Counter (₹1,10,000)
- **Problem:** Counter jumped to final value before page was visible
- **Fix:** `AnimatedCounter` now accepts `start` prop — Hero passes `start={true}` with `delay={3600}` to sync with preloader
- Below-fold counters (Details, Investment) still use IntersectionObserver
- Duration: 2640ms (20% slower than original 2200ms)

### Gallery (GSAP Rewrite)
- **Horizontal scroll:** `gsap.ticker` + `requestAnimationFrame` with 0.09 lerp
- **Parallax:** `gsap.set(img, { x, scale, opacity })` — no layout thrashing
- **Hover zoom:** `gsap.to(img, { scale: 1.08 })` — tracked per-image, killed before new tween
- **Text reveal:** CSS class toggle (`gallery__text--visible`) with staggered blur/fade/slide (0s/0.12s/0.24s delays)
- **Image entrance:** `gsap.fromTo` staggered 0.08s when images scroll into view
- **Infinite scroll:** Clone items, wrap position at `singleSetWidth`
- **Arrow buttons:** `targetRef` (ref) accessible from click handlers

### Gallery Images
- Removed old images (01_ayurvedic.jpg through 10_plantation.jpg)
- Added 10 new images (1 (1).jpg through 1 (10).jpg)
- Creative descriptions for each: AGARLAND SERENE WOODS, THE PLANTATION SUITE, GLASS PAVILION, THE GREEN BATH, THE WEDDING FEAST, MOONLIT MANDAPAM, THE LANTERN PATH, THE GHATS AT DAWN, THE JAHAJ, TROPICAL MODERN

### Mobile Fix
- **Touch swipe detection:** Determines horizontal vs vertical on first 8px of movement
- **Vertical swipe:** Passes through for page scrolling
- **Horizontal swipe:** Controls gallery scroll
- **Lenis:** Not disabled on mobile (`window.innerWidth < 768`) — page scrolls naturally past gallery
- **Wheel:** Vertical wheel events pass through on mobile

### Footer
- Copyright: © 2026 Norman James. All rights reserved.
- Credits: MADE WITH LOVE ♥ BY EMPATHY STUDIO & Phasing East Hospitality
- Phone: +91 98332 74308 / +91 98332 74305 / +91 79943 97927
- Heart symbol (♥) in red (#e74c3c)
- All caps via `text-transform: uppercase`
- Centered layout, larger font (12px), brighter color

### Amenities
- Changed "Nine Amenities" to "many Amenities"

### Back to Top
- Fixed jerky scroll — now uses Lenis `scrollTo(0, { duration: 1.8 })` instead of `window.scrollTo`

### Site Content Transition
- Preloader fades out (CSS animation at 2.4s)
- Site content fades in (`opacity 0→1` over 1.4s with expo easing)
- Hero elements reveal with staggered delays

---

## Git History

| Commit | Message |
|--------|---------|
| `f2f8292` | Fix counter jumping to final value - delay start until after preloader |
| `dd532fd` | Restore preloader - pure CSS animation, no JS timing issues |
| `5dcc42d` | Fix mobile gallery blocking page scroll |
| `b87eb7a` | Add GSAP dependency for gallery animations |
| `b515a97` | Update gallery with new images, GSAP animations, footer, preloader |
| `5a58b81` | Update gallery with 9 work-gallery images from AGRALAND |
| `b54c9a3` | Add Lenis 1.3.24 smooth scroll to all projects |

---

## Remote

- **GitHub:** `https://github.com/mailpixelarts-create/kerala-heritage-sites.git`
- **Branch:** `master`
- **Push Status:** Up to date

---

## Vercel Deployment

- **Project 1:** https://1-six-beige.vercel.app (LIVE)
- **Project 2:** https://2-phi-inky.vercel.app (READY)
- **Scope:** pixelart-projects

---

## Files Modified

| File | Changes |
|------|---------|
| `src/App.tsx` | Preloader integration, site-content fade |
| `src/components/Preloader.tsx` | Rewritten — pure CSS animation |
| `src/components/Gallery.tsx` | Full GSAP rewrite — parallax, zoom, text reveal |
| `src/components/Hero.tsx` | Counter delay synced with preloader |
| `src/components/Amenities.tsx` | "Nine" → "many" |
| `src/components/Footer.tsx` | Copyright, credits, phone numbers |
| `src/components/BackToTop.tsx` | Lenis scrollTo for smooth scroll |
| `src/utils/AnimatedCounter.tsx` | Added `start` prop, removed IntersectionObserver for hero |
| `src/index.css` | Preloader CSS, gallery text reveal, footer styles |
| `package.json` | Added GSAP dependency |
| `public/images/` | Removed 9 old, added 10 new images |
