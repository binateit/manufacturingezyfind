import { useMemo, useState, ReactNode } from 'react';
import { AppUIContext } from '@/contexts/AppUIContext';
import { useQuery } from '@apollo/client';
import { GET_CART_LIST } from '@/core/graphql/queries/getCartList';

export const AppUIProvider = ({ children }: { children: ReactNode }) => {
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isGlobalSearchOpen, setGlobalSearchOpen] = useState(false);

  const toggleRegisterModal = () => setRegisterModalOpen(prev => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const toggleGlobalSearch = () => setGlobalSearchOpen(prev => !prev);

  const { data } = useQuery(GET_CART_LIST, { variables: { page: 1, size: 10 } });
  const cartCount = data?.getPrdShoppingCart?.result?.prdShoppingCartDto?.length ?? 0;

  const value = useMemo(() => ({
    isRegisterModalOpen,
    toggleRegisterModal,
    isMobileMenuOpen,
    toggleMobileMenu,
    isGlobalSearchOpen,
    toggleGlobalSearch,
    cartCount,
  }), [isRegisterModalOpen, isMobileMenuOpen, isGlobalSearchOpen, cartCount]);

  return (
    <AppUIContext.Provider value={value}>
      {children}
    </AppUIContext.Provider>
  );
};
