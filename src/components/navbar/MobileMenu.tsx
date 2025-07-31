
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getIconComponent } from './utils';
import { WhatsApp } from '@/components/SocialIcons';
import CustomCTAButton from '@/components/CustomCTAButton';
import { useLanguage } from '@/contexts/LanguageContext';

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
  const { t } = useLanguage();
  
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
                      <span className="text-lg font-inter">{item.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div key={link.name} className="border-b border-gray-100">
              {isExternalLink(link.path!) ? (
                <a
                  href={link.path!}
                  className="text-black hover:text-blue-600 transition-colors font-medium py-3 text-xl font-inter block"
                  onClick={onClose}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.path!}
                  className="text-black hover:text-blue-600 transition-colors font-medium py-3 text-xl font-inter block"
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              )}
            </div>
          )
        ))}
        
        {/* Button container with equal sizing */}
        <div className="mt-6 space-y-3 max-w-xs mx-auto">
          {/* WhatsApp Button - redesigned mobile */}
          <Button asChild variant="secondary" className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white border-0 rounded-full h-12 px-5 w-full flex items-center justify-center gap-2 font-inter shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <a href="https://wa.me/971543853877" target="_blank" rel="noopener noreferrer">
              <WhatsApp size={18} className="flex-shrink-0" />
              <span className="text-sm font-medium font-inter">{t('nav.chatOnWhatsapp')}</span>
            </a>
          </Button>
        
          {/* CTA Button - matching Hero style */}
          <div className="btn-conteiner scale-75 w-full">
            <a className="btn-content w-full justify-center" href="https://app.swirl.cx/register" target="_blank" rel="noopener noreferrer">
              <span className="btn-title">{t('nav.getStarted')}</span>
              <span className="icon-arrow">
                <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path id="arrow-icon-one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                    <path id="arrow-icon-two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                    <path id="arrow-icon-three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                  </g>
                </svg>
              </span> 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
