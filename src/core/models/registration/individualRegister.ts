export interface IndividualRegister {
    firstName: string;
    lastName: string;
    contactNo:string;
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
    contactNo:"",
    password: '',
    confirmPassword: '',
    mobileNumber: '',
    provinceId: undefined,
    cityId: undefined,
    suburbId: undefined,
    agreeTerms: false,
};

export interface UserInputType {
    email?: string | null;
    contactNo?: string | null;
    userName?: string | null;
    password?: string | null;
    track?: number | null;
    firstName?: string | null;
    lastName?: string | null;
    fullName?: string | null;
    provinceID?: number | null;
    provinceName?: string | null;
    cityID?: number | null;
    cityName?: string | null;
    suburbID?: number | null;
    suburbName?: string | null;
    userProfileImage?: string | null;
    userProfileThumbNailImage?: string | null;
    domainUrl?: string | null;
    paymentUrl?: string | null;
}

export interface RegisterUserDto {
    firstName: string | null;
    lastName: string | null;
    paymentUrl: string | null;
    token: string | null;
    tokenExpires: string | null;
}



