import { ExperienceItem, HotelItem, TransportVehicle, AirportRoute } from '../types/travel';

export const HERO_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS8jHotojSUppD2cW0mKQEWwmuamt1WZtrAxcdyPhvkIzIztYCHk6SScRgEjLOsQd6aMWlgKZrSLbC7uOI-OSt-_rBC2iMc72gi1_1rYiVEzgpKbZvwHuc53jVx8YEQd2TR5b_61bkDafhQdjhELgrr5woMbg9_8bJLX1UZ2yVfgyV-4QYH1EiYoZ2Se5HirphoEclQ0cHEFnPl2VSPxlQ1ZYNX7mniXujsb-fLzgCgEd3McvitWyg';

export const CHAUFFEUR_VAN_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXyiYwo99PIHlSUw4poLj7SLEKweFn5SRQudwORPKWjmDnovhdrTl6PSQR2-Qeut3aVXkpXNXBdS7obVAA9JugKveG2lSycjj92xZV_00lQAxghcNxk9-gPNl-bmF_3AnnefaAZj-gEH5D1NMK4kJduAAhZ1gPb_E5MIOciKa3RW2_lQKBFeViv7yHTc-YKacvZFF-HUWm8TJCPX72U9BAFhj1XIejXn9ZduolcuSv2ReMkqSIhTLH';

export const COASTAL_TRANSFERS_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBroWVAsDe7MNHm65yFGN1iumhJrjfDA0SGFJFVo1Gb2W6dfxiMtRdTviMIkS0IDBB9S_W7UYmIDNKvGEksJ0bRkAILJvzTfN0Edjbp4n4BVi6hO6ed3M7RjBtIxd7Y7JotFCCwVisB6APNs8iqK4OipBmbJvw3XRCjA5-sEQ-Em7eeNTRD5XzmkZPGOVJIGMYB0wXopokBWwba62iKqO0-SsgAMxgSrWgOevS2e67cfQoszEAZk1x1';

export const HILL_COUNTRY_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp6uwqWeOabbz6hceyBPUjTvtdFzbvcayKudXSkttGdVZJryNkJwAvDtebfrc-MeeYw4RABoMStdyKXZ-eYw2WhYmj9v2jaBiQ04byRwgqWobg-YdCLnMps-DTjvDfakUVF0XWkemMtKfynQOfbUdqwWK-GcF8cjJrSwzTSgkl4h1r-snjdhASpBDwDVI2mnDlxPOVabRtc0qZtS_tOtpzWKSwG7trjJixD-uahLpIJeU7qh92AMIz';

