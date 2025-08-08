"use client"
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faTimes, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { useAppUI } from '@/contexts/AppUIContext'
import { Card } from '@/components/ui'



const RegisterModal = () => {
    const { toggleRegisterModal } = useAppUI()
    return (
        <>
            <div className='fixed w-full h-full flex justify-center items-center top-0 right-0 z-100 bg-black/50 backdrop-blur-sm'>
                <Card title='Register As' className='w-[90%] md:w-2xl mx-auto relative' titleClassName='text-lg'>
                    <FontAwesomeIcon icon={faTimes} className=' absolute top-2 right-2 text-xl cursor-pointer transition-all hover:text-[var(--primary-color)] scale-100 hover:scale-120 ' onClick={() => toggleRegisterModal()} />

                    <div className='flex justify-center gap-5'>
                        <Link href={'/manufacturing/list-business'} className='px-4 bg-white flex max-[500px]:flex-col max-[500px]:gap-0 flex-row gap-3 justify-center items-center' onClick={() => toggleRegisterModal()}>
                            <FontAwesomeIcon icon={faBriefcase} className='text-3xl max-[500px]:mb-0 mb-2 text-[var(--primary-color)] transition-all group-hover:text-white' />
                            <p className='text-center text-[18px]'>Business User</p>
                        </Link>
                        <Link href={'/register'} className='px-4 bg-white flex max-[500px]:flex-col max-[500px]:gap-0 flex-row gap-3 justify-center items-center' onClick={() => toggleRegisterModal()}>
                            <FontAwesomeIcon icon={faUserTie} className='text-3xl max-[500px]:mb-0 mb-2 text-[var(--primary-color)] transition-all group-hover:text-white' />
                            <p className='text-center text-[18px]'>Individual</p>
                        </Link>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default RegisterModal
