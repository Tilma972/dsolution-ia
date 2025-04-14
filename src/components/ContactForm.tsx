// src/components/ContactForm.tsx
"use client"; // Indique que c'est un composant client

import React, { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [resultMessage, setResultMessage] = useState('');

  // Récupère la clé d'accès depuis les variables d'environnement
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error("Erreur: La variable d'environnement NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY n'est pas définie.");
    // Vous pourriez afficher un message d'erreur à l'utilisateur ici si nécessaire
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêche le rechargement de la page
    setIsSubmitting(true);
    setSubmissionStatus('idle'); // Reset status on new submit
    setResultMessage('');

    if (!accessKey) {
      setResultMessage("Erreur de configuration : clé d'accès manquante.");
      setSubmissionStatus('error');
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(event.target as HTMLFormElement);

    // Ajout de la clé d'accès Web3Forms
    formData.append('access_key', accessKey);

    // Optionnel: Ajouter un sujet à l'email que vous recevrez
    formData.append('subject', `Nouvelle demande de Démo depuis ${window.location.hostname}`);
    // Optionnel: Nom du formulaire pour l'identifier dans Web3Forms
    formData.append('from_name', 'Formulaire Démo D-Solution IA');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResultMessage('Votre demande a bien été envoyée ! Nous reviendrons vers vous rapidement.');
        setSubmissionStatus('success');
        // Optionnel: Réinitialiser le formulaire après succès
        (event.target as HTMLFormElement).reset();
        // Si vous n'avez PAS configuré la redirection dans Web3Forms, vous pouvez rediriger ici :
        // window.location.href = '/merci';
      } else {
        console.error('Erreur Web3Forms:', data);
        setResultMessage(`Erreur lors de l'envoi : ${data.message || 'Veuillez réessayer.'}`);
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Erreur Fetch:', error);
      setResultMessage('Une erreur réseau est survenue. Veuillez vérifier votre connexion et réessayer.');
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-white mb-6">Demandez votre démo</h3>
      <form
        onSubmit={handleSubmit} // Utilise notre fonction handleSubmit
        className="space-y-4"
      >
        {/* Les champs restent les mêmes, mais sans les attributs Netlify */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-subtle-text mb-1">Nom</label>
          <input
            type="text"
            id="name"
            name="name" // 'name' est important pour FormData
            className="w-full bg-card-bg border border-primary/20 rounded-md p-3 text-white focus:border-primary focus:ring-primary transition"
            placeholder="Votre nom complet"
            required
            disabled={isSubmitting} // Désactive pendant l'envoi
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-subtle-text mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email" // 'name' est important pour FormData
            className="w-full bg-card-bg border border-primary/20 rounded-md p-3 text-white focus:border-primary focus:ring-primary transition"
            placeholder="Votre adresse email"
            required
            disabled={isSubmitting} // Désactive pendant l'envoi
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-subtle-text mb-1">Message (optionnel)</label>
          <textarea
            id="message"
            name="message" // 'name' est important pour FormData
            rows={4}
            className="w-full bg-card-bg border border-primary/20 rounded-md p-3 text-white focus:border-primary focus:ring-primary transition"
            placeholder="Décrivez brièvement votre besoin ou posez une question..."
            disabled={isSubmitting} // Désactive pendant l'envoi
          ></textarea>
        </div>

        {/* Affichage conditionnel des messages de résultat */}
        {resultMessage && (
          <p className={`text-sm ${submissionStatus === 'success' ? 'text-green-400' : 'text-red-400'}`}>
            {resultMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting} // Désactive le bouton pendant l'envoi
          className={`w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
        </button>
      </form>
    </div>
  );
}