export const POPULAR_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-hotels',
    title: 'Hotels & Villas',
    category: 'hotels',
    tagline: 'Explore Stays',
    location: 'Island-wide (Ella, Galle, Kandy, Bentota)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6S6l9ItXpb3G9xeQ5de2FpXXZED8muZb81DD86jEG_njSR5N4uqgev4vXQdPN5d0HjrMkr15qQ1QQ0kOnVYfs9czKepx2IY4kpejgub9voKCdz0WoVx_3F5fcE4DHl4lFmSFU6vqgJwKGmBt2iY8rH_2m_3R06FAdqp2Ad-WQDVPld0Ik7tapXGWXm3S-ZfvWEWuy02JnAV1wn3RD7CPpNzPjOxaVNIz7pyG3ZzwviFlB-Jc7h2sJ',
    rating: 4.9,
    reviewsCount: 342,
    duration: 'From 1 Night',
    priceLkr: 48000,
    priceUnit: 'night',
    highlights: ['Infinity private pool villas', 'Colonial tea planters bungalows', 'Oceanfront luxury suites', 'Curated chef dining'],
    description: 'From boutique clifftop villas in Galle to misty tea estate bungalows in Ella and Nuwara Eliya, find your private paradise handpicked by our travel designers.',
    included: ['Daily gourmet breakfast', 'Dedicated concierge', 'Welcome Ceylon spice tea', 'High-speed Wi-Fi', 'Complimentary room upgrade (subject to availability)']
  },
  {
    id: 'exp-wildlife',
    title: 'Wildlife Safaris',
    category: 'wildlife',
    tagline: 'View Safaris',
    location: 'Yala & Udawalawe National Parks',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSJhuGDZzN_ozWtnJ_PbQl3pqx-UVjEIKPk43AjNH2CnLXbooPE5HW1orE7Pel2IWUpZ4Iac9Nmcbys_TlVoh12TVpWD3KbJLHCJEf-55NXhTJkBOe_7mD0n95WIZt18pZUKAaTV0tMLVmG-C9tOa0a6PGyvQpkevN1m0BQOOVb6OfKEy-tmyAW66-leYglIjYqEbDyakzatBSIOIUh1vu7RdR6XPDIao3D_AUYIhBWTPT7SqqkhG0',
    rating: 4.95,
    reviewsCount: 512,
    duration: 'Full Day / Half Day',
    priceLkr: 32000,
    priceUnit: 'person',
    highlights: ['Sri Lankan Leopard tracking in Yala Block 1', 'Gentle herds of Asian elephants', 'Sloth bear and crocodile sightings', 'Private custom safari 4x4 with naturalist tracker'],
    description: 'Experience Sri Lanka’s legendary biodiversity up close. Our private custom 4x4 safaris are led by licensed naturalists with guaranteed ethical tracking practices.',
    included: ['Custom 4x4 Safari Jeep', 'Park entrance permits & wildlife department fees', 'Licensed English-speaking naturalist', 'Binoculars & iced refreshments', 'Hotel pickup & drop-off']
  },
  {
    id: 'exp-train',
    title: 'Scenic Train Journeys',
    category: 'train',
    tagline: 'Plan Your Journey',
    location: 'Kandy to Ella & Nanu Oya',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0hsdvZxurmv6TI88SOxRhmqu2od8AwcfwW16Ykpzo7a6e3a9jT6_fbok1MrdEHMalvtAa9_F9DKrq2JjA4WZDppvyuL3MunPOnallqGAJyJFmP4XUqaAc8ypNBs-3o07-D8Jak1i4HknCMZMRzJ4p8H7HnJkMJsZw60aswufZd1zu-SB_ItpD1jVNeD1SV8fU35Lft-IJZPddcVJwCpo7hFHnrEPcsqV4b5nEccNBUNyv8TQrulvp',
    rating: 4.98,
    reviewsCount: 890,
    duration: '6 - 7 Hours',
    priceLkr: 18500,
    priceUnit: 'person',
    highlights: ['World famous blue train traversing misty peaks', 'Crossing Nine Arch Bridge amid emerald valleys', 'Endless cascading waterfalls and Ceylon tea plantations', 'Guaranteed reserved first-class or open-window carriage seats'],
    description: 'Celebrated as one of the world’s most scenic railway journeys, this highland route winds through cloud forests, emerald carpeted tea hills, and century-old stone viaducts.',
    included: ['Guaranteed reserved observation or 1st/2nd class seats', 'Luggage transfer service directly to your hotel', 'Station chauffeur assistance', 'Mineral water & Ceylon tea snack box']
  },
  {
    id: 'exp-whale',
    title: 'Whale Watching',
    category: 'whale',
    tagline: 'See Tours',
    location: 'Mirissa, Southern Coast',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaFVNsCMeVYvB2SmmwQ_O6v4O9BYYkEbTGYFNDu7TFJ8ccLo4Gwr66RMRGYOctZ4P-umdo-A_uz4Xp1Zjtb61IHDG0xE8f3WTUaQsO3UdQUeZlLmGlVnz-3eNHt9Kg0U4wdIBEFrB10HoVlS2bWGpkX4NkmHaoGMJRBsH9bCBvBsX4uJOJZ6fgjOB26s50oRhiYRc_9X55gVD4v2dwzXE8QOTSBTJDWm1ZUicS8UpWRSEC6M5XioW_',
    rating: 4.88,
    reviewsCount: 420,
    duration: '4 Hours (Morning)',
    priceLkr: 22000,
    priceUnit: 'person',
    highlights: ['Majestic Blue Whales (largest animal on earth)', 'Pods of playful Spinner Dolphins', 'Sperm Whales and flying fish', 'Responsible eco-certified vessel with marine biologist'],
    description: 'The southern waters off Mirissa offer the world’s closest migratory feeding grounds for Blue Whales and Bryde’s Whales. Embark aboard comfortable, safety-certified catamarans.',
    included: ['Eco-certified boat excursion', 'Marine biologist commentary', 'Breakfast on board & fresh tropical fruit', 'Life vests and ocean safety gear', 'Motion sickness precautions']
  },
  {
    id: 'exp-culture',
    title: 'Cultural Tours',
    category: 'culture',
    tagline: 'Discover More',
    location: 'Sigiriya, Dambulla & Kandy',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5mADOVPfDby99i4NMySvkhf2_G9Sww6a_w7YeJ5FNLX9y9_jP-pM8e50jaFARSelbuMwYz2EYEPEX1n2Tk3W3700OqXC8Vf0Cb1A7z_lUm6i2c9YfuYrxPib_ahgvOPY5FRuACQH7oNWKRW-r5WF2cpncGowNPmgnc_TrlM_-g1p-S0AuDU7h_sX2e7_1iQO3UmeKj70JDehIzhAkFoOZTown_V2i9WnALXn_haeZ0P32rDPWLP8Q',
    rating: 4.92,
    reviewsCount: 680,
    duration: 'Full Day',
    priceLkr: 28000,
    priceUnit: 'person',
    highlights: ['Climb the 5th-century Sigiriya Lion Rock fortress', 'Golden Cave Temple of Dambulla with ancient Buddha statues', 'Sacred Temple of the Tooth Relic in Kandy', 'Private cultural historian guide'],
    description: 'Step into 2,500 years of living history across UNESCO World Heritage monuments. Marvel at ancient hydraulic gardens, fortress frescoes, and sacred Buddhist sanctuaries.',
    included: ['All monument entrance tickets', 'Expert certified archaeological guide', 'Air-conditioned luxury chauffeur transfer', 'Authentic village rice & curry lunch', 'Cold bottled water & refresher towels']
  },
  {
    id: 'exp-beach',
    title: 'Beach Getaways',
    category: 'beach',
    tagline: 'Explore Beaches',
    location: 'Bentota, Mirissa, Tangalle & Unawatuna',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_inPNaj6ZLXA2ULSVfER2said5B3_SiisYcmTPzrPstFsv8frzAAPEPoFphscOMKJbAqxJKpDmeuw0Bao9OMDqHQe6hcIxyIrOtNZjMe-ZXLPy8U5s203dSokv_edsPFW-Q4mLszAw9sCuK0c_RB0F5GObc11syyCd7yDQY0oEywZ6CSxdEEmhSEyyns95lZKwTZUbU0Z6gLJKvci70ghHJW647X9ByM2Vz8FE_CincSXS5GbtGR9',
    rating: 4.96,
    reviewsCount: 574,
    duration: 'Multi-Day / Flexible',
    priceLkr: 42000,
    priceUnit: 'night',
    highlights: ['Golden palm-fringed sands & turquoise surf', 'Sunset catamaran cruises & turtle sanctuaries', 'Oceanfront Ayurvedic spa therapies', 'Fresh seafood barbecue on the beach'],
    description: 'Unwind along Sri Lanka’s famed southern and eastern coastlines. Bask on secluded coves, enjoy gentle surf, and rejuvenate with tranquil oceanfront serenity.',
    included: ['Beachfront suite accommodation', 'Private daybeds and beach butler', 'Daily sunset cocktail hour', 'Complimentary paddleboard & snorkel gear']
  }
];

