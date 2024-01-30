'use client';

import useIsDesktop from '@/hooks/useIsDesktop';
import StarsCanvas from './main/StarsBackground';

const Background = () => {
  const isDesktop = useIsDesktop();

  return isDesktop && <StarsCanvas />;
};

export default Background;
