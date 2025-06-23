
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const CallToAction: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      // Send email notification
      await supabase.functions.invoke('send-contact-email', {
        body: { ...formData, to: 'localconnect22@gmail.com' }
      });

      toast({
        title: "Message envoyé!",
        description: "Nous avons bien reçu votre message et vous répondrons bientôt.",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi du message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="download" className="section-padding bg-[#f0f4f6] text-[#333333]">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à rejoindre la communauté LocalConnect?
          </h2>
          <p className="text-lg mb-8 text-[#666666]">
            Téléchargez l'application pour accéder à un réseau d'assistance automobile partout au Bénin.
          </p>

          <div className="max-w-md mx-auto mb-12">
            {/* APK Download Button */}
            <a 
              href="https://expo.dev/artifacts/eas/tPfUhWYghgcEynkiFf2qaP.aab"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#333333] text-white rounded-lg p-4 flex items-center justify-center hover:opacity-90 cursor-pointer transition-all w-full"
            >
              <div className="mr-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 22V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs opacity-80">Télécharger</div>
                <div className="font-semibold">LocalConnect APK v1.0</div>
              </div>
            </a>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="font-bold text-2xl mb-4">Contactez-nous</h3>
            <p className="mb-6">
              Des questions? Besoin d'assistance? Notre équipe est à votre disposition.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-left">Nom</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#dddddd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0089e1]"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-left">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-[#dddddd] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0089e1]"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-left">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-[#dddddd] rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-[#0089e1]"
                  placeholder="Comment pouvons-nous vous aider?"
                  required
                ></textarea>
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#0089e1] hover:bg-[#006ab3] text-white"
              >
                {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
