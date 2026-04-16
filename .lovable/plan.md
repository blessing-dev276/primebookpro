

# PrimebookPro — Immersive One-Page Experience

## Overview
A futuristic, immersive single-page website for PrimebookPro that breaks conventional landing page patterns. Think high-end product launch meets experimental digital art — layered depth, motion, glow effects, and cursor-driven interactions.

## Theme System
- Light/dark mode toggle (top-right) with smooth CSS transition (0.5s on all color variables)
- **Light**: white + sky blue (#0EA5E9) + soft glows
- **Dark**: deep navy (#0a0e1a) + neon sky blue highlights
- Animated transition between modes (not instant)

## Visual Identity
- **PrimebookPro** wordmark: thin, wide-spaced uppercase letters with subtle glow
- Motto: "Making Your Book Stand Out in a Noisy World"

## Design System
- Glassmorphism panels (backdrop-blur, semi-transparent backgrounds, subtle borders)
- Soft neon glow effects using box-shadow with sky blue
- Floating animated particles background (canvas-based or CSS)
- Controlled asymmetry — elements slightly off-grid
- Cursor-reactive elements (parallax tilt on hover via mouse tracking)

## Sections

### 1. Immersive Full-Screen Hero
- Staggered letter-by-letter headline animation: "Your Book Deserves Attention. Not Silence."
- Floating keyword fragments drifting in background (visibility, ranking, readers, discovery)
- Glowing CTA button: "Start Visibility Audit"
- Animated scroll-down indicator (bouncing chevron with fade)

### 2. Reality Shift (Before/After)
- Split-screen with scroll-triggered reveal
- Left (dimmed, desaturated): "Invisible book" — faded, low contrast
- Right (glowing, vibrant): "Positioned book" — neon highlights
- Animated divider that shifts as user scrolls into view

### 3. Interactive Solution Modules
- Three floating glass cards with 3D tilt on cursor hover (CSS perspective transform)
- Services: Listopia Placement, Ranking Boost, Discovery Positioning
- Hover: neon border glow + slight scale + tilt effect
- Cards arranged with slight asymmetric offset

### 4. Dynamic Timeline (How It Works)
- Scroll-triggered step reveals using Intersection Observer
- Connecting animated line that draws as you scroll
- Each step fades + slides in with staggered timing
- Steps: Submit Book → Analysis → Strategic Placement → Results

### 5. Premium Pricing Cards
- Three floating cards with 3D depth (box-shadow layers)
- Starter ($80), Growth ($120), Domination ($150)
- Middle card elevated + glowing pulse border animation
- Hover lift effect on all cards

### 6. Living Social Proof
- Testimonials as floating chat-bubble-style cards with slight bob animation
- Animated count-up counters (books positioned, authors helped, visibility increase %)
- Staggered entrance animations

### 7. Glass Form Panel
- Frosted glass panel with backdrop-blur
- Fields: Name, Email, Book Title, Book Link
- Input focus: neon glow border animation
- CTA: "Get My Visibility Audit" with glow pulse

### 8. Strong Closing Statement
- Large typography: "If Readers Can't Find You, They Can't Choose You."
- Final glowing CTA button with continuous subtle pulse
- Fade-to-dark/light gradient at bottom

## Micro-Interactions & Motion
- Framer Motion for all scroll-triggered animations, staggered reveals, and hover effects
- Mouse-tracking parallax on hero and cards (react to cursor position)
- Slow-moving gradient background (CSS animated gradient or particles)
- Button hover: neon glow expansion
- Section transitions: slide + fade + slight scale

## Typography
- Modern geometric sans-serif (Inter for body, with wide letter-spacing on headings for futuristic feel)
- Strong size hierarchy: hero text ~4-5rem, section headings ~2.5rem
- Generous spacing throughout for premium feel

## Technical Approach
- Single Index page with all sections as components
- Framer Motion for animations
- Custom React hooks for mouse tracking and scroll position
- CSS custom properties for theme switching with transition
- Intersection Observer for scroll-triggered animations
- All client-side, no backend needed

