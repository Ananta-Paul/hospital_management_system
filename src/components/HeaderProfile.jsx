// src/components/Header.jsx
import React from 'react';
import Image from "next/image";

const Header = () => (
    <header className="header-container">
     <div className="logo-container">
      <Image
        width={60}
        height={60}
        src="/LOGO.png"
        alt="Apollo Hospital Logo"
        className="logo-image"
      />
      <span className="hospital-name">SANDHYA NURSING HOME & DIAGNOSTIC CENTRE</span>
    </div>
  </header>
);

export default Header;
