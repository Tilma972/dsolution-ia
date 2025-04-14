// src/components/ContactForm.tsx
"use client";

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation'; // Importez le router Next.js

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [resultMessage, setResultMessage] = useState('');
  const router = useRouter(); // Initialisez le router

  // Récupère la clé d'accès depuis les variables d'environnement
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error("Erreur: La variable d'environnement NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY n'est pas définie.");
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Empêche le rechargement de la page
    setIsSubmitting(true);
    setSubmissionStatus('idle');
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
        // Au lieu d'afficher un message, rediriger vers la page de remerciement
        router.push('/merci');
      } else {
        console.error('Erreur Web3Forms:', data);
        setResultMessage(`Erreur lors de l'envoi : ${data.message || 'Veuillez réessayer.'}`);
        setSubmissionStatus('error');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Erreur Fetch:', error);
      setResultMessage('Une erreur réseau est survenue. Veuillez vérifier votre connexion et réessayer.');
      setSubmissionStatus('error');
      setIsSubmitting(false);
    }
    // Nous ne mettons pas setIsSubmitting(false) en cas de succès
    // car la page va être redirigée
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-white mb-6">Demandez votre démo</h3>
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        {/* Les champs restent les mêmes */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-subtle-text mb-1">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-card-bg border border-primary/20 rounded-md p-3 text-white focus:border-primary focus:ring-primary transition"
            placeholder="Votre nom complet"
            required
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          ></textarea>
        </div>

        {/* Affichage conditionnel des messages d'erreur uniquement */}
        {submissionStatus === 'error' && resultMessage && (
          <p className="text-sm text-red-400">
            {resultMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
        </button>
      </form>
    </div>
  );
}