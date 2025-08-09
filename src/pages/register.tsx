import PageBanner from "@/components/ui/PageBanner";
import { Card } from "@/components/ui";
import { GET_CITY_BY_PROVINCE } from "@/core/graphql/queries/getCitiesByProvince";
import { GET_PROVINCE } from "@/core/graphql/queries/getProvinces";
import { GET_SUBURB_BY_CITY } from "@/core/graphql/queries/getSuburbsByCity";
import { City } from "@/core/models/locations/city";
import { Province } from "@/core/models/locations/province";
import { Suburb } from "@/core/models/locations/suburb";
import { SelectOptionNumber } from "@/core/models/shared/selectOption";
import { individualRegisterValidationSchema } from "@/core/validators/individual-register-schema";
import { useQuery, useLazyQuery } from "@apollo/client";
import { useFormik } from "formik";
import { useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faEnvelope, faLock, faMobile, faUser } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { Dropdown } from "primereact/dropdown";
import Link from "next/link";
import { IndividualRegister, individualRegisterInitialValues } from "@/core/models/registration/individualRegister";
import { emailChecker, mobileChecker, registerUser } from "@/lib/OAuth";
import { detectMobileOS } from "@/lib/utils";

const RegisterPage = () => {
    const { data: provinceData, loading: provinceLoading } = useQuery(GET_PROVINCE);
    const [getCitiesByProvince, { data: cityData, loading: cityLoading }] = useLazyQuery(GET_CITY_BY_PROVINCE);
    const [getSuburbsByCity, { data: suburbData, loading: suburbLoading }] = useLazyQuery(GET_SUBURB_BY_CITY);
    const provinces = provinceData?.getProvince?.result ?? [];
    const cities = cityData?.getCityByProvince?.result ?? [];
    const suburbs = suburbData?.getSuburbByCity?.result ?? [];

    const provinceOptions: SelectOptionNumber[] = useMemo(() =>
        provinces.map((p: Province) => ({
            value: Number(p.provinceId),
            label: p.provinceName
        })), [provinces]);

    const cityOptions: SelectOptionNumber[] = useMemo(() =>
        cities.map((c: City) => ({
            value: Number(c.cityId),
            label: c.cityName
        })), [cities]);

    const suburbOptions: SelectOptionNumber[] = useMemo(() =>
        suburbs.map((s: Suburb) => ({
            value: Number(s.suburbId),
            label: s.suburbName
        })), [suburbs]);

    const formik = useFormik<IndividualRegister>({
        initialValues: individualRegisterInitialValues,
        validationSchema: individualRegisterValidationSchema,
        onSubmit: async (values, actions) => {
            actions.setSubmitting(true);
            const emailCheck = await emailChecker(values.email);
            if (emailCheck?.message === 'Email already exists') {
                formik.setFieldError('email', emailCheck.message);
                actions.setSubmitting(false);
                return;
            }
            const mobileCheck = await mobileChecker(values.mobileNumber);
            if (mobileCheck?.result !== 'true') {
                formik.setFieldError('mobileNumber', mobileCheck?.message || 'Phone number already exists');
                actions.setSubmitting(false)
                return;
            }

            const result = await registerUser({
                email: values.email,
                contactNo: values.mobileNumber,
                userName: `${values.firstName} ${values.lastName}`,
                password: values.password,
                track: 1,
                firstName: values.firstName,
                lastName: values.lastName,
                fullName: `${values.firstName} ${values.lastName}`,
                provinceID: Number(values.provinceId),
                cityID: Number(values.cityId),
                suburbID: Number(values.suburbId),
                userProfileImage: null,
                userProfileThumbNailImage: null,
                domainUrl: '1',
                paymentUrl: null
            },
                detectMobileOS() === 'Unknown' ? 1 : 0
            );
            actions.setSubmitting(false)
            if (result?.token) {
                console.log('Successfully registered!');
                window.location.replace('/');
            } else {
                console.log('Failed to register');
            }
        }
    });


    useEffect(() => {
        if (formik.values.provinceId !== 0) {
            getCitiesByProvince({ variables: { id: formik.values.provinceId } });
            formik.setFieldValue("cityId", 0);
            formik.setFieldValue("suburbId", 0);
        }
    }, [formik.values.provinceId]);

    useEffect(() => {
        if (formik.values.cityId !== 0) {
            getSuburbsByCity({ variables: { id: formik.values.cityId } });
            formik.setFieldValue("suburbId", 0);
        }
    }, [formik.values.cityId]);
    return (
        <>
            <PageBanner
                backgroundImage='/images/register_banner.webp'
                title='Register Individual'
            />
            <div className="container">
                <Card title='Register Individual'
                    className='w-[95%] md:w-2xl mx-auto my-25'
                    titleClassName='uppercase text-xl sm:text-xl lg:text-xl xl:text-2xl font-medium text-white'
                >
                    <form onSubmit={formik.handleSubmit}>
                        <div className='mb-5'>
                            <label className='mb-2 block'>First Name</label>
                            <div className='relative'>
                                <input
                                    {...formik.getFieldProps('firstName')}
                                    type='text'
                                    placeholder='Enter First Name'
                                    className={clsx(
                                        'form-control text-sm w-full h-10 px-3 pr-10 xl:text-[14px] 2xl:text-md',
                                        formik.touched.firstName && formik.errors.firstName
                                            ? 'border border-red-500'
                                            : 'border border-gray-300'
                                    )}
                                />
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className={clsx(
                                        'absolute top-1/2 right-4 transform -translate-y-1/2',
                                        formik.touched.firstName && formik.errors.firstName
                                            ? 'text-red-500'
                                            : 'text-gray-500'
                                    )}
                                />
                            </div>
                            {formik.touched.firstName && formik.errors.firstName && (
                                <div className='mt-1 text-sm text-red-600'>{formik.errors.firstName}</div>
                            )}
                        </div>
                        <div className='mb-4'>
                            <label className='mb-2 block'>Last Name</label>
                            <div className='relative'>
                                <input
                                    {...formik.getFieldProps('lastName')}
                                    type='text'
                                    placeholder='Enter Last Name'
                                    className={clsx(
                                        'form-control w-full h-10 px-3 pr-10 text-sm xl:text-[14px] 2xl:text-md',
                                        formik.touched.lastName && formik.errors.lastName
                                            ? 'border border-red-500'
                                            : 'border border-gray-300'
                                    )}
                                />
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className={clsx(
                                        'absolute top-1/2 right-4 transform -translate-y-1/2',
                                        formik.touched.lastName && formik.errors.lastName ? 'text-red-500' : 'text-gray-500'
                                    )}
                                />
                            </div>

                            {formik.touched.lastName && formik.errors.lastName && (
                                <div className='mt-1 text-sm text-red-600'>{formik.errors.lastName}</div>
                            )}
                        </div>

                        <div className='mb-4'>
                            <label className='mb-2 block'>Email</label>
                            <div className='relative'>
                                <input
                                    {...formik.getFieldProps('email')}
                                    type='email'
                                    placeholder='Enter Email'
                                    className={clsx(
                                        'form-control w-full h-10 px-3 pr-10 text-sm xl:text-[14px] 2xl:text-md',
                                        formik.touched.email && formik.errors.email
                                            ? 'border border-red-500'
                                            : 'border border-gray-300'
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

                        <div className='mb-4'>
                            <label className='mb-2 block'>Password</label>
                            <div className='relative'>
                                <input
                                    {...formik.getFieldProps('password')}
                                    type='password'
                                    placeholder='Enter Password'
                                    className={clsx(
                                        'form-control w-full h-10 px-3 pr-10 text-sm xl:text-[14px] 2xl:text-md',
                                        formik.touched.password && formik.errors.password
                                            ? 'border border-red-500'
                                            : 'border border-gray-300'
                                    )}
                                />
                                <FontAwesomeIcon
                                    icon={faLock}
                                    className={clsx(
                                        'absolute top-1/2 right-4 transform -translate-y-1/2',
                                        formik.touched.password && formik.errors.password ? 'text-red-500' : 'text-gray-500'
                                    )}
                                />
                            </div>
                            {formik.touched.password && formik.errors.password && (
                                <div className='mt-1 text-sm text-red-600'>{formik.errors.password}</div>
                            )}
                        </div>

                        <div className='mb-4'>
                            <label className='mb-2 block'>Confirm Password</label>
                            <div className='relative'>
                                <input
                                    {...formik.getFieldProps('confirmPassword')}
                                    type='password'
                                    placeholder='Confirm Password'
                                    className={clsx(
                                        'form-control w-full h-10 px-3 pr-10 text-sm xl:text-[14px] 2xl:text-md',
                                        formik.touched.confirmPassword && formik.errors.confirmPassword
                                            ? 'border border-red-500'
                                            : 'border border-gray-300'
                                    )}
                                />
                                <FontAwesomeIcon
                                    icon={faLock}
                                    className={clsx(
                                        'absolute top-1/2 right-4 transform -translate-y-1/2',
                                        formik.touched.confirmPassword && formik.errors.confirmPassword
                                            ? 'text-red-500'
                                            : 'text-gray-500'
                                    )}
                                />
                            </div>
                            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                <div className='mt-1 text-sm text-red-600'>{formik.errors.confirmPassword}</div>
                            )}
                        </div>

                        <div className='flex flex-col md:flex-row md:gap-5'>
                            <div className='mb-4 w-full'>
                                <label className='mb-2 block'>Province</label>
                                <Dropdown
                                    loading={provinceLoading}
                                    name="provinceId"
                                    value={formik.values.provinceId}
                                    options={provinceOptions}
                                    optionLabel="label"
                                    placeholder="Select Province"
                                    onChange={(e) => {
                                        formik.setFieldValue('provinceId', e.value);
                                        formik.setFieldValue('cityId', '');
                                        formik.setFieldValue('suburbId', '');
                                    }}
                                    className={clsx(
                                        'w-full',
                                        formik.touched.provinceId && formik.errors.provinceId
                                            ? 'p-invalid border border-red-500'
                                            : 'border border-gray-300'
                                    )}
                                    filter
                                />
                                {formik.touched.provinceId && formik.errors.provinceId && (
                                    <div className='mt-1 text-sm text-red-600'>{formik.errors.provinceId}</div>
                                )}
                            </div>

                            <div className='mb-4 w-full'>
                                <label className='mb-2 block'>City</label>
                                <Dropdown
                                    loading={cityLoading}
                                    name="cityId"
                                    value={formik.values.cityId}
                                    options={cityOptions}
                                    optionLabel="label"
                                    placeholder="Select City"
                                    onChange={(e) => {
                                        formik.setFieldValue('cityId', e.value);
                                        formik.setFieldValue('suburbId', '');
                                    }}
                                    disabled={!formik.values.provinceId}
                                    className={clsx(
                                        'w-full',
                                        formik.touched.cityId && formik.errors.cityId
                                            ? 'p-invalid border border-red-500'
                                            : 'border border-gray-300'
                                    )}
                                    filter
                                />
                                {formik.touched.cityId && formik.errors.cityId && (
                                    <div className='mt-1 text-sm text-red-600'>{formik.errors.cityId}</div>
                                )}
                            </div>

                        </div>
                        <div className='flex flex-col md:flex-row md:gap-5'>
                            <div className='mb-4 w-full'>
                                <label className='mb-2 block'>Suburb</label>
                                <Dropdown
                                    loading={suburbLoading}
                                    name="suburbId"
                                    value={formik.values.suburbId}
                                    options={suburbOptions}
                                    optionLabel="label"
                                    placeholder="Select Suburb"
                                    onChange={(e) => formik.setFieldValue('suburbId', e.value)}
                                    disabled={!formik.values.cityId}
                                    className={clsx(
                                        'w-full',
                                        formik.touched.suburbId && formik.errors.suburbId
                                            ? 'p-invalid border border-red-500'
                                            : 'border border-gray-300'
                                    )}
                                    filter
                                />
                                {formik.touched.suburbId && formik.errors.suburbId && (
                                    <div className='mt-1 text-sm text-red-600'>{formik.errors.suburbId}</div>
                                )}
                            </div>

                            <div className='mb-4 w-full'>
                                <label className='mb-2 block'>Mobile Number</label>
                                <div className='relative flex'>
                                    <input
                                        type='text'
                                        value='+27'
                                        readOnly
                                        className='form-control border-r-0 w-[50px] h-10 px-3 text-sm border border-gray-300 bg-gray-100'
                                    />
                                    <input
                                        {...formik.getFieldProps('mobileNumber')}
                                        type='text'
                                        placeholder='Enter mobile number'
                                        className={clsx(
                                            'form-control w-full h-10 px-3 pr-10 text-sm',
                                            formik.touched.mobileNumber && formik.errors.mobileNumber
                                                ? 'border border-red-500'
                                                : 'border border-gray-300'
                                        )}
                                    />
                                    <FontAwesomeIcon
                                        icon={faMobile}
                                        className={clsx(
                                            'absolute right-4 top-1/2 transform -translate-y-1/2',
                                            formik.touched.mobileNumber && formik.errors.mobileNumber
                                                ? 'text-red-500'
                                                : 'text-gray-500'
                                        )}
                                    />
                                </div>
                                {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                                    <div className='mt-1 text-sm text-red-600'>{formik.errors.mobileNumber}</div>
                                )}
                            </div>

                        </div>

                        <div className='flex items-start gap-2 mb-4'>
                            <input
                                type='checkbox'
                                name='agreeTerms'
                                id='agreeTerms'
                                checked={formik.values.agreeTerms}
                                onChange={formik.handleChange}
                                className='mt-1'
                            />
                            <label htmlFor='agreeTerms' className='text-sm'>
                                I agree that the information provided above is true to my knowledge and accept the terms & conditions
                            </label>
                        </div>
                        {formik.touched.agreeTerms && formik.errors.agreeTerms && (
                            <div className='text-sm text-red-600 -mt-2 mb-2'>{formik.errors.agreeTerms}</div>
                        )}


                        <div className='text-center mt-10'>
                            <button
                                type="submit"
                                className="py-2 hover:cursor-pointer duration-300 ease-in-out bg-[var(--primary-color)] text-white border border-[var(--primary-color)] uppercase transition-all hover:bg-white hover:text-[var(--primary-color)] px-10"
                            >
                                {!formik.isSubmitting ? 'Register ' : 'Please wait...'}
                                {!formik.isSubmitting ? <FontAwesomeIcon icon={faAngleRight} /> : <span className='spinner-border spinner-border-sm align-middle ms-2'></span>}
                            </button>

                            <p className='text-gray-500 my-4'>Already Have An Account? <Link href='/login' className='text-primary'>Login</Link></p>
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
            </div>

        </>
    )
}
export default RegisterPage