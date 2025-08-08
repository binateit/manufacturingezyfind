export interface IndividualRegister {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    mobileNumber: string;
    provinceId?: number;
    cityId?: number;
    suburbId?: number;
    agreeTerms: boolean;
}

export const individualRegisterInitialValues: IndividualRegister = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    provinceId: undefined,
    cityId: undefined,
    suburbId: undefined,
    agreeTerms: false,
};