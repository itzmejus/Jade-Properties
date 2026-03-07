import React, { useState } from 'react';
import { MapPin, Search, DollarSign, Bed, Building2, Home, ChevronDown, SlidersHorizontal, RotateCcw, X } from 'lucide-react';
import heroBg from '../assets/Banner1.jpg';

declare module 'react' {
    interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
        jsx?: boolean;
    }
}

const HomePage = () => {
    const [selectedTab, setSelectedTab] = useState('RENT');
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        location: '',
        price: '',
        bedsBaths: '',
        propertyType: '',
        furnishingStatus: ''
    });

    const tabs = ['RENT', 'BUY', 'OFF PLAN', 'COMMERCIAL'];

    const handleResetFilters = () => {
        setFilters({
            location: '',
            price: '',
            bedsBaths: '',
            propertyType: '',
            furnishingStatus: ''
        });
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden">

            {/* ── Image Background ── */}
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={heroBg}
                    alt="Hero background"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                {/* Dark gradient overlay — adjust opacity to taste */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-end md:justify-center min-h-screen px-4 md:px-8 pb-10 md:py-24">

                {/* Brand Name */}
                <div className="text-center mb-3 md:mb-6 animate-fade-in">
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-[#D4AF37] tracking-wide leading-tight uppercase drop-shadow-lg">
                        Jade Properties <span className="text-white drop-shadow-lg">&</span> Real Estate
                    </h1>
                </div>

                {/* Hero Title */}
                <div className="text-center mb-5 md:mb-14 animate-fade-in">
                    <h2 className="text-lg md:text-3xl lg:text-4xl font-semibold text-white drop-shadow-md leading-tight">
                        The Journey To Modern Living
                        <br />
                        <span className="text-[#D4AF37]">Starts Here</span>
                    </h2>
                </div>

                {/* Filter Container */}
                <div className="w-full max-w-5xl">

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-1.5 mb-0">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                className={`px-7 py-3 text-sm font-bold tracking-widest uppercase rounded-t-xl transition-all duration-200 ${selectedTab === tab
                                    ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/30'
                                    : 'bg-white/80 backdrop-blur-sm text-black/60 hover:bg-white hover:text-black border border-white/60'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Main Search Panel */}
                    <div className="bg-white rounded-b-2xl rounded-tr-2xl shadow-2xl overflow-hidden">

                        {/* Gold top accent bar */}
                        <div className="h-1 w-full bg-gradient-to-r from-[#B8960C] via-[#D4AF37] to-[#E5C84A]" />

                        <div className="p-6 md:p-8">

                            {/* Search Bar */}
                            <div className="flex flex-col md:flex-row gap-3 mb-6">
                                <div className="flex items-center flex-1 px-5 py-4 border-2 border-gray-200 rounded-xl bg-gray-50 focus-within:border-[#D4AF37] focus-within:bg-white focus-within:shadow-md focus-within:shadow-[#FAF0C8] transition-all duration-200 group">
                                    <div className="w-9 h-9 bg-[#FDF8E7] rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-focus-within:bg-[#FAF0C8] transition-colors duration-200">
                                        <MapPin className="w-5 h-5 text-[#B8960C]" strokeWidth={2} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">Location</p>
                                        <input
                                            type="text"
                                            placeholder="City, neighborhood, or area..."
                                            value={filters.location}
                                            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                                            className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-300 text-sm font-medium"
                                        />
                                    </div>
                                </div>
                                <button className="px-8 py-4 bg-[#D4AF37] hover:bg-[#B8960C] text-black font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm shadow-lg shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 hover:scale-[1.02] active:scale-95">
                                    <Search className="w-5 h-5" strokeWidth={2.5} />
                                    Search Properties
                                </button>
                            </div>

                            {/* Filters Toggle Row */}
                            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="flex items-center gap-2 text-sm text-gray-900 hover:text-[#B8960C] font-semibold transition-colors duration-200 group"
                                >
                                    <div className={`p-1.5 rounded-lg transition-all duration-200 ${showFilters ? 'bg-[#FAF0C8]' : 'bg-gray-100 group-hover:bg-[#FDF8E7]'}`}>
                                        {showFilters ? (
                                            <X className="w-3.5 h-3.5 text-[#9A7D0A]" strokeWidth={2.5} />
                                        ) : (
                                            <SlidersHorizontal className="w-3.5 h-3.5 text-gray-700 group-hover:text-[#B8960C]" strokeWidth={2.5} />
                                        )}
                                    </div>
                                    {showFilters ? 'Hide Filters' : 'Advanced Filters'}
                                </button>
                                <div className="flex items-center gap-3">
                                    {showFilters && (
                                        <button
                                            onClick={handleResetFilters}
                                            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 font-semibold transition-colors duration-200 px-3 py-1.5 rounded-lg hover:bg-gray-100"
                                        >
                                            <RotateCcw className="w-3.5 h-3.5" strokeWidth={2.5} />
                                            Reset all
                                        </button>
                                    )}
                                    <span className="text-xs text-gray-700 font-medium">500+ listings available</span>
                                </div>
                            </div>

                            {/* Expanded Filters */}
                            {showFilters && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 pt-5 border-t border-gray-100 animate-slide-down">

                                    {/* Price Range */}
                                    <div>
                                        <label className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
                                            <span className="w-1 h-4 bg-[#D4AF37] rounded-full inline-block"></span>
                                            <DollarSign className="w-3.5 h-3.5 text-[#B8960C]" />
                                            Price Range
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={filters.price}
                                                onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                                                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none focus:bg-white transition-all duration-200 text-gray-700 text-sm appearance-none cursor-pointer font-medium"
                                            >
                                                <option value="">Any price</option>
                                                <option value="0-50000">AED 0 – 50,000</option>
                                                <option value="50000-100000">AED 50K – 100K</option>
                                                <option value="100000-200000">AED 100K – 200K</option>
                                                <option value="200000+">AED 200K+</option>
                                            </select>
                                            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37] pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Beds & Baths */}
                                    <div>
                                        <label className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
                                            <span className="w-1 h-4 bg-[#D4AF37] rounded-full inline-block"></span>
                                            <Bed className="w-3.5 h-3.5 text-[#B8960C]" />
                                            Beds & Baths
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={filters.bedsBaths}
                                                onChange={(e) => setFilters({ ...filters, bedsBaths: e.target.value })}
                                                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none focus:bg-white transition-all duration-200 text-gray-700 text-sm appearance-none cursor-pointer font-medium"
                                            >
                                                <option value="">Any</option>
                                                <option value="studio">Studio</option>
                                                <option value="1bed-1bath">1 Bed, 1 Bath</option>
                                                <option value="2bed-2bath">2 Beds, 2 Baths</option>
                                                <option value="3bed-2bath">3 Beds, 2 Baths</option>
                                                <option value="4bed-3bath">4 Beds, 3 Baths</option>
                                                <option value="5bed+">5+ Beds</option>
                                            </select>
                                            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37] pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Property Type */}
                                    <div>
                                        <label className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
                                            <span className="w-1 h-4 bg-[#D4AF37] rounded-full inline-block"></span>
                                            <Building2 className="w-3.5 h-3.5 text-[#B8960C]" />
                                            Property Type
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={filters.propertyType}
                                                onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                                                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none focus:bg-white transition-all duration-200 text-gray-700 text-sm appearance-none cursor-pointer font-medium"
                                            >
                                                <option value="">Any type</option>
                                                <option value="apartment">Apartment</option>
                                                <option value="villa">Villa</option>
                                                <option value="townhouse">Townhouse</option>
                                                <option value="penthouse">Penthouse</option>
                                                <option value="studio">Studio</option>
                                            </select>
                                            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37] pointer-events-none" />
                                        </div>
                                    </div>

                                    {/* Furnishing */}
                                    <div>
                                        <label className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider mb-2.5">
                                            <span className="w-1 h-4 bg-[#D4AF37] rounded-full inline-block"></span>
                                            <Home className="w-3.5 h-3.5 text-[#B8960C]" />
                                            Furnishing
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={filters.furnishingStatus}
                                                onChange={(e) => setFilters({ ...filters, furnishingStatus: e.target.value })}
                                                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none focus:bg-white transition-all duration-200 text-gray-700 text-sm appearance-none cursor-pointer font-medium"
                                            >
                                                <option value="">Any</option>
                                                <option value="furnished">Furnished</option>
                                                <option value="unfurnished">Unfurnished</option>
                                                <option value="semi-furnished">Semi-Furnished</option>
                                            </select>
                                            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37] pointer-events-none" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-px mt-8 rounded-2xl overflow-hidden border border-black/10">
                        {[
                            { value: '500+', label: 'Properties Listed' },
                            { value: '1,000+', label: 'Happy Clients' },
                            { value: '50+', label: 'Expert Agents' },
                            { value: '15+', label: 'Years Experience' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/70 backdrop-blur-sm px-6 py-5 text-center hover:bg-white/85 transition-colors duration-200">
                                <p className="text-2xl md:text-3xl font-bold text-[#D4AF37] mb-0.5">{stat.value}</p>
                                <p className="text-black/60 text-xs uppercase tracking-wider font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-16px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slide-down {
                    from { opacity: 0; transform: translateY(-8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in { animation: fade-in 0.8s ease-out; }
                .animate-slide-down { animation: slide-down 0.3s ease-out; }
            `}</style>
        </div>
    );
};

export default HomePage;