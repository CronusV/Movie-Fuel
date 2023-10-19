import React from 'react'
import { Card, Button, Image} from 'react-bootstrap'
import { PostInterface } from './postInterface'
// import 'bootstrap/dist/css/bootstrap.min.css';
// no movie?

function Post({postID, author, likedBy, likedCount, movie, comment, title, dateTime}: PostInterface) {

  return (
    <Card style={{width: "100%"}} className='text-dark mb-4 '>
        {/* Card Header */}
        <Card.Header>
            <Card.Title as="h1">{title}</Card.Title>
            <div className="d-flex justify-content-between">
                <div className="d-flex">
                    <div className='me-3'>Replies: 10</div>
                    <div>Particpiants: 3</div>
                </div>
                <Button variant='primary'>Go to most recent!</Button>
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
                    <p className='me-3' style={{fontSize:36}}>{author}</p>
                    <p className='me-3'>{postID}</p>
                    <p>{dateTime}</p>
                </div>
            </div>
        </Card.Body>

        {/* Comment */}
        <Card.Body className='mb-3 pt-0'>
            <Card.Text style={{fontSize : 30}} className='text-start'>
            {comment}
            </Card.Text>
        </Card.Body>

            {/* Footer */}
            <Card.Footer className='d-flex justify-content-start'>
                <Button variant='primary' className='me-3'>Reply</Button>
                <Button variant='secondary'>Like</Button>
            </Card.Footer>
        </Card>
    )
}

export default Post