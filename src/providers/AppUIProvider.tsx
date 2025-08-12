import { useMemo, useState, ReactNode, useCallback } from 'react';
import { AppUIContext, AppUIContextType } from '@/contexts/AppUIContext';
import { useQuery } from '@apollo/client';
import { GET_CART_LIST } from '@/core/graphql/queries/getCartList';

export const AppUIProvider = ({ children }: { children: ReactNode }) => {
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isGlobalSearchOpen, setGlobalSearchOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [loginSuccessCallback, setLoginSuccessCallback] = useState<(() => void) | null>(null);

  const toggleRegisterModal = useCallback(() => setRegisterModalOpen(prev => !prev), []);
  const toggleMobileMenu = useCallback(() => setMobileMenuOpen(prev => !prev), []);
  const toggleGlobalSearch = useCallback(() => setGlobalSearchOpen(prev => !prev), []);

  const openLoginModal = useCallback((onSuccess?: () => void) => {
    if (onSuccess) setLoginSuccessCallback(() => onSuccess);
    setLoginModalOpen(true);
  }, []);
  const closeLoginModal = useCallback(() => {
    setLoginModalOpen(false);
    setLoginSuccessCallback(null);
  }, []);
  const notifyLoginSuccess = useCallback(() => {
    const cb = loginSuccessCallback;
    setLoginModalOpen(false);
    setLoginSuccessCallback(null);
    if (cb) cb();
  }, [loginSuccessCallback]);

  const { data } = useQuery(GET_CART_LIST, { variables: { page: 1, size: 10 } });
  const cartCount = data?.getPrdShoppingCart?.result?.prdShoppingCartDto?.length ?? 0;

  const value = useMemo<AppUIContextType>(() => ({
    isRegisterModalOpen,
    toggleRegisterModal,
    isMobileMenuOpen,
    toggleMobileMenu,
    isGlobalSearchOpen,
    toggleGlobalSearch,
    cartCount,
    isLoginModalOpen,
    openLoginModal,
    closeLoginModal,
    notifyLoginSuccess,
  }), [
    isRegisterModalOpen,
    toggleRegisterModal,
    isMobileMenuOpen,
    toggleMobileMenu,
    isGlobalSearchOpen,
    toggleGlobalSearch,
    cartCount,
    isLoginModalOpen,
    openLoginModal,
    closeLoginModal,
    notifyLoginSuccess,
  ]);

  return (
    <AppUIContext.Provider value={value}>
      {children}
    </AppUIContext.Provider>
  );
};
