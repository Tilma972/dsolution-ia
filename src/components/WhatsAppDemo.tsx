'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Maximize, X, Zap } from 'lucide-react'; // Removed unused icons: Hammer, Utensils, Lightbulb, Scissors, Home, Dumbbell

interface WhatsAppDemoProps {
  title: string;
  demoImage?: string; // Made optional for placeholder
  altText: string;
  description: string;
  painPoint?: string; // Added optional pain point
  impactMetric: string;
  impactIcon?: React.ReactNode;
  placeholderIcon?: React.ReactNode; // Added for placeholder
}

const WhatsAppDemo: React.FC<WhatsAppDemoProps> = ({
  title,
  demoImage,
  altText,
  description,
  painPoint,
  impactMetric,
  impactIcon,
  placeholderIcon
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="bg-card-bg p-6 rounded-lg shadow-lg border border-primary/20 transition duration-300 hover:shadow-xl flex flex-col h-full">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      {painPoint && <p className="text-sm text-secondary mb-3 italic">&quot;{painPoint}&quot;</p>}

      {/* Conteneur de démo avec style WhatsApp */}
      <div
        className="relative bg-[#121b22] rounded-md overflow-hidden mb-4 cursor-pointer group"
        onClick={() => demoImage && setIsZoomed(true)} // Only zoom if there's an image
      >
        {/* Bar d'en-tête style WhatsApp */}
        <div className="bg-[#1f2c34] px-3 py-2 flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-500 mr-2"></div>
          <div className="text-white text-sm">Client</div>
        </div>

        {/* Image de la démo ou Placeholder */}
        <div className="relative w-full h-48 flex items-center justify-center">
          {demoImage ? (
            <Image
              src={demoImage}
              alt={altText}
              fill
              style={{ objectFit: 'cover' }}
              className="object-top"
            />
          ) : (
            <div className="text-primary opacity-30 group-hover:opacity-50 transition-opacity">
              {placeholderIcon || <Maximize size={48} />}
            </div>
          )}
        </div>

        {/* Indicateur de clic (only if demoImage exists) */}
        {demoImage && (
          <div className="absolute bottom-2 right-2 bg-primary/80 text-dark-bg text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Cliquer pour agrandir
          </div>
        )}
         {/* Overlay when no image */}
         {!demoImage && (
           <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
             <span className="text-white text-xs bg-black/50 px-2 py-1 rounded">Démo bientôt disponible</span>
           </div>
         )}
      </div>

      {/* Description */}
      <p className="text-subtle-text text-sm mb-4 flex-grow">{description}</p>

      {/* Métrique d'impact */}
      <div className="bg-primary/10 rounded-md p-3 flex items-center mt-auto">
        {impactIcon ? (
          <span className="mr-2">{impactIcon}</span>
        ) : (
          <Zap className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
        )}
        <span className="text-primary text-sm font-medium">{impactMetric}</span>
      </div>

      {/* Modal d'agrandissement (only if demoImage exists) */}
      {isZoomed && demoImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="bg-[#121b22] rounded-lg max-w-md w-full max-h-[80vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bar d'en-tête style WhatsApp */}
            <div className="bg-[#1f2c34] px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-500 mr-3"></div>
                <div className="text-white">Client</div>
              </div>
              <button
                onClick={() => setIsZoomed(false)}
                className="text-gray-400 hover:text-white"
                aria-label="Fermer"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Image agrandie */}
            <div className="relative w-full flex-grow overflow-auto">
              <Image
                src={demoImage}
                alt={altText}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppDemo;
