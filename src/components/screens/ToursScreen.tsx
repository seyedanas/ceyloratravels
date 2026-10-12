import React, { useState } from 'react';
import { POPULAR_EXPERIENCES } from '../../data/travelData';
import { CurrencyCode, ExperienceItem } from '../../types/travel';
import { formatPrice } from '../../utils/currency';
import { Clock, MapPin, Star, Check } from 'lucide-react';

interface ToursScreenProps {
  currency: CurrencyCode;
  onBookExperience: (item: ExperienceItem) => void;
  onSelectExperience: (item: ExperienceItem) => void;
}

export const ToursScreen: React.FC<ToursScreenProps> = ({
  currency,
  onBookExperience,
  onSelectExperience,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Experiences' },
    { id: 'wildlife', label: 'Wildlife & Safari' },
    { id: 'train', label: 'Scenic Trains' },
    { id: 'whale', label: 'Whale Watching' },
    { id: 'culture', label: 'Cultural & Heritage' },
    { id: 'beach', label: 'Beach Getaways' },
  ];

  const filteredExperiences = POPULAR_EXPERIENCES.filter((exp) => {
    if (activeCategory === 'all') return true;
    return exp.category === activeCategory;
  });

  return (
    <div className="bg-[#faf9f6] min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#0f2d25] text-white py-14 px-4 sm:px-8 border-b border-[#1b4339]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c49a56] font-semibold block mb-2">
            Authentic Island Expeditions
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Tours &amp; Curated Experiences
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl font-light">
            Led by private certified naturalists, cultural historians, and licensed chauffeurs. Experience Sri Lanka through authentic, private, and leisurely paced excursions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#a67b38] text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image & Badges */}
              <div className="relative h-60 overflow-hidden bg-gray-100">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-[#0f2d25]/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                  {exp.duration || 'Flexible'}
                </span>
                <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{exp.rating}</span>
                  <span className="text-gray-400 text-[10px] font-normal">({exp.reviewsCount})</span>
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#a67b38]" />
                    <span>{exp.location}</span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-[#0f2d25] transition-colors leading-snug">
                    {exp.title}
                  </h3>

                  <p className="text-xs text-gray-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="mt-4 space-y-1.5">
                    {exp.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-[#a67b38] flex-shrink-0" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider block">
                      Price per {exp.priceUnit}
                    </span>
                    <div className="text-lg font-bold text-[#0f2d25]">
                      {formatPrice(exp.priceLkr, currency)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectExperience(exp)}
                      className="px-3 py-2 text-xs font-semibold text-gray-600 hover:text-[#0f2d25] hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => onBookExperience(exp)}
                      className="px-4 py-2 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs font-bold rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
                    >
                      Book Tour
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
