"use client";

import React, { useState } from "react";
import StyledHamburgerButton from "../ui/Buttons/StyledHamburgerButton";
import Overlay from "../ui/Overlay/Overlay";

const NavigationMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Overlay className={`overlay ${isOpen ? 'fixed' : 'hidden'}`} onClick={() => setIsOpen(false)} />
      <StyledHamburgerButton onClick={toggleMenu} aria-label="Toggle Navigation Menu" />

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
        style={{ zIndex: 100 }}
      >
        <ul className="space-y-4 p-6">
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationMenu;
