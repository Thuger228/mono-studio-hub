import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/recording', label: t('nav_recording') },
    { path: '/rehearsals', label: t('nav_rehearsals') },
    { path: '/rent', label: t('nav_rent') },
    { path: '/price', label: t('nav_price') },
    { path: '/contact', label: t('nav_contact') },
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
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

          {/* Mobile: Language Switcher + Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex items-center gap-1.5">
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

            <button
              className="text-foreground p-2 hover:bg-accent rounded transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-background z-40 overflow-y-auto">
            <nav className="container mx-auto px-4 py-8 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium py-4 px-4 rounded-lg transition-all ${
                    location.pathname === item.path 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
