import React from 'react';
import { ScreenId } from '../types/travel';

interface FooterProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <footer className="bg-[#0a201a] text-gray-300 pt-16 pb-8 border-t border-[#183a30] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Footer Column 1: Brand Info */}
          <div className="lg:col-span-2">
            <div
              className="flex items-center gap-3 mb-4 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="relative w-9 h-9 flex items-center justify-center flex-shrink-0">
                <svg className="w-9 h-9" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" opacity="0.6" r="46" stroke="#b4853e" strokeDasharray="4 2" strokeWidth="2"></circle>
                  <path d="M50 20C50 20 42 34 50 48C58 34 50 20 50 20Z" fill="#b4853e"></path>
                  <path d="M50 48C36 43 23 48 23 48C23 48 35 56 50 48Z" fill="#a67b38"></path>
                  <path d="M50 48C64 43 77 48 77 48C77 48 65 56 50 48Z" fill="#a67b38"></path>
                  <path d="M26 66C38 62 62 62 74 66C68 76 32 76 26 66Z" fill="#0f2d25"></path>
                  <path d="M20 72C35 68 65 68 80 72" stroke="#b4853e" strokeLinecap="round" strokeWidth="3"></path>
                </svg>
              </div>
              <div>
                <span className="font-heading text-2xl font-bold tracking-[0.16em] text-white leading-none block">
                  CEYLORA
                </span>
                <span className="font-heading text-xs tracking-[0.35em] text-[#b4853e] uppercase font-semibold block mt-0.5">
                  TRAVELS
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-6">
              Your premier boutique travel partner in Sri Lanka. Crafting bespoke luxury holidays, curated excursions, and seamless island transports.
            </p>

            <div className="flex items-center space-x-3 text-sm">
              <a
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#a67b38] flex items-center justify-center text-white transition-colors"
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-xs"></i>
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#a67b38] flex items-center justify-center text-white transition-colors"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-xs"></i>
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#a67b38] flex items-center justify-center text-white transition-colors"
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube text-xs"></i>
              </a>
              <a
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#a67b38] flex items-center justify-center text-white transition-colors"
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <i className="fa-brands fa-tiktok text-xs"></i>
              </a>
            </div>
          </div>

          {/* Footer Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hotels')}
                  className="hover:text-white transition-colors text-left"
                >
                  Hotels &amp; Villas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tours')}
                  className="hover:text-white transition-colors text-left"
                >
                  Tours &amp; Itineraries
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('transport')}
                  className="hover:text-white transition-colors text-left"
                >
                  Private Vehicles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors text-left"
                >
                  About Ceylora
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Footer Column 3: Top Experiences */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Top Experiences
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button
                  onClick={() => onNavigate('tours')}
                  className="hover:text-white transition-colors text-left"
                >
                  Yala Safari Excursion
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tours')}
                  className="hover:text-white transition-colors text-left"
                >
                  Ella Scenic Train Ride
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tours')}
                  className="hover:text-white transition-colors text-left"
                >
                  Mirissa Whale Watching
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tours')}
                  className="hover:text-white transition-colors text-left"
                >
                  Sigiriya Ancient Citadel
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('hotels')}
                  className="hover:text-white transition-colors text-left"
                >
                  Southern Coast Beach Retreat
                </button>
              </li>
            </ul>
          </div>

          {/* Footer Column 4: Contact & Office */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start gap-2.5">
                <i className="fa-solid fa-location-dot text-[#b4853e] mt-0.5"></i>
                <span>Colombo &amp; Galle, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-solid fa-phone text-[#b4853e]"></i>
                <a className="hover:text-white transition-colors" href="tel:+94774398488">
                  +94 77 439 8488
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <i className="fa-regular fa-envelope text-[#b4853e]"></i>
                <a
                  className="hover:text-white transition-colors break-all"
                  href="mailto:ceyloratravels.lk@gmail.com"
                >
                  ceyloratravels.lk@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenBookingModal}
                  className="w-full py-2 px-3 rounded bg-[#a67b38] hover:bg-[#90682b] text-white font-medium text-xs text-center transition-colors shadow-sm"
                >
                  Request Custom Quote
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© 2026 Ceylora Travels. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-gray-400 cursor-pointer">Terms &amp; Conditions</span>
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Payment Security</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
