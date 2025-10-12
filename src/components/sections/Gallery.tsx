'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: '/images/extracted-001.jpg', category: 'Exterior', alt: 'Building Exterior View' },
    { src: '/images/extracted-003.jpg', category: 'Interior', alt: 'Living Space' },
    { src: '/images/extracted-015.jpg', category: 'Interior', alt: 'Bedroom Design' },
    { src: '/images/extracted-017.jpg', category: 'Interior', alt: 'Modern Kitchen' },
    { src: '/images/extracted-019.jpg', category: 'Interior', alt: 'Bathroom' },
    { src: '/images/extracted-023.jpg', category: 'Amenities', alt: 'Swimming Pool' },
    { src: '/images/extracted-025.jpg', category: 'Amenities', alt: 'Gym Facility' },
    { src: '/images/extracted-002.jpg', category: 'Exterior', alt: 'Front Elevation' },
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="w-16 h-px bg-gold mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Photo <span className="gold-shimmer">Gallery</span>
            </h2>
            <div className="w-24 h-px bg-gold/30 mx-auto" />
          </div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Take a visual tour of The Villament and discover the elegance and 
            sophistication that awaits you.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative h-64 bg-gray-200 overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <div className="text-white text-sm uppercase tracking-wider mb-2">{image.category}</div>
                  <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full max-w-5xl h-[80vh]">
              <Image
                src={selectedImage}
                alt="Gallery Image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

