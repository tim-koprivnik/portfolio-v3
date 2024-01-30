'use client';

import { useState, useEffect } from 'react';

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Ensure window is defined (i.e., we're running in a browser) before adding event listener
    if (typeof window !== 'undefined') {
      const updateMedia = () => {
        setIsDesktop(window.innerWidth > 992);
      };

      window.addEventListener('resize', updateMedia);
      updateMedia(); // Initialize state on component mount

      return () => window.removeEventListener('resize', updateMedia); // Cleanup listener on component unmount
    }
  }, []); // The empty array ensures the effect runs only on mount and unmount

  return isDesktop;
};

export default useIsDesktop;
