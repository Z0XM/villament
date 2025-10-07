export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      {/* Elegant Vertical Gold Accent Lines */}
      {/* Left side lines */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
      <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/8 to-transparent" />
      
      {/* Right side lines */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute right-2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      <div className="absolute right-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
      <div className="absolute right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/8 to-transparent" />
      
      {/* Abstract Architectural Line Art */}
      {/* Left side architectural elements */}
      <div className="absolute left-16 top-24 opacity-[0.08]">
        {/* Window grid pattern */}
        <svg width="120" height="160" viewBox="0 0 120 160" fill="none" className="text-gold">
          <rect x="10" y="10" width="40" height="50" stroke="currentColor" strokeWidth="1" />
          <rect x="60" y="10" width="40" height="50" stroke="currentColor" strokeWidth="1" />
          <rect x="10" y="70" width="40" height="50" stroke="currentColor" strokeWidth="1" />
          <rect x="60" y="70" width="40" height="50" stroke="currentColor" strokeWidth="1" />
          <line x1="30" y1="10" x2="30" y2="60" stroke="currentColor" strokeWidth="0.5" />
          <line x1="80" y1="10" x2="80" y2="60" stroke="currentColor" strokeWidth="0.5" />
          <line x1="10" y1="35" x2="50" y2="35" stroke="currentColor" strokeWidth="0.5" />
          <line x1="60" y1="35" x2="100" y2="35" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="absolute left-20 bottom-32 opacity-[0.06]">
        {/* Geometric building outline */}
        <svg width="100" height="140" viewBox="0 0 100 140" fill="none" className="text-gold">
          <path d="M20 140 L20 40 L50 20 L80 40 L80 140" stroke="currentColor" strokeWidth="1" />
          <rect x="30" y="60" width="15" height="20" stroke="currentColor" strokeWidth="0.5" />
          <rect x="55" y="60" width="15" height="20" stroke="currentColor" strokeWidth="0.5" />
          <rect x="30" y="90" width="15" height="20" stroke="currentColor" strokeWidth="0.5" />
          <rect x="55" y="90" width="15" height="20" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="80" x2="80" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        </svg>
      </div>
      
      {/* Right side architectural elements */}
      <div className="absolute right-16 top-32 opacity-[0.08]">
        {/* Modern geometric pattern */}
        <svg width="140" height="180" viewBox="0 0 140 180" fill="none" className="text-gold">
          <rect x="20" y="20" width="100" height="60" stroke="currentColor" strokeWidth="1" />
          <rect x="20" y="100" width="100" height="60" stroke="currentColor" strokeWidth="1" />
          <line x1="70" y1="20" x2="70" y2="80" stroke="currentColor" strokeWidth="0.5" />
          <line x1="70" y1="100" x2="70" y2="160" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="50" x2="120" y2="50" stroke="currentColor" strokeWidth="0.5" />
          <line x1="20" y1="130" x2="120" y2="130" stroke="currentColor" strokeWidth="0.5" />
          <rect x="35" y="35" width="20" height="25" stroke="currentColor" strokeWidth="0.5" />
          <rect x="85" y="35" width="20" height="25" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="absolute right-20 bottom-40 opacity-[0.07]">
        {/* Abstract villa outline */}
        <svg width="110" height="120" viewBox="0 0 110 120" fill="none" className="text-gold">
          <path d="M10 120 L10 50 L55 10 L100 50 L100 120" stroke="currentColor" strokeWidth="1" />
          <rect x="25" y="70" width="25" height="35" stroke="currentColor" strokeWidth="0.5" />
          <rect x="60" y="70" width="25" height="35" stroke="currentColor" strokeWidth="0.5" />
          <line x1="10" y1="85" x2="100" y2="85" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="55" y1="10" x2="55" y2="50" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>
      
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-12 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Logo/Brand */}
          <div className="animate-fade-in mb-8">
            <div className="inline-block">
              <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-2">
                THE
              </h1>
              <h1 className="text-6xl md:text-8xl font-bold tracking-wider gold-shimmer">
                VILLAMENT
              </h1>
              <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mt-6" />
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 font-light mb-12 animate-fade-in-delay-1 max-w-3xl mx-auto">
            Where villa exclusivity meets apartment community
          </p>

          {/* Main Description */}
          <div className="animate-fade-in-delay-2 mb-16 space-y-6 max-w-3xl mx-auto">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              A suave abode in the heart of Dharwad city featuring unique homes 
              that give you the exclusivity of villa life while building a community together.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in-delay-3">
            <div className="p-6 bg-white border border-gray-100 hover:border-gold transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 mx-auto mb-4 border border-gold flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Grand Luxury Homes</h3>
              <p className="text-sm text-gray-600">Double height volumes with expansive windows</p>
            </div>

            <div className="p-6 bg-white border border-gray-100 hover:border-gold transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 mx-auto mb-4 border border-gold flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Prime Location</h3>
              <p className="text-sm text-gray-600">100m off Pune-Bangalore highway in Dharwad</p>
            </div>

            <div className="p-6 bg-white border border-gray-100 hover:border-gold transition-all duration-300 hover:shadow-lg">
              <div className="w-12 h-12 mx-auto mb-4 border border-gold flex items-center justify-center">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Exclusive Amenities</h3>
              <p className="text-sm text-gray-600">Swimming pool, gym, spa & clubhouse</p>
            </div>
          </div>

          {/* Coming Soon Badge */}
          <div className="animate-fade-in-delay-3">
            <div className="inline-block px-8 py-3 border-2 border-gold text-gold font-semibold tracking-wider">
              COMING SOON
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Only 10 exclusive units
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-500">
            © 2025 The Villament. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
