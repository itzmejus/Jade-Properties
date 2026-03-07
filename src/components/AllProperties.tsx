import { useState } from 'react';
import { MapPin, Bed, Bath, Maximize, Search, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Property {
    id: number;
    image: string;
    title: string;
    location: string;
    price: string;
    beds?: number;
    baths?: number;
    area?: string;
    type?: string;
    category: string;
}

const AllProperties = () => {
    const [selectedLocation, setSelectedLocation] = useState('All');
    const [selectedType, setSelectedType] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const properties: Property[] = [
        { id: 1, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800', title: 'Luxury Modern Villa', location: 'Palm Jumeirah', price: 'AED 5,500,000', beds: 4, baths: 5, area: '4,500 sq ft', type: 'Villa', category: 'Dubai' },
        { id: 2, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800', title: 'Contemporary Apartment', location: 'Downtown Dubai', price: 'AED 2,800,000', beds: 3, baths: 3, area: '2,200 sq ft', type: 'Apartment', category: 'Dubai' },
        { id: 3, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800', title: 'Waterfront Penthouse', location: 'Marina', price: 'AED 8,900,000', beds: 5, baths: 6, area: '6,800 sq ft', type: 'Penthouse', category: 'Abu Dhabi' },
        { id: 4, image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800', title: 'Modern Townhouse', location: 'Arabian Ranches', price: 'AED 3,200,000', beds: 3, baths: 4, area: '3,100 sq ft', type: 'Townhouse', category: 'Dubai' },
        { id: 5, image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800', title: 'Elegant Studio', location: 'Business Bay', price: 'AED 850,000', beds: 1, baths: 1, area: '650 sq ft', type: 'Studio', category: 'Dubai' },
        { id: 6, image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800', title: 'Luxury Beach House', location: 'Saadiyat Island', price: 'AED 12,500,000', beds: 6, baths: 7, area: '8,500 sq ft', type: 'Villa', category: 'Abu Dhabi' },
        { id: 7, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800', title: 'Sky View Apartment', location: 'Dubai Marina', price: 'AED 2,100,000', beds: 2, baths: 2, area: '1,400 sq ft', type: 'Apartment', category: 'Dubai' },
        { id: 8, image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800', title: 'Executive Penthouse', location: 'DIFC', price: 'AED 6,700,000', beds: 4, baths: 5, area: '5,200 sq ft', type: 'Penthouse', category: 'Dubai' },
        { id: 9, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800', title: 'Garden Villa', location: 'Al Reef', price: 'AED 4,200,000', beds: 5, baths: 6, area: '6,000 sq ft', type: 'Villa', category: 'Abu Dhabi' }
    ];

    const locations = ['All', 'Dubai', 'Abu Dhabi'];
    const propertyTypes = ['All', 'Villa', 'Apartment', 'Penthouse', 'Townhouse', 'Studio'];

    const filteredProperties = properties.filter(property => {
        const matchesLocation = selectedLocation === 'All' || property.category === selectedLocation;
        const matchesType = selectedType === 'All' || property.type === selectedType;
        const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            property.location.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesLocation && matchesType && matchesSearch;
    });

    const selectClass = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:bg-white text-black cursor-pointer transition-colors duration-200 appearance-none text-sm";

    return (
        <div className="min-h-screen bg-gray-50 pt-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-[#B8960C] text-sm font-semibold tracking-widest uppercase mb-3">
                        Jade Properties & Real Estate
                    </p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                        Explore Our Properties
                    </h1>
                    <p className="text-gray-800 text-base">
                        Find your perfect home from our exclusive collection
                    </p>
                </div>

                {/* Filters Section */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 shadow-sm">
                    {/* Gold accent bar */}
                    <div className="h-1 w-full bg-gradient-to-r from-[#B8960C] via-[#D4AF37] to-[#E5C84A] rounded-full mb-6" />

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

                        {/* Search Bar */}
                        <div className="md:col-span-5">
                            <label className="block text-xs font-semibold text-gray-800 uppercase tracking-wider mb-2">Search Properties</label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search by name or location..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:bg-white text-black placeholder-gray-400 transition-colors duration-200 text-sm"
                                />
                            </div>
                        </div>

                        {/* Location Filter */}
                        <div className="md:col-span-3">
                            <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-800 uppercase tracking-wider mb-2">
                                <MapPin className="w-3.5 h-3.5 text-[#B8960C]" /> Location
                            </label>
                            <div className="relative">
                                <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} className={selectClass}>
                                    {locations.map(l => <option key={l} value={l}>{l}</option>)}
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* Property Type Filter */}
                        <div className="md:col-span-3">
                            <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-800 uppercase tracking-wider mb-2">
                                <SlidersHorizontal className="w-3.5 h-3.5 text-[#B8960C]" /> Property Type
                            </label>
                            <div className="relative">
                                <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className={selectClass}>
                                    {propertyTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg className="w-4 h-4 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* Reset Button */}
                        <div className="md:col-span-1 flex items-end">
                            <button
                                onClick={() => { setSelectedLocation('All'); setSelectedType('All'); setSearchQuery(''); }}
                                className="w-full px-4 py-3 bg-black hover:bg-gray-800 text-[#D4AF37] font-semibold rounded-lg transition-all duration-200 text-sm"
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-gray-100 text-gray-800 text-sm">
                        Showing <span className="font-bold text-black">{filteredProperties.length}</span> of {properties.length} properties
                    </div>
                </div>

                {/* Property Grid */}
                {filteredProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filteredProperties.map((property) => (
                            <div
                                key={property.id}
                                className="group bg-white border border-gray-200 hover:border-[#D4AF37]/40 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#D4AF37]/10 transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Property Image */}
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                    {property.type && (
                                        <div className="absolute top-4 left-4 bg-[#D4AF37] text-black px-3 py-1 rounded-md text-xs font-bold shadow-sm">
                                            {property.type}
                                        </div>
                                    )}
                                    <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm text-black px-3 py-1 rounded-md text-xs font-semibold shadow-sm">
                                        {property.category}
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <p className="text-white font-bold text-lg drop-shadow-lg">{property.price}</p>
                                    </div>
                                </div>

                                {/* Property Details */}
                                <div className="p-5">
                                    <h3 className="text-base font-bold text-black mb-2 group-hover:text-[#B8960C] transition-colors duration-200">
                                        {property.title}
                                    </h3>
                                    <div className="flex items-center text-gray-800 mb-4">
                                        <MapPin className="w-4 h-4 mr-1.5 text-[#B8960C] flex-shrink-0" strokeWidth={2} />
                                        <span className="text-sm">{property.location}</span>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        {property.beds && (
                                            <div className="flex items-center gap-1.5">
                                                <Bed className="w-4 h-4 text-gray-400" strokeWidth={2} />
                                                <span className="text-sm text-gray-800">{property.beds} Beds</span>
                                            </div>
                                        )}
                                        {property.baths && (
                                            <div className="flex items-center gap-1.5">
                                                <Bath className="w-4 h-4 text-gray-400" strokeWidth={2} />
                                                <span className="text-sm text-gray-800">{property.baths} Baths</span>
                                            </div>
                                        )}
                                        {property.area && (
                                            <div className="flex items-center gap-1.5">
                                                <Maximize className="w-4 h-4 text-gray-400" strokeWidth={2} />
                                                <span className="text-sm text-gray-800">{property.area}</span>
                                            </div>
                                        )}
                                    </div>

                                    <Link to="/property">
                                        <button className="mt-5 w-full bg-[#D4AF37] hover:bg-[#B8960C] text-black font-semibold py-3 rounded-lg transition-all duration-200 text-sm shadow-sm hover:shadow-md">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="bg-white border border-gray-200 rounded-2xl p-12 shadow-sm">
                            <MapPin className="w-12 h-12 text-gray-800 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-black mb-2">No Properties Found</h3>
                            <p className="text-gray-800 text-sm mb-6">Try adjusting your filters or search query</p>
                            <button
                                onClick={() => { setSelectedLocation('All'); setSelectedType('All'); setSearchQuery(''); }}
                                className="px-8 py-3 bg-[#D4AF37] hover:bg-[#B8960C] text-black font-semibold rounded-lg transition-all duration-200 text-sm"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllProperties;