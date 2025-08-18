
import { initializeApollo } from "@/lib/apolloClient";
import { PostReplyInputType, PostReplyResponse } from "../models/posts/postReplyInputType";
import { POST_REPLY } from "../graphql/mutations/postJob";



class JobService {
    private client = initializeApollo();

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

export const jobService = new JobService();