import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './guest.css'


import { Card, Button, Image, Accordion, ListGroup, } from 'react-bootstrap'

function GuestProfileView() {
    const [state, setState] = useState({
        AboutMe: 'This is my default about me section',
        editedText: '', // Track edited text
        isEditing: false, // Track the editing state
        isFavoritesOpen: false,
        Favorites: ['movie 1', 'movie 2', 'movie 3', 'movie 4', 'movie 5', 'movie 6', 'movie 7', 'movie 8', 'movie 9'],
        ProfilePicture: 'https://static.wikia.nocookie.net/characterprofile/images/c/c8/BotW_Link.png',

    });
    const { Otherusername } = useParams();
    const apiUrl = 'http://localhost:9000/user/profile';
    useEffect(() => {
        // Define the username you want to retrieve


        // Make a GET request to the API endpoint with the username as a parameter
        fetch(`${apiUrl}/${Otherusername}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setState(data); // Update the state with the fetched user data
            })
            .catch(error => {
                console.error('Error:', error); // Handle and display the error to the user
            });
    }, []);
    const toggleFavoritesAccordion = () => {
        setState({ ...state, isFavoritesOpen: !state.isFavoritesOpen });
    };
    return (
        <>

            <div className="d-flex flex-column justify-content-center align-items-center">

                <div id="profile-picture">

                    <Image
                        id="profile-circle"
                        src={state.ProfilePicture}
                        alt="profile for user"
                        roundedCircle
                    />
                </div>
                <span id='username-box'>{Otherusername}</span>
            </div>

            <div id="container">
                <Card>
                    {/* About Me Section */}
                    <Card>

                        <Card.Header>{Otherusername}'s About Me </Card.Header>
                        <Card.Body>
                            {/* About Me content */}
                            <p>
                                {state.AboutMe}
                            </p>

                        </Card.Body>
                    </Card>



                    {/* Favorites Section */}
                    <Accordion activeKey={state.isFavoritesOpen ? 'favorites' : undefined}>
                        <Card>
                            <Accordion.Item eventKey="favorites">
                                <Card.Header onClick={toggleFavoritesAccordion} style={{ cursor: 'pointer' }}>
                                    {Otherusername}'s Favorites
                                </Card.Header>
                                <Accordion.Body>
                                    {/* List of favorites */}
                                    <ListGroup>
                                        {state.Favorites.map((item: any, index: any) => (
                                            <ListGroup.Item key={index}>
                                                {item}
                                                <img src="https://static.wikia.nocookie.net/characterprofile/images/c/c8/BotW_Link.png" alt="Favorite" />
                                                maybe the movie description
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Card>
                    </Accordion>

                </Card>
            </div >
        </>
    )
}

export default GuestProfileView


