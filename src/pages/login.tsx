import { Card } from "@/components/ui";
import PageBanner from "@/components/ui/PageBanner";
import { ENV } from "@/core/config/env";
import { initialLoginValues, Login } from "@/core/models/auth/login";
import { authService } from "@/core/services/authService";
import { tokenService } from "@/core/services/token.service";
import { LoginValidationSchema } from "@/core/validators/login-schema";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { FormikHelpers, useFormik } from "formik";
import Link from "next/link";
import { toast } from "react-toastify";

export default function LoginPage() {

    const formik = useFormik({
        initialValues: initialLoginValues,
        validationSchema: LoginValidationSchema,
        onSubmit: async (values, actions: FormikHelpers<Login>) => {
            actions.setSubmitting(true);
            const token = 'Basic ' + window.btoa(`${values.email}:${values.password}`);
            try {
                const loginResult = await authService.login(token);
                if (loginResult && loginResult.token) {
                    tokenService.setLoggedUserDetail(loginResult.token, loginResult.tokenExpires, loginResult.firstName, loginResult.lastName);
                    let user = JSON.stringify(loginResult);
                    window.location.replace(`${ENV.DASHBOARD_URL}?token=${loginResult.token}&value=${user}`);
                } else {
                    toast.error('Login failed. Please check your credentials.');
                }
            } catch (error) {
                console.log(error instanceof Error ? error.message : 'Something went wrong');
                toast.error('Login failed. Please check your credentials.');
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
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center'>
                            <div className='relative h-5 w-5 '>
                                <input type='checkbox' name='remember' id='remember' className='peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800' />
                                <span className='inline-block absolute h-3 w-2 border-r-3 border-b-3 border-amber-50 rotate-45 left-1/2 top-[2px] -translate-x-1/2'></span>
                            </div>
                            <label htmlFor='remember' className='text-sm cursor-pointer'>Remember Me</label>
                        </div>
                        <Link href={'/forgot-password'} className='text-primary text-sm md:text-md inline-block'>Forgot Password?</Link>
                    </div>

                    <div className='text-center mt-10'>
                        <button type="submit" className="py-2 bg-[var(--primary-color)] text-white border border-[var(--primary-color)] uppercase transition-all hover:bg-white hover:text-[var(--primary-color)] px-10"
                            disabled={formik.isSubmitting || !formik.isValid}>
                            {formik.isSubmitting ? 'Logging in...' : 'Log in'}
                        </button>
                        <p className='text-gray-500 my-4'>Don&apos;t Have An Account? <Link href='/register' className='text-primary'>Register Now</Link></p>
                        {/* <p className='text-md'>Sign in with one-click with your social accounts.</p>
                        <div className='flex flex-col sm:flex-row justify-between mt-5 gap-4'>
                            <a href='#' className='py-2 px-4 border border-gray-200 text-sm flex gap-2 items-center w-full transition-all delay-100 hover:bg-gray-50 '>
                                <Image src={'/images/facebook-icon.webp'} width={26} height={26} alt='facebook-icon' /> Sign in with Facebook
                            </a>
                            <a href='#' className='py-2 px-4 border border-gray-200 text-sm flex gap-2 w-full transition-all delay-100 hover:bg-gray-50 '>
                                <Image src={'/images/google-icon.webp'} width={26} height={26} alt='google-icon' /> Sign in with Google
                            </a>
                        </div> */}
                    </div>
                </form>
            </Card>
        </>
    )
}