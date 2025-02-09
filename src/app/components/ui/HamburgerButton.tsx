import React, { ButtonHTMLAttributes } from 'react';
import Button from "./Button";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const HamburgerButton: React.FC<ButtonProps> = ({ children, ...rest }) => {
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
          fill="fff"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </Button>
  );
};

export default HamburgerButton;

