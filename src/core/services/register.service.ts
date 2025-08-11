import { EMAIL_CHECK } from "@/core/graphql/queries/emailCheck";
import { initializeApollo } from "../../lib/apolloClient";
import { MOBILE_CHECK } from "@/core/graphql/queries/mobileCheck";
import { REGISTER_USER } from "@/core/graphql/queries/individual-register";
import { RegisterUserResponseDto, IndividualRegister } from "@/core/models/registration/individualRegister";
import { EmailCheckResponseDto } from "@/core/models/registration/emailCheckModel";
import { MobileCheckResponseDto } from "@/core/models/registration/mobileCheckModel";

const apolloClient = initializeApollo();

export async function emailChecker(email: string): Promise<EmailCheckResponseDto> {
    try {
        const { data } = await apolloClient.query({
            query: EMAIL_CHECK,
            variables: { email },
        });
        return data.emailCheck;
    } catch (error) {
        console.error("Email check failed:", error);
        throw error;
    }
}

export async function mobileChecker(mobile: string): Promise<MobileCheckResponseDto> {
    try {
        const { data } = await apolloClient.query({
            query: MOBILE_CHECK,
            variables: { mobile },
        });
        return data.mobileCheck;
    } catch (error) {
        console.error("Mobile check failed:", error);
        throw error;
    }
}

export async function registerUser(userData: IndividualRegister, platform: number): Promise<RegisterUserResponseDto> {
    try {
        const response = await apolloClient.mutate({
            mutation: REGISTER_USER,
            variables: {
                userDto: userData, platform,
            },
        });
        if (!response || !response.data) throw new Error('Cannot register')
        return response.data.registerUser.result;
    } catch (error) {
        console.error("User registration failed:", error);
        throw error;
    }
}