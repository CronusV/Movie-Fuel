import React from 'react'
import { Card, Button, Image} from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';


interface commentProps {
    reply: boolean;
}
// const binary:boolean = true;

function replyCard() {
    return(
    <Card style={{backgroundColor:"rgb(255,144,139)"}} className='mb-4'>
        <Card.Header>
            <div className="d-flex align-items-center">
                <Image src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" 
                    alt='Profile picture' className='me-3 d-flex '
                    style={{width: 50, height: 50}} rounded
                />
                
                <div className='d-flex align-items-center justify-content-center'>
                    <p className='me-3' style={{fontSize:16, fontWeight:700}}>Other id</p>
                    <p className='me-3' style={{fontSize:15.5}}>{"uuid"}</p>
                    <p style={{fontSize:15.5}}>{"DateTime"}</p>
                </div>
            </div>
        </Card.Header>
        <Card.Body>
            <Card.Text style={{fontSize : 13}} className='text-start'>
            {"This is the comment"}
            </Card.Text>
        </Card.Body>
    </Card>);
}

function Comment({reply}: commentProps) {
    const token = useSelector((state: RootState) => state.auth.token); 
  return (
    <Card style={{width: "100%"}} className='text-dark mb-5'>
        {/* Card Header */}
        <Card.Header>
        </Card.Header>
        {/* This is the user section */}
        <Card.Body>
            {/* Create section for user info */}
            <div className="d-flex align-items-center">
                <Image src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" 
                    alt='Profile picture' className='me-3 d-flex '
                    style={{width: 50, height: 50}} rounded
                />
                
                <div className='d-flex align-items-center justify-content-center'>
                    <p className='me-3' style={{fontSize:16, fontWeight:700}}>Alex</p>
                    <p className='me-3' style={{fontSize:15.5}}>{"uuid"}</p>
                    <p style={{fontSize:15.5}}>{"DateTime"}</p>
                </div>
            </div>
        </Card.Body>

        {/* Comment */}
        <Card.Body className='mb-3 pt-0'>
            {reply ? replyCard() : null}
            <Card.Text style={{fontSize :14}} className='text-start'>
            {"This is the comment"}
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

export default Comment