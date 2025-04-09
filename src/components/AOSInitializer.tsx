'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,    // Durée des animations en ms (augmentée)
      once: true,       // Jouer l'animation une seule fois
      offset: 150,      // Déclencher l'animation 150px avant que l'élément soit visible (augmenté)
      easing: 'ease-in-out', // Courbe d'accélération
      delay: 100,       // Délai minimal entre les animations
    });
  }, []);

  return null;
};

export default AOSInitializer;
