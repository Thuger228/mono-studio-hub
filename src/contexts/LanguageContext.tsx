import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pl' | 'en' | 'uk' | 'be';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pl: {
    nav_recording: 'Nagrywanie',
    nav_rehearsals: 'Próby',
    nav_rent: 'Wynajem',
    nav_price: 'Cennik',
    nav_contact: 'Kontakt',
    hero_title: 'Profesjonalne Studio Nagraniowe',
    hero_subtitle: 'Najwyższa jakość nagrań w sercu miasta',
    recording_title: 'Usługi Nagraniowe',
    recording_desc: 'Oferujemy kompleksowe usługi nagraniowe z wykorzystaniem najnowocześniejszego sprzętu i doświadczonego zespołu inżynierów dźwięku.',
    rehearsals_title: 'Sale Prób',
    rehearsals_desc: 'Profesjonalne sale prób wyposażone w pełen backline i nagłośnienie. Idealne dla zespołów każdego gatunku.',
    rent_title: 'Wynajem Sprzętu',
    rent_desc: 'Wynajmij profesjonalny sprzęt muzyczny i nagłośnieniowy na Twoje wydarzenie.',
    price_title: 'Cennik',
    contact_title: 'Kontakt',
    contact_name: 'Imię',
    contact_email: 'Email',
    contact_message: 'Wiadomość',
    contact_send: 'Wyślij',
    contact_address: 'Adres',
    contact_phone: 'Telefon',
  },
  en: {
    nav_recording: 'Recording',
    nav_rehearsals: 'Rehearsals',
    nav_rent: 'Rent',
    nav_price: 'Price',
    nav_contact: 'Contact',
    hero_title: 'Professional Recording Studio',
    hero_subtitle: 'Highest quality recordings in the heart of the city',
    recording_title: 'Recording Services',
    recording_desc: 'We offer comprehensive recording services using state-of-the-art equipment and an experienced team of sound engineers.',
    rehearsals_title: 'Rehearsal Rooms',
    rehearsals_desc: 'Professional rehearsal rooms equipped with full backline and sound system. Perfect for bands of any genre.',
    rent_title: 'Equipment Rental',
    rent_desc: 'Rent professional music and sound equipment for your event.',
    price_title: 'Pricing',
    contact_title: 'Contact',
    contact_name: 'Name',
    contact_email: 'Email',
    contact_message: 'Message',
    contact_send: 'Send',
    contact_address: 'Address',
    contact_phone: 'Phone',
  },
  uk: {
    nav_recording: 'Запис',
    nav_rehearsals: 'Репетиції',
    nav_rent: 'Оренда',
    nav_price: 'Ціни',
    nav_contact: 'Контакт',
    hero_title: 'Професійна Студія Звукозапису',
    hero_subtitle: 'Найвища якість записів у центрі міста',
    recording_title: 'Послуги Звукозапису',
    recording_desc: 'Ми пропонуємо комплексні послуги звукозапису з використанням найсучаснішого обладнання та досвідченої команди звукоінженерів.',
    rehearsals_title: 'Репетиційні Зали',
    rehearsals_desc: 'Професійні репетиційні зали, обладнані повним беклайном та звуковою системою. Ідеально підходять для гуртів будь-якого жанру.',
    rent_title: 'Оренда Обладнання',
    rent_desc: 'Орендуйте професійне музичне та звукове обладнання для вашої події.',
    price_title: 'Ціни',
    contact_title: 'Контакт',
    contact_name: "Ім'я",
    contact_email: 'Email',
    contact_message: 'Повідомлення',
    contact_send: 'Надіслати',
    contact_address: 'Адреса',
    contact_phone: 'Телефон',
  },
  be: {
    nav_recording: 'Запіс',
    nav_rehearsals: 'Рэпетыцыі',
    nav_rent: 'Арэнда',
    nav_price: 'Кошты',
    nav_contact: 'Кантакт',
    hero_title: 'Прафесійная Студыя Гукозапісу',
    hero_subtitle: 'Найвышэйшая якасць запісаў у цэнтры горада',
    recording_title: 'Паслугі Гукозапісу',
    recording_desc: 'Мы прапануем комплексныя паслугі гукозапісу з выкарыстаннем найсучаснейшага абсталявання і вопытнай каманды гукаінжынераў.',
    rehearsals_title: 'Рэпетыцыйныя Залы',
    rehearsals_desc: 'Прафесійныя рэпетыцыйныя залы, абсталяваныя поўным беклайнам і гукавой сістэмай. Ідэальна падыходзяць для гуртоў любога жанру.',
    rent_title: 'Арэнда Абсталявання',
    rent_desc: 'Арандуйце прафесійнае музычнае і гукавое абсталяванне для вашай падзеі.',
    price_title: 'Кошты',
    contact_title: 'Кантакт',
    contact_name: 'Імя',
    contact_email: 'Email',
    contact_message: 'Паведамленне',
    contact_send: 'Адправіць',
    contact_address: 'Адрас',
    contact_phone: 'Тэлефон',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
