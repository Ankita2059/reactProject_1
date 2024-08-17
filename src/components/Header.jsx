import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container">
      <header className="header">
        <div className="left-section">
          <img src="logo.png" alt="Logo" className="logo" />
          <nav>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </nav>
        </div>
        <div className="right-section">
          <button className="btn-outline">Sign In</button>
          <button className="btn-primary">Log In</button>
        </div>
      </header>
      </div>
    </div>
  );
};

export default Header;
