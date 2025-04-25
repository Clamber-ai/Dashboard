'use client';

import { GoogleAnalytics as NextGoogleAnalytics } from '@next/third-parties/google';
import { GA_MEASUREMENT_ID } from '@/lib/analytics';

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics measurement ID is not set');
    return null;
  }

  return <NextGoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
} 