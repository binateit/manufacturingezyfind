import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import Menu from './Menu';
import { useAppUI } from '@/contexts/AppUIContext';



const MobileMenu = () => {
    const { toggleMobileMenu } = useAppUI();
    return (
        <div className='bg-white/30 backdrop-blur-sm fixed w-full h-full z-10 top-0 left-0'>
            <div className='mobile-menu fixed top-0 leading-0 h-full max-w-[400px] w-full shadow-xl z-100 bg-white'>
                <div className='close-menu absolute top-3 right-3'>
                    <FontAwesomeIcon icon={faTimesCircle} className='text-gray-500 text-xl' onClick={toggleMobileMenu} />
                </div>
                <Menu isMobileMenu={true} />
            </div>
        </div>

    )
}

export default MobileMenu;
