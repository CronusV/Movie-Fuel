import React, { useEffect } from 'react'
import Post from '../components/postPage/Post'
import SideBarMovie from '../components/postPage/SideBarMovie'
import Comment from '../components/postPage/Comment'
import { Col, Container, Row } from 'react-bootstrap'
import { useGetReviewAgainMutation, useGetReviewQuery } from '../state/reviews/reviewsApiSlice'
import { Review } from '../types/Review'
import { useGetCommentsFromPostMutation } from '../state/replies/repliesApiSlice'
import { CommentType } from '../types/Comment'
// const testPost: Review = {
//     PostID: "1",
//     Author: "alex",
//     Comment: "This is what I think about the movie",
//     Title: "Its alright",
//     DateTime: "2023-10-12T03:25:46.169Z",
//     Likes: 10,
//     Movie: 123,
// }

const imbdMovie = {imbd: "IMBD value"}

type responsePost = {
  message: string,
  data: {
      data: {
          Items: Review[]
      }
  },
  Count: number,
}

type responseComments = {
  message: string,
  data: {
    data: CommentType[]
  }
}

function PostTest({...props}: Review) {
//  const {data, error, isLoading} = useGetReviewQuery(props.PostID);
 const [refetchReview] = useGetReviewAgainMutation()
 const [review, setReview] = React.useState<Review>(props);
 const [fetchComments] = useGetCommentsFromPostMutation();
 const [comments, setComments] = React.useState<CommentType[]>([]);

 useEffect(() => {
  handleFetch()
  handleFetchComments()
 },[]);

 const handleFetch = async () => {
  // Might need to change this for react params for resource
  const data = await refetchReview(props.PostID) as responsePost;
  // console.log(data.data.data.Items[0]);
  // console.log(JSON.stringify(data))
  setReview(data.data.data.Items[0]);
 }
 const handleFetchComments = async () => {
  const data = await fetchComments(props.PostID) as responseComments;
  
  console.log(data);
  console.log("this is the comments",JSON.stringify(data.data.data))
  let regularComments = Array.from(data.data.data).sort((a, b) => new Date(a.DateTime).getTime() - new Date(b.DateTime).getTime());
  // Put comments from oldest to newest
  setComments(regularComments);
 }
//  console.log(data);
  return (
    <Container>
      <Row>
        <Col md={8}>
          <Post {...props} replies={comments.length} comments={comments} setComments={setComments}></Post>
          {comments.length > 0 ? comments.map((comment: CommentType) => (<Comment {...comment} comments={comments} setComments={setComments}/>)) : <div>No comments</div>}
        </Col>
        <Col md={4}>
          <SideBarMovie {...imbdMovie}/>
        </Col>
      </Row>
    </Container>
  )
}



export default PostTest