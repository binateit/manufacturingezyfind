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
import { emailChecker, mobileChecker, registerUser } from "@/core/services/register.service";
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
            const mobileCheck = await mobileChecker(values.contactNo);
            if (mobileCheck?.result !== 'true') {
                formik.setFieldError('contactNo', mobileCheck?.message || 'Phone number already exists');
                actions.setSubmitting(false)
                return;
            }

            const result = await registerUser({
                email: values.email,
                contactNo: values.contactNo,
                userName: `${values.firstName} ${values.lastName}`,
                firstName: values.firstName,
                lastName: values.lastName,
                password: values.password,
                track: 1,
                provinceID: Number(values.provinceID),
                cityID: Number(values.cityID),
                suburbID: Number(values.suburbID),
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
        if (formik.values.provinceID !== 0) {
            getCitiesByProvince({ variables: { id: formik.values.provinceID } });
            formik.setFieldValue("cityID", 0);
            formik.setFieldValue("suburbID", 0);
        }
    }, [formik.values.provinceID]);

    useEffect(() => {
        if (formik.values.cityID !== 0) {
            getSuburbsByCity({ variables: { id: formik.values.cityID } });
            formik.setFieldValue("suburbID", 0);
        }
    }, [formik.values.cityID]);
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
                                    name="provinceID"
                                    value={formik.values.provinceID}
                                    options={provinceOptions}
                                    optionLabel="label"
                                    placeholder="Select Province"
                                    onChange={(e) => {
                                        formik.setFieldValue('provinceID', e.value);
                                        formik.setFieldValue('cityID', '');
                                        formik.setFieldValue('suburbID', '');
                                    }}
                                    className={clsx(
                                        'w-full',
                                        formik.touched.provinceID && formik.errors.provinceID
                                            ? 'p-invalid border border-red-500'
                                            : 'border border-gray-300'
                                    )}
                                    filter
                                />
                                {formik.touched.provinceID && formik.errors.provinceID && (
                                    <div className='mt-1 text-sm text-red-600'>{formik.errors.provinceID}</div>
                                )}
                            </div>

                            <div className='mb-4 w-full'>
                                <label className='mb-2 block'>City</label>
                                <Dropdown
                                    loading={cityLoading}
                                    name="cityID"
                                    value={formik.values.cityID}
                                    options={cityOptions}
                                    optionLabel="label"
                                    placeholder="Select City"
                                    onChange={(e) => {
                                        formik.setFieldValue('cityID', e.value);
                                        formik.setFieldValue('suburbID', '');
                                    }}
                                    disabled={!formik.values.provinceID}
                                    className={clsx(
                                        'w-full',
                                        formik.touched.cityID && formik.errors.cityID
                                            ? 'p-invalid border border-red-500'
                                            : 'border border-gray-300'
                                    )}
                                    filter
                                />
                                {formik.touched.cityID && formik.errors.cityID && (
                                    <div className='mt-1 text-sm text-red-600'>{formik.errors.cityID}</div>
                                )}
                            </div>

                        </div>
                        <div className='flex flex-col md:flex-row md:gap-5'>
                            <div className='mb-4 w-full'>
                                <label className='mb-2 block'>Suburb</label>
                                <Dropdown
                                    loading={suburbLoading}
                                    name="suburbID"
                                    value={formik.values.suburbID}
                                    options={suburbOptions}
                                    optionLabel="label"
                                    placeholder="Select Suburb"
                                    onChange={(e) => formik.setFieldValue('suburbID', e.value)}
                                    disabled={!formik.values.cityID}
                                    className={clsx(
                                        'w-full',
                                        formik.touched.suburbID && formik.errors.suburbID
                                            ? 'p-invalid border border-red-500'
                                            : 'border border-gray-300'
                                    )}
                                    filter
                                />
                                {formik.touched.suburbID && formik.errors.suburbID && (
                                    <div className='mt-1 text-sm text-red-600'>{formik.errors.suburbID}</div>
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
                                        {...formik.getFieldProps('contactNo')}
                                        type='text'
                                        placeholder='Enter mobile number'
                                        className={clsx(
                                            'form-control w-full h-10 px-3 pr-10 text-sm',
                                            formik.touched.contactNo && formik.errors.contactNo
                                                ? 'border border-red-500'
                                                : 'border border-gray-300'
                                        )}
                                    />
                                    <FontAwesomeIcon
                                        icon={faMobile}
                                        className={clsx(
                                            'absolute right-4 top-1/2 transform -translate-y-1/2',
                                            formik.touched.contactNo && formik.errors.contactNo
                                                ? 'text-red-500'
                                                : 'text-gray-500'
                                        )}
                                    />
                                </div>
                                {formik.touched.contactNo && formik.errors.contactNo && (
                                    <div className='mt-1 text-sm text-red-600'>{formik.errors.contactNo}</div>
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