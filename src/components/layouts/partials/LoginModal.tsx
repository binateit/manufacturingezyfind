"use client"
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppUI } from '@/contexts/AppUIContext';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginModal() {
  const { closeLoginModal, notifyLoginSuccess } = useAppUI();

  return (
    <div className='fixed w-full h-full flex justify-center items-center top-0 right-0 z-100 bg-black/50 backdrop-blur-sm'>
      <div className='w-[90%] md:w-[520px] relative'>
        <FontAwesomeIcon icon={faTimes} className=' absolute top-2 right-2 text-xl cursor-pointer transition-all hover:text-[var(--primary-color)] scale-100 hover:scale-120 '
          onClick={closeLoginModal} />
        <LoginForm dense onSuccess={notifyLoginSuccess} />
      </div>
    </div>
  );
}
