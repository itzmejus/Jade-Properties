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

    // Sample property data
    const properties: Property[] = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
            title: 'Luxury Modern Villa',
            location: 'Palm Jumeirah',
            price: 'AED 5,500,000',
            beds: 4,
            baths: 5,
            area: '4,500 sq ft',
            type: 'Villa',
            category: 'Dubai'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            title: 'Contemporary Apartment',
            location: 'Downtown Dubai',
            price: 'AED 2,800,000',
            beds: 3,
            baths: 3,
            area: '2,200 sq ft',
            type: 'Apartment',
            category: 'Dubai'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            title: 'Waterfront Penthouse',
            location: 'Marina',
            price: 'AED 8,900,000',
            beds: 5,
            baths: 6,
            area: '6,800 sq ft',
            type: 'Penthouse',
            category: 'Abu Dhabi'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
            title: 'Modern Townhouse',
            location: 'Arabian Ranches',
            price: 'AED 3,200,000',
            beds: 3,
            baths: 4,
            area: '3,100 sq ft',
            type: 'Townhouse',
            category: 'Dubai'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
            title: 'Elegant Studio',
            location: 'Business Bay',
            price: 'AED 850,000',
            beds: 1,
            baths: 1,
            area: '650 sq ft',
            type: 'Studio',
            category: 'Dubai'
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
            title: 'Luxury Beach House',
            location: 'Saadiyat Island',
            price: 'AED 12,500,000',
            beds: 6,
            baths: 7,
            area: '8,500 sq ft',
            type: 'Villa',
            category: 'Abu Dhabi'
        },
        {
            id: 7,
            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
            title: 'Sky View Apartment',
            location: 'Dubai Marina',
            price: 'AED 2,100,000',
            beds: 2,
            baths: 2,
            area: '1,400 sq ft',
            type: 'Apartment',
            category: 'Dubai'
        },
        {
            id: 8,
            image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
            title: 'Executive Penthouse',
            location: 'DIFC',
            price: 'AED 6,700,000',
            beds: 4,
            baths: 5,
            area: '5,200 sq ft',
            type: 'Penthouse',
            category: 'Dubai'
        },
        {
            id: 9,
            image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800',
            title: 'Garden Villa',
            location: 'Al Reef',
            price: 'AED 4,200,000',
            beds: 5,
            baths: 6,
            area: '6,000 sq ft',
            type: 'Villa',
            category: 'Abu Dhabi'
        }
    ];

    const locations = ['All', 'Dubai', 'Abu Dhabi'];
    const propertyTypes = ['All', 'Villa', 'Apartment', 'Penthouse', 'Townhouse', 'Studio'];

    // Filter properties
    const filteredProperties = properties.filter(property => {
        const matchesLocation = selectedLocation === 'All' || property.category === selectedLocation;
        const matchesType = selectedType === 'All' || property.type === selectedType;
        const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            property.location.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesLocation && matchesType && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 pt-24">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Explore Our Properties
                    </h1>
                    <p className="text-lg text-gray-300">
                        Find your perfect home from our exclusive collection
                    </p>
                </div>

                {/* Filters Section */}
                <div className="bg-gray-700 rounded-2xl p-6 mb-8 border border-gray-600">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                        {/* Search Bar */}
                        <div className="md:col-span-5">
                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                                Search Properties
                            </label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search by name or location..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 transition-colors duration-200"
                                />
                            </div>
                        </div>

                        {/* Location Filter */}
                        <div className="md:col-span-3">
                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                                <MapPin className="inline w-4 h-4 mr-1" />
                                Location
                            </label>
                            <select
                                value={selectedLocation}
                                onChange={(e) => setSelectedLocation(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white cursor-pointer transition-colors duration-200 appearance-none"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 0.75rem center',
                                    backgroundSize: '1.25rem'
                                }}
                            >
                                {locations.map(location => (
                                    <option key={location} value={location}>{location}</option>
                                ))}
                            </select>
                        </div>

                        {/* Property Type Filter */}
                        <div className="md:col-span-3">
                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                                <SlidersHorizontal className="inline w-4 h-4 mr-1" />
                                Property Type
                            </label>
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white cursor-pointer transition-colors duration-200 appearance-none"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right 0.75rem center',
                                    backgroundSize: '1.25rem'
                                }}
                            >
                                {propertyTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>

                        {/* Reset Button */}
                        <div className="md:col-span-1 flex items-end">
                            <button
                                onClick={() => {
                                    setSelectedLocation('All');
                                    setSelectedType('All');
                                    setSearchQuery('');
                                }}
                                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mt-4 text-gray-300 text-sm">
                        Showing <span className="font-bold text-white">{filteredProperties.length}</span> properties
                    </div>
                </div>

                {/* Property Grid */}
                {filteredProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {filteredProperties.map((property) => (

                            <div
                                key={property.id}
                                className="group bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                {/* Property Image */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Property Type Badge */}
                                    {property.type && (
                                        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-lg text-sm font-semibold shadow-lg">
                                            {property.type}
                                        </div>
                                    )}

                                    {/* Location Badge */}
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium">
                                        {property.category}
                                    </div>

                                    {/* Price Tag */}
                                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg">
                                        <p className="text-xl font-bold text-gray-900">{property.price}</p>
                                    </div>
                                </div>

                                {/* Property Details */}
                                <div className="p-6">
                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                        {property.title}
                                    </h3>

                                    {/* Location */}
                                    <div className="flex items-center text-gray-300 mb-4">
                                        <MapPin className="w-4 h-4 mr-2 text-blue-400" strokeWidth={2} />
                                        <span className="text-sm">{property.location}</span>
                                    </div>

                                    {/* Property Features */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-600">
                                        {property.beds && (
                                            <div className="flex items-center gap-1.5">
                                                <Bed className="w-4 h-4 text-gray-400" strokeWidth={2} />
                                                <span className="text-sm text-gray-300 font-medium">{property.beds} Beds</span>
                                            </div>
                                        )}

                                        {property.baths && (
                                            <div className="flex items-center gap-1.5">
                                                <Bath className="w-4 h-4 text-gray-400" strokeWidth={2} />
                                                <span className="text-sm text-gray-300 font-medium">{property.baths} Baths</span>
                                            </div>
                                        )}

                                        {property.area && (
                                            <div className="flex items-center gap-1.5">
                                                <Maximize className="w-4 h-4 text-gray-400" strokeWidth={2} />
                                                <span className="text-sm text-gray-300 font-medium">{property.area}</span>
                                            </div>
                                        )}
                                    </div>
                                    {/* View Details Button */}
                                    <Link to={"/property"}>
                                        <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>

                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="bg-gray-700 rounded-2xl p-12 border border-gray-600">
                            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-white mb-2">No Properties Found</h3>
                            <p className="text-gray-300 mb-6">
                                Try adjusting your filters or search query
                            </p>
                            <button
                                onClick={() => {
                                    setSelectedLocation('All');
                                    setSelectedType('All');
                                    setSearchQuery('');
                                }}
                                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200"
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