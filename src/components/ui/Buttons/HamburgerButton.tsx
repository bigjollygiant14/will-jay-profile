import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import Button from "./Button";

interface HamburgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ children, onClick, ...rest }) => {
  const buttonClasses = `text-white p-4`;

  return (
    <Button className={buttonClasses} {...rest} onClick={onClick}>
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

