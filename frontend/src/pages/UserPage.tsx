import React, { useState, useEffect } from 'react';
import '../user.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function UserPage() {
    const [state, setState] = useState({
        AboutMe: 'This is my default about me section',
        editedText: '', // Track edited text
        isEditing: false, // Track the editing state
        UserName: "david007",
        Email: 'ringo@gmail.com',
        Favorites: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        ProfilePicture: '',

    });
    const apiUrl = 'http://localhost:9000/user/profile';
    useEffect(() => {
        // Define the username you want to retrieve
        const usernameToRetrieve = 'danny007';

        // Make a GET request to the API endpoint with the username as a parameter
        fetch(`http://localhost:9000/user/profile/${usernameToRetrieve}`)
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

    function handleAboutMeChange(event: any) {
        setState({ ...state, editedText: event.target.textContent });
    }

    function handleEditClick() {
        setState({ ...state, isEditing: true, editedText: state.AboutMe });
    }

    function handleCancelClick() {
        setState({ ...state, isEditing: false, editedText: state.AboutMe });
    }

    function handleSaveClick() {
        setState({ ...state, isEditing: false, AboutMe: state.editedText });
    }

    return (
        <div className='container'>

            <img src='logo-color.png' alt='Logo' id='logo' />
            <div >

                <div id='profile-picture' className="mx-auto">

                    <img id='profile-circle' src={state.ProfilePicture} alt='profile for user' />
                </div>
                <div id='user-box'>
                    <span id='user-box-content'>
                        <img src='User.png' />{state.UserName}
                    </span>
                </div>
            </div>
            <div className="accordion" id="accordionPanelsStayOpenExample">


                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <li id='accordions' className="list-group-item" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            About me
                            {state.isEditing ? ( // Conditionally render Edit, Save, and Cancel buttons while editing
                                <>
                                    <button onClick={handleSaveClick}>Save</button>
                                    <button onClick={handleCancelClick}>Cancel</button>
                                </>
                            ) : (
                                <button id="edit-button" onClick={handleEditClick}>Edit</button>
                            )}
                        </li>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body">
                            <p
                                id="editableText"
                                contentEditable={state.isEditing} // Enable editing only when isEditing is true
                                onBlur={handleAboutMeChange}
                            >
                                {state.isEditing ? state.editedText : state.AboutMe}
                            </p>

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <li id='accordions' className="list-group-item" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Email
                        </li>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" >
                        <div className="accordion-body">
                            <p>{state.Email}</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button id='accordions' className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Favorites
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body">
                            <ul id='favorite-container'>
                                {state.Favorites.map(id => (<li key={id}><img id="poster" src='https://image.tmdb.org/t/p/original/mINJaa34MtknCYl5AjtNJzWj8cD.jpg' alt="movie poster" />{id}</li>))}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default UserPage