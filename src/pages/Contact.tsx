import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Instagram, Link as LinkIcon } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16">{t('contact_title')}</h1>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="bg-card border border-border rounded-lg p-6 md:p-8">
              <div className="space-y-5 md:space-y-6">
                <div className="flex items-center gap-3">
                  <LinkIcon className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm md:text-base">Linktree</p>
                    <a href="https://linktr.ee/sanctumsound" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors break-all">linktr.ee/sanctumsound</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm md:text-base">Instagram</p>
                    <a href="https://instagram.com/sanctumsound" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">@sanctumsound</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm md:text-base">{t('contact_address')}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">123 Studio Street, City</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm md:text-base">{t('contact_phone')}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">+48 123 456 789</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-card border border-border rounded-lg overflow-hidden h-[400px] md:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.3282101033764!2d21.012228776926436!3d52.229679171976095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8cf59b6773%3A0xc2d4edc5f901f00c!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
