import { initializeApollo } from "@/lib/apolloClient";
import { EMAIL_CHECK } from "../graphql/queries/checkEmailExists";
import { COMPANY_CHECK } from "../graphql/queries/checkCompanyNameExists";
import { FORGOT_PASSWORD } from "../graphql/queries/forgotPasswordQuery";
import { ForgetPasswordRequest } from "../models/auth/forgetPasswordRequest";
import { CONFIRM_EMAIL } from "../graphql/queries/confirmEmailQuery";
import { REGISTER_USER } from "../graphql/mutations/registerUserQuery";
import { RegisterUserResult } from "../models/auth/registerUserResult";
import { GET_SESSION } from "../graphql/queries/getSessionQuery";
import { SessionResult } from "../models/auth/sessionResultModel";
import { RegisterBusinessInput } from "../models/auth/registerBusinessInput";
import { REGISTER_BUSINESS } from "../graphql/mutations/registerBusinessQuery";
import { RegisterBusinessResult } from "../models/auth/registerBusinessResult";
import { MOBILE_CHECK } from "../graphql/queries/checkMobileExists";
import { UserRegistrationInput } from "../models/auth/userRegistrationInput";
import { LoginResult } from "../models/auth/loginResultModel";
import { SSO_LOGIN } from "../graphql/queries/SSOLoginQuery";
import { ItemRequestInputType } from "../models/auth/itemRequestInput";
import { ItemRequestResult } from "../models/auth/itemRequestResult";
import { ITEM_REQUEST } from "../graphql/mutations/itemRequestQuery";


// Initialize Apollo Client
const apolloClient = initializeApollo();

class AuthService {
    // Check if the email is available
    async emailCheck(email: string | null): Promise<boolean> {
        try {
            const { data } = await apolloClient.query({
                query: EMAIL_CHECK,
                variables: { email },
            });

            // Return true if the success field is true, otherwise false
            return data?.emailCheck?.success ?? false;
        } catch (err) {
            // Log the error (optional) or handle it appropriately
            console.error('Email check failed:', err);
            return false; // Return false on failure
        }
    }

    async mobileCheck(mobile: string | null): Promise<boolean> {
        try {
            const { data } = await apolloClient.query({
                query: MOBILE_CHECK,
                variables: { mobile },
            });

            // Return true if the success field is true, otherwise false
            return data?.mobileCheck?.success ?? false;
        } catch (err) {
            // Log the error (optional) or handle it appropriately
            console.error('Mobile check failed:', err);
            return false; // Return false on failure
        }
    }

    async companyCheck(name: string | null): Promise<boolean> {
        try {
            const { data } = await apolloClient.query({
                query: COMPANY_CHECK,
                variables: { name },
            });

            // Return true if the success field is true, otherwise false
            return data?.companyCheck?.success ?? false;
        } catch (err) {
            // Log the error (optional) or handle it appropriately
            console.error('Company check failed:', err);
            return false; // Return false on failure
        }
    }

    async forgetPassword({ email, domainUrl }: ForgetPasswordRequest): Promise<boolean> {
        try {
            const { data } = await apolloClient.query({
                query: FORGOT_PASSWORD,
                variables: { email, domainUrl },
            });

            // Return true if the success field is true, otherwise false
            return data?.forgetPassword?.success ?? false;
        } catch (err) {
            // Log the error (optional) or handle it appropriately
            console.error('Forget password failed:', err);
            return false; // Return false on failure
        }
    }

    // Optimized confirmEmail function
    async confirmEmail(id: string | null): Promise<boolean> {
        try {
            const { data } = await apolloClient.query({
                query: CONFIRM_EMAIL,
                variables: { id },
            });

            // Return true if the success field is true, otherwise false
            return data?.confirmEmail?.success ?? false;
        } catch (err) {
            // Log the error (optional) or handle it appropriately
            console.error('Email confirmation failed:', err);
            return false; // Return false on failure
        }
    }

    // Optimized registerUser function
    async registerUser(
        userDto: UserRegistrationInput, // Now using the optimized registration input model
        platform: number
    ): Promise<RegisterUserResult | null> { // Return the result or null if it fails
        try {
            const { data } = await apolloClient.mutate({
                mutation: REGISTER_USER,
                variables: { userDto , platform },
            })            
            // Return the result with the necessary fields if registration is successful
            if (data?.registerUser?.success) {
                const result = data.registerUser.result;
                return {
                    firstName: result.firstName,
                    lastName: result.lastName,
                    token: result.token,
                    tokenExpires: result.tokenExpires,
                };
            }
            return null; // Return null if registration failed
        } catch (err) {
            console.error("Registration failed:", err);
            return null; // Return null on error
        }
    }

    // Optimized registerBusiness function
    async registerBusiness(userDto: RegisterBusinessInput): Promise<RegisterBusinessResult | null> {
        try {
            const { data } = await apolloClient.mutate({
                mutation: REGISTER_BUSINESS,
                variables: { userDto },
            });

            // Check if registration was successful and return the necessary result
            if (data?.registerBusiness?.success) {
                const result = data.registerBusiness.result;
                return {
                    firstName: result.firstName,
                    lastName: result.lastName,
                    paymentUrl: result.paymentUrl,
                    token: result.token,
                    tokenExpires: result.tokenExpires,
                    streetAddress: result.streetAddress,
                    userProfileImage: result.userProfileImage,
                    longitude: result.longitude,
                    latitude: result.latitude,
                };
            }
            return null; // Return null if registration failed
        } catch (err) {
            console.error('Registration failed:', err);
            return null; // Return null on error
        }
    }

    async getSession(id: number | null): Promise<SessionResult | null> {
        try {
            const { data } = await apolloClient.query({
                query: GET_SESSION,
                variables: { id },
            });

            // Return the result if session is found
            if (data?.getSession?.result) {
                return data.getSession.result;
            }
            return null; // Return null if no session data is found
        } catch (err) {
            console.error('Failed to get session:', err);
            return null; // Return null if an error occurs
        }
    }

    async login(token: string): Promise<LoginResult | null> {
        try {
            const { data, errors } = await apolloClient.query({
                query: SSO_LOGIN,
                fetchPolicy: 'no-cache',
                // Provide explicit Authorization and signal the auth link to skip auto Bearer injection
                context: {
                    headers: {
                        Authorization: token,
                    },
                    skipAuth: true,
                },
            });

            // Handle GraphQL errors explicitly if any exist
            if (errors) {
                throw new Error(errors.map((e) => e.message).join(", "));
            }

            // Ensure response contains sSOLogin data
            if (!data?.sSOLogin) {
                throw new Error("Invalid response: Missing sSOLogin data");
            }

            return data.sSOLogin.result;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
            console.error("SSO Login Error:", errorMessage); // Optionally log the error for debugging
            throw new Error(errorMessage);
        }
    }

    async postItemRequest(input: ItemRequestInputType, files?: File[] | null): Promise<ItemRequestResult> {
        try {
            const response = await apolloClient.mutate({
                mutation: ITEM_REQUEST,
                variables: { mstItemRequest:input, files },
            })
            if (!response || !response.data) throw new Error("Cannot register")
            return response.data.postMstItemRequest
        } catch (err) {
            throw err
        }
    }
}

export const authService = new AuthService();
