# Font Configuration

This project uses premium fonts for a luxurious, high-end real estate aesthetic.

## Fonts Used

### 1. **Argesta Display** (Titles/Headings)
- **Type:** Premium serif display typeface
- **Characteristics:** Elegant, sophisticated, luxury feel
- **Usage:** Headings, titles, and hero text
- **Weights:** 400 (Regular), 500 (Medium), 700 (Bold)
- **Variable:** `--font-argesta`
- **Source:** Custom font (requires font files)
- **Fallback:** Georgia, serif

### 2. **Montserrat** (Body Text)
- **Type:** Geometric sans-serif typeface
- **Characteristics:** Clean, modern, highly readable
- **Usage:** Body text, paragraphs, buttons, and UI elements
- **Weights:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- **Variable:** `--font-montserrat`
- **Source:** Google Fonts (automatically optimized)

## Usage in Code

### CSS Variables
```css
--font-heading: var(--font-argesta)       /* For headings/titles */
--font-sans: var(--font-montserrat)       /* For body text (default) */
```

### Tailwind Classes
You can use these fonts in your components:

```tsx
// Using Argesta Display (via font-heading)
<h1 className="font-heading text-4xl font-bold">Luxury Heading</h1>

// Using Montserrat (default body font)
<p className="text-base">Body text content</p>

// Or use CSS variables directly
<div style={{ fontFamily: 'var(--font-argesta)' }}>Custom heading</div>
```

### Custom Classes Available
```css
.font-heading  /* Applies Argesta Display */
.font-body     /* Applies Montserrat */
```

## Implementation Details

### Argesta Display (Custom Local Font)
Loaded from local font files in `public/fonts/`:

```tsx
import localFont from "next/font/local";

const argestaDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/ArgestaDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ArgestaDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ArgestaDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-argesta",
  display: "swap",
  fallback: ["Georgia", "serif"],
});
```

### Montserrat (Google Font)
Loaded through Next.js's built-in Google Fonts optimization:

```tsx
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
```

## Benefits

1. **Performance:** Next.js automatically optimizes fonts with zero layout shift
2. **Luxury Aesthetic:** Argesta Display provides an elegant, high-end feel
3. **Readability:** Montserrat ensures excellent legibility across all devices
4. **Modern & Classic:** Perfect blend of contemporary and timeless design
5. **Font Display Swap:** Ensures text is visible during webfont load
6. **Graceful Fallback:** Georgia provides similar elegance while Argesta Display loads

## Font Pairing Strategy

- **Hero Titles:** Argesta Display Bold (dramatic, attention-grabbing)
- **Section Headings:** Argesta Display Medium/Regular (elegant, refined)
- **Body Text:** Montserrat Regular (clean, comfortable reading)
- **Buttons/CTAs:** Montserrat Semi-Bold/Bold (clear, actionable)
- **Captions:** Montserrat Light/Regular (subtle, informative)

This combination creates a premium, luxury real estate aesthetic with:
- **Argesta Display** conveying exclusivity and sophistication
- **Montserrat** providing modern clarity and readability

## ✅ Argesta Display Font Files - INSTALLED

**Status:** All Argesta font files are now installed and active!

Installed font weights:
```
public/fonts/
├── Argesta Hairline.otf           (200 - Extra Light)
├── Argesta Hairline Italic.otf    (200 - Extra Light Italic)
├── Argesta Text.otf               (400 - Regular)
├── Argesta Text Italic.otf        (400 - Regular Italic)
├── Argesta Display.otf            (500 - Medium)
├── Argesta Display Italic.otf     (500 - Medium Italic)
├── Argesta Headline.otf           (600 - Semi-Bold)
├── Argesta Headline Italic.otf    (600 - Semi-Bold Italic)
└── Argesta Text Bold.otf          (700 - Bold)
```

### Available Font Weights

You can now use the full range of Argesta weights:

- `font-extralight` (200) - Hairline variant, very delicate
- `font-normal` (400) - Text variant, standard reading weight
- `font-medium` (500) - Display variant, perfect for headings
- `font-semibold` (600) - Headline variant, bold headlines
- `font-bold` (700) - Text Bold, strong emphasis

All weights include italic variants (except Bold).

See `public/fonts/README.md` for usage examples.

