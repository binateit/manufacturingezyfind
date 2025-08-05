import { useState, ReactNode } from 'react';
import { LoadingOverlayContext } from '@/contexts/LoadingOverlayContext';

export const LoadingOverlayProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return (
    <LoadingOverlayContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
      {isLoading && (
        <div className="fixed inset-0 bg-white/60 backdrop-blur-sm z-50 flex justify-center items-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </LoadingOverlayContext.Provider>
  );
};
