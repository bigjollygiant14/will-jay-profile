"use client";

import React, { useState } from "react";
import Link from "next/link";
import StyledHamburgerButton from "../ui/Buttons/StyledHamburgerButton";
import Overlay from "../ui/Overlay/Overlay";
import GoombaBounce from "../GoombaDancing";

const NavigationMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Overlay className={`overlay z-[110] ${isOpen ? 'fixed' : 'hidden'}`} onClick={() => setIsOpen(false)} />
      <StyledHamburgerButton onClick={toggleMenu} aria-label="Toggle Navigation Menu" className="h-full d-flex items-center" />

      <div
        className={`fixed top-0 right-0 min-w-80 h-full bg-gray-800 text-white transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
        style={{ zIndex: 110 }}
      >
        <ul className="p-6 text-base">
          <li className="mb-2 pb-2 border-b border-gray-300">
            <Link className="w-full block" href="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="mb-2 pb-2 border-b border-gray-300">
            <Link className="w-full block" href="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
          </li>
          {/* <li>
            <Link href="/projects/demo" onClick={() => setIsOpen(false)}>Demo Pages</Link>
          </li> */}
          <li className="mb-2 pb-2 border-b border-gray-300">
            <Link className="w-full block" href="/projects/skill-builders" onClick={() => setIsOpen(false)}>Skill Builders</Link>
          </li>
          <li className="mb-2 pb-2 border-b border-gray-300">
            <Link className="w-full block" href="/projects/snippets" onClick={() => setIsOpen(false)}>Snippets</Link>
          </li>
          <li className="mb-2 pb-2 border-b border-gray-300">
            <Link className="w-full block" href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>

        <GoombaBounce />
      </div>
    </div>
  );
};

export default NavigationMenu;
