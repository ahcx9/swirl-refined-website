
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
    rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-3
    text-sm font-medium text-white transition duration-300 ease-out hover:from-purple-700
    hover:to-blue-600 hover:shadow-lg hover:translate-y-[-2px]
    ${className}
  `;

  const buttonContent = (
    <>
      <span className="btn-content flex items-center justify-center">
        <span className="btn-title whitespace-nowrap">{children}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses} 
        onClick={onClick}
        target={openInNewTab ? '_blank' : undefined}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {buttonContent}
    </button>
  );
};

export default CustomCTAButton;
