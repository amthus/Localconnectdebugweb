
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0089e1]/80 to-[#50cd89]/50"></div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-white space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Assistance automobile <span className="text-[#50cd89]">immédiate</span>
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-lg">
            Ne restez plus bloqué sur la route. Trouvez des mécaniciens et dépanneurs fiables à proximité, en quelques clics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
<Button
  size="lg"
  onClick={() =>
    window.open(
      "https://expo.dev/artifacts/eas/tPfUhWYghgcEynkiFf2qaP.aab",
      "_blank"
    )
  }
  className="bg-[#50cd89] hover:bg-[#3ca46d] text-white font-semibold"
>
  Télécharger l'application
</Button>

          </div>
        </div>

        {/* Mobile App Mockup */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative w-64 h-[510px] animate-fade-in animate-delay-300">
            <div className="absolute top-0 left-0 w-full h-full bg-black rounded-[36px] overflow-hidden border-[8px] border-gray-800">
              <div className="w-full h-full bg-gradient-to-b from-[#0089e1]/90 to-[#50cd89]/90 p-4">
                <div className="w-24 h-6 bg-black rounded-full mx-auto mb-2"></div>
                <div className="bg-white/10 rounded-xl p-3 mb-3">
                  <div className="h-6 bg-white/20 rounded-md mb-2"></div>
                  <div className="h-20 bg-white/20 rounded-md"></div>
                </div>
                <div className="absolute bottom-8 left-0 right-0 mx-auto w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white"></div>
                </div>
                <div className="absolute top-1/4 left-0 right-0 text-center text-white">
                  <p className="font-bold text-lg">LocalConnect</p>
                  <p className="text-sm">Assistance</p>
                </div>
                <div className="absolute top-[45%] left-0 right-0 flex justify-center">
                  <div className="bg-white/20 rounded-full p-4 animate-pulse-soft">
                    <div className="w-12 h-12 rounded-full bg-[#ff3b30] flex items-center justify-center text-white font-bold">
                      SOS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,101.3C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