export const HOTELS_CATALOG: HotelItem[] = [
  {
    id: 'htl-1',
    name: 'Ceylon Tea Trails Clifftop Bungalow',
    type: 'Heritage Bungalow',
    location: 'Castlereagh Lake, Hatton',
    region: 'Ella',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6S6l9ItXpb3G9xeQ5de2FpXXZED8muZb81DD86jEG_njSR5N4uqgev4vXQdPN5d0HjrMkr15qQ1QQ0kOnVYfs9czKepx2IY4kpejgub9voKCdz0WoVx_3F5fcE4DHl4lFmSFU6vqgJwKGmBt2iY8rH_2m_3R06FAdqp2Ad-WQDVPld0Ik7tapXGWXm3S-ZfvWEWuy02JnAV1wn3RD7CPpNzPjOxaVNIz7pyG3ZzwviFlB-Jc7h2sJ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD6S6l9ItXpb3G9xeQ5de2FpXXZED8muZb81DD86jEG_njSR5N4uqgev4vXQdPN5d0HjrMkr15qQ1QQ0kOnVYfs9czKepx2IY4kpejgub9voKCdz0WoVx_3F5fcE4DHl4lFmSFU6vqgJwKGmBt2iY8rH_2m_3R06FAdqp2Ad-WQDVPld0Ik7tapXGWXm3S-ZfvWEWuy02JnAV1wn3RD7CPpNzPjOxaVNIz7pyG3ZzwviFlB-Jc7h2sJ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBp6uwqWeOabbz6hceyBPUjTvtdFzbvcayKudXSkttGdVZJryNkJwAvDtebfrc-MeeYw4RABoMStdyKXZ-eYw2WhYmj9v2jaBiQ04byRwgqWobg-YdCLnMps-DTjvDfakUVF0XWkemMtKfynQOfbUdqwWK-GcF8cjJrSwzTSgkl4h1r-snjdhASpBDwDVI2mnDlxPOVabRtc0qZtS_tOtpzWKSwG7trjJixD-uahLpIJeU7qh92AMIz'
    ],
    priceLkr: 98000,
    rating: 4.96,
    reviewsCount: 182,
    amenities: ['Infinity Heated Pool', 'Private Butler', 'Fine Dining', 'Lake View', 'Spa', 'Tea Tasting Tour'],
    description: 'Restored colonial tea planter residence perched above misty mountain lakes, complete with antique fireplaces, croquet lawns, and world-class butler service.'
  },
  {
    id: 'htl-2',
    name: 'Cape Weligama Cliff Ocean Villa',
    type: 'Luxury Villa',
    location: 'Weligama Bay, Galle',
    region: 'Galle',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_inPNaj6ZLXA2ULSVfER2said5B3_SiisYcmTPzrPstFsv8frzAAPEPoFphscOMKJbAqxJKpDmeuw0Bao9OMDqHQe6hcIxyIrOtNZjMe-ZXLPy8U5s203dSokv_edsPFW-Q4mLszAw9sCuK0c_RB0F5GObc11syyCd7yDQY0oEywZ6CSxdEEmhSEyyns95lZKwTZUbU0Z6gLJKvci70ghHJW647X9ByM2Vz8FE_CincSXS5GbtGR9',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB_inPNaj6ZLXA2ULSVfER2said5B3_SiisYcmTPzrPstFsv8frzAAPEPoFphscOMKJbAqxJKpDmeuw0Bao9OMDqHQe6hcIxyIrOtNZjMe-ZXLPy8U5s203dSokv_edsPFW-Q4mLszAw9sCuK0c_RB0F5GObc11syyCd7yDQY0oEywZ6CSxdEEmhSEyyns95lZKwTZUbU0Z6gLJKvci70ghHJW647X9ByM2Vz8FE_CincSXS5GbtGR9',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBroWVAsDe7MNHm65yFGN1iumhJrjfDA0SGFJFVo1Gb2W6dfxiMtRdTviMIkS0IDBB9S_W7UYmIDNKvGEksJ0bRkAILJvzTfN0Edjbp4n4BVi6hO6ed3M7RjBtIxd7Y7JotFCCwVisB6APNs8iqK4OipBmbJvw3XRCjA5-sEQ-Em7eeNTRD5XzmkZPGOVJIGMYB0wXopokBWwba62iKqO0-SsgAMxgSrWgOevS2e67cfQoszEAZk1x1'
    ],
    priceLkr: 115000,
    rating: 4.98,
    reviewsCount: 240,
    amenities: ['Crescent Moon Pool', 'Private Beach Access', 'Oceanfront Dining', 'Ayurvedic Wellness', 'Gym', 'Snorkeling'],
    description: 'Set atop 40-metre cliffs above the Indian Ocean, featuring ultra-private villas with generous garden pavilions and panoramic views of crashing waves.'
  },
  {
    id: 'htl-3',
    name: 'Water Garden Sigiriya Water Chalets',
    type: 'Boutique Resort',
    location: 'Sigiriya Cultural Triangle',
    region: 'Sigiriya',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5mADOVPfDby99i4NMySvkhf2_G9Sww6a_w7YeJ5FNLX9y9_jP-pM8e50jaFARSelbuMwYz2EYEPEX1n2Tk3W3700OqXC8Vf0Cb1A7z_lUm6i2c9YfuYrxPib_ahgvOPY5FRuACQH7oNWKRW-r5WF2cpncGowNPmgnc_TrlM_-g1p-S0AuDU7h_sX2e7_1iQO3UmeKj70JDehIzhAkFoOZTown_V2i9WnALXn_haeZ0P32rDPWLP8Q',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD5mADOVPfDby99i4NMySvkhf2_G9Sww6a_w7YeJ5FNLX9y9_jP-pM8e50jaFARSelbuMwYz2EYEPEX1n2Tk3W3700OqXC8Vf0Cb1A7z_lUm6i2c9YfuYrxPib_ahgvOPY5FRuACQH7oNWKRW-r5WF2cpncGowNPmgnc_TrlM_-g1p-S0AuDU7h_sX2e7_1iQO3UmeKj70JDehIzhAkFoOZTown_V2i9WnALXn_haeZ0P32rDPWLP8Q'
    ],
    priceLkr: 72000,
    rating: 4.91,
    reviewsCount: 156,
    amenities: ['Sigiriya Rock View', 'Private Plunge Pool', 'Lotus Waterways', 'Helipad', 'Fine Dining', 'Bicycle Tours'],
    description: 'Inspired by the 2,000-year-old water gardens of Sigiriya, these contemporary villas hover over serene lakes facing the dramatic silhouette of Lion Rock.'
  },
  {
    id: 'htl-4',
    name: 'Wild Coast Tented Lodge Yala',
    type: 'Eco Retreat',
    location: 'Yala National Park Beachfront',
    region: 'Yala',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSJhuGDZzN_ozWtnJ_PbQl3pqx-UVjEIKPk43AjNH2CnLXbooPE5HW1orE7Pel2IWUpZ4Iac9Nmcbys_TlVoh12TVpWD3KbJLHCJEf-55NXhTJkBOe_7mD0n95WIZt18pZUKAaTV0tMLVmG-C9tOa0a6PGyvQpkevN1m0BQOOVb6OfKEy-tmyAW66-leYglIjYqEbDyakzatBSIOIUh1vu7RdR6XPDIao3D_AUYIhBWTPT7SqqkhG0',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCSJhuGDZzN_ozWtnJ_PbQl3pqx-UVjEIKPk43AjNH2CnLXbooPE5HW1orE7Pel2IWUpZ4Iac9Nmcbys_TlVoh12TVpWD3KbJLHCJEf-55NXhTJkBOe_7mD0n95WIZt18pZUKAaTV0tMLVmG-C9tOa0a6PGyvQpkevN1m0BQOOVb6OfKEy-tmyAW66-leYglIjYqEbDyakzatBSIOIUh1vu7RdR6XPDIao3D_AUYIhBWTPT7SqqkhG0'
    ],
    priceLkr: 125000,
    rating: 4.97,
    reviewsCount: 198,
    amenities: ['Luxury Cocoon Tents', 'Daily Safari Included', 'Freeform Pool', 'Oceanfront Dining', 'Private Naturalist', 'Spa'],
    description: 'Spectacular arched cocoon tents nestled where the dense jungle meets the raw Southern Ocean. Leopards and elephants frequently stroll past nearby watering holes.'
  },
  {
    id: 'htl-5',
    name: '98 Acres Resort & Spa Ella',
    type: 'Boutique Resort',
    location: 'Little Adam’s Peak, Ella',
    region: 'Ella',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS8jHotojSUppD2cW0mKQEWwmuamt1WZtrAxcdyPhvkIzIztYCHk6SScRgEjLOsQd6aMWlgKZrSLbC7uOI-OSt-_rBC2iMc72gi1_1rYiVEzgpKbZvwHuc53jVx8YEQd2TR5b_61bkDafhQdjhELgrr5woMbg9_8bJLX1UZ2yVfgyV-4QYH1EiYoZ2Se5HirphoEclQ0cHEFnPl2VSPxlQ1ZYNX7mniXujsb-fLzgCgEd3McvitWyg',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAS8jHotojSUppD2cW0mKQEWwmuamt1WZtrAxcdyPhvkIzIztYCHk6SScRgEjLOsQd6aMWlgKZrSLbC7uOI-OSt-_rBC2iMc72gi1_1rYiVEzgpKbZvwHuc53jVx8YEQd2TR5b_61bkDafhQdjhELgrr5woMbg9_8bJLX1UZ2yVfgyV-4QYH1EiYoZ2Se5HirphoEclQ0cHEFnPl2VSPxlQ1ZYNX7mniXujsb-fLzgCgEd3McvitWyg'
    ],
    priceLkr: 64000,
    rating: 4.93,
    reviewsCount: 310,
    amenities: ['Ella Gap View', 'Private Jacuzzi', 'Infinity Pool', 'Helipad', 'Tea Plantation Hikes', 'Fine Bar'],
    description: 'Eco-luxury chalets built from reclaimed railway timber and bamboo, set amidst a 98-acre working tea estate overlooking the majestic Ella Gap.'
  },
  {
    id: 'htl-6',
    name: 'The Fortress Resort & Spa Bentota / Koggala',
    type: 'Luxury Villa',
    location: 'Southern Coast, Koggala',
    region: 'Bentota',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBroWVAsDe7MNHm65yFGN1iumhJrjfDA0SGFJFVo1Gb2W6dfxiMtRdTviMIkS0IDBB9S_W7UYmIDNKvGEksJ0bRkAILJvzTfN0Edjbp4n4BVi6hO6ed3M7RjBtIxd7Y7JotFCCwVisB6APNs8iqK4OipBmbJvw3XRCjA5-sEQ-Em7eeNTRD5XzmkZPGOVJIGMYB0wXopokBWwba62iKqO0-SsgAMxgSrWgOevS2e67cfQoszEAZk1x1',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBroWVAsDe7MNHm65yFGN1iumhJrjfDA0SGFJFVo1Gb2W6dfxiMtRdTviMIkS0IDBB9S_W7UYmIDNKvGEksJ0bRkAILJvzTfN0Edjbp4n4BVi6hO6ed3M7RjBtIxd7Y7JotFCCwVisB6APNs8iqK4OipBmbJvw3XRCjA5-sEQ-Em7eeNTRD5XzmkZPGOVJIGMYB0wXopokBWwba62iKqO0-SsgAMxgSrWgOevS2e67cfQoszEAZk1x1'
    ],
    priceLkr: 58000,
    rating: 4.89,
    reviewsCount: 175,
    amenities: ['Dutch Fort Architecture', 'Beachfront Cabanas', 'Wine Cellar', 'Kids Club', 'Turtle Conservation', 'Spa'],
    description: 'A boutique modern fortress fronting pristine shores, marrying Dutch and Portuguese colonial motifs with ultra-contemporary five-star luxury.'
  }
];

