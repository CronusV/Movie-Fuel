import React, { useState } from 'react';
import './user.css'
function User() {
    const [state, setState] = useState({
        para: '',
        displaytext: 'This my default about me section',
        isInputVisible: false, // Track the visibility of the input element
        email: 'ringo@gmail.com',
        favorites: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    });


    function changeAbout(event) {
        setState({ ...state, para: event.target.value });
    }

    function handleButton() {
        // Toggle the visibility of the input element
        setState({ ...state, displaytext: state.para, isInputVisible: !state.isInputVisible });
    }

    return (
        <>


            <div id='profile-picture'>

                <img src='logo.svg' alt='profile picture for user' />
            </div>


            <div className='about-container'>
                <h1>About me

                    {state.isInputVisible ? ( // Conditionally render the input based on state
                        <div>
                            <input
                                placeholder="enter a new paragraph for about"
                                onChange={changeAbout}
                                value={state.para}
                            />
                            <button onClick={handleButton}>update</button>
                        </div>
                    ) : (
                        <button onClick={handleButton}>Edit</button>
                    )}
                </h1>
                <p>{state.displaytext}</p>
            </div>


            <div className='email-container'>
                <h1>Email</h1>
                <p>{state.email}</p>
            </div>

            <div>
                <h1 className='favorite-container'>Favorites</h1>
                <ul id='favorite-container'>
                    {state.favorites.map(id => (<li key={id}>{id}</li>))}

                </ul>
            </div>
        </>
    );
}

export default User;
