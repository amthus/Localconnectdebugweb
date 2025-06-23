
import React from 'react';
import { Progress } from '@/components/ui/progress';

const Statistics: React.FC = () => {
  return (
    <section id="statistics" className="section-padding bg-[#f0f4f6]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0089e1]">Le marché en chiffres</h2>
          <p className="max-w-2xl mx-auto text-[#666666]">
            Découvrez pourquoi LocalConnect est essentiel pour la mobilité au Bénin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-[#333333]">Taux de pénétration mobile</span>
                <span className="font-bold text-[#50cd89]">83%</span>
              </div>
              <Progress value={83} className="h-2 bg-[#dddddd]" />
              <p className="text-sm mt-2 text-[#666666]">
                La plupart des Béninois possèdent un téléphone portable, facilitant l'adoption de notre application.
              </p>
            </div>

            <div className="animate-fade-in animate-delay-200">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-[#333333]">Âge moyen du parc automobile</span>
                <span className="font-bold text-[#0089e1]">15+ ans</span>
              </div>
              <div className="bg-[#dddddd] h-2 rounded-full">
                <div className="h-2 rounded-full w-3/4 bg-[#0089e1]"></div>
              </div>
              <p className="text-sm mt-2 text-[#666666]">
                Les véhicules plus anciens nécessitent davantage d'entretien et sont sujets à des pannes fréquentes.
              </p>
            </div>

            <div className="animate-fade-in animate-delay-300">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-[#333333]">Réseau routier bitumé</span>
                <span className="font-bold text-[#50cd89]">30%</span>
              </div>
              <Progress value={30} className="h-2 bg-[#dddddd]" />
              <p className="text-sm mt-2 text-[#666666]">
                La qualité inégale des routes augmente le risque de pannes et de problèmes mécaniques.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg animate-fade-in bg-white border border-[#dddddd]">
              <h3 className="font-bold text-xl mb-3 text-[#0089e1]">12,1 millions</h3>
              <p className="text-[#666666]">
                Population au Bénin, représentant un vaste marché potentiel.
              </p>
            </div>

            <div className="p-6 rounded-lg animate-fade-in animate-delay-200 bg-white border border-[#dddddd]">
              <h3 className="font-bold text-xl mb-3 text-[#0089e1]">70 véhicules</h3>
              <p className="text-[#666666]">
                Pour 1000 habitants, un taux de motorisation en constante augmentation.
              </p>
            </div>

            <div className="p-6 rounded-lg animate-fade-in animate-delay-300 bg-white border border-[#dddddd]">
              <h3 className="font-bold text-xl mb-3 text-[#0089e1]">16 000 km</h3>
              <p className="text-[#666666]">
                De réseau routier à couvrir par notre service d'assistance.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm italic text-[#666666]">LocalConnect by Malthus Ametepe | ametepemalthus16@gmail.com | +22940147078 | Abomey Calavi</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