export const FLEET_VEHICLES: TransportVehicle[] = [
  {
    id: 'veh-van',
    name: 'Mercedes-Benz / Toyota VIP Luxury Van',
    type: 'Luxury Van',
    seats: 7,
    luggage: 6,
    image: CHAUFFEUR_VAN_IMAGE,
    pricePerDayLkr: 38000,
    features: ['High-roof luxury reclining captain chairs', 'Onboard refrigerator & chilled refreshments', 'High-speed Wi-Fi & USB charging ports', 'Dual-zone climate control', 'English-speaking government certified chauffeur'],
    description: 'The pinnacle of touring comfort for families and executive groups. Smooth island-wide traversal with spacious legroom and panoramic tinted privacy windows.'
  },
  {
    id: 'veh-sedan',
    name: 'Executive Premium Sedan (Toyota Camry / Premio)',
    type: 'Executive Sedan',
    seats: 3,
    luggage: 3,
    image: COASTAL_TRANSFERS_IMAGE,
    pricePerDayLkr: 26000,
    features: ['Plush leather seating', 'Whisper-quiet air conditioning', 'Complimentary bottled mineral water & wipes', 'Comprehensive passenger insurance', 'Professional suited chauffeur'],
    description: 'Ideal for couples and solo business travelers seeking elegant, rapid, and peaceful transfers between Colombo, the coastal belt, and cultural sights.'
  },
  {
    id: 'veh-kdh',
    name: 'Toyota Commuter KDH Grand Cabin',
    type: 'KDH Commuter',
    seats: 10,
    luggage: 8,
    image: HILL_COUNTRY_IMAGE,
    pricePerDayLkr: 32000,
    features: ['Extra-wide aisle and high headroom', 'Rear independent AC blowers', 'Ample boot space for golf sets and surfboards', 'Smooth hill-climbing suspension', 'Punctual, safety-focused driver'],
    description: 'The trusted workhorse for larger family vacations, small travel groups, and round-island expeditions navigating winding mountain passes effortlessly.'
  },
  {
    id: 'veh-4x4',
    name: 'Toyota Land Cruiser Prado 4x4 Safari Edition',
    type: '4x4 Safari Cruiser',
    seats: 5,
    luggage: 4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSJhuGDZzN_ozWtnJ_PbQl3pqx-UVjEIKPk43AjNH2CnLXbooPE5HW1orE7Pel2IWUpZ4Iac9Nmcbys_TlVoh12TVpWD3KbJLHCJEf-55NXhTJkBOe_7mD0n95WIZt18pZUKAaTV0tMLVmG-C9tOa0a6PGyvQpkevN1m0BQOOVb6OfKEy-tmyAW66-leYglIjYqEbDyakzatBSIOIUh1vu7RdR6XPDIao3D_AUYIhBWTPT7SqqkhG0',
    pricePerDayLkr: 45000,
    features: ['Heavy-duty 4WD drivetrain for off-road trails', 'Elevated safari seating clearance', 'Snorkel & rugged suspension', 'Emergency satellite communications', 'Veteran wildlife driver tracker'],
    description: 'Custom-engineered for wilderness lovers. Traverses rugged forest tracks, river fords, and national park fringes with supreme safety and rugged luxury.'
  }
];

