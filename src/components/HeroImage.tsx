'use client';

import React from 'react';
import Image from 'next/image';

const HeroImage: React.FC = () => {
  // Ajustement pour remplir le conteneur parent agrandi
  return (
    <div className="relative w-full h-full"> {/* Prend toute la taille du parent */}     
      <Image 
        src="/images/hero-visual.webp"
        alt="Intelligence artificielle sur smartphone"
        fill
        style={{ objectFit: 'contain' }}
        priority
        className="select-none drop-shadow-2xl"
        quality={100}
        sizes="100vw" // Simplifié pour prendre la taille du conteneur
      />
    </div>
  );
};

export default HeroImage;
