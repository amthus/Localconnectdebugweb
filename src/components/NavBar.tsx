
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactModal from './ContactModal';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
    setIsMenuOpen(false); // Fermer le menu mobile si ouvert
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}>
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <h1 className={`font-bold text-2xl ${isScrolled ? "text-[#0089e1]" : "text-white"}`}>
              LocalConnect
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className={`${isScrolled ? "text-[#333333]" : "text-white"} hover:text-[#0089e1] transition-colors`}>
              Fonctionnalités
            </a>
            <a href="#users" className={`${isScrolled ? "text-[#333333]" : "text-white"} hover:text-[#0089e1] transition-colors`}>
              Pour qui?
            </a>
            <a href="#statistics" className={`${isScrolled ? "text-[#333333]" : "text-white"} hover:text-[#0089e1] transition-colors`}>
              Statistiques
            </a>
            <a href="#download" className={`${isScrolled ? "text-[#333333]" : "text-white"} hover:text-[#0089e1] transition-colors`}>
              Télécharger
            </a>
            
            <Button 
              className="bg-[#0089e1] text-white hover:bg-[#006ab3] font-semibold"
              onClick={handleContactClick}
            >
              Contactez-nous
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? "text-[#333333]" : "text-white"}`}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-[#333333] hover:text-[#0089e1] p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Fonctionnalités
              </a>
              <a 
                href="#users" 
                className="text-[#333333] hover:text-[#0089e1] p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pour qui?
              </a>
              <a 
                href="#statistics" 
                className="text-[#333333] hover:text-[#0089e1] p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Statistiques
              </a>
              <a 
                href="#download" 
                className="text-[#333333] hover:text-[#0089e1] p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Télécharger
              </a>
              <Button 
                className="bg-[#0089e1] text-white hover:bg-[#006ab3] w-full font-semibold"
                onClick={handleContactClick}
              >
                Contactez-nous
              </Button>
            </div>
          </div>
        )}
      </nav>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
};

export default NavBar;
