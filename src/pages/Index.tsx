import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import { ArrowRight } from 'lucide-react';
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

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <section id="home" className="relative flex items-center justify-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
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
      <section id="gallery" className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <Gallery images={galleryImages} />
        </div>
      </section>
    </div>
  );
};

export default Index;
