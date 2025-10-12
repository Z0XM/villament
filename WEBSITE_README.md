# The Villament - Luxury Living Website

A beautiful, modern website for The Villament luxury residential project in Dharwad, Karnataka.

## 🎨 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Elegant gold theme with smooth animations and transitions
- **Single-Page Navigation**: Smooth scroll navigation between sections
- **Image Gallery**: Interactive gallery with lightbox modal
- **Contact Form**: Functional contact form with validation
- **Premium Components**:
  - Sticky navigation with mobile menu
  - Hero section with CTAs
  - About section with highlights
  - Amenities grid with icons
  - Floor plans showcase
  - Photo gallery
  - Location details with map placeholder
  - Contact form and information
  - Comprehensive footer

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or compatible
- pnpm (or npm/yarn)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm run build
pnpm start
```

## 📁 Project Structure

```
villament/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page integrating all sections
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   └── components/
│       ├── Navigation.tsx     # Sticky navigation bar
│       ├── Footer.tsx         # Footer component
│       └── sections/
│           ├── Hero.tsx       # Hero/landing section
│           ├── About.tsx      # About section
│           ├── Amenities.tsx  # Amenities grid
│           ├── FloorPlans.tsx # Floor plans showcase
│           ├── Gallery.tsx    # Photo gallery
│           ├── Location.tsx   # Location details
│           └── Contact.tsx    # Contact form
├── public/
│   └── images/
│       └── extracted-*.jpg    # Images extracted from brochure
└── package.json
```

## 🖼️ Images

Images have been extracted from the `BROUCHER_VILLAMENT_1.pdf` file and are located in `public/images/`. The website uses the following images:

- `extracted-001.jpg` - Main exterior view
- `extracted-003.jpg` - Interior/floor plan
- `extracted-015.jpg` - Additional floor plan
- `extracted-017.jpg` - Interior view
- `extracted-019.jpg` - Interior detail
- `extracted-023.jpg` - Amenity (pool)
- `extracted-025.jpg` - Amenity (gym)
- `extracted-002.jpg` - Exterior view

### Customizing Images

To replace images:
1. Add your images to `public/images/`
2. Update the image paths in the respective components:
   - `About.tsx` - Line 61
   - `FloorPlans.tsx` - Lines 16, 26
   - `Gallery.tsx` - Lines 11-18

## 🎨 Customization

### Colors

The gold theme colors are defined in `src/app/globals.css`:

```css
:root {
  --gold: #d4af37;
  --gold-light: #f4e4b8;
  --gold-dark: #b8941f;
}
```

To change the theme color, update these CSS variables.

### Content

Each section is a separate component in `src/components/sections/`. Edit the respective files to update:

- **Hero**: Tagline, description, CTAs
- **About**: Company description, highlights, stats
- **Amenities**: List of amenities and descriptions
- **Floor Plans**: Unit types, sizes, features
- **Gallery**: Image sources and categories
- **Location**: Address, nearby places, map
- **Contact**: Form fields, contact information

### Navigation

Update navigation links in:
- `src/components/Navigation.tsx` (lines 36-44)
- `src/components/Footer.tsx` (lines 16-24)

## 📱 Sections Overview

### 1. Hero Section
- Prominent logo/branding
- Tagline and description
- Call-to-action buttons
- Key statistics

### 2. About Section
- Company description
- Feature highlights in grid layout
- Property images
- Key benefits with checkmarks
- Statistics display

### 3. Amenities Section
- 8 premium amenities showcased
- Icon-based cards with hover effects
- Featured amenity highlights

### 4. Floor Plans Section
- Multiple unit configurations
- Specifications (area, bedrooms, bathrooms)
- Feature lists
- Download brochure CTA

### 5. Gallery Section
- 8+ image grid layout
- Category labels (Exterior, Interior, Amenities)
- Lightbox/modal for full-size viewing
- Smooth hover effects

### 6. Location Section
- Map placeholder
- Address and directions
- Nearby locations with distances
- Connectivity highlights

### 7. Contact Section
- Contact form with validation
- Contact information (phone, email, address)
- Office hours
- Schedule site visit CTA

### 8. Footer
- Brand information
- Quick navigation links
- Contact details
- Social media links
- Legal links

## 🛠️ Technologies Used

- **Next.js 15.5** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Biome** - Linting and formatting

## 📋 Design Inspiration

The website design is inspired by Prestige Constructions' website (https://www.prestigeconstructions.com/), featuring:
- Clean, elegant navigation
- Card-based layouts
- Premium color scheme
- Professional forms
- Subtle hover animations

## ⚡ Performance

- Optimized images with Next.js Image component
- Smooth scroll behavior
- Lazy loading for images
- Minimal JavaScript bundle
- Fast page loads

## 🔧 Development Commands

```bash
# Development
pnpm run dev

# Build
pnpm run build

# Production
pnpm start

# Lint & Format
pnpm run lint
pnpm run format
```

## 📞 Contact Information

Update the following contact details in the components:

- **Phone**: `+91 98765 43210` (in Contact.tsx and Footer.tsx)
- **Email**: `info@thevillament.com` (in Contact.tsx and Footer.tsx)
- **Address**: Update in Location.tsx and Contact.tsx

## 🎯 Future Enhancements

Potential improvements you could add:

1. **Backend Integration**: Connect contact form to email service or CRM
2. **Google Maps Integration**: Replace map placeholder with actual Google Maps
3. **Virtual Tour**: Add 360° virtual tour functionality
4. **Blog Section**: Add news/updates section
5. **Admin Panel**: Content management system
6. **Multi-language**: Add language switcher
7. **Dark Mode**: Optional dark theme toggle
8. **Analytics**: Add Google Analytics or similar

## 📄 License

© 2025 The Villament. All rights reserved.

---

**Note**: This website uses images extracted from the official brochure PDF. Ensure you have proper rights and permissions for all images used in production.

