"use client";

import React, { useState } from "react";
import StyledHamburgerButton from "../ui/StyledHamburgerButton";

const NavigationMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Menu Icon */}
      <StyledHamburgerButton onClick={toggleMenu} aria-label="Toggle Navigation Menu" />
      {/* <button
        className="hamburger-menu p-4"
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button> */}

      {/* Sidebar Menu */}
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
