
import React from 'react';

const UserTypes: React.FC = () => {
  return (
    <section id="users" className="section-padding bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pour qui?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AutoAssistBénin est conçu pour répondre aux besoins de deux groupes distincts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For Drivers */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 transform duration-300">
            <div className="bg-benin-orange p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Conducteurs</h3>
              <p className="text-white opacity-90">
                Pour tous les conducteurs qui souhaitent voyager en toute sérénité.
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-benin-orange font-bold mr-2">✓</span>
                  <span>Professionnels en déplacement régulier</span>
                </li>
                <li className="flex items-start">
                  <span className="text-benin-orange font-bold mr-2">✓</span>
                  <span>Particuliers pour leurs trajets quotidiens</span>
                </li>
                <li className="flex items-start">
                  <span className="text-benin-orange font-bold mr-2">✓</span>
                  <span>Voyageurs occasionnels et touristes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-benin-orange font-bold mr-2">✓</span>
                  <span>Nouveaux conducteurs peu familiers avec la mécanique</span>
                </li>
                <li className="flex items-start">
                  <span className="text-benin-orange font-bold mr-2">✓</span>
                  <span>Flottes d'entreprises et véhicules commerciaux</span>
                </li>
              </ul>
            </div>
          </div>

          {/* For Technicians */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 transform duration-300">
            <div className="bg-benin-blue p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Prestataires</h3>
              <p className="text-white opacity-90">
                Pour les professionnels de l'automobile qui souhaitent développer leur activité.
              </p>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-benin-blue font-bold mr-2">✓</span>
                  <span>Mécaniciens et garagistes indépendants</span>
                </li>
                <li className="flex items-start">
                  <span className="text-benin-blue font-bold mr-2">✓</span>
                  <span>Services de dépannage et remorquage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-benin-blue font-bold mr-2">✓</span>
                  <span>Vendeurs de pièces détachées</span>
                </li>
                <li className="flex items-start">
                  <span className="text-benin-blue font-bold mr-2">✓</span>
                  <span>Stations-service et centres de lavage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-benin-blue font-bold mr-2">✓</span>
                  <span>Experts en diagnostic et conseil automobile</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTypes;
