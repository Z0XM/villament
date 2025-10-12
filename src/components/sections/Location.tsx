export default function Location() {
  const nearbyPlaces = [
    { name: 'Schools & Colleges', distance: '1-3 km', icon: '🎓' },
    { name: 'Shopping Centers', distance: '2 km', icon: '🛍️' },
    { name: 'Hospitals', distance: '2.5 km', icon: '🏥' },
    { name: 'Restaurants & Cafes', distance: '1 km', icon: '🍽️' },
    { name: 'Parks & Recreation', distance: '1.5 km', icon: '🌳' },
    { name: 'Banks & ATMs', distance: '0.5 km', icon: '🏦' },
  ];

  return (
    <section id="location" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="w-16 h-px bg-gold mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Prime <span className="gold-shimmer">Location</span>
            </h2>
            <div className="w-24 h-px bg-gold/30 mx-auto" />
          </div>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Strategically located in the heart of Dharwad with excellent connectivity 
            and proximity to all essential amenities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="relative h-96 bg-gradient-to-br from-gold/10 to-gray-200 rounded-lg overflow-hidden border-2 border-gold/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-16 h-16 text-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-600 font-medium">Interactive Map</p>
                <p className="text-sm text-gray-500 mt-2">Dharwad, Karnataka</p>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Address</h3>
              <div className="flex items-start gap-3 text-gray-600">
                <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium">The Villament</p>
                  <p>100m off Pune-Bangalore Highway</p>
                  <p>Dharwad, Karnataka</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Connectivity</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">100m from Pune-Bangalore Highway</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Easy access to major city areas</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Well-connected to public transport</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Nearby Locations</h3>
              <div className="grid grid-cols-2 gap-4">
                {nearbyPlaces.map((place, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white border border-gray-100 hover:border-gold transition-colors duration-300"
                  >
                    <div className="text-2xl mb-2">{place.icon}</div>
                    <div className="text-sm font-semibold text-gray-900">{place.name}</div>
                    <div className="text-xs text-gray-500">{place.distance}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            type="button"
            className="px-8 py-4 bg-gold text-white font-semibold tracking-wider hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            GET DIRECTIONS
          </button>
        </div>
      </div>
    </section>
  );
}

