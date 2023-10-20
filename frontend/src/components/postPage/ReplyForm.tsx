import React, { FormEvent, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Review } from '../../types/Review'

function ReplyForm({PostID, Author, Likes, Movie, Comment, Title, DateTime}: Review) {
    const [replyText, setReplyText] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReplyText(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault();
        console.log(e)
    }

    return (
    // If we have a title in the response then that means its a reply to a review
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Reply</Form.Label>
        <Form.Control as="textarea" rows={3} value={replyText} onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
    )
}

export default ReplyForm