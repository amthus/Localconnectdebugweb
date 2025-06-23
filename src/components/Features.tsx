
import React from 'react';
import { Phone, MapPin, Search, User, Settings } from 'lucide-react';

const featuresList = [
  {
    icon: <Phone className="text-benin-orange h-12 w-12" />,
    title: "Bouton SOS",
    description: "Demandez de l'aide immédiate avec géolocalisation en cas de panne urgente."
  },
  {
    icon: <MapPin className="text-benin-blue h-12 w-12" />,
    title: "Géolocalisation précise",
    description: "Trouvez les prestataires les plus proches de votre position actuelle."
  },
  {
    icon: <Search className="text-benin-orange h-12 w-12" />,
    title: "Recherche avancée",
    description: "Filtrez les services par distance, disponibilité, tarifs et spécialités."
  },
  {
    icon: <User className="text-benin-blue h-12 w-12" />,
    title: "Profils vérifiés",
    description: "Des artisans qualifiés et évalués par la communauté des utilisateurs."
  },
  {
    icon: <Settings className="text-benin-orange h-12 w-12" />,
    title: "Mode hors-ligne",
    description: "Accédez aux fonctionnalités essentielles même sans connexion internet."
  },
  {
    icon: <Phone className="text-benin-blue h-12 w-12" />,
    title: "Interface adaptative",
    description: "Simple d'utilisation pour tous les niveaux de compétence technologique."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fonctionnalités principales</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Notre application propose des solutions innovantes pour faciliter l'assistance automobile au Bénin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index}
              className="feature-card flex flex-col items-center text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
