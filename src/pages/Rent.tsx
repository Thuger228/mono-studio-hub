import { useLanguage } from '@/contexts/LanguageContext';
import { Speaker, Mic, Cable, Disc } from 'lucide-react';

const Rent = () => {
  const { t } = useLanguage();

  const equipment = [
    { icon: Speaker, title: 'PA Systems', desc: 'Professional sound reinforcement systems' },
    { icon: Mic, title: 'Microphones', desc: 'Premium microphones for any application' },
    { icon: Cable, title: 'Stage Equipment', desc: 'Cables, stands, and stage accessories' },
    { icon: Disc, title: 'Recording Gear', desc: 'Portable recording equipment for field work' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6">{t('rent_title')}</h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            {t('rent_desc')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 group"
              >
                <item.icon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rent;
