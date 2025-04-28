import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface BlurFadeProps {
  inViewMargin?: string; // Default value as string for margin
}

const BlurFade: React.FC<BlurFadeProps> = ({ inViewMargin = "0px" }) => {
  const ref = useRef(null);

  // Use the margin prop with proper type handling
  const { inView, ref: inViewRef } = useInView({
    triggerOnce: true, 
    margin: inViewMargin, // This should now accept a string like "50px"
  });

  const isInView = inView ? 'In View' : 'Out of View';

  return (
    <div ref={ref}>
      {/* Use the inView result in your UI */}
      <p>{isInView}</p>
      {/* Your content can go here */}
    </div>
  );
};

export default BlurFade;
