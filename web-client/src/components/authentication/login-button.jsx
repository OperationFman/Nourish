import React from "react";

const LoginButton = () => {
  return (
    <button
      className="login-button"
      onClick={console.log('Login clicked')}
    >
      Log In
    </button>
  );
};

export default LoginButton;