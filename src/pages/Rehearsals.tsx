import { useLanguage } from '@/contexts/LanguageContext';
import { Music, Drum, Waves, Guitar } from 'lucide-react';

const Rehearsals = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Guitar, title: 'Full Backline', desc: 'Amplifiers, drums, and PA system included' },
    { icon: Waves, title: 'Acoustic Treatment', desc: 'Professionally treated rooms for optimal sound' },
    { icon: Music, title: 'Flexible Booking', desc: 'Hourly, daily, or monthly rental options' },
    { icon: Drum, title: 'Climate Control', desc: 'Perfect temperature and humidity for instruments' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6">{t('rehearsals_title')}</h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            {t('rehearsals_desc')}
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 group"
              >
                <feature.icon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rehearsals;
