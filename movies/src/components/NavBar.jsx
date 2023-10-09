import React from 'react'
import './NavBar.css'
function NavBar() {
    return (
        <div>
            <div class="navbar">

                <Link to="/" class="nav-link active">Home</Link>

                <Link to="/reviews" class="nav-link">Reviews</Link>

                <Link to="/profile" class="nav-link">Profile</Link>

            </div>

        </div>
    )
}

export default NavBar