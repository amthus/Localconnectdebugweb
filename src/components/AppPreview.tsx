
import React from 'react';

const AppPreview: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-benin-blue to-benin-orange text-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Une interface intuitive et adaptée
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-1 mr-4 flex-shrink-0">
                  <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-benin-blue font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Signalement rapide</h3>
                  <p className="opacity-90">
                    Un bouton SOS facilement accessible pour signaler une panne en quelques secondes.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-1 mr-4 flex-shrink-0">
                  <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-benin-blue font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Artisans à proximité</h3>
                  <p className="opacity-90">
                    Visualisez sur une carte les prestataires disponibles autour de vous.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-1 mr-4 flex-shrink-0">
                  <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-benin-blue font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-1">Suivi en temps réel</h3>
                  <p className="opacity-90">
                    Suivez l'arrivée de votre dépanneur et communiquez directement avec lui.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Phone mockups staggered */}
              <div className="relative w-56 h-[450px] transform -rotate-6 translate-x-6 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-black rounded-[24px] overflow-hidden border-[6px] border-gray-800">
                  <div className="w-full h-full bg-white p-2">
                    <div className="h-3 w-16 bg-black rounded-full mb-2 mx-auto"></div>
                    {/* App screen mockup - Map screen */}
                    <div className="h-full bg-gray-200 rounded-lg overflow-hidden">
                      <div className="h-1/6 bg-benin-blue text-white p-2 flex items-center">
                        <div className="w-8 h-8 rounded-full bg-white mr-2"></div>
                        <div>
                          <div className="h-3 w-20 bg-white/50 rounded-full"></div>
                          <div className="h-2 w-16 bg-white/30 rounded-full mt-1"></div>
                        </div>
                      </div>
                      <div className="h-5/6 bg-gray-100 relative">
                        {/* Map simulation */}
                        <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/2.3158,6.3702,11,0/600x800?access_token=pk.dummy')] bg-cover"></div>
                        {/* Location pins */}
                        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full"></div>
                        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-blue-500 rounded-full"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-blue-500 rounded-full"></div>
                        
                        {/* Bottom sheet */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-xl p-3">
                          <div className="w-16 h-1 bg-gray-300 rounded-full mx-auto mb-2"></div>
                          <div className="h-4 w-3/4 bg-gray-200 rounded-full mb-2"></div>
                          <div className="h-3 w-1/2 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Second phone - slightly behind */}
              <div className="absolute top-4 left-4 w-56 h-[450px] transform rotate-6 -translate-x-6 -z-10 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-black rounded-[24px] overflow-hidden border-[6px] border-gray-800">
                  <div className="w-full h-full bg-white p-2">
                    <div className="h-3 w-16 bg-black rounded-full mb-2 mx-auto"></div>
                    {/* App screen mockup - SOS screen */}
                    <div className="h-full bg-gray-100 rounded-lg p-3">
                      <div className="h-8 flex justify-between items-center mb-4">
                        <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                        <div className="w-8 h-8 bg-gray-200 rounded-md"></div>
                      </div>
                      
                      <div className="text-center my-8">
                        <div className="h-6 w-32 bg-gray-200 rounded-md mx-auto mb-2"></div>
                        <div className="h-4 w-40 bg-gray-200 rounded-md mx-auto"></div>
                      </div>
                      
                      <div className="flex justify-center my-6">
                        <div className="w-28 h-28 bg-red-500 rounded-full flex items-center justify-center">
                          <div className="w-20 h-20 bg-red-600 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="mt-8">
                        <div className="h-12 bg-gray-200 rounded-md mb-3"></div>
                        <div className="h-12 bg-gray-200 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
