// src/components/PainPointsMirror.tsx
'use client';

import React, { useState, FormEvent } from 'react'; // Ajout de FormEvent
import { Check, Clock, Euro, Send, Mail } from 'lucide-react';

interface PainPoint {
  id: string;
  text: string;
  icon: string;
  impact: string;
  solution: string;
  financialImpact: number;
  timeLoss: number;
}

const painPointsData: PainPoint[] = [
    {
    id: 'devis',
    text: 'Création de devis trop lente',
    icon: '📝',
    impact: 'Perte de clients potentiels et stress inutile',
    solution: 'Automatisation des devis via WhatsApp',
    financialImpact: 400,
    timeLoss: 2.5
  },
  {
    id: 'relances',
    text: 'Relances clients inefficaces',
    icon: '💸',
    impact: 'Trésorerie tendue et temps perdu',
    solution: 'Suivi et relances automatisés',
    financialImpact: 250,
    timeLoss: 1.5
  },
  {
    id: 'repetitif',
    text: 'Tâches répétitives chronophages',
    icon: '🔄',
    impact: 'Moins de temps pour le cœur de métier',
    solution: 'Automatisation des processus récurrents',
    financialImpact: 300,
    timeLoss: 2
  },
  {
    id: 'planning',
    text: 'Gestion du planning complexe',
    icon: '📅',
    impact: 'Rendez-vous manqués ou conflits',
    solution: 'Prise de RDV et gestion de planning via IA',
    financialImpact: 350,
    timeLoss: 2
  },
  {
    id: 'hors_heures',
    text: 'Demandes hors heures de bureau',
    icon: '⏰',
    impact: 'Clients insatisfaits ou perdus',
    solution: 'Réponses automatiques et prise en charge 24/7',
    financialImpact: 200,
    timeLoss: 1
  },
  {
    id: 'coordination',
    text: 'Coordination d\'équipe difficile',
    icon: '🚚',
    impact: 'Erreurs et perte d\'efficacité',
    solution: 'Notifications et mises à jour d\'équipe centralisées',
    financialImpact: 300,
    timeLoss: 1.5
  },
];

