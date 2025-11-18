'use client';

import { useEffect } from 'react';

export function WebVitals() {
  useEffect(() => {
    const reportWebVitals = async () => {
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
      
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    };

    if (process.env.NODE_ENV === 'development') {
      reportWebVitals();
    }
  }, []);

  return null;
}