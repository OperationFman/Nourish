import React from "react";
import LoginButton from "./login-button";
import LogoutButton from "./logout-button";
import './authentication.css';

const AuthenticationButton = props => {
    const isAuthenticated = true;

    return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;