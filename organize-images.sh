#!/bin/bash

# Organize extracted images into categories
# This script helps organize the extracted PDF images

echo "🖼️  Organizing extracted images..."

cd public/images

# Create category directories if they don't exist
mkdir -p hero exterior interior amenities floorplans location organized

echo "📁 Created category directories"

# Count total images
total=$(ls extracted-*.jpg 2>/dev/null | wc -l)
echo "Found $total extracted images"

echo ""
echo "📋 Current images being used in the website:"
echo "  - extracted-001.jpg → Main exterior (About section)"
echo "  - extracted-002.jpg → Exterior view (Gallery)"
echo "  - extracted-003.jpg → Interior/floor plan (About & Gallery)"
echo "  - extracted-015.jpg → Floor plan (Floor Plans section)"
echo "  - extracted-017.jpg → Interior (Gallery)"
echo "  - extracted-019.jpg → Interior detail (Gallery)"
echo "  - extracted-023.jpg → Pool amenity (Gallery)"
echo "  - extracted-025.jpg → Gym amenity (Gallery)"
echo ""

echo "💡 Tips for organizing:"
echo "  1. Review all extracted-*.jpg files"
echo "  2. Move images to appropriate category folders:"
echo "     - hero/ - Main hero/banner images"
echo "     - exterior/ - Building exterior shots"
echo "     - interior/ - Interior design images"
echo "     - amenities/ - Pool, gym, clubhouse, etc."
echo "     - floorplans/ - Floor plan diagrams"
echo "     - location/ - Location/area images"
echo "  3. Update component files to use new organized paths"
echo ""

echo "Example manual organization:"
echo "  mv extracted-001.jpg exterior/main-building.jpg"
echo "  mv extracted-023.jpg amenities/swimming-pool.jpg"
echo ""

echo "✅ Organization directories ready!"
echo "You can now manually organize images or use them as-is."

