import { createContext, useContext } from 'react';

export type AppUIContextType = {
  isRegisterModalOpen: boolean;
  toggleRegisterModal: () => void;

  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;

  isGlobalSearchOpen: boolean;
  toggleGlobalSearch: () => void;

  cartCount?: number;

  // Login modal controls
  isLoginModalOpen: boolean;
  openLoginModal: (onSuccess?: () => void) => void;
  closeLoginModal: () => void;
  notifyLoginSuccess: () => void;
};

export const AppUIContext = createContext<AppUIContextType | undefined>(undefined);

export const useAppUI = () => {
  const context = useContext(AppUIContext);
  if (!context) {
    throw new Error('useAppUI must be used within an AppUIProvider');
  }
  return context;
};
