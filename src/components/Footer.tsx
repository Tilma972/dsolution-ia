import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 py-8 px-4 md:px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image 
              src="/images/logo-d-solution-ia.png" 
              alt="Logo D-Solution IA" 
              width={300} // Match Navbar width prop
              height={120} // Match Navbar height prop
              className="h-24 w-auto" // Match Navbar className height (96px)
            />
          </Link>
        </div>

        {/* Liens */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:order-last">
          <Link href="/mentions-legales" className="text-sm hover:text-primary transition-colors">
            Mentions Légales
          </Link>
          <Link href="/politique-confidentialite" className="text-sm hover:text-primary transition-colors">
            Politique de Confidentialité
          </Link>
          <Link href="/conditions-garantie" className="text-sm hover:text-primary transition-colors">
            Conditions de garantie
          </Link>
        </nav>

        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm">
            © {currentYear} D-Solution IA. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
