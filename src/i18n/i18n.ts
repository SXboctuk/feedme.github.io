import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';

const resources = { en };

i18n.use(LanguageDetector).use(initReactI18next).init({
	fallbackLng: 'en',
	defaultNS: 'common',
	resources: resources,
});

export default i18n;
