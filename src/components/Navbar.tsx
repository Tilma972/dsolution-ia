'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  // État pour gérer l'ouverture/fermeture du menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // État pour gérer la transparence de la barre de navigation au scroll
  const [scrolled, setScrolled] = useState(false);

  // Fonction pour gérer le défilement et ajouter un effet de fond
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Ajouter l'écouteur d'événement
    window.addEventListener('scroll', handleScroll);
    
    // Nettoyer l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fonction pour fermer le menu lorsqu'un lien est cliqué
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-2 transition-all duration-300 ${scrolled ? 'bg-dark-bg/95 shadow-lg' : 'bg-dark-bg/80'} backdrop-blur-sm`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logo-d-solution-ia.png" 
            alt="Logo D-Solution IA" 
            width={300} 
            height={120} 
            className="h-24 w-auto"
            priority
          />
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="#tarifs"
            className="text-gray-200 hover:text-primary transition-colors duration-300"
          >
            Tarifs
          </Link>
          <Link
            href="#garantie"
            className="text-gray-200 hover:text-primary transition-colors duration-300"
          >
            Témoignages
          </Link>
          <Link
            href="https://dsolutionia.zohobookings.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-primary text-dark-bg font-semibold hover:bg-secondary transition-colors duration-300"
          >
            Réservez votre démo gratuite
          </Link>
        </div>

        {/* Menu Mobile (Icône Hamburger) */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-gray-200 focus:outline-none p-2" 
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {/* Icône Hamburger ou X selon l'état */}
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Menu Mobile Déroulant */}
      <div 
        className={`md:hidden absolute left-0 right-0 bg-dark-bg/95 backdrop-blur-sm shadow-lg transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-64 py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <Link
            href="#tarifs"
            className="text-gray-200 hover:text-primary transition-colors duration-300 py-2 px-4"
            onClick={handleLinkClick}
          >
            Tarifs
          </Link>
          <Link
            href="#garantie"
            className="text-gray-200 hover:text-primary transition-colors duration-300 py-2 px-4"
            onClick={handleLinkClick}
          >
            Témoignages
          </Link>
          <Link
            href="https://dsolutionia.zohobookings.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-primary text-dark-bg font-semibold hover:bg-secondary transition-colors duration-300 text-center"
            onClick={handleLinkClick}
          >
            Réservez votre démo gratuite
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
