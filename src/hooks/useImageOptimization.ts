
import { useState, useEffect } from 'react';

interface UseImageOptimizationProps {
  src: string;
  lazy?: boolean;
}

export const useImageOptimization = ({ src, lazy = true }: UseImageOptimizationProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);

  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    
    img.onload = () => {
      setIsLoaded(true);
      setHasError(false);
    };
    
    img.onerror = () => {
      setHasError(true);
      setIsLoaded(false);
    };
    
    img.src = src;
  }, [src, isInView]);

  return {
    isLoaded,
    hasError,
    isInView,
    setIsInView
  };
};
