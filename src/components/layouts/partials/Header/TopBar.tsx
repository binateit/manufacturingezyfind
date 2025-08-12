import { useAppUI } from "@/contexts/AppUIContext";
import { tokenService } from "@/core/services/token.service";
import { useEffect, useState } from "react";
import { faGavel, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function TopBar() {
    const { toggleRegisterModal, cartCount } = useAppUI();

    const [userName, setUserName] = useState<string | null>(null);
    const [isGuest, setIsGuest] = useState<boolean>(true);

    useEffect(() => {
        // Read current user state from token storage
        setUserName(tokenService.getUserName());
        setIsGuest(tokenService.isGuest());
    }, []);

    const handleLogout = () => {
        tokenService.clearToken();
        if (typeof window !== 'undefined') {
            window.location.reload();
        }
    };

    return (
        <div className="container mx-auto">
            <div className="flex justify-end gap-7 lg:gap-20 items-center">
                <div className="flex justify-end items-center gap-5">
                    {isGuest || !userName ? (
                        <div className="flex justify-end items-center gap-5">
                            <Link href="/login" className='hover:text-[var(--primary-color)] text-[10px] sm:text-[12px] lg:text-sm'>Login</Link>
                            <p className='hover:text-[var(--primary-color)] text-[10px] sm:text-[12px]  lg:text-sm cursor-pointer' onClick={() => toggleRegisterModal()}>Register</p>
                        </div>
                    ) : (
                        <div className="flex justify-end items-center gap-5">
                            <span className="text-[10px] sm:text-[12px] lg:text-sm">{userName}</span>
                            <button onClick={handleLogout} className="hover:text-[var(--primary-color)] text-[10px] sm:text-[12px] lg:text-sm">Logout</button>
                        </div>
                    )}

                </div>
                <div className='header-cart flex justify-end items-center bg-black gap-5 relative h-9 md:h-12 z-10 skew-right'>
                    <Link href="/cart" className='text-white flex items-center gap-1.5 text-[10px] sm:text-[12px]  lg:text-sm'><FontAwesomeIcon icon={faShoppingCart} className=' text-md' /> Cart({cartCount})</Link>
                    {/* <a href="#" className='text-white flex items-center gap-1.5 text-[10px] sm:text-[12px]  lg:text-sm'><FontAwesomeIcon icon={faGavel} className=' text-lg' /> My Bid(0)</a> */}
                </div>
            </div>
        </div>
    )
}