export const AIRPORT_ROUTES: AirportRoute[] = [
  { id: 'rt-1', from: 'Bandaranaike Airport (CMB)', to: 'Colombo City Center', distanceKm: 35, duration: '40 mins', priceLkr: 14500 },
  { id: 'rt-2', from: 'Bandaranaike Airport (CMB)', to: 'Galle Fort / Unawatuna', distanceKm: 155, duration: '2 hours (Expressway)', priceLkr: 32000 },
  { id: 'rt-3', from: 'Bandaranaike Airport (CMB)', to: 'Bentota / Beruwala', distanceKm: 108, duration: '1 hr 40 mins', priceLkr: 24500 },
  { id: 'rt-4', from: 'Bandaranaike Airport (CMB)', to: 'Kandy Hill Capital', distanceKm: 115, duration: '2 hrs 45 mins', priceLkr: 28000 },
  { id: 'rt-5', from: 'Bandaranaike Airport (CMB)', to: 'Ella Highlands', distanceKm: 210, duration: '4 hrs 30 mins', priceLkr: 48000 },
  { id: 'rt-6', from: 'Bandaranaike Airport (CMB)', to: 'Sigiriya & Dambulla', distanceKm: 148, duration: '3 hrs 15 mins', priceLkr: 34000 },
  { id: 'rt-7', from: 'Bandaranaike Airport (CMB)', to: 'Mirissa / Weligama', distanceKm: 175, duration: '2 hrs 15 mins (Expressway)', priceLkr: 36000 },
  { id: 'rt-8', from: 'Bandaranaike Airport (CMB)', to: 'Yala National Park', distanceKm: 290, duration: '4 hrs 45 mins', priceLkr: 58000 }
];

