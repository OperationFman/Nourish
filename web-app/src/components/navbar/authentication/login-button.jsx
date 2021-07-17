import React from "react";

const LoginButton = () => {
  return (
    <button
      className="auth-button"
      onClick={console.log('Login clicked')}
    >
    Log In
    </button>
  );
};

export default LoginButton;