
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

  return (
    <div className="md:hidden bg-white shadow-lg">
      <div className="container-custom py-4 flex flex-col space-y-4">
        {links.map((link) => (
          link.items ? (
            <div key={link.name} className="space-y-2">
              <button 
                onClick={() => toggleDropdown(link.name)}
                className="flex justify-between items-center w-full font-medium text-purple-dark font-inter py-2"
              >
                <span className="text-lg">{link.name}</span>
                <ChevronDown className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} size={18} />
              </button>
              {activeDropdown === link.name && (
                <div className="pl-4 space-y-3">
                  {link.items.map((item: any) => (
                    <Link
                      key={item.title}
                      to={item.path}
                      className="flex items-center text-purple-dark hover:text-purple transition-colors py-2 font-inter"
                      onClick={onClose}
                    >
                      {getIconComponent(item.icon)}
                      <span className="ml-2">{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={link.name}
              to={link.path}
              className="text-purple-dark hover:text-purple transition-colors font-medium py-2 text-lg font-inter"
              onClick={onClose}
            >
              {link.name}
            </Link>
          )
        ))}

        <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
          <Link
            to="/login"
            className="text-purple-dark hover:text-purple transition-colors font-medium py-2 text-lg text-center"
            onClick={onClose}
          >
            Login
          </Link>
          <Button asChild className="btn-primary w-full font-inter mt-2">
            <Link to="https://app.swirl.cx/register" onClick={onClose}>Get Started Free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
