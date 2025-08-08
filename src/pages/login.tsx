import { Card } from "@/components/ui";
import PageBanner from "@/components/ui/PageBanner";
import { initialLoginValues } from "@/core/auth/LoginModal";
import { LoginValidationSchema } from "@/core/validators/login-form-schema";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useFormik } from "formik";
import Link from "next/link";

export default function LoginPage() {
    const dashboard = process.env.NEXT_PUBLIC_DASHBOARD_URL;

    const formik = useFormik({
        initialValues: initialLoginValues,
        validationSchema: LoginValidationSchema,
        onSubmit: async (values, actions) => {
            actions.setSubmitting(true);
            const token = 'Basic ' + window.btoa(`${values.email}:${values.password}`);
            console.log("token", token);
            try {
                // const data = await authService.sSOLogin(token);
                // if (data?.success && data?.result?.token) {
                //     localStorage.setItem('token', data.result.token);
                //     login({ firstName: data?.result?.firstName || '', lastName: data?.result?.lastName || 'Unknown' });

                //     const user = JSON.stringify({ firstName: data.result.firstName, lastName: data.result.lastName });
                //     sessionStorage.setItem('user', user);

                //     window.location.replace(`${dashboard}?token=${data?.result?.token}&value=${JSON.stringify(data.result)}`);
                // } else {
                //     console.log(data?.message || 'Failed to login.');
                // }
            } catch (error) {
                console.log(error instanceof Error ? error.message : 'Something went wrong');
            }
            actions.setSubmitting(false);
        }
    });

    return (
        <>
            <PageBanner backgroundImage='/images/register_banner.webp' title='Log in' />
            <Card title='Log in' className='w-[95%] md:w-2xl mx-auto my-25' titleClassName='uppercase text-xl sm:text-xl lg:text-xl xl:text-2xl font-medium text-white'>
                <p className='text-center mb-5 text-lg'>We are happy to see you return</p>
                <form onSubmit={formik.handleSubmit}>
                    <div className='mb-4'>
                        <label className='mb-2 block'>Email</label>
                        <div className='relative'>
                            <input {...formik.getFieldProps('email')} type='email' placeholder='Enter Email'
                                className={clsx('form-control w-full h-10 px-3 pr-10 text-sm xl:text-[14px] 2xl:text-md',
                                    formik.touched.email && formik.errors.email ? 'border border-red-500' : 'border border-gray-300')}
                            />
                            <FontAwesomeIcon icon={faEnvelope} className={clsx(
                                'absolute top-1/2 right-4 transform -translate-y-1/2',
                                formik.touched.email && formik.errors.email ? 'text-red-500' : 'text-gray-500')}
                            />
                        </div>
                        {formik.touched.email && formik.errors.email && (
                            <div className='mt-1 text-sm text-red-600'>{formik.errors.email}</div>
                        )}
                    </div>

                    <div className='mb-4'>
                        <label className='mb-2 block'>Password</label>
                        <div className='relative'>
                            <input {...formik.getFieldProps('password')} type='password' placeholder='Enter Password'
                                className={clsx('form-control w-full h-10 px-3 pr-10 text-sm xl:text-[14px] 2xl:text-md',
                                    formik.touched.password && formik.errors.password ? 'border border-red-500' : 'border border-gray-300')}
                            />
                            <FontAwesomeIcon icon={faLock} className={clsx(
                                'absolute top-1/2 right-4 transform -translate-y-1/2',
                                formik.touched.password && formik.errors.password ? 'text-red-500' : 'text-gray-500')}
                            />
                        </div>
                        {formik.touched.password && formik.errors.password && (
                            <div className='mt-1 text-sm text-red-600'>{formik.errors.password}</div>
                        )}
                        <div className='mt-2 text-right'>
                            <Link href='/forgot-password' className='text-sm text-primary hover:underline'>
                                Forgot Password?
                            </Link>
                        </div>
                    </div>

                    <div className='text-center mt-10'>
                        <button type="submit" className="py-2 bg-[var(--primary-color)] text-white border border-[var(--primary-color)] uppercase transition-all hover:bg-white hover:text-[var(--primary-color)] px-10"
                            disabled={formik.isSubmitting || !formik.isValid}>
                            {formik.isSubmitting ? 'Logging in...' : 'Log in'}
                        </button>
                        <p className='text-gray-500 my-4'>Don&apos;t Have An Account? <Link href='/register' className='text-primary'>Register Now</Link></p>
                    </div>
                </form>
            </Card>
        </>
    )
}