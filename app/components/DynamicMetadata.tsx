'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import { useEffect } from 'react';
import { challenges } from '@/app/data/challenges';

interface DynamicMetadataProps {
  pageKey: string;
}

export default function DynamicMetadata({ pageKey }: DynamicMetadataProps) {
  const { language } = useLanguage();

  useEffect(() => {
    const challenge = challenges.find((c) => c.name === pageKey);
    console.log('challenge', challenge);
    if (challenge) {
      document.title = challenge.title[language as keyof typeof challenge.title] || '';

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', challenge.description[language as keyof typeof challenge.description] || '');
      }
    }
  }, [language, pageKey]);

  return null;
}