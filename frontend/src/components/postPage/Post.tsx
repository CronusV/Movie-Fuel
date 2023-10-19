import React from 'react'
import { Card, Button, Image} from 'react-bootstrap'
import { Review } from '../../types/Review'
// import 'bootstrap/dist/css/bootstrap.min.css';
// no movie?
function scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
}
function Post({PostID, Author, Likes, Movie, Comment, Title, DateTime}: Review) {

  return (
    <Card style={{width: "100%"}} className='text-dark mb-4 '>
        {/* Card Header */}
        <Card.Header>
            <Card.Title as="h1">{Title}</Card.Title>
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <div className='me-3'>Replies: 10</div>
                    <div>Particpiants: 3</div>
                </div>
                <Button variant='primary' onClick={scrollToBottom}>Go to most recent!</Button>
            </div>
        </Card.Header>
        {/* This is the user section */}
        <Card.Body>
            {/* Create section for user info */}
            <div className="d-flex align-items-center">
                <Image src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" 
                    alt='Profile picture' className='me-3 d-flex '
                    style={{width: 60, height: 60}} rounded
                />
                
                <div className='d-flex align-items-center justify-content-center' style={{fontSize:24}}>
                    <p className='me-3' style={{fontSize:36}}>{Author}</p>
                    <p className='me-3'>{PostID}</p>
                    <p>{DateTime}</p>
                </div>
            </div>
        </Card.Body>

        {/* Comment */}
        <Card.Body className='mb-3 pt-0'>
            <Card.Text style={{fontSize : 30}} className='text-start'>
            {Comment}
            </Card.Text>
        </Card.Body>

            {/* Footer */}
            <Card.Footer className='d-flex justify-content-start'>
                <Button variant='primary' className='me-3'>Reply</Button>
                <Button variant='secondary'>Likes {Likes}</Button>
            </Card.Footer>
        </Card>
    )
}

export default Post