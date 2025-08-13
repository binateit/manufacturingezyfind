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
        <button
          type="button"
          aria-label="Close modal"
          onClick={closeLoginModal}
          className='absolute z-[1000] top-2 right-2 p-2 rounded-full bg-red-600 text-white shadow transition-all hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400'
        >
          <FontAwesomeIcon icon={faTimes} className='text-base' />
        </button>
        <LoginForm dense onSuccess={notifyLoginSuccess} />
      </div>
    </div>
  );
}
