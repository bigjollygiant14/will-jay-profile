import React, { ButtonHTMLAttributes } from 'react';
import Button from "./Button";

interface HamburgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ children, ...rest }) => {
  const buttonClasses = `text-white p-4`;

  return (
    <Button className={buttonClasses} {...rest}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#fff" 
          strokeWidth="2" 
          d="M4 6H20M4 12H20M4 18H20" 
          fill="none"
        />
      </svg>
      { children }
    </Button>
  );
};

export default HamburgerButton;

