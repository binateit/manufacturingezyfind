import { ReviewKeyType } from "@/core/constants/enum";
import { GET_REVIEW_LIST } from "@/core/graphql/queries/getRatingList";
import { ReviewItem } from "@/core/models/rating/ReviewItem";
import { useQuery } from "@apollo/client";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface ReviewWidgetProps {
    keyType: ReviewKeyType,
    key: number
    keyName?: string
}

export default function ReviewWidget({ keyType, key, keyName }: ReviewWidgetProps) {

    const { data: reviewData, loading } = useQuery(GET_REVIEW_LIST, {
        variables: {
            keyType,
            key,
        }
    });

    if (loading) return <div>Loading...</div>;

    const reviewList = reviewData?.getRatingList?.result || [];

    if (!reviewList.length) return null;
    return (
        <>
            <p className='mt-5 text-lg mb-5 font-semibold relative before:h-[2px] before:w-[50px] before:absolute before:left-0 before:bottom-0 before:bg-[var(--primary-color)]'>Reviews on {keyName}</p>
            {reviewList.map((review: ReviewItem, index: number) => (
                <div className='mt-5 pb-5 border-b-1 border-gray-300' key={index}>
                    <p className='text-primary uppercase text-lg font-semibold'>{review?.title}</p>
                    <p className='text-sm'>{review?.name}</p>
                    <div className='flex gap-1 my-3'>
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p className='text-sm'>{review?.review}
                    </p>
                </div>
            ))}
        </>
    )
}