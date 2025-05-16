
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getIconComponent } from './utils';
import { WhatsApp } from '@/components/SocialIcons';

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
        
        {/* WhatsApp Button for Mobile */}
        <div className="mt-4 mb-2">
          <Button asChild variant="secondary" className="bg-[#25D366] hover:bg-[#128C7E] text-white border-0 rounded-full py-5 w-full flex items-center justify-center gap-2">
            <a href="https://wa.me/971543853877" target="_blank" rel="noopener noreferrer">
              <WhatsApp size={18} className="flex-shrink-0" />
              <span className="text-sm md:text-base">Chat on WhatsApp</span>
            </a>
          </Button>
        </div>
        
        <div className="mt-2 pt-2">
          <div className="mx-auto">
            <CustomCTAButton href="https://app.swirl.cx/register" className="w-full">
              Get Started For Free
            </CustomCTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};
