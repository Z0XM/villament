'use client';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gold/3 rounded-full blur-2xl" />
      <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-gold/4 rounded-full blur-3xl" />
      
      {/* Decorative corner accents */}
      <div className="absolute top-24 left-24 w-16 h-16 border-t-2 border-l-2 border-gold/20" />
      <div className="absolute top-24 right-24 w-16 h-16 border-t-2 border-r-2 border-gold/20" />
      <div className="absolute bottom-24 left-24 w-16 h-16 border-b-2 border-l-2 border-gold/20" />
      <div className="absolute bottom-24 right-24 w-16 h-16 border-b-2 border-r-2 border-gold/20" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Logo/Brand */}
        <div className="animate-fade-in mb-12 relative">
          <div className="inline-block relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            
            <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-2">
              THE
            </h1>
            <h1 className="text-6xl md:text-8xl font-bold tracking-wider gold-shimmer mb-6">
              VILLAMENT
            </h1>
            
            <div className="relative w-full max-w-md mx-auto">
              <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gold rotate-45" />
            </div>
            
            <p className="text-xs tracking-[0.3em] text-gray-400 mt-4">LUXURY LIVING</p>
          </div>
        </div>

        {/* Tagline */}
        <div className="animate-fade-in-delay-1 mb-12 relative">
          <p className="text-xl md:text-3xl text-gray-700 font-light max-w-3xl mx-auto leading-relaxed">
            Where villa exclusivity meets apartment community
          </p>
        </div>

        {/* Main Description */}
        <div className="animate-fade-in-delay-2 mb-16 space-y-6 max-w-3xl mx-auto relative">
          <div className="relative px-8 py-8 border-l-2 border-gold/30">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-left">
              A suave abode in the heart of Dharwad city featuring unique homes 
              that give you the exclusivity of villa life while building a community together. 
              Living spaces carefully crafted to open to nature while ensuring maximum privacy.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in-delay-3 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="px-8 py-4 bg-gold text-white font-semibold tracking-wider hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            EXPLORE MORE
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-gold text-gold font-semibold tracking-wider hover:bg-gold hover:text-white transition-all duration-300"
          >
            CONTACT US
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 flex items-center justify-center gap-4 animate-fade-in-delay-3">
          <div className="w-16 h-px bg-gold/30" />
          <p className="text-sm text-gray-500 tracking-wider">
            ONLY <span className="text-gold font-semibold">10</span> EXCLUSIVE UNITS
          </p>
          <div className="w-16 h-px bg-gold/30" />
        </div>
        
        {/* Location tag */}
        <div className="mt-6 inline-flex items-center gap-2 text-xs text-gray-400 tracking-wider">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          DHARWAD, KARNATAKA
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

