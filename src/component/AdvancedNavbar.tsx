import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import GlassSurface to avoid SSR issues
const GlassSurface = dynamic(() => import('./glasssurface'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center">
      <div className="text-white">Loading...</div>
    </div>
  ),
});

const AdvancedNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-7xl mx-auto relative">
        <GlassSurface
          width="100%"
          height={80}
          borderRadius={24}
          displace={20}
          distortionScale={-200}
          redOffset={8}
          greenOffset={18}
          blueOffset={28}
          brightness={65}
          opacity={0.85}
          mixBlendMode="screen"
          blur={18}
          backgroundOpacity={0.12}
          className="px-4 sm:px-6"
        >
          <div className="w-full flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex items-center">
              <Image src="/logo.svg" alt="Logo" width={200} height={200} className="object-contain" priority />
            </div>

            {/* Right: Links + CTA / Mobile Toggle */}
            <div className="flex items-center gap-6">
              {/* Navigation Links (desktop) */}
              <nav className="hidden md:flex items-center gap-8">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <button
                    key={item}
                    className="relative group text-white/80 hover:text-white transition-colors duration-300 font-medium"
                  >
                    {item}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white/60 to-white/40 group-hover:w-full transition-all duration-300"></div>
                  </button>
                ))}
              </nav>

              {/* CTA (desktop) */}
              <div className="hidden md:block">
                <GlassSurface
                  width={120}
                  height={45}
                  borderRadius={16}
                  displace={12}
                  distortionScale={-120}
                  redOffset={15}
                  greenOffset={25}
                  blueOffset={35}
                  brightness={70}
                  opacity={0.9}
                  mixBlendMode="overlay"
                  className="cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <span className="text-white font-semibold">Get Started</span>
                </GlassSurface>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  aria-label="Toggle menu"
                  aria-expanded={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  className="outline-none"
                >
                  <GlassSurface
                    width={50}
                    height={45}
                    borderRadius={16}
                    displace={10}
                    distortionScale={-100}
                    redOffset={12}
                    greenOffset={22}
                    blueOffset={32}
                    brightness={70}
                    opacity={0.9}
                    mixBlendMode="overlay"
                    className="cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center space-y-1">
                      <div className={`w-5 h-0.5 bg-white rounded-full transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
                      <div className={`w-5 h-0.5 bg-white rounded-full transition-opacity ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                      <div className={`w-5 h-0.5 bg-white rounded-full transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
                    </div>
                  </GlassSurface>
                </button>
              </div>
            </div>
          </div>
        </GlassSurface>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 mt-3 px-1 sm:px-0">
            <div className="mx-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4">
              <div className="flex flex-col space-y-3">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <button
                    key={item}
                    className="text-left w-full px-2 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors font-medium"
                  >
                    {item}
                  </button>
                ))}
                <div className="pt-2">
                  <GlassSurface
                    width="100%"
                    height={45}
                    borderRadius={16}
                    displace={12}
                    distortionScale={-120}
                    redOffset={15}
                    greenOffset={25}
                    blueOffset={35}
                    brightness={70}
                    opacity={0.9}
                    mixBlendMode="overlay"
                    className="cursor-pointer hover:scale-[1.01] transition-transform duration-300"
                  >
                    <span className="text-white font-semibold">Get Started</span>
                  </GlassSurface>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedNavbar; 