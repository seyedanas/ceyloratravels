/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustValueStrip } from './components/TrustValueStrip';
import { PopularExperiences } from './components/PopularExperiences';
import { PrivateTransportSection } from './components/PrivateTransportSection';
import { Footer } from './components/Footer';
import { HotelsScreen } from './components/screens/HotelsScreen';
import { ToursScreen } from './components/screens/ToursScreen';
import { TransportScreen } from './components/screens/TransportScreen';
import { AboutScreen } from './components/screens/AboutScreen';
import { ContactScreen } from './components/screens/ContactScreen';
import { BookingModal } from './components/BookingModal';
import { ExperienceDetailModal } from './components/ExperienceDetailModal';
import { SearchModal } from './components/SearchModal';
import { CurrencyCode, ScreenId, ExperienceItem, HotelItem, ActiveTab } from './types/travel';
import { formatPrice } from './utils/currency';
import { Sparkles, Calendar, Clock, Star, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>('home');
  const [currency, setCurrency] = useState<CurrencyCode>('LKR');

  // Modals state
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingModalType, setBookingModalType] = useState('Tours & Experiences');
  const [bookingModalItem, setBookingModalItem] = useState('');

  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const navigateTo = (screen: ScreenId) => {
    setActiveScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleHeroSearch = (params: {
    tab: ActiveTab;
    destination: string;
    checkIn: string;
    checkOut: string;
    guests: number;
  }) => {
    if (params.tab === 'hotels') {
      navigateTo('hotels');
    } else if (params.tab === 'transport') {
      navigateTo('transport');
    } else {
      navigateTo('tours');
    }
  };

  const handleOpenBooking = (type = 'Tours & Experiences', itemName = '') => {
    setBookingModalType(type);
    setBookingModalItem(itemName);
    setBookingModalOpen(true);
  };

  const handleBookHotel = (hotel: HotelItem) => {
    handleOpenBooking('Hotels & Villas', hotel.name);
  };

  const handleBookExperience = (exp: ExperienceItem) => {
    handleOpenBooking('Tours & Experiences', exp.title);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
      {/* Universal Header with Navigation, Socials, Currency Selector */}
      <Header
        activeScreen={activeScreen}
        onNavigate={navigateTo}
        currency={currency}
        onCurrencyChange={setCurrency}
        onOpenBookingModal={() => handleOpenBooking('Custom Travel Package', 'Tailor-Made Sri Lanka Tour')}
        onOpenSearchModal={() => setSearchModalOpen(true)}
      />

      {/* Main Content Area based on Active Screen */}
      <main className="flex-grow">
        {activeScreen === 'home' && (
          <>
            {/* Exact replica of the screenshot hero */}
            <Hero
              onSearch={handleHeroSearch}
              onNavigate={navigateTo}
            />

            {/* 5-Item Value & Trust Strip */}
            <TrustValueStrip />

            {/* 6 Popular Experience Cards */}
            <PopularExperiences
              onNavigate={navigateTo}
              onSelectExperience={(exp) => setSelectedExperience(exp)}
            />

            {/* Private Transport & Airport Transfers Section */}
            <PrivateTransportSection
              onNavigate={navigateTo}
              onOpenBookingModal={(type) => handleOpenBooking('Transport & Transfers', type || 'Private Chauffeur')}
            />

            {/* Signature Itineraries Preview */}
            <section className="py-16 bg-[#faf9f6] border-t border-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-2">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38]">
                      HANDCRAFTED CIRCUITS
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0f2d25] mt-1">
                      Signature Sri Lanka Journeys
                    </h2>
                  </div>
                  <button
                    onClick={() => navigateTo('tours')}
                    className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2d25] hover:text-[#a67b38] transition-colors cursor-pointer"
                  >
                    <span>Explore All Itineraries</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Itinerary 1 */}
                  <div className="bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col justify-between group">
                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-[#a67b38] font-bold mb-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> 8 Days / 7 Nights
                        </span>
                        <span>Private Chauffeur</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-[#0f2d25] transition-colors">
                        The Grand Ceylon Classic
                      </h3>
                      <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                        Sigiriya Rock Fortress • Temple of the Tooth • Kandy to Ella Scenic Train • Yala Wildlife Safari • Galle Fort Ocean Sunset.
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        <span className="text-[11px] bg-[#faf7f2] text-gray-700 px-2 py-0.5 rounded">Boutique Villas</span>
                        <span className="text-[11px] bg-[#faf7f2] text-gray-700 px-2 py-0.5 rounded">All Transfers</span>
                        <span className="text-[11px] bg-[#faf7f2] text-gray-700 px-2 py-0.5 rounded">Park Permits</span>
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block">From</span>
                        <span className="text-base font-bold text-[#0f2d25]">
                          {formatPrice(340000, currency)}
                        </span>
                        <span className="text-[11px] text-gray-500 font-normal"> / person</span>
                      </div>
                      <button
                        onClick={() => handleOpenBooking('Custom Travel Package', '8-Day Grand Ceylon Classic')}
                        className="px-4 py-2 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>

                  {/* Itinerary 2 */}
                  <div className="bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col justify-between group">
                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-[#a67b38] font-bold mb-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> 5 Days / 4 Nights
                        </span>
                        <span>Tea &amp; Rails</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-[#0f2d25] transition-colors">
                        Highland Mist &amp; Tea Trails
                      </h3>
                      <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                        Nuwara Eliya colonial estates • Ella Nine Arch Bridge • Little Adam’s Peak hike • Cascading waterfalls &amp; gourmet Ceylon tea factory masterclasses.
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        <span className="text-[11px] bg-[#faf7f2] text-gray-700 px-2 py-0.5 rounded">Tea Bungalows</span>
                        <span className="text-[11px] bg-[#faf7f2] text-gray-700 px-2 py-0.5 rounded">1st Class Train</span>
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block">From</span>
                        <span className="text-base font-bold text-[#0f2d25]">
                          {formatPrice(210000, currency)}
                        </span>
                        <span className="text-[11px] text-gray-500 font-normal"> / person</span>
                      </div>
                      <button
                        onClick={() => handleOpenBooking('Custom Travel Package', '5-Day Highland Mist & Tea Trails')}
                        className="px-4 py-2 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>

                  {/* Itinerary 3 */}
                  <div className="bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col justify-between group">
                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-[#a67b38] font-bold mb-2">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> 6 Days / 5 Nights
                        </span>
                        <span>Ocean &amp; Safari</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-[#0f2d25] transition-colors">
                        Southern Wilderness &amp; Coast
                      </h3>
                      <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                        Yala Leopard Game Drives • Mirissa Blue Whale Catamaran Cruise • Weligama Bay surf • Luxury Clifftop Villa relaxation &amp; fresh seafood dinners.
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        <span className="text-[11px] bg-[#faf7f2] text-gray-700 px-2 py-0.5 rounded">Beachfront Villa</span>
                        <span className="text-[11px] bg-[#faf7f2] text-gray-700 px-2 py-0.5 rounded">Private 4x4</span>
                      </div>
                    </div>
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider block">From</span>
                        <span className="text-base font-bold text-[#0f2d25]">
                          {formatPrice(275000, currency)}
                        </span>
                        <span className="text-[11px] text-gray-500 font-normal"> / person</span>
                      </div>
                      <button
                        onClick={() => handleOpenBooking('Custom Travel Package', '6-Day Southern Wilderness & Coast')}
                        className="px-4 py-2 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs font-bold rounded-lg cursor-pointer transition-colors"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {activeScreen === 'hotels' && (
          <HotelsScreen
            currency={currency}
            onBookHotel={handleBookHotel}
          />
        )}

        {activeScreen === 'tours' && (
          <ToursScreen
            currency={currency}
            onBookExperience={handleBookExperience}
            onSelectExperience={(exp) => setSelectedExperience(exp)}
          />
        )}

        {activeScreen === 'transport' && (
          <TransportScreen
            currency={currency}
            onOpenBookingModal={(prefill) => handleOpenBooking('Transport & Transfers', prefill || 'Airport Transfer')}
          />
        )}

        {activeScreen === 'about' && (
          <AboutScreen
            onNavigate={navigateTo}
            onOpenBookingModal={() => handleOpenBooking('Custom Travel Package', 'Bespoke Sri Lanka Holiday')}
          />
        )}

        {activeScreen === 'contact' && (
          <ContactScreen />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBookingModal={() => handleOpenBooking('Custom Travel Package', 'General Inquiry')}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        currency={currency}
        initialType={bookingModalType}
        initialItemName={bookingModalItem}
      />

      {/* Experience Detail Modal */}
      <ExperienceDetailModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
        currency={currency}
        onBook={handleBookExperience}
      />

      {/* Quick Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        currency={currency}
        onSelectExperience={(exp) => setSelectedExperience(exp)}
        onSelectHotel={handleBookHotel}
        onNavigate={navigateTo}
      />
    </div>
  );
}
