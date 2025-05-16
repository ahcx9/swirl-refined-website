
import React from 'react';

interface CustomCTAButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  openInNewTab?: boolean;
}

const CustomCTAButton: React.FC<CustomCTAButtonProps> = ({
  children,
  href,
  className = '',
  onClick,
  openInNewTab = false,
}) => {
  const buttonClasses = `
    relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap
    rounded-full bg-blue-600 px-8 py-3
    text-base font-medium text-white transition duration-300 ease-out hover:bg-blue-700
    hover:shadow-lg
    ${className}
  `;

  // Button content with arrow animation
  const buttonContent = (
    <>
      <span className="absolute right-0 flex h-full w-10 translate-x-0 transform items-center justify-start duration-300 group-hover:translate-x-4">
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      <span className="flex items-center justify-center whitespace-nowrap transition-all duration-300 group-hover:translate-x-[-10px]">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`group ${buttonClasses}`} 
        onClick={onClick}
        target={openInNewTab ? '_blank' : undefined}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button className={`group ${buttonClasses}`} onClick={onClick}>
      {buttonContent}
    </button>
  );
};

export default CustomCTAButton;
