import React, { useState } from 'react';
import { ActiveTab, ScreenId } from '../types/travel';
import { HERO_IMAGE } from '../data/travelData';
import { MapPin, Calendar, Users, Search, ChevronDown, Check } from 'lucide-react';

interface HeroProps {
  onSearch: (params: {
    tab: ActiveTab;
    destination: string;
    checkIn: string;
    checkOut: string;
    guests: number;
  }) => void;
  onNavigate: (screen: ScreenId) => void;
}

const DESTINATION_SUGGESTIONS = [
  'Ella (Nine Arch Bridge & Tea Trails)',
  'Galle (Historic Dutch Fort & Beaches)',
  'Sigiriya (Lion Rock Citadel & Dambulla)',
  'Yala (Leopards & Safari Wilderness)',
  'Kandy (Temple of Tooth & Hill Country)',
  'Mirissa (Whale Watching & Surf Bay)',
  'Bentota (Golden Coastline & Water Sports)',
  'Colombo (Capital City & Fine Dining)',
];

export const Hero: React.FC<HeroProps> = ({ onSearch, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('hotels');
  const [destination, setDestination] = useState('');
  const [destinationMenuOpen, setDestinationMenuOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState('2026-11-15');
  const [checkOutDate, setCheckOutDate] = useState('2026-11-20');
  const [guests, setGuests] = useState(2);
  const [guestsDropdownOpen, setGuestsDropdownOpen] = useState(false);

  const handleTabClick = (tab: ActiveTab) => {
    setActiveTab(tab);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      tab: activeTab,
      destination: destination || 'Island-wide',
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests,
    });
  };

  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-[#0a1e19]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          alt="Nine Arch Bridge Ella Sri Lanka"
          className="w-full h-full object-cover object-center transform scale-105 duration-1000"
          src={HERO_IMAGE}
        />
        {/* Deep cinematic dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-20 w-full flex flex-col justify-between h-full">
        <div className="max-w-2xl text-white mb-8 sm:mb-10 pt-4">
          {/* Overline Tagline */}
          <span className="inline-block text-xs uppercase tracking-[0.28em] font-semibold text-gray-200 mb-3">
            YOUR JOURNEY BEGINS HERE
          </span>

          {/* Headline */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.12] mb-4 tracking-tight">
            Discover Sri Lanka,<br />
            <span className="italic font-normal text-[#e6ca91]">Beautifully.</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-gray-200 font-light max-w-xl leading-relaxed">
            Extraordinary places. Authentic experiences. Unforgettable journeys.
          </p>
        </div>

        {/* Booking / Search Box Widget */}
        <div className="w-full max-w-4xl bg-white rounded-xl hero-search-shadow p-2 sm:p-3 mt-4">
          {/* Tabs Header */}
          <div className="flex items-center space-x-2 border-b border-gray-100 pb-2 px-2 overflow-x-auto">
            <button
              type="button"
              onClick={() => handleTabClick('hotels')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'hotels'
                  ? 'font-semibold bg-[#faf7f2] text-[#0f2d25] border-b-2 border-[#a67b38]'
                  : 'font-medium text-gray-500 hover:text-gray-900'
              }`}
            >
              <i className="fa-solid fa-hotel text-[#a67b38]"></i>
              <span>Hotels &amp; Villas</span>
            </button>

            <button
              type="button"
              onClick={() => handleTabClick('tours')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'tours'
                  ? 'font-semibold bg-[#faf7f2] text-[#0f2d25] border-b-2 border-[#a67b38]'
                  : 'font-medium text-gray-500 hover:text-gray-900'
              }`}
            >
              <i className="fa-solid fa-binoculars text-[#a67b38]"></i>
              <span>Tours &amp; Experiences</span>
            </button>

            <button
              type="button"
              onClick={() => handleTabClick('transport')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap ${
                activeTab === 'transport'
                  ? 'font-semibold bg-[#faf7f2] text-[#0f2d25] border-b-2 border-[#a67b38]'
                  : 'font-medium text-gray-500 hover:text-gray-900'
              }`}
            >
              <i className="fa-solid fa-car text-[#a67b38]"></i>
              <span>Transport</span>
            </button>
          </div>

          {/* Form Input Grid */}
          <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 p-2 pt-3 items-center">
            {/* Destination Field */}
            <div className="relative lg:col-span-4 border border-gray-200 rounded-lg p-2.5 hover:border-gray-300 focus-within:border-[#0f2d25] transition-colors">
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                {activeTab === 'transport' ? 'Pickup & Route' : 'Destination'}
              </label>
              <div className="flex items-center gap-2 mt-0.5">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <input
                  className="w-full text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none border-0 p-0 focus:ring-0 bg-transparent"
                  placeholder={
                    activeTab === 'transport'
                      ? 'CMB Airport or City'
                      : 'Where do you want to go?'
                  }
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  onFocus={() => setDestinationMenuOpen(true)}
                />
              </div>

              {/* Destination Suggestions Dropdown */}
              {destinationMenuOpen && (
                <div className="absolute left-0 top-full mt-1.5 w-72 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-30 max-h-56 overflow-y-auto">
                  <div className="px-3 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Popular Destinations
                  </div>
                  {DESTINATION_SUGGESTIONS.map((place) => (
                    <button
                      key={place}
                      type="button"
                      className="w-full text-left px-3 py-1.5 text-xs text-gray-700 hover:bg-[#faf7f2] hover:text-[#a67b38] flex items-center justify-between"
                      onClick={() => {
                        setDestination(place.split(' (')[0]);
                        setDestinationMenuOpen(false);
                      }}
                    >
                      <span>{place}</span>
                      {destination === place.split(' (')[0] && (
                        <Check className="w-3.5 h-3.5 text-[#a67b38]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Check-in Field */}
            <div className="lg:col-span-2 border border-gray-200 rounded-lg p-2.5 hover:border-gray-300 focus-within:border-[#0f2d25] transition-colors">
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                {activeTab === 'transport' ? 'Travel Date' : 'Check In'}
              </label>
              <div className="flex items-center gap-2 mt-0.5">
                <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <input
                  className="w-full text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none border-0 p-0 focus:ring-0 bg-transparent"
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </div>
            </div>

            {/* Check-out Field */}
            <div className="lg:col-span-2 border border-gray-200 rounded-lg p-2.5 hover:border-gray-300 focus-within:border-[#0f2d25] transition-colors">
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                {activeTab === 'transport' ? 'Return Date (Opt)' : 'Check Out'}
              </label>
              <div className="flex items-center gap-2 mt-0.5">
                <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <input
                  className="w-full text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none border-0 p-0 focus:ring-0 bg-transparent"
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </div>
            </div>

            {/* Guests Field */}
            <div className="relative lg:col-span-2 border border-gray-200 rounded-lg p-2.5 hover:border-gray-300 focus-within:border-[#0f2d25] transition-colors">
              <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                Guests
              </label>
              <div
                className="flex items-center justify-between mt-0.5 cursor-pointer"
                onClick={() => setGuestsDropdownOpen(!guestsDropdownOpen)}
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-800">
                    {guests} {guests === 1 ? 'Guest' : 'Guests'}
                  </span>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
              </div>

              {guestsDropdownOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-48 bg-white rounded-lg shadow-xl border border-gray-100 p-3 z-30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-700">Passengers / Guests</span>
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setGuests(Math.max(1, guests - 1));
                        }}
                        className="w-6 h-6 rounded bg-gray-100 text-gray-700 flex items-center justify-center font-bold text-sm hover:bg-gray-200"
                      >
                        -
                      </button>
                      <span className="text-xs font-bold text-gray-800 w-4 text-center">{guests}</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setGuests(Math.min(15, guests + 1));
                        }}
                        className="w-6 h-6 rounded bg-gray-100 text-gray-700 flex items-center justify-center font-bold text-sm hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setGuestsDropdownOpen(false)}
                    className="w-full text-center text-[11px] font-bold text-[#a67b38] pt-1"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="lg:col-span-2">
              <button
                className="w-full bg-[#0f2d25] hover:bg-[#153e34] text-white py-3.5 px-4 rounded-lg flex items-center justify-center gap-2 font-medium text-xs sm:text-sm transition-all duration-200 shadow hover:shadow-md cursor-pointer"
                type="submit"
              >
                <Search className="w-3.5 h-3.5" />
                <span className="whitespace-nowrap font-semibold">Search Availability</span>
              </button>
            </div>
          </form>
        </div>

        {/* Location Badge Bottom Right */}
        <div
          onClick={() => onNavigate('tours')}
          className="cursor-pointer absolute bottom-4 right-4 sm:right-8 flex items-center gap-1.5 text-white/90 text-xs font-light bg-black/40 backdrop-blur-sm px-3.5 py-1.5 rounded-full hover:bg-black/60 transition-colors"
        >
          <MapPin className="w-3.5 h-3.5 text-[#b4853e]" />
          <span>Nine Arch Bridge, Ella</span>
        </div>
      </div>
    </section>
  );
};
