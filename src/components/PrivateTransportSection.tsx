import React from 'react';
import {
  CHAUFFEUR_VAN_IMAGE,
  COASTAL_TRANSFERS_IMAGE,
  HILL_COUNTRY_IMAGE,
} from '../data/travelData';
import { ScreenId } from '../types/travel';

interface PrivateTransportSectionProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBookingModal: (type?: string) => void;
}

export const PrivateTransportSection: React.FC<PrivateTransportSectionProps> = ({
  onNavigate,
  onOpenBookingModal,
}) => {
  return (
    <section className="py-16 bg-white" data-purpose="transport-and-airport-transfers">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Chauffeur & Vehicle Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[400px] sm:h-[460px] bg-gray-100 group">
              <img
                alt="Premium private travel vehicle van"
                className="w-full h-full object-cover object-left-bottom group-hover:scale-105 transition-transform duration-700"
                src={CHAUFFEUR_VAN_IMAGE}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <span className="text-white text-xs font-medium tracking-wide bg-[#0f2d25]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                  <i className="fa-solid fa-shield-halved text-[#a67b38]"></i>
                  <span>Verified &amp; Professional Chauffeurs</span>
                </span>
              </div>
            </div>
          </div>

          {/* Center Column: Key Features & Booking Details */}
          <div className="lg:col-span-4 lg:pl-2">
            <span className="text-xs font-serif italic font-semibold text-[#a67b38] tracking-wide block mb-1">
              Travel in Comfort
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25] leading-tight">
              Private Transport &amp; Airport Transfers
            </h2>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Explore Sri Lanka with our reliable and comfortable private transport services. Airport transfers, day tours or island-wide travel with professional drivers.
            </p>

            {/* Key Checklist */}
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800">
                <span className="w-5 h-5 rounded-full bg-[#f6efe4] text-[#a67b38] flex items-center justify-center text-xs flex-shrink-0">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>Modern, air-conditioned vehicles</span>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800">
                <span className="w-5 h-5 rounded-full bg-[#f6efe4] text-[#a67b38] flex items-center justify-center text-xs flex-shrink-0">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>Professional and friendly drivers</span>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800">
                <span className="w-5 h-5 rounded-full bg-[#f6efe4] text-[#a67b38] flex items-center justify-center text-xs flex-shrink-0">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>Airport pickup &amp; drop-off</span>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm font-medium text-gray-800">
                <span className="w-5 h-5 rounded-full bg-[#f6efe4] text-[#a67b38] flex items-center justify-center text-xs flex-shrink-0">
                  <i className="fa-solid fa-check"></i>
                </span>
                <span>Customised travel itineraries</span>
              </li>
            </ul>

            {/* CTA Button */}
            <div className="mt-8 flex items-center gap-3 flex-wrap">
              <button
                onClick={() => onOpenBookingModal('transport')}
                className="inline-flex items-center gap-2 bg-[#a67b38] hover:bg-[#90682b] text-white px-7 py-3 rounded-lg text-sm font-semibold tracking-wide shadow hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <span>Book Transport</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </button>
              <button
                onClick={() => onNavigate('transport')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f2d25] hover:text-[#a67b38] px-3 py-2 cursor-pointer transition-colors"
              >
                <span>View Fleet &amp; Rates</span>
                <i className="fa-solid fa-chevron-right text-[10px]"></i>
              </button>
            </div>
          </div>

          {/* Right Column: Secondary Scenic Stack Images */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {/* Coastal Highway Transfer */}
            <div
              onClick={() => onNavigate('transport')}
              className="h-52 rounded-xl overflow-hidden shadow-sm relative group cursor-pointer"
            >
              <img
                alt="Coastal highway scenic transport route"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={COASTAL_TRANSFERS_IMAGE}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-2.5 left-2.5 text-[11px] font-medium text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
                Coastal Transfers
              </div>
            </div>

            {/* Lake and Mountain Drive View */}
            <div
              onClick={() => onNavigate('transport')}
              className="h-52 rounded-xl overflow-hidden shadow-sm relative group cursor-pointer"
            >
              <img
                alt="Scenic mountain & hill country routes"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={HILL_COUNTRY_IMAGE}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-2.5 left-2.5 text-[11px] font-medium text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
                Hill Country Journeys
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