export const TESTIMONIALS = [
  {
    name: 'Charlotte & David Hughes',
    country: 'United Kingdom',
    quote: 'Our 10 days in Sri Lanka with Ceylora Travels was pure magic. Our chauffeur Nihal was so knowledgeable and polite, and the boutique villas they selected in Ella and Galle were breathtaking!',
    tour: 'Classic Ceylon Grand Tour',
    rating: 5
  },
  {
    name: 'Marcus Lindqvist',
    country: 'Sweden',
    quote: 'Flawless airport pickup and private van transport across Kandy and Ella. The scenic train ticket booking made our dream journey stress-free. Truly five-star service!',
    tour: 'Highlands & Train Discovery',
    rating: 5
  },
  {
    name: 'Aisha Al-Mansoor',
    country: 'UAE',
    quote: 'Exceptional hospitality. The Yala safari was private, ethical, and we saw two leopards! Booking through Ceylora was the best decision for our family vacation.',
    tour: 'Private Wildlife & Coastal Escape',
    rating: 5
  }
];

export const FAQS = [
  {
    question: 'Are Ceylora chauffeurs certified and English-speaking?',
    answer: 'Yes, every chauffeur in the Ceylora team holds full licensing from the Sri Lanka Tourism Development Authority (SLTDA), undergoes thorough background checks, and speaks fluent English.'
  },
  {
    question: 'How do airport pickups work when my flight lands at CMB?',
    answer: 'Your personal chauffeur will await you inside the airport arrival terminal holding a personalized Ceylora Travels greeting plaque. We monitor your flight in real-time, so delays are accommodated automatically without extra charge.'
  },
  {
    question: 'Can I customize my tour itinerary and travel pace?',
    answer: 'Absolutely. We specialize in fully bespoke itineraries. Whether you desire relaxing beach days, adventurous wildlife tracking, or culinary masterclasses, our local specialists tailor every detail to your preferences.'
  },
  {
    question: 'What currencies and payment methods do you accept?',
    answer: 'We accept LKR, USD, EUR, GBP, and AUD via major credit cards (Visa, MasterCard, Amex) with bank-grade 256-bit encryption. Cash payments on arrival can also be arranged.'
  }
];
