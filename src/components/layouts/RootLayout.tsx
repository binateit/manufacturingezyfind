import { useAppUI } from "@/contexts/AppUIContext";
import { ReactNode } from "react"
import Header from "./partials/Header";
import MobileMenu from "./partials/Header/MobileMenu";
import RegisterModal from "./partials/RegisterModal";
import LoginModal from "./partials/LoginModal";
import Footer from "./partials/Footer";

interface RootLayoutProps {
    children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    const { isRegisterModalOpen, isMobileMenuOpen, isLoginModalOpen } = useAppUI();
    return (
        <>
            <header className="w-full bg-white relative">
                <Header />
                {isMobileMenuOpen === true ? <MobileMenu /> : ''}
            </header>
            <main className="flex-1">
                {children}
            </main>
            <Footer />

            {isRegisterModalOpen && <RegisterModal />}
            {isLoginModalOpen && <LoginModal />}
        </>
    )
}
