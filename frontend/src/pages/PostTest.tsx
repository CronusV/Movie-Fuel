import React from 'react'
import Post from '../components/postPage/Post'
import { PostInterface } from '../components/postPage/postInterface'
import SideBarMovie from '../components/postPage/SideBarMovie'
import Comment from '../components/postPage/Comment'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Review } from '../types/Review'
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


function PostTest({...props}: Review) {
 
  return (
    // <>
    // {/* <h1>Test</h1> */}
    // {/* <Post {...testPost}></Post> */}
    // {/* <SideBarMovie {...imbdMovie}/> */}
    // {/* <Comment reply={true} /> */}

    <Container>
      <Row>
        <Col md={8}>
          <Post {...props}></Post>
          {/* This is where all comments will go */}
          <Comment reply={false} />
          <Comment reply={true} />
          <Comment reply={false} />
          <Comment reply={false} />
        
        </Col>
        <Col md={4}>
          <SideBarMovie {...imbdMovie}/>
        </Col>
      </Row>
    </Container>
  )
}



export default PostTest