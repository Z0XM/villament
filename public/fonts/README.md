# Fonts Directory

## ✅ Installed Argesta Font Files

The following Argesta font files are installed and configured:

```
public/fonts/
├── Argesta Hairline.otf           (weight: 200)
├── Argesta Hairline Italic.otf    (weight: 200, italic)
├── Argesta Text.otf               (weight: 400, regular)
├── Argesta Text Italic.otf        (weight: 400, italic)
├── Argesta Display.otf            (weight: 500)
├── Argesta Display Italic.otf     (weight: 500, italic)
├── Argesta Headline.otf           (weight: 600)
├── Argesta Headline Italic.otf    (weight: 600, italic)
└── Argesta Text Bold.otf          (weight: 700)
```

## Font Weight Mapping

The Argesta font family is now available with multiple weights:

- **200 (Extra Light)**: Argesta Hairline - Delicate, refined
- **400 (Regular)**: Argesta Text - Standard body weight
- **500 (Medium)**: Argesta Display - Display/heading weight
- **600 (Semi-Bold)**: Argesta Headline - Bold headlines
- **700 (Bold)**: Argesta Text Bold - Strong emphasis

## Usage in Components

You can now use different font weights in your components:

```tsx
// Extra light (Hairline)
<h1 className="font-heading font-extralight">Delicate Title</h1>

// Regular (Text)
<h2 className="font-heading font-normal">Regular Heading</h2>

// Medium (Display) - Default for headings
<h2 className="font-heading font-medium">Display Heading</h2>

// Semi-bold (Headline)
<h1 className="font-heading font-semibold">Bold Headline</h1>

// Bold (Text Bold)
<h1 className="font-heading font-bold">Strong Title</h1>
```

## Status

✅ **All Argesta fonts are loaded and ready to use!**

The fonts are automatically applied to all headings (h1-h6) and can be used anywhere with the `font-heading` class.

