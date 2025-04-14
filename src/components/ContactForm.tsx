'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Le formulaire sera soumis naturellement via l'action
  };

  return (
    <form 
      action="https://api.web3forms.com/submit" 
      method="POST"
      className="space-y-4"
      onSubmit={handleSubmit}
    >
      {/* Champs Web3Forms nécessaires */}
      <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ''} />
      <input type="hidden" name="subject" value="Nouveau message depuis dsolution.com" />
      <input type="hidden" name="redirect" value="https://dsolution.vercel.app/merci" />
      
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
        disabled={isSubmitting}
        className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300"
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
      </button>
    </form>
  );
}