export interface IndividualRegister {
    firstName: string;
    lastName: string;
    userName:string;
    contactNo:string;
    email: string;
    password: string;
    confirmPassword?: string;
    provinceId?: number;
    cityId?: number;
    suburbId?: number;
    agreeTerms?: boolean;
}

export const individualRegisterInitialValues: IndividualRegister = {
    firstName: '',
    lastName: '',
    userName:"",
    email: '',
    contactNo:"",
    password: '',
    provinceId: undefined,
    cityId: undefined,
    suburbId: undefined,
    agreeTerms: false,
};



