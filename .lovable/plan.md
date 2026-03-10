

## Mobile Optimization Plan

After reviewing the codebase, here are the key mobile issues and fixes needed:

### Issues Found

1. **Hero section**: `min-h-[85vh]` is too tall on mobile; slide images hidden on mobile (`hidden md:flex`); nav arrows overlap content on small screens; text sizes too large for small screens
2. **Navigation**: Mobile menu has `max-h-96` which cuts off long menus; no smooth open/close animation; phone button text overflows on small screens
3. **Footer**: 5-column grid (`md:grid-cols-5`) collapses poorly — too cramped on tablets, too long on mobile
4. **PortfolioSection**: Complex dialog modals and grid layouts not optimized for touch/mobile
5. **TestimonialsSection**: Video cards with `aspect-[4/5]` are very tall on mobile; heading `text-5xl md:text-6xl` is huge
6. **Blog meta info**: Author, date, read-time shown inline — wraps awkwardly on mobile
7. **Chat widget**: May overlap with nav arrows and bottom indicators on mobile
8. **Global CSS**: `App.css` has `#root { max-width: 1280px; padding: 2rem }` which adds unnecessary padding and constrains width
9. **Touch targets**: Slide indicator dots (`h-3 w-3`) are too small for mobile tap targets (minimum 44px recommended)

### Implementation Plan

**1. Fix App.css** — Remove the `#root` max-width and padding that constrains the layout

**2. Hero Mobile Optimization**
- Reduce `min-h` to `min-h-[70vh]` on mobile
- Show a smaller version of slide images on mobile instead of hiding them
- Make nav arrows smaller on mobile (`w-10 h-10`) and position them lower
- Increase slide indicator touch targets to 44px tap area
- Reduce heading to `text-2xl` on mobile

**3. Navigation Mobile Improvements**
- Remove `max-h-96` cap on mobile menu (use `max-h-[80vh]` with scroll)
- Add smooth slide animation for menu open/close
- Make phone number clickable with `tel:` link
- Ensure all tap targets are minimum 44px

**4. Footer Mobile Layout**
- Change grid to `grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5`
- Add proper spacing between columns on mobile

**5. Testimonials Mobile Fix**
- Reduce video aspect ratio on mobile: `aspect-[3/4] sm:aspect-[4/5]`
- Scale down heading: `text-3xl sm:text-4xl md:text-5xl`
- Stack case study section vertically on mobile

**6. Blog Section Mobile**
- Wrap meta info to stack vertically on small screens
- Ensure card images don't overflow

**7. Chat Widget Position**
- Add `safe-area-inset` padding for notched phones
- Ensure it doesn't overlap slide indicators

**8. Global Touch & Accessibility**
- Add `viewport-fit=cover` to index.html meta viewport
- Ensure all interactive elements meet 44px minimum touch target
- Add `-webkit-tap-highlight-color: transparent` to prevent flash on tap

### Files to Edit
- `src/App.css`
- `src/components/Hero.tsx`
- `src/components/Navigation.tsx`
- `src/components/Footer.tsx`
- `src/components/TestimonialsSection.tsx`
- `src/components/BlogSection.tsx`
- `src/components/PortfolioSection.tsx`
- `index.html` (viewport meta)

