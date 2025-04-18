import React from "react";
import "./LoadingScreen.css"; // For styling

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <img
        src="/logo.png" // Replace with the path to your logo
        alt="Company Logo"
        className="loading-logo"
      />
    </div>
  );
};

export default LoadingScreen;
