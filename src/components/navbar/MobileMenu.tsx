
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getIconComponent } from './utils';

interface MobileMenuProps {
  isOpen: boolean;
  activeDropdown: string | null;
  links: any[];
  toggleDropdown: (name: string) => void;
  onClose: () => void;
}

export const MobileMenu = ({
  isOpen,
  activeDropdown,
  links,
  toggleDropdown,
  onClose
}: MobileMenuProps) => {
  if (!isOpen) return null;

  const isExternalLink = (path: string) => {
    return path && path.startsWith('http');
  };

  return (
    <div className="xl:hidden bg-white shadow-lg fixed top-[80px] left-0 right-0 h-[calc(100vh-80px)] overflow-y-auto z-50">
      <div className="container-custom py-6 flex flex-col space-y-4">
        {links.map((link) => (
          link.items ? (
            <div key={link.name} className="space-y-3 border-b border-gray-100 pb-4">
              <button 
                onClick={() => toggleDropdown(link.name)}
                className="flex justify-between items-center w-full font-medium text-black font-inter py-2 text-xl"
              >
                <span>{link.name}</span>
                <ChevronDown className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} size={22} />
              </button>
              {activeDropdown === link.name && (
                <div className="pl-4 space-y-4 mt-2">
                  {link.items.map((item: any) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="flex items-center text-black hover:text-blue-600 transition-colors py-2 font-inter"
                      onClick={onClose}
                    >
                      {getIconComponent(item.icon)}
                      <span className="text-lg">{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div key={link.name} className="border-b border-gray-100">
              {isExternalLink(link.path) ? (
                <a
                  href={link.path}
                  className="text-black hover:text-blue-600 transition-colors font-medium py-3 text-xl font-inter block"
                  onClick={onClose}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.path}
                  className="text-black hover:text-blue-600 transition-colors font-medium py-3 text-xl font-inter block"
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              )}
            </div>
          )
        ))}
        <div className="mt-6 pt-4">
          <Button asChild className="btn-primary w-full font-inter text-lg py-6">
            <a href="https://app.swirl.cx/register" onClick={onClose}>Get Started For Free</a>
          </Button>
        </div>
      </div>
    </div>
  );
};
