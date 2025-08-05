import { useState, ReactNode } from 'react';
import { AppUIContext } from '@/contexts/AppUIContext';

export const AppUIProvider = ({ children }: { children: ReactNode }) => {
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isGlobalSearchOpen, setGlobalSearchOpen] = useState(false);

  const toggleRegisterModal = () => setRegisterModalOpen(prev => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const toggleGlobalSearch = () => setGlobalSearchOpen(prev => !prev);

  return (
    <AppUIContext.Provider
      value={{
        isRegisterModalOpen,
        toggleRegisterModal,
        isMobileMenuOpen,
        toggleMobileMenu,
        isGlobalSearchOpen,
        toggleGlobalSearch,
      }}
    >
      {children}
    </AppUIContext.Provider>
  );
};
