import { initializeApollo } from "@/lib/apolloClient";
import { CustomerEnquiryInputType, CustomerEnquiryResponse } from "../models/customerEnquiry/customerEnquiry";
import { ADD_CUSTOMER_ENQUIRY } from "../graphql/mutations/addCustomerEnquiry";
import { PostReplyInputType } from "../graphql/generated/graphql";
import { POST_REPLY } from "../graphql/mutations/postJob";
import { PostReplyResponse } from "../models/posts/postReplyInputType";



class CustomerEnquiryService {
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

    async applyJob(post: PostReplyInputType): Promise<PostReplyResponse> {
        try {
            const response = await this.client.mutate({
                mutation: POST_REPLY,
                variables: { post }
            })
            if (!response || !response.data) throw new Error('Error While Submitting')
            return response?.data?.postReply
        } catch (error) {
            throw new Error((error as Error).message)
        }
    }
}

export const customerEnquiryService = new CustomerEnquiryService();