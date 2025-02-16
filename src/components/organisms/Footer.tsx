import React from "react";
import Link from "next/link";

const year = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="p-6 text-center text-white bg-gray-800">
      <Link href="/resume" className="mx-4 hover:underline">
        Resume
      </Link>
      <Link href="/contact" className="mx-4 hover:underline">
        Contact
      </Link>
      <Link href="https://github.com/bigjollygiant14" className="mx-4 hover:underline" target="_blank" rel="noopener noreferrer">
        GitHub
      </Link>

      <p className="text-xs mt-4">&copy; <span>{ year }</span> Will Jay. All rights reserved.</p>
    </footer>
  );
};

export default Footer;



