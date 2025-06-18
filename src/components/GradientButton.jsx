import React from 'react';
import { Link } from 'react-router-dom';

export default function GradientButton({ 
  children, 
  reverse = false, 
  className = "",
  type = "button",
  disabled = false,
  onClick,
  as = "button",
  ...props
}) {
  // For regular buttons
  if (as === "button") {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        {...props}
        className={`
          bg-gradient-to-r ${reverse ? "from-on-primary to-black" : "from-black to-on-primary"} 
          rounded-[8px] py-2 px-4 text-white text-center
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${className}
        `}
      >
        {children}
      </button>
    );
  }
  
  // For Link components
  if (as === Link) {
    return (
      <Link
        {...props}
        className={`
          bg-gradient-to-r ${reverse ? "from-on-primary to-black" : "from-black to-on-primary"} 
          rounded-[8px] py-2 px-4 text-white text-center cursor-pointer
          ${className}
        `}
      >
        {children}
      </Link>
    );
  }
  
  // For custom components
  const Component = as;
  return (
    <Component
      {...props}
      className={`
        bg-gradient-to-r ${reverse ? "from-on-primary to-black" : "from-black to-on-primary"} 
        rounded-[8px] py-2 px-4 text-white text-center cursor-pointer
        ${className}
      `}
    >
      {children}
    </Component>
  );
}