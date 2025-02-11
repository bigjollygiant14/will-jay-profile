import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
}
// To Do: Convert to Styled
const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...rest }) => {
  const buttonClasses = `bg-${variant === 'primary' ? 'blue-500' : 'gray-300'} 
                         hover:bg-${variant === 'primary' ? 'blue-600' : 'gray-400'} 
                         text-white font-bold py-2 px-4 rounded`;

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

export default Button;