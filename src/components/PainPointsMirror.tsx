'use client';

import React, { useState } from 'react'; // Removed useEffect
import { Check, Clock, Euro, Send, Mail } from 'lucide-react'; // Import necessary icons

interface PainPoint {
  id: string;
  text: string;
  icon: string; // Emoji
  impact: string;
  solution: string;
  financialImpact: number; // Euros per month
  timeLoss: number; // Hours per week
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
    text: 'Coordination d\'équipe difficile', // Reverted ' to '
    icon: '🚚', // Using truck as a placeholder for coordination/logistics
    impact: 'Erreurs et perte d\'efficacité', // Reverted ' to '
    solution: 'Notifications et mises à jour d\'équipe centralisées', // Reverted ' to '
    financialImpact: 300,
    timeLoss: 1.5
  },
];

const PainPointsMirror: React.FC = () => {
  const [selectedPains, setSelectedPains] = useState<string[]>([]);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [emailFormVisible, setEmailFormVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const togglePainPoint = (id: string) => {
    setSelectedPains((prev) =>
      prev.includes(id) ? prev.filter((painId) => painId !== id) : [...prev, id]
    );
    // Hide analysis if selection changes
    setShowAnalysis(false);
    setEmailFormVisible(false);
    setFormSubmitted(false);
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
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append('selected-pains', selectedPains.join(', ')); // Add selected pains

    try {
      await fetch('/', { // Netlify handles submissions to the root path
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        // Convert FormData entries to an array of [key, value] pairs for URLSearchParams
        body: new URLSearchParams(Array.from(formData.entries()) as [string, string][]).toString(),
      });
      setFormSubmitted(true);
      setEmailFormVisible(false); // Hide form after submission
    } catch (error) {
      console.error('Form submission error:', error);
      // Optionally: show an error message to the user
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
        Sélectionnez les tâches qui vous pèsent le plus au quotidien pour visualiser l&apos;impact potentiel de l&apos;automatisation.
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
            Voir l&apos;impact potentiel
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

          {/* Email Form Section */}
          {!formSubmitted && (
            <div className="text-center border-t border-primary/20 pt-8">
              {!emailFormVisible ? (
                <>
                  <p className="text-subtle-text mb-4">
                    Recevez une analyse plus détaillée et des solutions adaptées par email.
                  </p>
                  <button
                    onClick={() => setEmailFormVisible(true)}
                    className="bg-primary hover:bg-primary/80 text-dark-bg font-semibold py-2 px-6 rounded-md transition-colors duration-300 inline-flex items-center"
                  >
                    <Mail className="mr-2" size={18} />
                    Recevoir mon analyse détaillée
                  </button>
                </>
              ) : (
                <form
                  name="analyse-detaillee"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleEmailSubmit}
                  className="max-w-md mx-auto"
                >
                  {/* Hidden fields for Netlify */}
                  <input type="hidden" name="form-name" value="analyse-detaillee" />
                  <input type="hidden" name="selected-pains" value={selectedPains.join(', ')} />
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                    </label>
                  </p>

                  <label htmlFor="email-analysis" className="block text-sm font-medium text-subtle-text mb-2">
                    Entrez votre email pour recevoir l&apos;analyse :
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      id="email-analysis"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-grow bg-dark-bg border border-primary/30 rounded-md p-3 text-white focus:border-primary focus:ring-primary transition"
                      placeholder="Votre adresse email"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 px-4 rounded-md transition-colors duration-300 inline-flex items-center"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* Confirmation Message */}
          {formSubmitted && (
            <div className="text-center border-t border-primary/20 pt-8">
              <div className="bg-green-500/20 text-green-300 border border-green-500/30 p-4 rounded-md max-w-md mx-auto">
                <Check className="inline mr-2" />
                Merci ! Votre analyse détaillée vous sera envoyée sous peu.
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
