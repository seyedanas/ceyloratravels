import React from 'react';
import { HERO_IMAGE, CHAUFFEUR_VAN_IMAGE, TESTIMONIALS } from '../../data/travelData';
import { ScreenId } from '../../types/travel';
import { Award, Compass, HeartHandshake, ShieldCheck, Star } from 'lucide-react';

interface AboutScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBookingModal: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate, onOpenBookingModal }) => {
  return (
    <div className="bg-[#faf9f6] min-h-screen pb-20">
      {/* Header Banner */}
      <div className="bg-[#0f2d25] text-white py-14 px-4 sm:px-8 border-b border-[#1b4339]">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c49a56] font-semibold block mb-2">
            Our Heritage &amp; Promise
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            About Ceylora Travels
          </h1>
          <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-2xl font-light">
            Founded in Colombo and Galle with a passion for unveiling the authentic soul of Sri Lanka—its wild sanctuaries, highland tea hills, and timeless coastal sanctuaries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[440px]">
              <img
                src={HERO_IMAGE}
                alt="Ella Nine Arch Bridge"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-xl card-shadow border border-gray-100 max-w-xs hidden sm:block">
              <span className="text-2xl font-bold text-[#0f2d25]">100% Local</span>
              <p className="text-xs text-gray-500 mt-1">
                Deep-rooted Sri Lankan guides, certified chauffeurs, and family-owned boutique partnerships.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <span className="text-xs font-serif italic text-[#a67b38] font-semibold tracking-wide">
              Crafted with Care
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#0f2d25] mt-1 leading-snug">
              Travel that honors the land and enriches the traveler
            </h2>
            <p className="text-sm text-gray-600 mt-4 leading-relaxed">
              At Ceylora Travels, we believe that true luxury lies in authentic connection. We move away from rushed bus itineraries and commercial tourist traps. Instead, we craft quiet moments: dawn leopard tracking in Yala before the crowds, private sunrise tea tastings on mist-draped peaks, and hand-selected coastal villas where the ocean is your soundtrack.
            </p>
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              Our team of veteran travel designers, licensed English-speaking chauffeurs, and naturalists bring decades of collective wisdom to ensure every kilometer traveled is seamless, safe, and deeply memorable.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#a67b38] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">SLTDA Certified</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Officially licensed &amp; insured</p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#a67b38] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Zero Pressure</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">No forced shopping stops</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars of Service */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 card-shadow border border-gray-100 mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38]">
              OUR PHILOSOPHY
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25] mt-1">
              The Four Ceylora Pillars
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-[#faf7f2] border border-amber-50">
              <div className="w-10 h-10 rounded-full bg-[#0f2d25] text-white flex items-center justify-center mb-4">
                <Compass className="w-5 h-5 text-[#c49a56]" />
              </div>
              <h4 className="text-sm font-bold text-gray-900">Curated Boutique</h4>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                We only recommend hotels and villas where we have personally slept and dined.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#faf7f2] border border-amber-50">
              <div className="w-10 h-10 rounded-full bg-[#0f2d25] text-white flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-[#c49a56]" />
              </div>
              <h4 className="text-sm font-bold text-gray-900">Elite Chauffeurs</h4>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Courteous, defensive drivers who double as your friendly local cultural ambassadors.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#faf7f2] border border-amber-50">
              <div className="w-10 h-10 rounded-full bg-[#0f2d25] text-white flex items-center justify-center mb-4">
                <HeartHandshake className="w-5 h-5 text-[#c49a56]" />
              </div>
              <h4 className="text-sm font-bold text-gray-900">Ethical Safaris</h4>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Strict animal welfare respect in Yala, Udawalawe, and whale waters—no overcrowding.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#faf7f2] border border-amber-50">
              <div className="w-10 h-10 rounded-full bg-[#0f2d25] text-white flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-[#c49a56]" />
              </div>
              <h4 className="text-sm font-bold text-gray-900">24/7 Concierge</h4>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Direct WhatsApp access to our operations directors from arrival to farewell.
              </p>
            </div>
          </div>
        </div>

        {/* Guest Reviews */}
        <div className="mb-14">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a67b38]">
              TESTIMONIALS
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0f2d25] mt-1">
              Words from our Travelers
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl card-shadow border border-gray-100 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-700 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <span className="text-xs font-bold text-gray-900 block">{t.name}</span>
                  <span className="text-[11px] text-[#a67b38] block mt-0.5">
                    {t.country} • {t.tour}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center py-10 bg-[#0f2d25] rounded-2xl text-white p-8">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold">
            Ready to Plan Your Sri Lankan Journey?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-md mx-auto">
            Speak directly with our travel designers in Colombo or receive a personalized itinerary proposal within 12 hours.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={onOpenBookingModal}
              className="px-6 py-3 bg-[#a67b38] hover:bg-[#90682b] text-white text-xs sm:text-sm font-bold rounded-lg shadow-sm transition-all cursor-pointer"
            >
              Start Planning Now
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer"
            >
              Contact Our Office
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
