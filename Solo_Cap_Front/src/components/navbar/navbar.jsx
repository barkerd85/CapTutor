import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'



function NavBar(){
    return (
        <nav>
            <ul>

                <Link  to='/flashcards'>
                    <li> Logins </li>
                </Link>

            </ul>
            </nav>
    );
}

export default NavBar;