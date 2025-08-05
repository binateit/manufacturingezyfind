import { createContext, useContext } from 'react';

export type LoadingOverlayContextType = {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
};

export const LoadingOverlayContext = createContext<LoadingOverlayContextType | undefined>(undefined);

export const useLoadingOverlay = () => {
  const context = useContext(LoadingOverlayContext);
  if (!context) {
    throw new Error('useLoadingOverlay must be used within a LoadingOverlayProvider');
  }
  return context;
};
