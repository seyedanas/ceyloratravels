import React from 'react';
import { CurrencyCode, ExperienceItem } from '../types/travel';
import { formatPrice } from '../utils/currency';
import { X, MapPin, Star, Clock, Check, ShieldCheck } from 'lucide-react';

interface ExperienceDetailModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
  currency: CurrencyCode;
  onBook: (experience: ExperienceItem) => void;
}

export const ExperienceDetailModal: React.FC<ExperienceDetailModalProps> = ({
  experience,
  onClose,
  currency,
  onBook,
}) => {
  if (!experience) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden mb-5 bg-gray-100">
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3 bg-[#0f2d25]/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
            {experience.duration || 'Full Day'}
          </div>
          <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#b4853e]" />
            <span>{experience.location}</span>
          </div>
        </div>

        {/* Title & Rating */}
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25]">
            {experience.title}
          </h2>
          <div className="flex items-center gap-1 text-xs font-bold bg-[#faf7f2] px-2.5 py-1 rounded-lg border border-amber-200 text-gray-800 flex-shrink-0">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{experience.rating}</span>
            <span className="text-gray-400 font-normal">({experience.reviewsCount})</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">
          {experience.description}
        </p>

        {/* Highlights */}
        <div className="mt-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
            Experience Highlights
          </h4>
          <div className="space-y-1.5">
            {experience.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                <Check className="w-4 h-4 text-[#a67b38] flex-shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Inclusions */}
        {experience.included && experience.included.length > 0 && (
          <div className="mt-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
              What's Included
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {experience.included.map((inc, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-600 bg-gray-50 p-2 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#a67b38]"></span>
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing & CTA */}
        <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-gray-400 uppercase tracking-wider block">
              Price per {experience.priceUnit}
            </span>
            <div className="text-2xl font-bold text-[#0f2d25]">
              {formatPrice(experience.priceLkr, currency)}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              Back
            </button>
            <button
              onClick={() => {
                onBook(experience);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs font-bold rounded-lg shadow-sm cursor-pointer"
            >
              Book This Experience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
