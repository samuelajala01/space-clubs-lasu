'use client';

import { useEffect } from 'react';

export function WebVitals() {
  useEffect(() => {
    const reportWebVitals = async () => {
      const { onCLS, onINP, onFCP, onLCP, onTTFB } = await import('web-vitals');
      
      onCLS(console.log);
      onINP(console.log);
      onFCP(console.log);
      onLCP(console.log);
      onTTFB(console.log);
    };

    if (process.env.NODE_ENV === 'development') {
      reportWebVitals();
    }
  }, []);

  return null;
}