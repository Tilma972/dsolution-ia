import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

interface PricingOptionProps {
  title: string;
  price: string;
  setupFee?: string;
  features: string[];
  note?: string;
  ctaText: string;
  ctaLink: string;
  isRecommended?: boolean;
  isCustom?: boolean;
  featuredFeature?: {
    icon: React.ReactNode;
    text: string;
  };
}

const PricingOption: React.FC<PricingOptionProps> = ({
  title,
  price,
  setupFee,
  features,
  note,
  ctaText,
  ctaLink,
  isRecommended = false,
  isCustom = false,
  featuredFeature,
}) => {
  return (
    <div className={`bg-card-bg p-6 rounded-lg shadow-lg h-full flex flex-col transition duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-xl ${
      isRecommended 
        ? 'border-2 border-primary relative' 
        : 'border border-primary/20'
    }`}>
      {/* Badge Recommandé */}
      {isRecommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-dark-bg text-sm font-semibold py-1 px-3 rounded-full">
          Recommandé
        </div>
      )}
      
      {/* Badge Besoins Spécifiques */}
      {isCustom && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-white text-sm font-semibold py-1 px-3 rounded-full">
          Besoins Spécifiques ?
        </div>
      )}
      
      {/* Titre */}
      <h3 className="text-2xl font-bold text-white mb-4 mt-2">{title}</h3>
      
      {/* Prix */}
      <div className="mb-6">
        {isCustom ? (
          <div className="text-3xl font-bold text-primary mb-2">{price}</div>
        ) : (
          <>
            <div className="text-3xl font-bold text-primary mb-2">{price}</div>
            {setupFee && <div className="text-subtle-text">{setupFee}</div>}
          </>
        )}
      </div>
      
      {/* Fonctionnalités */}
      <ul className="mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start mb-3">
            <Check className="text-primary flex-shrink-0 mr-2 mt-1" size={18} />
            <span className="text-subtle-text">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Note */}
      {note && (
        <div className="text-sm text-subtle-text/80 mb-6 italic">
          {note}
        </div>
      )}

      {/* Fonctionnalité phare (si fournie) */}
      {featuredFeature && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="flex items-center">
            <div className="bg-primary/10 p-2 rounded-full mr-3">
              {featuredFeature.icon}
            </div>
            <span className="text-white text-sm font-medium">{featuredFeature.text}</span>
          </div>
        </div>
      )}
      
      {/* Bouton CTA */}
      <div className="mt-auto pt-6"> {/* Added pt-6 for spacing */}
        <Link 
          href={ctaLink} 
          target={ctaLink.startsWith('http') ? '_blank' : undefined} // Add target="_blank" for external links
          rel={ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={`w-full block text-center py-3 px-4 rounded-md font-semibold transition-colors duration-300 ${
            isCustom 
              ? 'bg-secondary hover:bg-secondary/90 text-white' 
              : 'bg-primary hover:bg-secondary text-dark-bg'
          }`}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
};

export default PricingOption;
