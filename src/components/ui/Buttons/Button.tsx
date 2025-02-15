/* import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

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

export default Button; */


import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled,
  ...rest
}) => {
  let buttonClasses = 'rounded px-4 py-2 font-bold';

  switch (variant) {
    case 'primary':
      buttonClasses += ' bg-gray-800 text-white hover:bg-gray-600';
      break;
    case 'secondary':
      buttonClasses += ' bg-gray-200 text-gray-800 hover:bg-gray-300';
      break;
    case 'danger':
      buttonClasses += ' bg-red-500 text-white hover:bg-red-700';
      break;
  }

  switch (size) {
    case 'small':
      buttonClasses += ' text-sm';
      break;
    case 'large':
      buttonClasses += ' text-lg';
      break;
  }

  return (
    <button
      {...rest}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;