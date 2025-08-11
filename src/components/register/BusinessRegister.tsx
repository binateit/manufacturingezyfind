import { GET_CITY_BY_PROVINCE } from "@/core/graphql/queries/getCitiesByProvince";
import { GET_PROVINCE } from "@/core/graphql/queries/getProvinces";
import { GET_SUBURB_BY_CITY } from "@/core/graphql/queries/getSuburbsByCity";
import { City } from "@/core/models/locations/city";
import { Province } from "@/core/models/locations/province";
import { Suburb } from "@/core/models/locations/suburb";
import { Package } from "@/core/models/packages/package";
import { businessRegisterInitialValues, BusinessRegisterModel } from "@/core/models/registration/businessRegister";
import { SelectOptionNumber } from "@/core/models/shared/selectOption";
import { BusinessRegisterValidationSchema } from "@/core/validators/business-register-schema";
import { formatCurrency } from "@/lib/format";
import { useQuery, useLazyQuery } from "@apollo/client";
import { FormikHelpers, useFormik } from "formik";
import { Button } from "primereact/button";
import { useMemo, useEffect } from "react";
import { Card } from "../ui";
import { TenureItem } from "@/core/constants/tenure";
import Link from "next/link";
import { GET_CATEGORY_BY_PARENTID } from "@/core/graphql/queries/getCategories";
import { ENV } from "@/core/config/env";
import { Category } from "@/core/models/categories/category";
import { faUser, faEnvelope, faLock, faMobile, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { Dropdown } from "primereact/dropdown";
import { calculateDiscountedSubscriptionPrice } from "@/lib/subscriptionUtils";
import { authService } from "@/core/services/authService";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { DISCOUNTS } from "@/core/constants/discounts";
import { tokenService } from "@/core/services/token.service";
import Cryptr from "cryptr";

interface BusinessRegisterProps {
    selectedPackage: Package;
    selectedTenure: TenureItem;
}

const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
const cryptr = new Cryptr(secretKey as string);

export default function BusinessRegister({ selectedPackage, selectedTenure }: BusinessRegisterProps) {
    const [, setCookie, removeCookie] = useCookies(['EzyFind_UID', 'EzyFind_Contract'])
    const { data: provinceData, loading: provinceLoading } = useQuery(GET_PROVINCE);
    const [getCitiesByProvince, { data: cityData, loading: cityLoading }] = useLazyQuery(GET_CITY_BY_PROVINCE);
    const [getSuburbsByCity, { data: suburbData, loading: suburbLoading }] = useLazyQuery(GET_SUBURB_BY_CITY);
    const { data: categoryData, loading: categoryLoading } = useQuery(GET_CATEGORY_BY_PARENTID, {
        variables: { id: Number(ENV.CATEGORY_ID), size: 1000 },
    });

    const provinces = provinceData?.getProvince?.result ?? [];
    const cities = cityData?.getCityByProvince?.result ?? [];
    const suburbs = suburbData?.getSuburbByCity?.result ?? [];
    const categories = categoryData?.getMstCategoryByParentId?.result ?? [];

    useEffect(() => {
        removeCookie('EzyFind_UID', {
            path: '/',
            domain: process.env.NEXT_PUBLIC_ROOT_URL?.replace('https://', '.'),
        })
        removeCookie('EzyFind_Contract', {
            path: '/',
            domain: process.env.NEXT_PUBLIC_ROOT_URL?.replace('https://', '.'),
        })
    }, [])

    const categoryOptions: SelectOptionNumber[] = useMemo(() =>
        categories.map((c: Category) => ({
            value: Number(c.categoryId),
            label: c.categoryName
        })), [categories]);

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

    const formik = useFormik<BusinessRegisterModel>({
        initialValues: businessRegisterInitialValues,
        validationSchema: BusinessRegisterValidationSchema,
        onSubmit: async (values, actions: FormikHelpers<BusinessRegisterModel>) => {
            actions.setSubmitting(true);

            // Use AuthService to check email and mobile
            const isEmailExists = await authService.emailCheck(values.email);
            if (isEmailExists) {
                actions.setSubmitting(false);
                formik.setFieldError('email', 'Email Address already exists');
                return
            }

            const isMobileExists = await authService.mobileCheck(values.contactNo);
            if (isMobileExists) {
                actions.setSubmitting(false);
                formik.setFieldError('contactNo', 'Mobile number already exists');
                return;
            }

            const isCompanyExists = await authService.companyCheck(values.companyName);
            if (isCompanyExists) {
                actions.setSubmitting(false);
                formik.setFieldError('companyName', 'Company Name already exists');
                return;
            }

            try {
                const result = await authService.registerBusiness({
                    categoryID: Number(values.categoryId),
                    companyName: values.companyName,
                    email: values.email,
                    contactNo: values.contactNo,
                    firstName: values.firstName,
                    lastName: values.lastName,
                    password: values.password,
                    provinceID: Number(values.provinceId),
                    cityID: Number(values.cityId),
                    suburbID: Number(values.suburbId),
                    domainUrl: "2",
                    packageID: selectedPackage.packageID,
                    discount: DISCOUNTS[selectedTenure.key] || 0
                }
                );

                actions.setSubmitting(false);

                if (result?.token) {
                    tokenService.setLoggedUserDetail(result.token, String(result.tokenExpires), result.firstName ?? '', result.lastName ?? '');
                    toast.success("Successfully registered!");

                    const redirectUrl = result?.paymentUrl || ENV.DASHBOARD_URL;

                    if (!redirectUrl) {
                        // Handle missing URL or throw an error
                        toast.error('No redirect URL found');
                        return;
                    }

                    const session = await authService.getSession(1);

                    if (session?.sessionKeyLogin) {
                        const cookieOptions = {
                            path: "/",
                            expires: new Date(Date.now() + 120 * 60 * 1000), // 2 hours
                            domain: process.env.NEXT_PUBLIC_ROOT_URL?.replace("https://", "."),
                        };

                        setCookie("EzyFind_UID", cryptr.encrypt(session.sessionKeyLogin), cookieOptions);
                        setCookie("EzyFind_Contract", cryptr.encrypt("Contract"), cookieOptions);
                        window.location.assign(redirectUrl);
                    }
                    else {
                        window.location.assign("/");
                    }

                } else {
                    toast.error("Registration failed.");
                }
            }
            catch (error) {
                console.error("An error occurred during registration:", error);
                actions.setSubmitting(false);
                toast.error("An error occurred during registration.");
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

    const { price, discountAmount, discountPercent, discountedPrice } = calculateDiscountedSubscriptionPrice(selectedPackage as Package, selectedTenure?.key ?? 0 as number);
    const vatAmount = discountedPrice * 0.15; // Assuming VAT is 15% of the discounted price
    const totalAmount = discountedPrice + vatAmount;

    return (
        <div className="flex flex-col lg:flex-row justify-center gap-5">
            <div className='lg:basis-6/12 xl:basis-7/12 2xl:basis-6/10 '>
                <Card
                    title='Business Information'
                    className='pt-20 2xl:mx-5 mt-20 mb-10 lg:my-25'
                    titleClassName='text-xl sm:text-xl lg:text-xl xl:text-2xl font-medium'
                >

                    <form onSubmit={formik.handleSubmit}>
                        <div className='mb-5'>
                            <label className='mb-2 block'>Company</label>
                            <div className='relative'>
                                <input
                                    {...formik.getFieldProps('companyName')}
                                    type='text'
                                    placeholder='Enter Company Name'
                                    className={clsx(
                                        'form-control text-sm w-full h-10 px-3 pr-10 xl:text-[14px] 2xl:text-md',
                                        formik.touched.companyName && formik.errors.companyName
                                            ? 'border border-red-500'
                                            : 'border border-gray-300'
                                    )}
                                />
                                <FontAwesomeIcon
                                    icon={faBuilding}
                                    className={clsx(
                                        'absolute top-1/2 right-4 transform -translate-y-1/2',
                                        formik.touched.companyName && formik.errors.companyName
                                            ? 'text-red-500'
                                            : 'text-gray-500'
                                    )}
                                />

                            </div>
                        </div>

                        <div className='mb-4'>
                            <label className='mb-2 block'>Category</label>
                            <div className='relative'>
                                <Dropdown
                                    loading={categoryLoading}
                                    name="categoryId"
                                    value={formik.values.categoryId}
                                    options={categoryOptions}
                                    optionLabel="label"
                                    placeholder="Select Category"
                                    onChange={(e) => {
                                        formik.setFieldValue('categoryId', e.value);
                                    }}
                                    className={clsx(
                                        'w-full',
                                        formik.touched.categoryId && formik.errors.categoryId
                                            ? 'p-invalid border border-red-500'
                                            : 'border border-gray-300'
                                    )}
                                    filter
                                />
                                {formik.touched.provinceId && formik.errors.provinceId && (
                                    <div className='mt-1 text-sm text-red-600'>{formik.errors.provinceId}</div>
                                )}
                                <i className="fas fa-chevron-down absolute top-[50%] translate-y-[-50%] right-4 text-gray-500"></i>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row md:gap-3 lg:gap-0 xl:gap-5">
                            <div className='mb-4 w-full'>
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
                            <div className='mb-4 w-full'>
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
                        </div>
                        <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row md:gap-3 lg:gap-0 xl:gap-5">
                            <div className='mb-4 w-full'>
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
                        <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row md:gap-3 lg:gap-0 xl:gap-5">
                            <div className='mb-4 w-full'>
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

                            <div className='mb-4 w-full'>
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
                        <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row md:gap-3 lg:gap-0 xl:gap-5">
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
                            <div className='mb-4 w-full'></div>
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

                        <div className='flex justify-end gap-5 mt-10'>
                            <Link href='/pricing' className='btn bg-[var(--secondary-color)] text-white border border-[var(--secondary-color)] uppercase transition-all hover:bg-white hover:text-[var(--secondary-color)] px-10'>Change Plan</Link>
                            <Button className='bg-[var(--primary-color)] text-white border border-[var(--primary-color)] uppercase transition-all hover:bg-white hover:text-[var(--primary-color)] px-10'>Next</Button>
                        </div>
                    </form>
                </Card>
            </div>

            <div className='lg:basis-6/12 xl:basis-5/12 2xl:basis-4/10'>
                <Card
                    title='Package Summary'
                    className='pt-20 2xl:mx-5 lg:my-25 mb-10 relative h-auto'
                    titleClassName='text-xl sm:text-xl lg:text-xl xl:text-2xl font-medium'
                >
                    <div className='flex justify-between border-b border-gray-300 mb-2 pb-4'>
                        <p><span className='font-semibold'>Package (A)</span> : <i>{selectedPackage?.packageName}</i></p>
                        <p className='text-primary font-semibold'>{formatCurrency(price)}</p>
                    </div>
                    {selectedTenure?.hasDiscount && (
                        <div className='flex justify-between border-b border-gray-300 mb-2 pb-4'>
                            <p><span className='font-semibold'>Discount ({discountPercent}%) (B)</span> : </p>
                            <p className='text-primary font-semibold'>{formatCurrency(discountAmount)}</p>
                        </div>

                    )}
                    <div className='flex justify-between border-b border-gray-300 pb-4'>
                        <p><span className='font-semibold'>VAT (15%)(C)</span> : </p>
                        <p className='text-primary font-semibold'>{formatCurrency(vatAmount)}</p>
                    </div>
                    <div className='flex justify-between border-b border-gray-300 pb-4 pt-4 max-[500]:-mx-5 -mx-10 max-[500]:px-5 px-10 -mb-10 bg-secondary text-white'>
                        <p><span className='font-semibold'>Total(A-B+C)</span> : </p>
                        <p className='font-semibold'>{formatCurrency(totalAmount)}</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}
