export interface IndividualRegister {
    firstName: string;
    lastName: string;
    userName:string;
    contactNo:string;
    email: string;
    password: string;
    confirmPassword?: string;
    provinceID?: number;
    cityID?: number;
    suburbID?: number;
    domainUrl?:string;
    track?:number;
    agreeTerms?: boolean;
}

export const individualRegisterInitialValues: IndividualRegister = {
    firstName: '',
    lastName: '',
    userName:"",
    email: '',
    contactNo:"",
    password: '',
    provinceID: undefined,
    cityID: undefined,
    suburbID: undefined,
    track:1,
    domainUrl:"2",
    agreeTerms: false,
};



export interface RegisterUserResponseDto {
    firstName: string | null;
    lastName: string | null;
    token: string | null;
    tokenExpires: string | null;
}



