import React, { useRef, useEffect, useState } from 'react';
import { MapPin, Search, DollarSign, Bed, Building2, Home, ChevronDown, SlidersHorizontal, ChevronRight, RotateCcw, X } from 'lucide-react';

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

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2; // Change this value as needed (e.g., 2.0 for double speed)
        }
    }, []);


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
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source
                        src="/videos/background5.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8 py-20">
                {/* Hero Title */}
                <div className="text-center pt-10 mb-12 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                        The Journey To Modern Living
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Starts Here At Jade Properties & Real Estate
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mt-6 max-w-2xl mx-auto">
                        Discover your dream property with exceptional service and unmatched expertise
                    </p>
                </div>

                {/* Filter Container */}
                <div className="w-full max-w-6xl">
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                className={`px-6 md:px-10 py-3 md:py-4 font-semibold text-sm md:text-base rounded-xl transition-all duration-300 transform hover:scale-105 ${selectedTab === tab
                                    ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-xl shadow-gray-900/50'
                                    : 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Search Filters - Elegant Modern Design */}
                    <div className="relative bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-6 md:p-8 shadow-2xl">
                        {/* Subtle gradient orbs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            {/* Main Search Bar - Enhanced Styling */}
                            <div className="mb-6">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                                    <div className="relative flex flex-col md:flex-row items-stretch bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-transparent hover:border-blue-300 transition-all duration-300">
                                        <div className="flex items-center flex-1 px-5 py-4 md:py-0 group/input relative">
                                            <MapPin className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 group-hover/input:scale-110 group-hover/input:text-blue-700 transition-all duration-300" strokeWidth={2.5} />
                                            <input
                                                type="text"
                                                placeholder="Search by city, neighborhood, or area..."
                                                value={filters.location}
                                                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                                                className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-base md:text-lg font-medium focus:placeholder-gray-300 transition-all duration-200"
                                            />
                                            {/* Focus indicator line */}
                                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-focus-within/input:scale-x-100 transition-transform duration-300 origin-left"></div>
                                        </div>
                                        <button className="mx-3 my-3 md:my-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 relative overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                            <Search className="w-5 h-5 relative z-10" strokeWidth={2.5} />
                                            <span className="relative z-10">Search</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Filter Cards - Enhanced Dropdown Styling - Collapsible */}
                            {showFilters && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 animate-slide-down">
                                    {/* Price Range - Enhanced */}
                                    <div className="group relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                        <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 border-2 border-gray-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="p-2.5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                                    <DollarSign className="w-5 h-5 text-blue-600" strokeWidth={2.5} />
                                                </div>
                                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                                    Price Range
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <select
                                                    value={filters.price}
                                                    onChange={(e) => setFilters({ ...filters, price: e.target.value })}
                                                    className="w-full px-4 py-3.5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:bg-white focus:shadow-lg focus:shadow-blue-100 outline-none transition-all duration-300 text-gray-700 font-semibold cursor-pointer appearance-none hover:border-blue-300 hover:shadow-md"
                                                >
                                                    <option value="">Select price</option>
                                                    <option value="0-50000">AED 0 - 50,000</option>
                                                    <option value="50000-100000">AED 50K - 100K</option>
                                                    <option value="100000-200000">AED 100K - 200K</option>
                                                    <option value="200000+">AED 200K+</option>
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-600 pointer-events-none group-hover:translate-y-[-40%] transition-all duration-300" strokeWidth={2.5} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Beds & Baths - Enhanced */}
                                    <div className="group relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                        <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 border-2 border-gray-200 hover:border-indigo-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="p-2.5 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                                    <Bed className="w-5 h-5 text-indigo-600" strokeWidth={2.5} />
                                                </div>
                                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                                    Beds & Baths
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <select
                                                    value={filters.bedsBaths}
                                                    onChange={(e) => setFilters({ ...filters, bedsBaths: e.target.value })}
                                                    className="w-full px-4 py-3.5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:bg-white focus:shadow-lg focus:shadow-indigo-100 outline-none transition-all duration-300 text-gray-700 font-semibold cursor-pointer appearance-none hover:border-indigo-300 hover:shadow-md"
                                                >
                                                    <option value="">Select option</option>
                                                    <option value="studio">Studio</option>
                                                    <option value="1bed-1bath">1 Bed, 1 Bath</option>
                                                    <option value="2bed-2bath">2 Beds, 2 Baths</option>
                                                    <option value="3bed-2bath">3 Beds, 2 Baths</option>
                                                    <option value="4bed-3bath">4 Beds, 3 Baths</option>
                                                    <option value="5bed+">5+ Beds</option>
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-600 pointer-events-none group-hover:translate-y-[-40%] transition-all duration-300" strokeWidth={2.5} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Property Type - Enhanced */}
                                    <div className="group relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                        <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 border-2 border-gray-200 hover:border-purple-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="p-2.5 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                                    <Building2 className="w-5 h-5 text-purple-600" strokeWidth={2.5} />
                                                </div>
                                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                                    Property Type
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <select
                                                    value={filters.propertyType}
                                                    onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
                                                    className="w-full px-4 py-3.5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:bg-white focus:shadow-lg focus:shadow-purple-100 outline-none transition-all duration-300 text-gray-700 font-semibold cursor-pointer appearance-none hover:border-purple-300 hover:shadow-md"
                                                >
                                                    <option value="">Select type</option>
                                                    <option value="apartment">Apartment</option>
                                                    <option value="villa">Villa</option>
                                                    <option value="townhouse">Townhouse</option>
                                                    <option value="penthouse">Penthouse</option>
                                                    <option value="studio">Studio</option>
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-600 pointer-events-none group-hover:translate-y-[-40%] transition-all duration-300" strokeWidth={2.5} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Furnishing Status - Enhanced */}
                                    <div className="group relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                        <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4 border-2 border-gray-200 hover:border-violet-400 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="p-2.5 bg-gradient-to-br from-violet-50 to-violet-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                                                    <Home className="w-5 h-5 text-violet-600" strokeWidth={2.5} />
                                                </div>
                                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                                                    Furnishing
                                                </label>
                                            </div>
                                            <div className="relative">
                                                <select
                                                    value={filters.furnishingStatus}
                                                    onChange={(e) => setFilters({ ...filters, furnishingStatus: e.target.value })}
                                                    className="w-full px-4 py-3.5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-gray-200 focus:border-violet-500 focus:bg-white focus:shadow-lg focus:shadow-violet-100 outline-none transition-all duration-300 text-gray-700 font-semibold cursor-pointer appearance-none hover:border-violet-300 hover:shadow-md"
                                                >
                                                    <option value="">Select status</option>
                                                    <option value="furnished">Furnished</option>
                                                    <option value="unfurnished">Unfurnished</option>
                                                    <option value="semi-furnished">Semi-Furnished</option>
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-violet-600 pointer-events-none group-hover:translate-y-[-40%] transition-all duration-300" strokeWidth={2.5} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Action Buttons - Enhanced */}
                            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-center">
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                    {showFilters ? (
                                        <>
                                            <X className="w-5 h-5 relative z-10" strokeWidth={2.5} />
                                            <span className="relative z-10">Hide Filters</span>
                                        </>
                                    ) : (
                                        <>
                                            <SlidersHorizontal className="w-5 h-5 relative z-10" strokeWidth={2.5} />
                                            <span className="relative z-10">More Filters</span>
                                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" strokeWidth={2.5} />
                                        </>
                                    )}
                                </button>
                                <button
                                    onClick={handleResetFilters}
                                    className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-xl border-2 border-white/40 hover:border-white/60 transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                    <RotateCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500 relative z-10" strokeWidth={2.5} />
                                    <span className="relative z-10">Reset Filters</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                            <p className="text-3xl md:text-4xl font-bold text-white mb-2">500+</p>
                            <p className="text-gray-200 text-sm md:text-base">Properties</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                            <p className="text-3xl md:text-4xl font-bold text-white mb-2">1000+</p>
                            <p className="text-gray-200 text-sm md:text-base">Happy Clients</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                            <p className="text-3xl md:text-4xl font-bold text-white mb-2">50+</p>
                            <p className="text-gray-200 text-sm md:text-base">Expert Agents</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300">
                            <p className="text-3xl md:text-4xl font-bold text-white mb-2">15+</p>
                            <p className="text-gray-200 text-sm md:text-base">Years Experience</p>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <svg
                        className="w-8 h-8 text-white/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>

            {/* Custom CSS for animations */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slide-down {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                        max-height: 0;
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                        max-height: 500px;
                    }
                }

                .animate-fade-in {
                    animation: fade-in 1s ease-out;
                }

                .animate-slide-down {
                    animation: slide-down 0.4s ease-out;
                }

                /* Custom scrollbar for select dropdowns */
                select {
                    scrollbar-width: thin;
                    scrollbar-color: #3b82f6 #f3f4f6;
                }

                select::-webkit-scrollbar {
                    width: 8px;
                }

                select::-webkit-scrollbar-track {
                    background: #f3f4f6;
                    border-radius: 10px;
                }

                select::-webkit-scrollbar-thumb {
                    background: linear-gradient(to bottom, #3b82f6, #9333ea);
                    border-radius: 10px;
                }

                select::-webkit-scrollbar-thumb:hover {
                    background: linear-gradient(to bottom, #2563eb, #7e22ce);
                }
            `}</style>
        </div>
    );
};

export default HomePage;