'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, info: { error: false, msg: null } });

    // Pour debugging
    console.log("Form submission prevented");
    
    const formData = new FormData(e.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
    
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await res.json();
      
      if (data.success) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Message envoyé avec succès!" }
        });
        e.target.reset();
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: data.message || "Une erreur s'est produite" }
        });
      }
    } catch (error) {
      console.log(error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "Une erreur s'est produite" }
      });
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      // Important: utiliser # comme action de secours au lieu de /merci
      action="#"
      className="space-y-4"
    >
      {/* Champ caché pour Web3Forms */}
      <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />
      
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
        disabled={status.submitting}
        className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300"
      >
        {status.submitting ? 'Envoi en cours...' : 'Envoyer la demande'}
      </button>
      
      {status.info.error && (
        <div className="text-accent">{status.info.msg}</div>
      )}
      
      {status.submitted && (
        <div className="text-green-500">{status.info.msg}</div>
      )}
    </form>
  );
}