const PainPointsMirror: React.FC = () => {
  const [selectedPains, setSelectedPains] = useState<string[]>([]);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [emailFormVisible, setEmailFormVisible] = useState(false);
  const [email, setEmail] = useState('');

  // États pour la soumission du formulaire d'email
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [emailSubmissionStatus, setEmailSubmissionStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const [emailResultMessage, setEmailResultMessage] = useState('');

  // Récupère la clé d'accès (la même que pour l'autre formulaire)
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error("Erreur PainPointsMirror: La variable d'environnement NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY n'est pas définie.");
  }

  const togglePainPoint = (id: string) => {
    setSelectedPains((prev) =>
      prev.includes(id) ? prev.filter((painId) => painId !== id) : [...prev, id]
    );
    setShowAnalysis(false);
    setEmailFormVisible(false);
    // Réinitialiser l'état du formulaire email si la sélection change
    setEmailSubmissionStatus('idle');
    setEmailResultMessage('');
    setIsSubmittingEmail(false);
  };

  const calculateImpact = () => {
    return selectedPains.reduce((total, id) => {
      const pain = painPointsData.find((p) => p.id === id);
      return total + (pain?.financialImpact || 0);
    }, 0);
  };

  const calculateTimeSaved = () => {
    return selectedPains.reduce((total, id) => {
      const pain = painPointsData.find((p) => p.id === id);
      return total + (pain?.timeLoss || 0);
    }, 0);
  };

  const handleShowAnalysis = () => {
    setShowAnalysis(true);
    // Réinitialiser l'état du formulaire email quand on affiche l'analyse
    setEmailSubmissionStatus('idle');
    setEmailResultMessage('');
    setIsSubmittingEmail(false);
  };

  // Mise à jour pour utiliser Web3Forms
  const handleEmailSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmittingEmail(true);
    setEmailSubmissionStatus('idle');
    setEmailResultMessage('');

    if (!accessKey) {
        setEmailResultMessage("Erreur de configuration : clé d'accès manquante.");
        setEmailSubmissionStatus('error');
        setIsSubmittingEmail(false);
        return;
    }

    const formData = new FormData();
    formData.append('email', email); // Récupère l'email depuis l'état
    formData.append('selected_pains', selectedPains.join(', ')); // Les points sélectionnés
    formData.append('access_key', accessKey);
    formData.append('subject', `Demande Analyse Détaillée - PainPointsMirror (${window.location.hostname})`);
    formData.append('from_name', 'Formulaire Analyse PainPointsMirror');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setEmailResultMessage('Merci ! Votre analyse détaillée vous sera envoyée sous peu.');
        setEmailSubmissionStatus('success');
        setEmailFormVisible(false); // Optionnel: masquer le formulaire après succès
        setEmail(''); // Réinitialiser le champ email
      } else {
        console.error('Erreur Web3Forms (PainPoints):', data);
        setEmailResultMessage(`Erreur lors de l'envoi : ${data.message || 'Veuillez réessayer.'}`);
        setEmailSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Erreur Fetch (PainPoints):', error);
      setEmailResultMessage('Une erreur réseau est survenue. Veuillez vérifier votre connexion et réessayer.');
      setEmailSubmissionStatus('error');
    } finally {
      setIsSubmittingEmail(false);
    }
  };

  const totalImpact = calculateImpact();
  const totalTimeSaved = calculateTimeSaved();

  return (
    <div className="bg-dark-bg text-white p-6 md:p-10 rounded-lg shadow-xl border border-primary/20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Identifiez vos <span className="text-primary">points de friction</span>
      </h2>
      <p className="text-subtle-text text-center text-lg mb-10 max-w-2xl mx-auto">
        Sélectionnez les tâches qui vous pèsent le plus au quotidien pour visualiser l'impact potentiel de l'automatisation.
      </p>

      {/* Grid of Pain Points */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
        {painPointsData.map((pain) => (
          <button
            key={pain.id}
            onClick={() => togglePainPoint(pain.id)}
            className={`p-4 md:p-6 rounded-lg border transition-all duration-300 flex flex-col items-center text-center h-full ${
              selectedPains.includes(pain.id)
                ? 'bg-primary/20 border-primary scale-105 shadow-lg'
                : 'bg-card-bg border-primary/10 hover:bg-primary/10 hover:border-primary/30'
            }`}
          >
            <span className="text-3xl md:text-4xl mb-3">{pain.icon}</span>
            <span className="font-medium text-sm md:text-base text-white">{pain.text}</span>
          </button>
        ))}
      </div>

      {/* "See Impact" Button */}
      {selectedPains.length > 0 && !showAnalysis && (
        <div className="text-center mb-10">
          <button
            onClick={handleShowAnalysis}
            className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 text-lg"
          >
            Voir l'impact potentiel
          </button>
        </div>
      )}

      {/* Analysis Section */}
      {showAnalysis && selectedPains.length > 0 && (
        <div className="bg-card-bg border border-primary/20 rounded-lg p-6 md:p-8 mb-10" data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
            Votre diagnostic personnalisé
          </h3>

          {/* Impact Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-center">
            <div className="bg-dark-bg p-4 rounded-lg border border-secondary/30">
              <Clock className="text-secondary mx-auto mb-2" size={32} />
              <div className="text-4xl font-bold text-white">{totalTimeSaved}h</div>
              <div className="text-subtle-text">Temps potentiellement perdu / semaine</div>
            </div>
            <div className="bg-dark-bg p-4 rounded-lg border border-secondary/30">
              <Euro className="text-secondary mx-auto mb-2" size={32} />
              <div className="text-4xl font-bold text-white">{totalImpact}€</div>
              <div className="text-subtle-text">Impact financier estimé / mois</div>
            </div>
          </div>

          {/* Selected Pains & Solutions */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4 text-white">Vos points de douleur sélectionnés :</h4>
            <ul className="space-y-3">
              {painPointsData
                .filter((p) => selectedPains.includes(p.id))
                .map((pain) => (
                  <li key={pain.id} className="flex items-start bg-dark-bg p-3 rounded">
                    <Check className="text-primary flex-shrink-0 mr-3 mt-1" size={18} />
                    <div>
                      <span className="font-medium text-white">{pain.text}:</span>{' '}
                      <span className="text-subtle-text">{pain.solution}</span>
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          {/* Email Form Section - Modifié */}
          {emailSubmissionStatus !== 'success' && ( // Ne pas afficher si succès
             <div className="text-center border-t border-primary/20 pt-8">
              {!emailFormVisible ? (
                 <>
                  <p className="text-subtle-text mb-4">
                    Recevez une analyse plus détaillée et des solutions adaptées par email.
                  </p>
                  <button
                    onClick={() => setEmailFormVisible(true)}
                    className="bg-primary hover:bg-primary/80 text-dark-bg font-semibold py-2 px-6 rounded-md transition-colors duration-300 inline-flex items-center"
                    disabled={isSubmittingEmail} // Désactiver si en cours d'envoi
                  >
                    <Mail className="mr-2" size={18} />
                    Recevoir mon analyse détaillée
                  </button>
                 </>
               ) : (
                 <form
                   onSubmit={handleEmailSubmit} // Utilise notre fonction
                   className="max-w-md mx-auto space-y-3" // Ajout space-y
                 >
                  {/* Pas besoin de champs cachés Netlify ici */}
                   <label htmlFor="email-analysis" className="block text-sm font-medium text-subtle-text">
                     Entrez votre email pour recevoir l'analyse :
                   </label>
                   <div className="flex gap-2">
                     <input
                       type="email"
                       id="email-analysis"
                       name="email" // Garder name pour accessibilité et sémantique, mais on utilise l'état 'email'
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       className="flex-grow bg-dark-bg border border-primary/30 rounded-md p-3 text-white focus:border-primary focus:ring-primary transition"
                       placeholder="Votre adresse email"
                       required
                       disabled={isSubmittingEmail} // Désactiver pendant l'envoi
                     />
                     <button
                       type="submit"
                       className={`bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300 inline-flex items-center ${isSubmittingEmail ? 'opacity-50 cursor-not-allowed' : ''}`}
                       disabled={isSubmittingEmail} // Désactiver pendant l'envoi
                     >
                       {isSubmittingEmail ? <Clock size={18} className="animate-spin" /> : <Send size={18} />}
                     </button>
                   </div>
                    {/* Affichage des messages d'erreur/succès */}
                    {(emailSubmissionStatus === 'idle' || emailSubmissionStatus === 'error') && (
                      <div className="text-center border-t border-primary/20 pt-8">
                        <p className={`text-sm ${emailSubmissionStatus === 'error' ? 'text-red-400' : 'text-gray-400'}`}>
                          {emailResultMessage}
                        </p>
                      </div>
                    )}
                 </form>
               )}
             </div>
           )}

          {/* Confirmation Message (Succès) */}
          {emailSubmissionStatus === 'success' && (
            <div className="text-center border-t border-primary/20 pt-8">
              <div className="bg-green-500/20 text-green-300 border border-green-500/30 p-4 rounded-md max-w-md mx-auto inline-flex items-center">
                <Check className="inline mr-2" />
                {emailResultMessage || "Merci ! Votre demande a été envoyée."} {/* Affiche le message de succès */}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Final CTA */}
      {showAnalysis && selectedPains.length > 0 && (
         <div className="text-center mt-10">
           <a
             href="#booking" // Link to the booking/contact section
             className="inline-block bg-primary hover:bg-secondary transition-colors text-dark-bg font-bold py-3 px-8 rounded-md text-lg"
           >
             Découvrir comment résoudre ces points
           </a>
         </div>
       )}
    </div>
  );
};

export default PainPointsMirror;
