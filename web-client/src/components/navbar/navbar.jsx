import React, { useState } from 'react';
import './navbar.css';
import AuthenticationButton from './authentication/authentication-button';

const Navbar = props => {
    return ( 
        <div className="header">
            <h2>Nourish</h2>
            <AuthenticationButton />
        </div>
    );
};
 
export default Navbar;