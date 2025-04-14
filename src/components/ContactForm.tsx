'use client';

import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [accessKey, setAccessKey] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Récupérer la clé API au chargement du composant
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) {
      setAccessKey(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
    }
  }, []);

  // Pour vérifier si le formulaire a été soumis (basé sur le paramètre d'URL)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setIsSubmitted(true);
    }
  }, []);

  return (
    <>
      {isSubmitted ? (
        <div className="bg-green-500/20 border border-green-500/30 rounded-md p-4 text-center">
          <p className="text-green-400 font-medium">Message envoyé avec succès! Nous vous répondrons dans les plus brefs délais.</p>
        </div>
      ) : (
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST"
          className="space-y-4"
        >
          {/* Champs Web3Forms nécessaires */}
          <input type="hidden" name="access_key" value={accessKey} />
          <input type="hidden" name="subject" value="Nouveau message depuis dsolution.com" />
          <input type="hidden" name="from_name" value="D-Solution IA Website" />
          <input type="hidden" name="redirect" value={`${window.location.origin}${window.location.pathname}?success=true`} />
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-subtle-text mb-1">Nom</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full bg-card-bg border border-primary/20 rounded-md p-3 text-white focus:border-primary focus:ring-primary transition" 
              placeholder="Votre nom complet" 
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-subtle-text mb-1">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full bg-card-bg border border-primary/20 rounded-md p-3 text-white focus:border-primary focus:ring-primary transition" 
              placeholder="Votre adresse email" 
              required
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-subtle-text mb-1">Message (optionnel)</label>
            <textarea 
              id="message" 
              name="message" 
              rows={4} 
              className="w-full bg-card-bg border border-primary/20 rounded-md p-3 text-white focus:border-primary focus:ring-primary transition" 
              placeholder="Décrivez brièvement votre besoin ou posez une question..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting || !accessKey}
            className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300"
            onClick={() => setIsSubmitting(true)}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
          </button>
        </form>
      )}
    </>
  );
}