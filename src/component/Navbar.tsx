import React, { useState } from 'react';
import GlassSurface from './glasssurface';

interface NavbarProps {
  onStyleChange: (style: 'minimal' | 'advanced') => void;
  currentStyle: 'minimal' | 'advanced';
}

const Navbar: React.FC<NavbarProps> = ({ onStyleChange, currentStyle }) => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <GlassSurface
        width={400}
        height={60}
        borderRadius={30}
        brightness={80}
        opacity={0.9}
        blur={15}
        backgroundOpacity={0.1}
        className="flex items-center justify-center gap-4 px-6"
      >
        <button
          onClick={() => onStyleChange('minimal')}
          className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
            currentStyle === 'minimal'
              ? 'bg-white/20 text-white shadow-lg'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          Minimal
        </button>
        <button
          onClick={() => onStyleChange('advanced')}
          className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
            currentStyle === 'advanced'
              ? 'bg-white/20 text-white shadow-lg'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          Advanced
        </button>
      </GlassSurface>
    </div>
  );
};

export default Navbar; 