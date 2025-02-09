"use client";

import React, { useState } from "react";
import Link from "next/link";
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
      <StyledHamburgerButton onClick={toggleMenu} aria-label="Toggle Navigation Menu" className="h-full d-flex items-center" />

      <div
        className={`fixed top-0 right-0 w-128 h-full bg-gray-800 text-white transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
        style={{ zIndex: 100 }}
      >
        <ul className="space-y-4 p-6 text-base">
          <li>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
          </li>
          <li>
            <Link href="/projects/demo" onClick={() => setIsOpen(false)}>Demo Pages</Link>
          </li>
          <li>
            <Link href="/projects/code-challenge" onClick={() => setIsOpen(false)}>Code Challenges</Link>
          </li>
          <li>
            <Link href="/projects/snippets" onClick={() => setIsOpen(false)}>Snippets</Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavigationMenu;
