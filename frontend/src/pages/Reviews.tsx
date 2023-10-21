import React, { useEffect } from 'react'
import { useGetReviewsQuery, useGetReviewsAgainMutation } from '../state/reviews/reviewsApiSlice';
import { Review } from '../types/Review';

function Reviews() {
    const [refetchReviews] = useGetReviewsAgainMutation();
    useEffect(() => { 
        handleFetch();
    },[]);

    const [reviews, setReviews] = React.useState<Review[]>([]);
    type response = {
        message: string,
        data: {
            data: {
                Items: Review[]
            }
        }
    }

    const handleFetch = async () => {
        const dataGot= await refetchReviews({}) as response;
        const datab : Review[] = dataGot.data.data.Items;

        setReviews(datab);

    };
    

    // console.log(data?.data?.Items);
    // const Reviews: Review[] = data?.Items;
    // const reviewNodes = Reviews.map((review: Review) => (<div key={review.PostID}>{review.Title}</div>))
    return (
        <div>
            <button onClick={handleFetch}>Refetch Reviews</button>
  
            {/* {reviews.map((review: Review) => (<div key={review.PostID}>{review.Title}</div>))} */}
            {reviews.map((review: Review) => (<div key={review.PostID}>{review.Title}</div>))}
        </div>
    );
}


export default Reviews