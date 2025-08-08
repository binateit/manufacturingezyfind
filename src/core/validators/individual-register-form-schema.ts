import * as Yup from 'yup';

export const individualRegisterValidationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required')
        .matches(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/, 'Provide Proper Email'),
    password: Yup.string()
        .matches(/^(?=.*[A-Z])(?=.*\d).*$/, 'Include at least one capital letter and one number')
        .required('Password is required'),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
    mobileNumber: Yup.string()
        .matches(/^\d{9}$/, 'Invalid mobile number')
        .required('Mobile Number is required'),
    provinceId: Yup.number().required('Province is required'),
    cityId: Yup.number().required('City is required'),
    suburbId: Yup.number().required('Suburb is required'),
    accept: Yup.boolean().oneOf([true], 'Accept terms & conditions')
});
