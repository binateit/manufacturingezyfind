import { useAppUI } from "@/contexts/AppUIContext";
import { faGavel, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function TopBar() {
    // const { user, logout } = useAuth();
    const { toggleRegisterModal } = useAppUI();

    return (
        <div className="container mx-auto">
            <div className="flex justify-end gap-7 lg:gap-20 items-center">
                <div className="flex justify-end items-center gap-5">
                    {/* {user ? (
                        <div className="flex justify-end items-center gap-5">
                            <span className="text-[10px] sm:text-[12px] lg:text-sm">{user.firstName} {user.lastName}</span>
                            <button onClick={logout} className="hover:text-[var(--primary-color)] text-[10px] sm:text-[12px] lg:text-sm">Logout</button>
                        </div>
                    ) : ( */}
                        <div className="flex justify-end items-center gap-5">
                            <Link href="/login" className='hover:text-[var(--primary-color)] text-[10px] sm:text-[12px] lg:text-sm'>Login</Link>
                            <p className='hover:text-[var(--primary-color)] text-[10px] sm:text-[12px]  lg:text-sm cursor-pointer' onClick={() => toggleRegisterModal()}>Register</p>

                        </div>
                    {/* )} */}

                </div>
                <div className='header-cart flex justify-end items-center bg-black gap-5 relative h-9 md:h-12 z-10 skew-right'>
                    <Link href="/cart" className='text-white flex items-center gap-1.5 text-[10px] sm:text-[12px]  lg:text-sm'><FontAwesomeIcon icon={faShoppingCart} className=' text-md' /> Cart(0)</Link>
                    <a href="#" className='text-white flex items-center gap-1.5 text-[10px] sm:text-[12px]  lg:text-sm'><FontAwesomeIcon icon={faGavel} className=' text-lg' /> My Bid(0)</a>
                </div>
            </div>
        </div>
    )
}