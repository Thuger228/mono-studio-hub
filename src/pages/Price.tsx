import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

const Price = () => {
  const { t } = useLanguage();

  const packages = [
    {
      name: 'Recording',
      price: '100',
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
      price: '50',
      unit: '/hour',
      features: [
        'Full backline included',
        'PA system',
        'Climate controlled',
        'Flexible scheduling',
      ],
    },
    {
      name: 'Equipment Rental',
      price: '200',
      unit: '/day',
      features: [
        'Professional PA system',
        'Premium microphones',
        'All cables included',
        'Technical support',
      ],
    },
    {
      name: 'Mixing & Mastering',
      price: '300',
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
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-6">{t('price_title')}</h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Transparent pricing for professional services
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-lg hover:border-primary transition-all duration-300 flex flex-col"
              >
                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${pkg.price}</span>
                  <span className="text-muted-foreground">{pkg.unit}</span>
                </div>
                <ul className="space-y-3 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
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

export default Price;
