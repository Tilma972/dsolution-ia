import Image from 'next/image';
import ContactForm from '@/components/ContactForm'; 
import Link from 'next/link';
import { MessageSquare, Clock, Users, CheckCircle, Check, Hammer, Utensils, Lightbulb, Scissors, Car } from 'lucide-react'; // Renamed Home icon
import WhatsAppDemo from '@/components/WhatsAppDemo'; // Import the new component
import PricingOption from '@/components/PricingOption';
import TestimonialCard from '@/components/TestimonialCard';
import HeroImage from '@/components/HeroImage';
import PainPointsMirror from '@/components/PainPointsMirror'; // Import the new component

export default function Home() {
  return (
    <>
      {/* Section Hero */}
      <section className="relative w-full min-h-screen bg-dark-bg">
        <div className="container mx-auto px-4 py-16 md:px-6 flex flex-col md:flex-row items-center">
          {/* Colonne de texte */}
          <div className="w-full md:w-1/2 z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" data-aos="fade-up">
              <span className="text-primary">Automatisation</span> <span className="text-gray-200">simple pour artisans, pros libéraux et TPE</span>
            </h1>
            <p className="text-gray-200 text-xl mb-8" data-aos="fade-up" data-aos-delay="100">
              Moins de tâches. Plus de clients. 100% via WhatsApp. Zéro logiciel compliqué.
            </p>
            <Link 
              href="https://dsolutionia.zohobookings.eu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary transition-colors text-dark-bg font-bold py-4 px-8 rounded-md text-lg inline-block animate-pulse-cta hover:scale-105 transition-transform duration-300"
            >
              Découvrez nos solutions
            </Link>
          </div>

          {/* Colonne d'image - Nouvelle approche pour taille/position */}
          <div className="w-full md:w-1/2 relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center mt-12 md:mt-0"> 
            {/* Conteneur positionné absolument DANS la colonne pour contrôle fin */}
            <div 
              data-aos="fade-in" 
              data-aos-delay="300" 
              
              className="absolute -right-1/6 -bottom-1/4 w-[150%] h-[150%] md:-right-1/4 md:-bottom-1/3 md:w-[180%] md:h-[180%] max-w-none max-h-none z-0"
            >
              <HeroImage />
            </div>
            
            {/* Effet de lueur plus intense */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/40 via-transparent to-transparent rounded-full blur-[150px] opacity-70 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Bannière */}
      <section className="bg-gradient-to-r from-primary to-green-400 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-2xl md:text-3xl font-medium text-dark-bg">
            Conçu par des experts pour les pros qui veulent des résultats, pas des complications.
          </p>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="bg-dark-bg py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Vos <span className="text-primary">Avantages Clés</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Carte 1: Automatisation via WhatsApp */}
            <div className="bg-card-bg p-6 rounded-lg shadow-lg border border-primary/20 text-center transition duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-xl" data-aos="fade-up">
              <div className="mb-4 text-primary flex justify-center">
                <MessageSquare size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Automatisation via WhatsApp</h3>
              <p className="text-subtle-text">Gérez tout depuis l&apos;application que vous utilisez déjà.</p>
            </div>

            {/* Carte 2: Gain de Temps Garanti */}
            <div className="bg-card-bg p-6 rounded-lg shadow-lg border border-primary/20 text-center transition duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-xl" data-aos="fade-up" data-aos-delay="100">
              <div className="mb-4 text-primary flex justify-center">
                <Clock size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Gain de Temps Garanti</h3>
              <p className="text-subtle-text">Réduisez les tâches répétitives et concentrez-vous sur votre cœur de métier.</p>
            </div>

            {/* Carte 3: Plus de Clients, Moins d'Effort */}
            <div className="bg-card-bg p-6 rounded-lg shadow-lg border border-primary/20 text-center transition duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-xl" data-aos="fade-up" data-aos-delay="200">
              <div className="mb-4 text-primary flex justify-center">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Plus de Clients, Moins d&apos;Effort</h3>
              <p className="text-subtle-text">Ne manquez plus d&apos;opportunités grâce à des réponses rapides et un suivi simplifié.</p>
            </div>

            {/* Carte 4: Simplicité Avant Tout */}
            <div className="bg-card-bg p-6 rounded-lg shadow-lg border border-primary/20 text-center transition duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-xl" data-aos="fade-up" data-aos-delay="300">
              <div className="mb-4 text-primary flex justify-center">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Simplicité Avant Tout</h3>
              <p className="text-subtle-text">Pas de logiciel compliqué à installer ou à apprendre.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Bénéfices Concrets */}
      <section className="bg-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Grille 2 colonnes (image + texte) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            {/* Colonne Gauche - Image */}
            <div className="relative h-[400px] md:h-[500px] w-full">
              <Image 
                src="/images/portrait-consultant.png"
                alt="Consultant D-Solution IA"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
            </div>
            
            {/* Colonne Droite - Texte */}
            <div>
              <p className="text-secondary font-semibold tracking-wider mb-3">VOTRE AVANTAGE CONCURRENTIEL</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white" data-aos="fade-up">
                Ce que vous <span className="text-primary">gagnez concrètement</span>
              </h2>
              <p className="text-subtle-text text-lg mb-8">
                Des résultats mesurables et immédiats pour votre activité. Notre solution d&apos;automatisation WhatsApp transforme votre façon de travailler et d&apos;interagir avec vos clients.
              </p>
            </div>
          </div>
          
          {/* Grille 3 colonnes (bénéfices chiffrés) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bénéfice 1 */}
            <div className="bg-card-bg p-8 rounded-lg shadow-lg border border-primary/20" data-aos="fade-up">
              <div className="text-primary text-4xl font-bold mb-4">2h/jour</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Économisées sur les tâches administratives</h3>
              <p className="text-subtle-text">Automatisez les réponses, la prise de rendez-vous et le suivi client pour vous concentrer sur votre cœur de métier.</p>
            </div>
            
            {/* Bénéfice 2 */}
            <div className="bg-card-bg p-8 rounded-lg shadow-lg border border-primary/20" data-aos="fade-up" data-aos-delay="100">
              <div className="text-primary text-4xl font-bold mb-4">+30%</div>
              <h3 className="text-xl font-semibold mb-3 text-white">De clients potentiels convertis</h3>
              <p className="text-subtle-text">Répondez instantanément aux demandes, même en dehors des heures de bureau, et ne manquez plus aucune opportunité.</p>
            </div>
            
            {/* Bénéfice 3 */}
            <div className="bg-card-bg p-8 rounded-lg shadow-lg border border-primary/20" data-aos="fade-up" data-aos-delay="200">
              <div className="text-primary text-4xl font-bold mb-4">1h max</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Pour configurer votre solution</h3>
              <p className="text-subtle-text">Une mise en place rapide et sans complications techniques. Vous êtes opérationnel immédiatement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Séparateur Visuel */}
      <section className="w-full">
        {/* Conteneur pour l'image avec hauteur définie */}
        <div className="relative w-full h-48 md:h-64">
          <Image
            src="/images/separator-tech.svg"
            alt="Séparateur visuel technologique"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Section Cas Concrets */}
      <section className="bg-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Cas <span className="text-primary">concrets</span> par métier
          </h2>
          
          {/* Grille des cas d'usage */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Maçon/Artisan BTP */}
            <div data-aos="fade-up">
              <WhatsAppDemo
                title="Maçon : Devis instantanés"
                painPoint="Devis chronophages et souvent non convertis"
                // demoImage="/images/demos/demo-macon-devis.gif" // Placeholder
                altText="Démo WhatsApp de devis automatisé pour maçon"
                description="Génération de devis instantanés via WhatsApp pour répondre rapidement aux demandes."
                impactMetric="Temps de réponse réduit de 95%, conversion +28%"
                placeholderIcon={<Hammer size={48} />}
              />
            </div>

            {/* Boucherie/Traiteur/Boulangerie */}
            <div data-aos="fade-up" data-aos-delay="100">
              <WhatsAppDemo
                title="Boulangerie : Commandes automatisées"
                painPoint="Gestion des commandes et modifications de dernière minute"
                // demoImage="/images/demos/demo-boulangerie-commande.gif" // Placeholder
                altText="Démo WhatsApp de commande pour boulangerie"
                description="Commandes automatisées avec confirmation instantanée pour simplifier la gestion."
                impactMetric="Erreurs de commande -70%, satisfaction client +35%"
                placeholderIcon={<Utensils size={48} />}
              />
            </div>

            {/* Électricien/Plombier urgence */}
            <div data-aos="fade-up" data-aos-delay="200">
              <WhatsAppDemo
                title="Électricien : Qualification des urgences"
                painPoint="Qualification des demandes pendant les interventions"
                // demoImage="/images/demos/demo-electricien-urgence.gif" // Placeholder
                altText="Démo WhatsApp de qualification d'urgence pour électricien"
                description="Qualification automatique des urgences et dispatching pour optimiser les interventions."
                impactMetric="Taux de conversion +42% sur appels d'urgence"
                placeholderIcon={<Lightbulb size={48} />}
              />
            </div>

            {/* Salon de coiffure/esthétique */}
            <div data-aos="fade-up">
              <WhatsAppDemo
                title="Salon de coiffure : Gestion des rendez-vous"
                painPoint="No-show et créneaux non optimisés"
                // demoImage="/images/demos/demo-coiffure-rdv.gif" // Placeholder
                altText="Démo WhatsApp de gestion de RDV pour salon de coiffure"
                description="Rappels intelligents et gestion des créneaux disponibles pour réduire les no-shows."
                impactMetric="Temps d'inactivité réduit de 37%, no-show -43%"
                placeholderIcon={<Scissors size={48} />}
              />
            </div>

            {/* Exemple Traiteur */}
            <div data-aos="fade-up" data-aos-delay="100">
              <WhatsAppDemo
                title="Traiteur : Devis événementiel automatisé"
                painPoint="Qualification chronophage des demandes événementielles"
                // demoImage="/images/demos/demo-traiteur-devis.gif" // Placeholder
                altText="Démo WhatsApp de devis automatisé pour traiteur"
                description="Client demande un buffet pour événement → qualification auto des besoins (type, allergies, quantités) → devis avec photos de réalisations similaires."
                impactMetric="Temps de réponse -95%, conversion +40%"
                placeholderIcon={<Utensils size={48} />}
              />
            </div>

            {/* Garage indépendant */}
            <div data-aos="fade-up" data-aos-delay="200">
              <WhatsAppDemo
                title="Garage Auto : Devis instantanés"
                painPoint="Interruptions fréquentes pour faire des devis qui cassent le rythme de travail et font perdre 3h productives par jour"
                // demoImage="/images/demos/demo-garage-devis.gif" // Placeholder
                altText="Démo WhatsApp de devis automobile instantané"
                description="Client demande prix courroie distribution → système identifie le véhicule → devis précis généré en 2 minutes avec pièces + main d'œuvre."
                impactMetric="Temps de réponse -85%, productivité atelier +30%"
                placeholderIcon={<Car size={48} />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section PainPointsMirror */}
      <section className="bg-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6" data-aos="fade-up">
          <PainPointsMirror />
        </div>
      </section>

      {/* Section Tarifs */}
      <section id="tarifs" className="bg-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white" data-aos="fade-up">
            Un investissement clair pour une <span className="text-primary">croissance visible</span>
          </h2>
          
          <p className="text-subtle-text text-center max-w-3xl mx-auto mb-16">
            Choisissez le plan adapté à vos ambitions ou contactez-nous pour une solution entièrement personnalisée. 
            Nos tarifs incluent l&apos;accès à la plateforme WhatsApp Business officielle et un volume de conversations.
          </p>
          
          {/* Grille des options de prix */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Option Essentiel */}
            <div data-aos="fade-up">
              <PricingOption 
                title="Essentiel"
                price="119€/mois"
                setupFee="+ 599€ setup (Accompagnement API inclus)"
                features={[
                  "Automatisation WhatsApp (Réponses...)",
                  "Accompagnement setup API",
                  "500 conversations clients/mois incluses*",
                  "Support email"
                ]}
                note="*Conversation supplémentaire : 0.06€"
                ctaText="Choisir Essentiel"
                ctaLink="https://dsolutionia.zohobookings.eu"
                featuredFeature={{
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  ),
                  text: "Réponses automatiques 24/7"
                }}
              />
            </div>
            
            {/* Option Pro */}
            <div data-aos="fade-up" data-aos-delay="100">
              <PricingOption 
                title="Pro"
                price="199€/mois"
                setupFee="+ 599€ setup (Accompagnement API inclus)"
                features={[
                  "Toutes fonctionnalités Essentiel",
                  "1200 conversations clients/mois incluses*",
                  "Chatbot IA personnalisé...",
                  "IA pour génération devis/factures",
                  "Mini-CRM...",
                  "Support prioritaire..."
                ]}
                note="*Conversation supplémentaire : 0.06€"
                ctaText="Choisir Pro"
                ctaLink="https://dsolutionia.zohobookings.eu"
                isRecommended={true}
                featuredFeature={{
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  ),
                  text: "Qualification avancée et devis automatisés"
                }}
              />
            </div>
            
            {/* Option Sur Mesure */}
            <div data-aos="fade-up" data-aos-delay="200">
              <PricingOption 
                title="Sur Mesure"
                price="Sur Devis"
                features={[
                  "Toutes les fonctionnalités Pro, PLUS :",
                  "Intégrations spécifiques (CRM, ERP, etc.)",
                  "Dévelppement IA sur mesure",
                  "Workflows d'automatisation complexes",
                  "Gestion de volumes personnalisés",
                  "Support dédié & SLA",
                  "Accompagnement stratégique"
                ]}
                ctaText="Demander un Devis"
                ctaLink="#contact"
                isCustom={true}
                featuredFeature={{
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  text: "Intégrations sur mesure avec vos outils existants"
                }}
              />
            </div>
          </div>

          {/* Tableau comparatif des fonctionnalités */}
          <div className="mt-16 mb-8" data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white">
              Comparaison <span className="text-primary">détaillée</span> des fonctionnalités
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-4 px-4 text-left text-subtle-text">Fonctionnalité</th>
                    <th className="py-4 px-4 text-center text-white">Essentiel</th>
                    <th className="py-4 px-4 text-center text-white bg-gradient-to-b from-secondary/20 to-transparent">Pro</th>
                    <th className="py-4 px-4 text-center text-white">Sur Mesure</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Fonctionnalités avec leurs disponibilités par plan */}
                  <tr className="border-b border-gray-700/50 hover:bg-dark-bg/50">
                    <td className="py-3 px-4 text-subtle-text">Automatisation des réponses fréquentes</td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white bg-gradient-to-b from-secondary/10 to-transparent">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  
                  {/* Disponibilité 24/7 */}
                  <tr className="border-b border-gray-700/50 hover:bg-dark-bg/50">
                    <td className="py-3 px-4 text-subtle-text">Disponibilité 24/7 sur WhatsApp</td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white bg-gradient-to-b from-secondary/10 to-transparent">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  
                  {/* Prise de rendez-vous */}
                  <tr className="border-b border-gray-700/50 hover:bg-dark-bg/50">
                    <td className="py-3 px-4 text-subtle-text">Prise de rendez-vous automatisée</td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white bg-gradient-to-b from-secondary/10 to-transparent">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  
                  {/* Envoi documents */}
                  <tr className="border-b border-gray-700/50 hover:bg-dark-bg/50">
                    <td className="py-3 px-4 text-subtle-text">Envoi de documents et formulaires</td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white bg-gradient-to-b from-secondary/10 to-transparent">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  
                  {/* Qualification avancée */}
                  <tr className="border-b border-gray-700/50 hover:bg-dark-bg/50">
                    <td className="py-3 px-4 text-subtle-text">Qualification avancée des demandes</td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white bg-gradient-to-b from-secondary/10 to-transparent">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  
                  {/* Workflows métier */}
                  <tr className="border-b border-gray-700/50 hover:bg-dark-bg/50">
                    <td className="py-3 px-4 text-subtle-text">Workflows métier personnalisés</td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white bg-gradient-to-b from-secondary/10 to-transparent">
                      <div className="flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs ml-1">(limité)</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center text-white">
                      <div className="flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs ml-1">(illimité)</span>
                      </div>
                    </td>
                  </tr>
                  
                  {/* Devis automatisés */}
                  <tr className="border-b border-gray-700/50 hover:bg-dark-bg/50">
                    <td className="py-3 px-4 text-subtle-text">Devis automatisés avec suivi</td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white bg-gradient-to-b from-secondary/10 to-transparent">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  
                  {/* Relances commerciales */}
                  <tr className="border-b border-gray-700/50 hover:bg-dark-bg/50">
                    <td className="py-3 px-4 text-subtle-text">Relances commerciales automatiques</td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white bg-gradient-to-b from-secondary/10 to-transparent">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  
                  {/* IA génération */}
                  <tr className="border-b border-gray-700/50 hover:bg-dark-bg/50">
                    <td className="py-3 px-4 text-subtle-text">IA pour génération de contenu</td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white bg-gradient-to-b from-secondary/10 to-transparent">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  
                  {/* Intégration systèmes */}
                  <tr className="border-b border-gray-700/50 hover:bg-dark-bg/50">
                    <td className="py-3 px-4 text-subtle-text">Intégration avec d&apos;autres systèmes</td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white bg-gradient-to-b from-secondary/10 to-transparent">
                      <svg className="w-5 h-5 mx-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </td>
                    <td className="py-3 px-4 text-center text-white">
                      <svg className="w-5 h-5 mx-auto text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </td>
                  </tr>
                  
                  {/* Support */}
                  <tr className="border-b border-gray-700/50 hover:bg-dark-bg/50">
                    <td className="py-3 px-4 text-subtle-text">Assistance technique</td>
                    <td className="py-3 px-4 text-center text-white">
                      <div className="text-xs">Email</div>
                    </td>
                    <td className="py-3 px-4 text-center text-white bg-gradient-to-b from-secondary/10 to-transparent">
                      <div className="text-xs text-primary font-medium">Prioritaire</div>
                    </td>
                    <td className="py-3 px-4 text-center text-white">
                      <div className="text-xs text-primary font-medium">Dédié</div>
                    </td>
                  </tr>
                  
                  {/* Volume */}
                  <tr className="border-b border-gray-700/50 hover:bg-dark-bg/50">
                    <td className="py-3 px-4 text-subtle-text">Conversations WhatsApp incluses</td>
                    <td className="py-3 px-4 text-center text-white">
                      <div className="text-sm">500/mois</div>
                    </td>
                    <td className="py-3 px-4 text-center text-white bg-gradient-to-b from-secondary/10 to-transparent">
                      <div className="text-sm text-primary font-medium">1200/mois</div>
                    </td>
                    <td className="py-3 px-4 text-center text-white">
                      <div className="text-sm">Personnalisé</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Descriptions clarifiantes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">Essentiel</h4>
              <p className="text-subtle-text text-sm">
                Idéal pour automatiser les tâches répétitives basiques et gagner du temps au quotidien.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary mb-2">Pro</h4>
              <p className="text-subtle-text text-sm">
                Solution complète pour les processus métier complexes avec qualification des demandes et suivi commercial.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">Sur Mesure</h4>
              <p className="text-subtle-text text-sm">
                Parfait pour les besoins spécifiques nécessitant des intégrations personnalisées et des volumes importants.
              </p>
            </div>
          </div>
          
          {/* Notes et offre de lancement */}
          <div className="mt-12">
            {/* Badge Offre de Lancement */}
            <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
              <p className="text-center text-white font-semibold">
                <span className="text-secondary">Offre de Lancement :</span> Tarifs garantis jusqu&apos;au 30 juin 2025 !
              </p>
            </div>
            
            {/* Note sur les conversations */}
            <div className="text-subtle-text text-center text-sm max-w-2xl mx-auto">
              <p>*Une &apos;conversation&apos; (incluse dans Essentiel/Pro) correspond à une session d&apos;échange de 24h initiée par le client ou l&apos;entreprise via WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages & Garantie */}
      <section id="garantie" className="bg-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white" data-aos="fade-up">
            Ils utilisent déjà <span className="text-primary">D-Solution IA</span>
          </h2>
          
          {/* Grille des témoignages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <TestimonialCard 
              imageSrc="/images/client-paul.jpg"
              altText="Photo de Paul M., Maçon"
              quote="Incroyable, j’économise facile 2h par jour sur les devis et la paperasse. L'IA répond direct aux clients, c'est bluffant."
              name="Paul M."
              title="Maçon"
            />
            <TestimonialCard 
              imageSrc="/images/client-sophie.jpg"
              altText="Photo de Sophie L., Boulangère"
              quote="Mes clients adorent pouvoir commander et poser des questions via WhatsApp à toute heure. Ça a vraiment boosté mes ventes additionnelles."
              name="Sophie L."
              title="Boulangère"
            />
          </div>
          
          {/* Badge Garantie */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/30 px-4 py-2 rounded-full text-sm font-medium">
              <Check size={16} />
              <span>Satisfait ou remboursé sur votre 1er mois</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="bg-dark-bg py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white" data-aos="fade-up">
            Questions <span className="text-primary">fréquentes</span>
          </h2>
          
          <div className="space-y-6">
            {/* Item FAQ 1 */}
            <details className="border-b border-gray-700 pb-4 group">
              <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex justify-between items-center">
                Quel type de compte WhatsApp est nécessaire pour utiliser D-Solution IA ?
                <span className="text-primary transform transition-transform duration-300 group-open:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </span>
              </summary>
              <div className="mt-3 text-subtle-text">
                <p>Pour vous garantir une solution fiable, performante et conforme aux règles de WhatsApp, nous utilisons la <strong>plateforme officielle WhatsApp Business API</strong>. Ne vous inquiétez pas, notre offre inclut un <strong>accompagnement pas à pas</strong> pour la configuration initiale de ce compte (vérification Facebook Business Manager, choix du numéro, etc.). C&apos;est inclus dans les frais de setup.</p>
              </div>
            </details>

            {/* Item FAQ 2 */}
            <details className="border-b border-gray-700 pb-4 group">
              <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex justify-between items-center">
                Les tarifs mensuels incluent-ils les frais d&apos;envoi des messages WhatsApp ?
                <span className="text-primary transform transition-transform duration-300 group-open:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </span>
              </summary>
              <div className="mt-3 text-subtle-text">
                <p>Oui, pour vous offrir une meilleure visibilité sur vos coûts, nos plans <strong>incluent un volume généreux de conversations</strong> chaque mois (500 pour l&apos;Essentiel, 1200 pour le Pro). Une conversation est une session d&apos;échange de 24h avec un client via l&apos;API. Si vous dépassez ce volume, un tarif transparent de 0.06€ par conversation supplémentaire s&apos;applique. La grande majorité de nos clients restent dans les volumes inclus.</p>
              </div>
            </details>

            {/* Item FAQ 3 */}
            <details className="border-b border-gray-700 pb-4 group">
              <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex justify-between items-center">
                Faut-il être un expert en informatique ?
                <span className="text-primary transform transition-transform duration-300 group-open:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </span>
              </summary>
              <div className="mt-3 text-subtle-text">
                <p>Absolument pas ! Si vous savez utiliser WhatsApp, vous savez utiliser D-Solution IA. On s&apos;occupe de toute la partie technique pour vous lors de la mise en place et nous assurons la maintenance.</p>
              </div>
            </details>

            {/* Item FAQ 4 */}
            <details className="border-b border-gray-700 pb-4 group">
              <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex justify-between items-center">
                Combien de temps faut-il pour être opérationnel ?
                <span className="text-primary transform transition-transform duration-300 group-open:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </span>
              </summary>
              <div className="mt-3 text-subtle-text">
                <p>Après notre session de configuration d&apos;environ 1 heure (incluse dans le setup) où nous paramétrons vos automatisations, vous êtes prêt ! Vous recevrez également une mini-formation de 15 minutes pour être autonome au quotidien.</p>
              </div>
            </details>

            {/* Item FAQ 5 */}
            <details className="border-b border-gray-700 pb-4 group">
              <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex justify-between items-center">
                Est-ce adapté à mon métier spécifique ?
                <span className="text-primary transform transition-transform duration-300 group-open:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </span>
              </summary>
              <div className="mt-3 text-subtle-text">
                <p>Oui. Que vous soyez plombier, avocat, coach sportif, restaurateur ou artisan, nous personnalisons les automatisations et le chatbot (Plan Pro) pour coller parfaitement à <em>votre</em> réalité et <em>vos</em> besoins spécifiques.</p>
              </div>
            </details>

            {/* Item FAQ 6 */}
            <details className="pb-4 group"> {/* Pas de bordure en bas pour le dernier */}
              <summary className="font-semibold text-lg text-primary cursor-pointer list-none flex justify-between items-center">
                En quoi consistent les frais de setup de 599€ ?
                <span className="text-primary transform transition-transform duration-300 group-open:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </span>
              </summary>
              <div className="mt-3 text-subtle-text">
                <p>Ces frais uniques couvrent bien plus que la technique ! Ils incluent : 1) L&apos;<strong>audit de vos besoins</strong> spécifiques. 2) L&apos;<strong>accompagnement personnalisé</strong> pour la création et la vérification de votre compte WhatsApp Business API officiel. 3) La <strong>configuration complète</strong> de vos scénarios d&apos;automatisation et/ou de votre Chatbot IA dans nos systèmes (N8N). 4) Votre <strong>formation</strong> à l&apos;utilisation de la solution. C&apos;est un investissement pour une mise en route sereine et efficace.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Second Séparateur Visuel */}
      <section className="w-full">
        {/* Conteneur pour l'image avec hauteur définie */}
        <div className="relative w-full h-48 md:h-64">
          <Image
            src="/images/separator-abstract.jpg"
            alt="Séparateur visuel abstrait"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Section Contact & CTA Final */}
      <section id="booking" className="bg-dark-bg py-16 md:py-24"> {/* Changed id to "booking" */}
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white" data-aos="fade-up">
            Prêt à gagner du temps et des <span className="text-primary">clients</span> ?
          </h2>
          <p className="text-subtle-text text-center max-w-2xl mx-auto mb-12">
            Discutons de votre besoin spécifique lors d&apos;une démo gratuite et sans engagement.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Colonne Gauche - Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Contactez-nous</h3>
              <div>
                <p className="text-secondary font-medium mb-1">Email</p>
                <a href="mailto:contact@dsolution.com" className="text-subtle-text hover:text-primary transition-colors">
                  contact@dsolution.com
                </a>
              </div>
              <div>
                <p className="text-secondary font-medium mb-1">WhatsApp</p>
                <p className="text-subtle-text">
                  Contact possible via WhatsApp (voir bouton flottant)
                  {/* TODO: Ajouter le bouton flottant plus tard */}
                </p>
              </div>
              {/* Optionnel: Placeholder visuel */}
              {/* <div className="bg-card-bg h-40 rounded-lg mt-8"></div> */}
            </div>
            
            {/* Colonne Droite - Formulaire */}
            <ContactForm />             
          </div>
          
          {/* CTA Principal */}
          <div className="text-center mt-16">
            <Link 
              href="https://dsolutionia.zohobookings.eu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-secondary transition-colors text-dark-bg font-bold py-4 px-8 rounded-md text-lg"
            >
              Réservez votre démo gratuite dès maintenant
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
