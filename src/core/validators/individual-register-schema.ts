import * as Yup from 'yup';

export const individualRegisterValidationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password')], 'Passwords must match'),
    contactNo: Yup.string()
        .required('Mobile Number is required')
        .matches(/^\d+$/, 'Mobile Number must contain only digits')
        .min(7, 'Mobile Number must be at least 7 digits')
        .max(15, 'Mobile Number must be at most 15 digits'),
    provinceId: Yup.number().required('Province is required'),
    cityId: Yup.number().required('City is required'),
    suburbId: Yup.number().required('Suburb is required'),
    agreeTerms: Yup.boolean()
        .oneOf([true], 'You must accept the terms and conditions')
        .required('You must accept the terms and conditions')
});
