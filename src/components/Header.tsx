import React, { useState } from 'react';
import { CurrencyCode, CURRENCIES, ScreenId } from '../types/travel';
import { Search, Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  activeScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  currency: CurrencyCode;
  onCurrencyChange: (curr: CurrencyCode) => void;
  onOpenBookingModal: (type?: string) => void;
  onOpenSearchModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  onNavigate,
  currency,
  onCurrencyChange,
  onOpenBookingModal,
  onOpenSearchModal,
}) => {
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ScreenId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'hotels', label: 'Hotels & Villas' },
    { id: 'tours', label: 'Tours & Experiences' },
    { id: 'transport', label: 'Transport' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* BEGIN: TopUtilityBar */}
      <div className="bg-[#0f2d25] text-gray-200 text-xs py-2 px-4 sm:px-8 border-b border-[#1b4339] relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Info Left */}
          <div className="flex items-center space-x-6 tracking-wide">
            <a
              className="flex items-center gap-2 hover:text-[#c49a56] transition-colors"
              href="tel:+94774398488"
            >
              <Phone className="w-3.5 h-3.5 text-[#a67b38]" />
              <span>+94 77 439 8488</span>
            </a>
            <a
              className="flex items-center gap-2 hover:text-[#c49a56] transition-colors"
              href="mailto:ceyloratravels.lk@gmail.com"
            >
              <Mail className="w-3.5 h-3.5 text-[#a67b38]" />
              <span>ceyloratravels.lk@gmail.com</span>
            </a>
          </div>

          {/* Social & Currency Right */}
          <div className="flex items-center space-x-5">
            <span className="text-gray-400 hidden md:inline">Follow Us:</span>
            <div className="flex items-center space-x-3 text-sm">
              <a
                aria-label="Facebook"
                className="hover:text-[#c49a56] transition-colors"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook-f text-xs"></i>
              </a>
              <a
                aria-label="Instagram"
                className="hover:text-[#c49a56] transition-colors"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram text-xs"></i>
              </a>
              <a
                aria-label="YouTube"
                className="hover:text-[#c49a56] transition-colors"
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-youtube text-xs"></i>
              </a>
              <a
                aria-label="TikTok"
                className="hover:text-[#c49a56] transition-colors"
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-tiktok text-xs"></i>
              </a>
            </div>

            <div className="h-3 w-px bg-white/20 mx-1"></div>

            {/* Currency Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 font-medium hover:text-white transition-colors cursor-pointer text-xs"
                type="button"
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              >
                <span>{currency}</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-gray-800 rounded-lg shadow-xl py-1 z-50 border border-gray-100 text-xs animate-in fade-in zoom-in-95 duration-150">
                  {(Object.keys(CURRENCIES) as CurrencyCode[]).map((c) => (
                    <button
                      key={c}
                      className={`w-full text-left px-3 py-1.5 hover:bg-amber-50 flex items-center justify-between ${
                        currency === c ? 'font-bold text-[#a67b38]' : ''
                      }`}
                      onClick={() => {
                        onCurrencyChange(c);
                        setCurrencyDropdownOpen(false);
                      }}
                    >
                      <span>{c}</span>
                      <span className="text-gray-400 font-normal">{CURRENCIES[c].symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* END: TopUtilityBar */}

      {/* BEGIN: MainHeader */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            {/* Stylized Logo Icon */}
            <div className="relative w-11 h-11 flex items-center justify-center flex-shrink-0">
              <svg className="w-11 h-11" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" opacity="0.6" r="46" stroke="#b4853e" strokeDasharray="4 2" strokeWidth="2"></circle>
                {/* Palm fronds & sun silhouette in gold */}
                <path d="M50 20C50 20 42 34 50 48C58 34 50 20 50 20Z" fill="#b4853e"></path>
                <path d="M50 48C36 43 23 48 23 48C23 48 35 56 50 48Z" fill="#a67b38"></path>
                <path d="M50 48C64 43 77 48 77 48C77 48 65 56 50 48Z" fill="#a67b38"></path>
                {/* Traditional catamaran boat waves */}
                <path d="M26 66C38 62 62 62 74 66C68 76 32 76 26 66Z" fill="#0f2d25"></path>
                <path d="M20 72C35 68 65 68 80 72" stroke="#b4853e" strokeLinecap="round" strokeWidth="3"></path>
              </svg>
            </div>
            <div>
              <span className="block font-heading text-2xl font-bold tracking-[0.18em] text-[#0f2d25] leading-none">
                CEYLORA
              </span>
              <span className="block font-heading text-[10px] tracking-[0.45em] text-[#b4853e] uppercase mt-1 pl-0.5 font-semibold">
                TRAVELS
              </span>
            </div>
          </button>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-[14.5px] font-medium text-gray-700">
            {navItems.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`cursor-pointer pb-1 transition-colors ${
                    isActive
                      ? 'text-[#0f2d25] font-semibold border-b-2 border-[#0f2d25]'
                      : 'hover:text-[#0f2d25]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <button
              aria-label="Search"
              onClick={onOpenSearchModal}
              className="p-2 text-gray-600 hover:text-[#0f2d25] transition-colors rounded-full hover:bg-gray-100 cursor-pointer"
              type="button"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-md bg-[#a67b38] hover:bg-[#90682b] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
            >
              Book Now
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#0f2d25] cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-lg animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-2 text-sm font-medium ${
                    activeScreen === item.id
                      ? 'text-[#a67b38] font-bold border-l-2 border-[#a67b38] pl-2'
                      : 'text-gray-700 hover:text-[#0f2d25]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500">Need help? Call Nihal:</span>
                <a href="tel:+94774398488" className="text-xs font-bold text-[#a67b38]">
                  +94 77 439 8488
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* END: MainHeader */}
    </>
  );
};
