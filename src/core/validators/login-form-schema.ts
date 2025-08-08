import * as Yup from 'yup'

export const LoginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .matches(/^(?=.*[A-Z])(?=.*\d).*$/, 'Include at least one capital letter and one number')
        .required('Password is required'),
})