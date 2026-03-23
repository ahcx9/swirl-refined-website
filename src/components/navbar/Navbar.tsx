import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ArrowRight } from 'lucide-react';
import { MegaMenuContent, TabKey } from './mega-menu/MegaMenuContent';
import { MegaMenuOverlay } from './mega-menu/MegaMenuOverlay';
import { PremiumMobileMenu } from './mega-menu/PremiumMobileMenu';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'dine', label: 'Dine' },
  { key: 'pos', label: 'Point of Sale' },
  { key: 'works', label: 'Works' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabEnter = useCallback((tab: TabKey) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setActiveTab(tab);
  }, []);

  const handleTabLeave = useCallback(() => {
    closeTimeout.current = setTimeout(() => {
      setActiveTab(null);
    }, 200);
  }, []);

  const handleDropdownEnter = useCallback(() => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  }, []);

  const handleDropdownLeave = useCallback(() => {
    closeTimeout.current = setTimeout(() => {
      setActiveTab(null);
    }, 150);
  }, []);

  const closeMegaMenu = useCallback(() => {
    setActiveTab(null);
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled ? 'pt-2' : 'pt-3 md:pt-4'
        }`}
      >
        <div className={`max-w-[1400px] mx-auto px-3 md:px-5 transition-all duration-500`}>
          {/* Floating pill container */}
          <div
            className={`relative flex items-center justify-between rounded-2xl transition-all duration-500 ease-out border ${
              isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] border-gray-200/60 px-5 md:px-7 py-3'
                : 'bg-white/70 backdrop-blur-lg shadow-[0_2px_16px_-2px_rgba(0,0,0,0.05)] border-gray-100/40 px-5 md:px-7 py-3.5 md:py-4'
            }`}
          >
            {/* Left: Logo */}
            <Link to="/" className="flex-shrink-0 z-10" onClick={closeMegaMenu}>
              <img
                src="/lovable-uploads/swirl-logo-transparent.png"
                alt="Swirl"
                loading="eager"
                fetchPriority="high"
                className={`w-auto object-contain transition-all duration-500 ${
                  isScrolled ? 'h-10 md:h-11' : 'h-11 md:h-13'
                }`}
              />
            </Link>

            {/* Center: Product tabs (desktop) */}
            <div className="hidden xl:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onMouseEnter={() => handleTabEnter(tab.key)}
                  onMouseLeave={handleTabLeave}
                  onClick={() => setActiveTab(activeTab === tab.key ? null : tab.key)}
                  className={`relative px-4 py-2.5 text-[15px] font-semibold rounded-xl transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'text-primary bg-blue-50/80'
                      : 'text-foreground hover:text-primary hover:bg-gray-50/80'
                  }`}
                >
                  {tab.label}
                  {/* Active indicator */}
                  <span
                    className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-primary transition-all duration-300 ${
                      activeTab === tab.key ? 'w-6 opacity-100' : 'w-0 opacity-0'
                    }`}
                  />
                </button>
              ))}

              {/* Additional nav links */}
              <div className="flex items-center gap-1 ml-3 pl-3 border-l border-gray-200/60">
                <Link
                  to="/use-cases"
                  className="px-3 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-gray-50/80"
                  onClick={closeMegaMenu}
                >
                  Use Cases
                </Link>
                <Link
                  to="/contact"
                  className="px-3 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors rounded-xl hover:bg-gray-50/80"
                  onClick={closeMegaMenu}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Right: CTA + Mobile toggle */}
            <div className="flex items-center gap-3 z-10">
              {/* Get Started - desktop */}
              <a
                href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Swirl"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-[13px] font-semibold rounded-xl shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 group hover:-translate-y-0.5"
              >
                Get Started
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>

              {/* Mobile hamburger */}
              <button
                className="xl:hidden w-10 h-10 rounded-xl bg-gray-100/80 flex items-center justify-center hover:bg-gray-200/80 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={20} className="text-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <div
          ref={dropdownRef}
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
          className={`hidden xl:block absolute left-1/2 -translate-x-1/2 w-[85vw] max-w-[1200px] transition-all duration-300 ease-out ${
            activeTab
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
          style={{ top: isScrolled ? '60px' : '72px' }}
        >
          <div className="mt-3 bg-white/95 backdrop-blur-2xl rounded-[20px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] border border-gray-200/40 overflow-hidden">
            {/* Tab switcher inside dropdown */}
            <div className="flex items-center gap-1 px-6 pt-4 pb-2 border-b border-gray-100/60">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onMouseEnter={() => handleTabEnter(tab.key)}
                  className={`px-4 py-2 text-[12px] font-semibold rounded-lg transition-all duration-200 ${
                    activeTab === tab.key
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab && <MegaMenuContent activeTab={activeTab} onClose={closeMegaMenu} />}
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <MegaMenuOverlay isVisible={!!activeTab} onClick={closeMegaMenu} />

      {/* Mobile Menu */}
      <PremiumMobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Navbar;
