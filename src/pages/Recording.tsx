import { useLanguage } from '@/contexts/LanguageContext';
import { Mic2, Headphones, Music2, Radio } from 'lucide-react';

const Recording = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Mic2, title: 'Vocal Recording', desc: 'Professional vocal booth with top-tier microphones' },
    { icon: Music2, title: 'Instrument Recording', desc: 'Full band setup with isolated tracking rooms' },
    { icon: Headphones, title: 'Mixing & Mastering', desc: 'Industry-standard mixing and mastering services' },
    { icon: Radio, title: 'Audio Production', desc: 'Complete audio production from concept to final mix' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6">{t('recording_title')}</h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            {t('recording_desc')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 group"
              >
                <service.icon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recording;
