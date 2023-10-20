import React, { useEffect } from 'react'
import { useGetReviewsQuery, useGetReviewsAgainMutation } from '../state/reviews/reviewsApiSlice';
import { Review } from '../types/Review';

function ReviewHome() {
    // This loads the reviews from the database
    // const { data, error, isLoading } = useGetReviewsQuery({});
    // This fetches the reviews again! Should be used when a new review is posted
    const [refetchReviews] = useGetReviewsAgainMutation();
    useEffect(() => { 
        handleRefetch();
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

    const handleRefetch = async () => {
        const dataGot= await refetchReviews({}) as response;
        const datab : Review[] = dataGot.data.data.Items;
        // datab.forEach((review: Review) => { setReviews([...reviews, review])});
        setReviews(datab);
        // console.log(`this is the datagot ${JSON.stringify(dataGot)}`);
        // console.log(datab)
        // console.log(`this is the reviews ${JSON.stringify(reviews)}`)
      
    };
    

    // console.log(data?.data?.Items);
    // const Reviews: Review[] = data?.Items;
    // const reviewNodes = Reviews.map((review: Review) => (<div key={review.PostID}>{review.Title}</div>))
    return (
        <div>
            <button onClick={handleRefetch}>Refetch Reviews</button>
            {/* <button onClick={handleRefetch}>Refetch Reviews</button>
            {isLoading ? (
                <>
                handleRefetch()
                <div>Loading...</div>
                </>
                
            ) : error ? (
                <div>Error: {"Something went wrong"}</div>
            ) : (
                <div>{reviews.map((review: Review) => (<div key={review.PostID}>{review.Title}</div>))}</div>
                // <div> Hello</div>
            )} */}
            {reviews.map((review: Review) => (<div key={review.PostID}>{review.Title}</div>))}
        </div>
    );
}


export default ReviewHome