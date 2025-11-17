import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import { ArrowRight, Mic2, Headphones, Music2, Radio, Guitar, Waves, Music, Drum, Speaker, Mic, Cable, Disc, Check } from 'lucide-react';
import Gallery from '@/components/Gallery';
import heroBackground from '@/assets/hero-background.jpg';
import recordingStudio from '@/assets/gallery/recording-studio.jpg';
import rehearsalRoom from '@/assets/gallery/rehearsal-room.jpg';
import equipment from '@/assets/gallery/equipment.jpg';
import vocalBooth from '@/assets/gallery/vocal-booth.jpg';
import instruments from '@/assets/gallery/instruments.jpg';
import studioLounge from '@/assets/gallery/studio-lounge.jpg';

const Index = () => {
  const { t } = useLanguage();

  const galleryImages = [
    { src: recordingStudio, alt: 'Professional Recording Studio' },
    { src: rehearsalRoom, alt: 'Rehearsal Room' },
    { src: equipment, alt: 'Audio Equipment' },
    { src: vocalBooth, alt: 'Vocal Recording Booth' },
    { src: instruments, alt: 'Musical Instruments' },
    { src: studioLounge, alt: 'Studio Lounge Area' },
  ];

  const recordingServices = [
    { icon: Mic2, title: 'Vocal Recording', desc: 'Professional vocal booth with top-tier microphones' },
    { icon: Music2, title: 'Instrument Recording', desc: 'Full band setup with isolated tracking rooms' },
    { icon: Headphones, title: 'Mixing & Mastering', desc: 'Industry-standard mixing and mastering services' },
    { icon: Radio, title: 'Audio Production', desc: 'Complete audio production from concept to final mix' },
  ];

  const rehearsalFeatures = [
    { icon: Guitar, title: 'Full Backline', desc: 'Amplifiers, drums, and PA system included' },
    { icon: Waves, title: 'Acoustic Treatment', desc: 'Professionally treated rooms for optimal sound' },
    { icon: Music, title: 'Flexible Booking', desc: 'Hourly, daily, or monthly rental options' },
    { icon: Drum, title: 'Climate Control', desc: 'Perfect temperature and humidity for instruments' },
  ];

  const rentEquipment = [
    { icon: Speaker, title: 'PA Systems', desc: 'Professional sound reinforcement systems' },
    { icon: Mic, title: 'Microphones', desc: 'Premium microphones for any application' },
    { icon: Cable, title: 'Stage Equipment', desc: 'Cables, stands, and stage accessories' },
    { icon: Disc, title: 'Recording Gear', desc: 'Portable recording equipment for field work' },
  ];

  const pricePackages = [
    {
      name: 'Recording',
      prefix: 'from',
      price: '100 pln',
      unit: '/hour',
      features: [
        'Professional sound engineer',
        'Full equipment access',
        'Digital file delivery',
        'One revision included',
      ],
    },
    {
      name: 'Rehearsal',
      prefix: 'from',
      price: '50 pln',
      unit: '/hour',
      features: [
        'Full backline included',
        'Full equipment access',
        'PA system',
        'Climate controlled',
        'Flexible scheduling',
      ],
    },
    {
      name: 'Equipment Rental',
      prefix: '',
      price: 'Optional',
      features: [
        'Professional PA system',
        'Premium microphones',
        'Drums',
        'Guitar and Bass stacks',
        'Synths',
        'All cables included',
        'Technical support',
      ],
    },
    {
      name: 'Mixing & Mastering',
      prefix: 'from',
      price: '200 pln',
      unit: '/song',
      features: [
        'Professional mixing',
        'Mastering included',
        'Unlimited revisions',
        'Industry standard quality',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <section className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBackground})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background opacity-90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8 md:mb-12 flex justify-center">
            <img src={logo} alt="Sanctum Sound" className="h-24 md:h-32 lg:h-48 w-auto animate-fade-in" />
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in px-4">
            {t('hero_title')}
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto animate-fade-in px-4">
            {t('hero_subtitle')}
          </p>

          <div className="flex flex-col gap-3 justify-center animate-fade-in px-4 max-w-md mx-auto">
            <Link to="/recording" className="w-full">
              <Button size="lg" className="group w-full">
                {t('nav_recording')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact" className="w-full">
              <Button size="lg" variant="outline" className="group w-full">
                {t('nav_contact')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* Recording Section */}
      <section id="recording" className="py-12 md:py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6">{t('recording_title')}</h2>
          <p className="text-base md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-10 md:mb-16">
            {t('recording_desc')}
          </p>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8 max-w-5xl mx-auto">
            {recordingServices.map((service, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 group"
              >
                <service.icon className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rehearsals Section */}
      <section id="rehearsals" className="py-12 md:py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6">{t('rehearsals_title')}</h2>
          <p className="text-base md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-10 md:mb-16">
            {t('rehearsals_desc')}
          </p>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8 max-w-5xl mx-auto">
            {rehearsalFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 group"
              >
                <feature.icon className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rent Section */}
      <section id="rent" className="py-12 md:py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6">{t('rent_title')}</h2>
          <p className="text-base md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-10 md:mb-16">
            {t('rent_desc')}
          </p>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8 max-w-5xl mx-auto">
            {rentEquipment.map((item, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 group"
              >
                <item.icon className="w-10 h-10 md:w-12 md:h-12 mb-3 md:mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section id="price" className="py-12 md:py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-6">{t('price_title')}</h2>
          <p className="text-base md:text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-10 md:mb-16">
            Transparent pricing for professional services
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8 max-w-7xl mx-auto">
            {pricePackages.map((pkg, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 flex flex-col"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{pkg.name}</h3>
                <div className="mb-4 md:mb-6">
                  <span className="text-xxs md:text-xxs font-bold">{pkg.prefix} </span>
                  <span className="text-3xl md:text-4xl font-bold">{pkg.price}</span>
                  <span className="text-sm md:text-base text-muted-foreground">{pkg.unit}</span>
                </div>
                <ul className="space-y-2 md:space-y-3 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
