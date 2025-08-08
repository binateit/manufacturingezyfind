export interface IndividualRegister {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeatPassword: string;
    mobileNumber: string;
    provinceId?: number;
    cityId?: number;
    suburbId?: number;
    accept: boolean;
}

export const individualRegisterInitialValues: IndividualRegister = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    repeatPassword: '',
    mobileNumber: '',
    provinceId: undefined,
    cityId: undefined,
    suburbId: undefined,
    accept: false,
};