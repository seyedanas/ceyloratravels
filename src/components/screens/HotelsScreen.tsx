import React, { useState } from 'react';
import { HOTELS_CATALOG } from '../../data/travelData';
import { CurrencyCode, HotelItem } from '../../types/travel';
import { formatPrice } from '../../utils/currency';
import { Star, MapPin, Check, SlidersHorizontal } from 'lucide-react';

interface HotelsScreenProps {
  currency: CurrencyCode;
  onBookHotel: (hotel: HotelItem) => void;
}

export const HotelsScreen: React.FC<HotelsScreenProps> = ({ currency, onBookHotel }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [activeModalHotel, setActiveModalHotel] = useState<HotelItem | null>(null);

  const regions = ['all', 'Ella', 'Galle', 'Sigiriya', 'Yala', 'Bentota'];
  const types = ['all', 'Luxury Villa', 'Boutique Resort', 'Heritage Bungalow', 'Eco Retreat'];

  const filteredHotels = HOTELS_CATALOG.filter((hotel) => {
    const matchRegion = selectedRegion === 'all' || hotel.region === selectedRegion;
    const matchType = selectedType === 'all' || hotel.type === selectedType;
    return matchRegion && matchType;
  });

  return (
    <div className="bg-[#faf9f6] min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#0f2d25] text-white py-14 px-4 sm:px-8 border-b border-[#1b4339]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c49a56] font-semibold block mb-2">
            Curated Stays &amp; Sanctuaries
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Luxury Hotels &amp; Private Villas
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl font-light">
            Each property in our portfolio has been personally inspected for architectural distinction, personalized butler hospitality, and authentic Sri Lankan warmth.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
            <SlidersHorizontal className="w-4 h-4 text-[#a67b38]" />
            <span>Filter By:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Region Filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs text-gray-500">Region:</span>
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    selectedRegion === reg
                      ? 'bg-[#0f2d25] text-white font-semibold'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {reg === 'all' ? 'All Island' : reg}
                </button>
              ))}
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs text-gray-500">Type:</span>
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedType(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    selectedType === t
                      ? 'bg-[#a67b38] text-white font-semibold'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {t === 'all' ? 'All Types' : t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image & Type Badge */}
              <div className="relative h-60 overflow-hidden bg-gray-100">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-[#0f2d25]/85 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                  {hotel.type}
                </span>
                <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{hotel.rating}</span>
                  <span className="text-gray-400 text-[10px] font-normal">({hotel.reviewsCount})</span>
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#a67b38]" />
                    <span>{hotel.location}</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-[#0f2d25] transition-colors leading-snug">
                    {hotel.name}
                  </h3>

                  <p className="text-xs text-gray-600 mt-2.5 line-clamp-2 leading-relaxed">
                    {hotel.description}
                  </p>

                  {/* Amenities Pills */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {hotel.amenities.slice(0, 4).map((amenity) => (
                      <span
                        key={amenity}
                        className="text-[11px] font-medium bg-[#faf7f2] text-gray-700 px-2.5 py-1 rounded-md"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider block">
                      Starting From
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold text-[#0f2d25]">
                        {formatPrice(hotel.priceLkr, currency)}
                      </span>
                      <span className="text-xs text-gray-500 font-normal">/ night</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalHotel(hotel)}
                      className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0f2d25] hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onBookHotel(hotel)}
                      className="px-4 py-2 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs font-bold rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
                    >
                      Book Villa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hotel Detail Quick View Modal */}
      {activeModalHotel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
            <button
              onClick={() => setActiveModalHotel(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold cursor-pointer w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
            >
              &times;
            </button>

            <div className="relative h-64 rounded-xl overflow-hidden mb-5">
              <img
                src={activeModalHotel.image}
                alt={activeModalHotel.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-[#0f2d25]/90 text-white text-xs px-3 py-1 rounded-full font-medium">
                {activeModalHotel.type}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#a67b38] font-semibold">
              <MapPin className="w-4 h-4" />
              <span>{activeModalHotel.location}</span>
            </div>

            <h2 className="font-heading text-2xl font-bold text-gray-900 mt-1">
              {activeModalHotel.name}
            </h2>

            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              {activeModalHotel.description}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mt-5 mb-2">
              Signature Amenities &amp; Services
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {activeModalHotel.amenities.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-gray-700">
                  <span className="w-4 h-4 rounded-full bg-[#f6efe4] text-[#a67b38] flex items-center justify-center text-[10px]">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500">Nightly Rate:</span>
                <div className="text-xl font-bold text-[#0f2d25]">
                  {formatPrice(activeModalHotel.priceLkr, currency)}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveModalHotel(null)}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onBookHotel(activeModalHotel);
                    setActiveModalHotel(null);
                  }}
                  className="px-6 py-2.5 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs font-bold rounded-lg shadow-sm cursor-pointer"
                >
                  Reserve Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
