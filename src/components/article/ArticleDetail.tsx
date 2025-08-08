import Link from "next/link";
import { PostDetail } from "@/core/models/posts/postDetail";

interface ArticleDetailProps {
    article: PostDetail;
}

export default function ArticleDetail({ article }: ArticleDetailProps) {
    return (
        <div className="container mx-auto px-4 py-6">
            <div className="container">
                <div className='mt-10 mb-5'>
                    <Link href='/' className='text-primary'>Home</Link> / <Link href='/manufacturing/article'> Articles</Link> / <span className='text-gray-500'>{article?.title}</span>
                </div>
            </div>
            <div className="mt-10 lg:flex -mx-5 mb-10">

                <div className="p-5 border border-gray-300 card-shadow">

                    <h1 className="text-3xl font-bold text-red-800 mb-4">
                        {article.title}
                    </h1>

                    {article.description ? (
                        <div
                            className="custom-html-content"
                            dangerouslySetInnerHTML={{ __html: article.description }}
                        />
                    ) : (
                        <p className="text-gray-600">No description available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}