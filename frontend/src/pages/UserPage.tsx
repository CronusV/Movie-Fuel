import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setUser } from '../state/userSlice'; // Import your user slice actions
import { Card, Button, Image, Accordion, ListGroup } from 'react-bootstrap';
import { RootState } from '../state/store';
import './user.css'
import axios from 'axios';
function UserPage() {
    const user = useSelector((state: RootState) => state.user);
    const auth = useSelector((state: RootState) => state.auth);

    const dispatch = useDispatch();

    const apiUrl = 'http://localhost:4000/user/profile';
    if (!auth.token && user.isLoaded && user.favorites) {
        axios.put(`http://localhost:4000/user/profile/About/${user.username}`, { about: user.editedText })
        axios.patch(`http://localhost:4000/user/profile/Favorites/${user.username}`, { favorites: user.favorites })



    }

    const loadFavoriteItems = async (favs: string[]) => {

        const imageUrls = await Promise.all(
            favs.map(async (item) => {
                // Use axios.get to perform the GET request
                const response = await axios.get(`http://127.0.0.1:4000/MovieFuel/search/byID?idnumber=${item}`, {
                    withCredentials: false,
                });
                return response.data; // Extract data from the Axios response
            })
        );

        dispatch(setUser({ favoriteItems: imageUrls }));
    };


    // Add isLoaded state
    //todo add isloaded to store
    useEffect(() => {
        if (!user.isLoaded) { // Check if data has already been loaded
            const usernameToRetrieve = 'danny007';

            fetch(`${apiUrl}/${usernameToRetrieve}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => {
                    dispatch(setUser(data));
                    dispatch(setUser({ isLoaded: true }));

                    if (data.favorites) {
                        loadFavoriteItems(data.favorites);
                    }


                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }, [dispatch]); // Add isLoaded as a dependency

    function handleAboutMeChange(event: any) {
        dispatch(setUser({ ...user, editedText: event.target.textContent }));
    }

    function handleEditClick() {
        dispatch(setUser({ ...user, isEditing: true, editedText: user.aboutme }));
    }

    function handleCancelClick() {
        dispatch(setUser({ ...user, isEditing: false, editedText: user.aboutme }));
    }

    function handleSaveClick() {
        dispatch(setUser({ ...user, isEditing: false, AboutMe: user.editedText }));

    }
    function handleDelete(id: number) {

        dispatch({
            type: 'user/removeFromFavorites',
            payload: {
                id: (id.toString())
            },
        })
    }
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <p id='title'>Your Profile Page</p>
                <div id="profile-picture">
                    <Image id="profile-circle" src={user.profilepicture} alt="profile for user" roundedCircle />
                </div>
                <span id="username-box"></span>
            </div>

            <div id="container">
                <Card>
                    {/* About Me Section */}
                    <Card>
                        <Card.Header>
                            About Me
                            {user.isEditing ? (
                                <>
                                    <Button onClick={handleSaveClick}>Save</Button>
                                    <Button onClick={handleCancelClick}>Cancel</Button>
                                </>
                            ) : (
                                <Button onClick={handleEditClick}>Edit</Button>
                            )}
                        </Card.Header>
                        <Card.Body>
                            <p
                                id="editableText"
                                contentEditable={user.isEditing}
                                onBlur={handleAboutMeChange}
                            >
                                {user.isEditing ? user.editedText : user.aboutme}
                            </p>
                        </Card.Body>
                    </Card>

                    {/* Email Section */}
                    <Card>
                        <Card.Header>Email</Card.Header>
                        <Card.Body>{user.email}</Card.Body>
                    </Card>

                    {/* Favorites Section */}
                    <Card>
                        <Card.Header>Favorites</Card.Header>
                        <ListGroup>


                            {user.favoriteItems && user.favoriteItems.length > 0 ? (
                                user.favoriteItems.map((item: any, index: any) => (

                                    <ListGroup.Item key={index}>
                                        <p>{item.title}</p>
                                        <img id="profile-circle" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="Favorite" />
                                        <p>{item.overview}</p>
                                        <Button onClick={() => handleDelete(item.id)} >delete</Button>
                                    </ListGroup.Item>
                                ))
                            ) : (
                                <ListGroup.Item>No favorite items available</ListGroup.Item>
                            )}
                        </ListGroup>
                    </Card>
                </Card>
            </div>
        </>
    );
}

export default UserPage;


