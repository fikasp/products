import React from 'react';

export default function Header(){
  return (
    <header className="header">
      <div className="logo">
          ARW Shop
        {/* <img src="logo.png" alt="Logo" /> */}
      </div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
