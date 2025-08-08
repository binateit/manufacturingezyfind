import { RatingKeyType } from "@/core/constants/enum";
import { GET_RATING_SCORE_LIST } from "@/core/graphql/queries/getRatingScore";
import { RatingScoreItem } from "@/core/models/rating/RatingScoreItem";
import { useQuery } from "@apollo/client";


interface RatingWidgetProps {
    keyType: RatingKeyType,
    key: number
}

export default function RatingWidget({ keyType, key }: RatingWidgetProps) {

    const { data: ratingData, loading } = useQuery(GET_RATING_SCORE_LIST, {
        variables: {
            keyType,
            key,
            page: 1,
            size: 10
        }
    });

    if (loading) return <div>Loading...</div>;

    const ratingList = ratingData?.getMstRatingScoreList?.result || [];

    return (
        <>
            <div className='mt-10 bg-primary text-white py-3 px-4 text-lg font-semibold'>
                Rating
            </div>
            <div className='p-4 border border-gray-300'>
                {ratingList.map((rating: RatingScoreItem, index: number) => (
                    <div key={`${rating.ratingScorePercent}-${index}`}>
                        <p className='text-sm mb-1'>{rating?.ratingScoreName}</p>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 mb-2">
                            <div className="bg-primary flex justify-center text-red-400 text-sm" style={{ width: `${rating?.ratingScorePercent}` }}>{rating?.ratingScorePercent}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}