import React from "react";

const LogoutButton = () => {
  return (
    <button
      className="auth-button logout-button"
      onClick={console.log('Logout clicked')}
    >
    Logged In: Franklin Moon
    </button>
  );
};

export default LogoutButton;