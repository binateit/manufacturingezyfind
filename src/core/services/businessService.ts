import { initializeApollo } from "@/lib/apolloClient";
import { CustomerEnquiryInputType, CustomerEnquiryResponse } from "../models/customerEnquiry/customerEnquiry";
import { ADD_CUSTOMER_ENQUIRY } from "../graphql/mutations/addCustomerEnquiry";



class BusinessService {
    private client = initializeApollo();

    async addCustomerEnquiry(customerEnquiry: CustomerEnquiryInputType): Promise<CustomerEnquiryResponse> {
        try {
            const response = await this.client.mutate({
                mutation: ADD_CUSTOMER_ENQUIRY,
                variables: { customerEnquiry }
            })
            if (!response || !response.data) throw new Error('Error While Submitting')
            return response?.data?.addCustomerEnquiry
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}

export const businessService = new BusinessService();