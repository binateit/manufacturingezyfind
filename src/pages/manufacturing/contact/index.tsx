import Card from '@/components/ui/Card'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeadset, faMapMarkerAlt, faMobile, faPhoneVolume, faStickyNote, faUser } from '@fortawesome/free-solid-svg-icons';
import PageBanner from '@/components/ui/PageBanner';
import Head from 'next/head';
import DownloadApp from '@/components/shared/DownloadApp';

export default function ContactPage() {
    const title = 'Contact us | www.ManufacturingEzyFind.co.za'
    const description = 'Contact us via email or phone for all your manufacturing B2B Marketplace AI leads generation and needs'
    const keywords = 'Contact www.ManufacturingEzyFind.co.za manufacturing B2B marketplace and leads generation system.'

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <PageBanner
                backgroundImage='/images/contact_us_banner.webp'
                title='Contact Us'
            />
            <div className="container">
                <h1 className='text-center mt-10 md:mt-15 text-3xl lg:text-4xl uppercase font-semibold'>How it Works</h1>
                <p className='mt-5 text-center text-gray-700 uppercase'>Snap A Picture And Add Details On The Item You Are Looking For With Volumes And Timelines.</p>
                <div className='my-10 md:my-15 md:flex flex-wrap md:gap-0'>
                    <div className='md:basis-6/12 lg:basis-3/12 mb-5 lg:mb-0'>
                        <div className='p-4 h-full'>
                            <Card title='Step-1' className='text-center h-full' titleClassName='text-lg lg:text-lg xl:text-xl'>
                                <Image src={'/images/register.png'} width={60} height={60} alt='register' className='mx-auto' />
                                <p className='uppercase text-lg font-semibold my-3'>Reqest</p>
                                <p>Send us a picture of the items you are seeking with volumes and timelines.</p>
                            </Card>
                        </div>
                    </div>
                    <div className='md:basis-6/12 lg:basis-3/12 mb-5 lg:mb-0'>
                        <div className='p-4 h-full'>
                            <Card title='Step-2' className='text-center h-full' titleClassName='text-lg lg:text-lg xl:text-xl'>
                                <Image src={'/images/enquire.png'} width={60} height={60} alt='register' className='mx-auto' />
                                <p className='uppercase text-lg font-semibold my-3'>Location</p>
                                <p>Select the correct category and add the location you seeking this item from. </p>
                            </Card>
                        </div>
                    </div>
                    <div className='md:basis-6/12 lg:basis-3/12 mb-5 lg:mb-0'>
                        <div className='p-4 h-full'>
                            <Card title='Step-3' className='text-center h-full' titleClassName='text-lg lg:text-lg xl:text-xl'>
                                <Image src={'/images/advice.png'} width={60} height={60} alt='register' className='mx-auto' />
                                <p className='uppercase text-lg font-semibold my-3'>Offers</p>
                                <p>Manufacturing providers will come to you with quotes and timeslines regarding your volumes. </p>
                            </Card>
                        </div>
                    </div>
                    <div className='md:basis-6/12 lg:basis-3/12 mb-5 lg:mb-0'>
                        <div className='p-4 h-full'>
                            <Card title='Step-4' className='text-center h-full' titleClassName='text-lg lg:text-lg xl:text-xl'>
                                <Image src={'/images/confirm.png'} width={60} height={60} alt='register' className='mx-auto' />
                                <p className='uppercase text-lg font-semibold my-3'>Pick</p>
                                <p>Select the best quote & get the item you are seeking.</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <h1 className='text-center text-3xl lg:text-4xl uppercase font-semibold'>Contact Us</h1>
                <div className='lg:flex lg:-mx-5 mt-15 mb-10'>
                    <div className='lg:basis-5/12 lg:px-5 mb-15 lg:mb-0'>
                        <Card title='Address' titleClassName='text-lg lg:text-lg xl:text-xl' className='h-full'>
                            <div className='-mx-10 px-10 border-b border-gray-300 flex items-center gap-5 py-4 md:py-7'>
                                <div className='w-[60px] h-[60px] border border-gray-300 card-shadow flex items-center justify-center bg-white rounded-full'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className='text-primary text-2xl' />

                                </div>
                                <div className=''>
                                    <p className='text-xl uppercase text-primary font-semibold'>
                                        Office Address
                                    </p>
                                    <p className='text-md'>Winchester Hills Johannesburg</p>
                                </div>
                            </div>
                            <div className='-mx-10 px-10 border-b border-gray-300 flex items-center gap-5 py-4 md:py-7'>
                                <div className='w-[60px] h-[60px] border border-gray-300 card-shadow flex items-center justify-center bg-white rounded-full'>
                                    <FontAwesomeIcon icon={faEnvelope} className='text-primary text-2xl' />

                                </div>
                                <div className=''>
                                    <p className='text-xl uppercase text-primary font-semibold'>
                                        Email Id
                                    </p>
                                    <p className='text-md'><a href="mailto:info@ezyfind.co.za" className='transition-all duration-300 hover:text-[var(--primary-color)] hover:tracking-wide'>info@ezyfind.co.za</a></p>
                                </div>
                            </div>
                            <div className='-mx-10 px-10 border-b border-gray-300 flex items-center gap-5 py-4 md:py-7'>
                                <div className='w-[60px] h-[60px] border border-gray-300 card-shadow flex items-center justify-center bg-white rounded-full'>
                                    <FontAwesomeIcon icon={faPhoneVolume} className='text-primary text-2xl' />

                                </div>
                                <div className=''>
                                    <p className='text-xl uppercase text-primary font-semibold'>
                                        Phone Number
                                    </p>
                                    <p className='text-md'><a href='tel:+27 056 9123' className='transition-all duration-300 hover:text-[var(--primary-color)] hover:tracking-wide'>+27 056 9123</a></p>
                                </div>
                            </div>
                            <div className='-mx-10 px-10 flex items-center gap-5 py-7'>
                                <div className='w-[60px] h-[60px] border border-gray-300 card-shadow flex items-center justify-center bg-white rounded-full'>
                                    <FontAwesomeIcon icon={faHeadset} className='text-primary text-2xl' />
                                </div>
                                <div className=''>
                                    <p className='text-xl uppercase text-primary font-semibold'>
                                        Online Support
                                    </p>
                                    <p className='text-md'><a href='tel:+27 056 9123' className='transition-all duration-300 hover:text-[var(--primary-color)] hover:tracking-wide'>+27 056 9123</a></p>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className='lg:basis-7/12 lg:px-5'>
                        <Card title='Get in Touch' titleClassName='text-lg lg:text-lg xl:text-xl'>
                            <form>
                                <div className='mb-5'>
                                    <label className='mb-2 block'>Name</label>
                                    <div className='relative'>
                                        <input type='text' name='text' placeholder='Enter name' className='form-control border border-gray-300 text-sm xl:text-[14px] 2xl:text-md w-full h-10 px-3 ' />
                                        <FontAwesomeIcon icon={faUser} className=' absolute top-[50%] translate-y-[-50%] right-4 text-gray-500' />

                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row md:gap-5'>
                                    <div className='mb-4 w-full'>
                                        <label className='mb-2 block'>Phone</label>
                                        <div className='relative'>
                                            <div className='flex'>
                                                <input type='text' name='code' placeholder='21' value={'+21'} disabled className='form-control border border-gray-300 border-r-0 text-sm xl:text-[14px] 2xl:text-md h-10 px-3 w-[50px]' />
                                                <input type='text' name='mobile-number' placeholder='Enter mobile number' className='form-control border border-gray-300 text-sm xl:text-[14px] 2xl:text-md w-full h-10 px-3' />
                                            </div>
                                            <FontAwesomeIcon icon={faMobile} className=' absolute top-[50%] translate-y-[-50%] right-4 text-gray-500' />
                                        </div>
                                    </div>
                                    <div className='mb-4 w-full'>
                                        <label className='mb-2 block'>Email</label>
                                        <div className='relative'>
                                            <input type='email' name='email' placeholder='Enter email Id' className='form-control border border-gray-300 text-sm xl:text-[14px] 2xl:text-md w-full h-10 px-3 ' />
                                            <FontAwesomeIcon icon={faEnvelope} className=' absolute top-[50%] translate-y-[-50%] right-4 text-gray-500' />
                                        </div>
                                    </div>
                                </div>
                                <div className='mb-5'>
                                    <label className='mb-2 block'>Subject</label>
                                    <div className='relative'>
                                        <input type='text' name='text' placeholder='Subject' className='form-control border border-gray-300 text-sm xl:text-[14px] 2xl:text-md w-full h-10 px-3 ' />
                                        <FontAwesomeIcon icon={faStickyNote} className=' absolute top-[50%] translate-y-[-50%] right-4 text-gray-500' />
                                    </div>
                                </div>
                                <div className='mb-5'>
                                    <label className='mb-2 block'>Message</label>
                                    <textarea placeholder='Your messages' rows={5} className='form-control py-3 border border-gray-300 text-sm xl:text-[14px] 2xl:text-md w-full px-3 '>

                                    </textarea>
                                </div>
                                <div className='text-right'>
                                    <Button className='bg-[var(--primary-color)] text-white border border-[var(--primary-color)] uppercase transition-all hover:bg-white hover:text-[var(--primary-color)] px-10'>Submit</Button>
                                </div>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14311.131458190608!2d28.008613279330145!3d-26.268709706540022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9508ca6e065135%3A0xc022f1fdf4e90f7b!2sWinchester%20Hills%2C%20Johannesburg%20South%2C%202091%2C%20South%20Africa!5e0!3m2!1sen!2sin!4v1739940525093!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    loading="lazy"
                    className='mb-15'>
                </iframe>
            </div>
            <DownloadApp />
        </>
    )
}

