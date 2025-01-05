import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import TranslationEn from './en.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: TranslationEn,
    },
  },
});

export default i18n;
