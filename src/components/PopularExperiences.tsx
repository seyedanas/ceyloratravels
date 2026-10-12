import React from 'react';
import { POPULAR_EXPERIENCES } from '../data/travelData';
import { ExperienceItem, ScreenId } from '../types/travel';

interface PopularExperiencesProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectExperience: (item: ExperienceItem) => void;
}

export const PopularExperiences: React.FC<PopularExperiencesProps> = ({
  onNavigate,
  onSelectExperience,
}) => {
  const handleCardClick = (item: ExperienceItem) => {
    if (item.category === 'hotels') {
      onNavigate('hotels');
    } else {
      onSelectExperience(item);
    }
  };

  return (
    <section className="py-16 bg-[#faf9f6]" data-purpose="popular-experiences">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38]">
              EXPLORE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0f2d25] mt-1">
              Popular Experiences in Sri Lanka
            </h2>
          </div>
          <button
            onClick={() => onNavigate('tours')}
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2d25] hover:text-[#a67b38] transition-colors group cursor-pointer"
          >
            <span>View All Experiences</span>
            <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>

        {/* Experience Cards Grid (6 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {POPULAR_EXPERIENCES.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="group bg-white rounded-xl overflow-hidden card-shadow flex flex-col transition-all duration-300 hover:-translate-y-1.5 cursor-pointer border border-transparent hover:border-[#a67b38]/20"
            >
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <img
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.image}
                  loading="lazy"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base text-gray-900 group-hover:text-[#0f2d25] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed line-clamp-2">
                    {item.description.slice(0, 75)}...
                  </p>
                </div>

                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#a67b38] group-hover:text-[#90682b]">
                  <span>{item.tagline}</span>
                  <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition-transform"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
