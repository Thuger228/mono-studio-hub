import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';
import { ArrowUpRight } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/recording', label: t('nav_recording') },
    { path: '/rehearsals', label: t('nav_rehearsals') },
    { path: '/rent', label: t('nav_rent') },
    { path: '/price', label: t('nav_price') },
  ];

  const languages = [
    { code: 'pl', label: 'PL' },
    { code: 'en', label: 'EN' },
    { code: 'uk', label: 'UK' },
    { code: 'be', label: 'BE' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Sanctum Sound" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop Navigation - Horizontal Tabs with Arrows */}
          <nav className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center justify-between gap-3 px-6 py-3 bg-white text-foreground rounded-full font-bold text-sm hover:bg-white/90 transition-all group"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
            <a
              href="https://linktr.ee/sanctumsound"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 px-6 py-3 bg-white text-foreground rounded-full font-bold text-sm hover:bg-white/90 transition-all group"
            >
              <span>{t('nav_contact')}</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>

          {/* Desktop Language Switcher */}
          <div className="hidden md:flex items-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code as any)}
                className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                  language === lang.code
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Mobile: Language Switcher Only */}
          <div className="flex md:hidden items-center gap-1.5">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code as any)}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-all ${
                  language === lang.code
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation - Vertical Stacked Tabs */}
        <nav className="md:hidden py-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex items-center justify-center px-6 py-4 bg-white text-foreground rounded-full font-bold text-sm hover:bg-white/90 transition-all"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://linktr.ee/sanctumsound"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-4 bg-white text-foreground rounded-full font-bold text-sm hover:bg-white/90 transition-all"
          >
            {t('nav_contact')}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
