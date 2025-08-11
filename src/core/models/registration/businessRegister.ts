export interface BusinessRegisterModel {
    companyName: string;
    categoryId?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    contactNo: string;
    provinceId?: number;
    cityId?: number;
    suburbId?: number;
    agreeTerms: boolean;
}

export const businessRegisterInitialValues: BusinessRegisterModel = {
    companyName: '',
    categoryId: undefined,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNo: '',
    provinceId: undefined,
    cityId: undefined,
    suburbId: undefined,
    agreeTerms: false,
};
