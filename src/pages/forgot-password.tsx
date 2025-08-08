import { Card } from "@/components/ui"
import PageBanner from "@/components/ui/PageBanner"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import { useFormik } from "formik"
import Link from "next/link"
import { useState } from "react"
import { initialForgotPasswordValue } from "@/core/auth/ForotPasswordModal"
import { ForgotPasswordSchema } from "@/core/validators/forgot-form-schema"

export default function ForgotPasswordPage() {
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: initialForgotPasswordValue,
        validationSchema: ForgotPasswordSchema,
        onSubmit: async (values, actions) => {
            setLoading(true)
            try {
                
            } catch (error) {

            }
            setLoading(false)
            actions.setSubmitting(false)
        },
    })

    return (
        <>
            <PageBanner backgroundImage='/images/register_banner.webp' title='Forgot Password' />
            <Card
                title='Forgot Password'
                className='w-[95%] md:w-2xl mx-auto my-25'
                titleClassName='uppercase text-xl sm:text-xl lg:text-xl xl:text-2xl font-medium text-white'
            >
                <p className='text-center mb-5 text-lg'>Enter your email to receive a password reset link</p>
                <form onSubmit={formik.handleSubmit}>
                    <div className='mb-4'>
                        <label className='mb-2 block'>Email</label>
                        <div className='relative'>
                            <input
                                {...formik.getFieldProps('email')}
                                type='email'
                                placeholder='Enter Email'
                                className={clsx(
                                    'form-control w-full h-10 px-3 pr-10 text-sm xl:text-[14px] 2xl:text-md',
                                    formik.touched.email && formik.errors.email ? 'border border-red-500' : 'border border-gray-300'
                                )}
                            />
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className={clsx(
                                    'absolute top-1/2 right-4 transform -translate-y-1/2',
                                    formik.touched.email && formik.errors.email ? 'text-red-500' : 'text-gray-500'
                                )}
                            />
                        </div>
                        {formik.touched.email && formik.errors.email && (
                            <div className='mt-1 text-sm text-red-600'>{formik.errors.email}</div>
                        )}
                    </div>

                    <div className='text-center mt-10'>
                        <button
                            type='submit'
                            className='py-2 bg-[var(--primary-color)] text-white border border-[var(--primary-color)] uppercase transition-all hover:bg-white hover:text-[var(--primary-color)] px-10'
                            disabled={formik.isSubmitting || !formik.isValid || loading}
                        >
                            {loading ? 'Sending...' : 'Send Reset Link'}
                        </button>
                        <p className='text-gray-500 my-4'>
                            Remember your password?{' '}
                            <Link href='/login' className='text-primary'>
                                Log in
                            </Link>
                        </p>
                    </div>
                </form>
            </Card>
        </>
    )
}
