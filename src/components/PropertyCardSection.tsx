import { MapPin, Bed, Bath, Maximize } from 'lucide-react';
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
}

const PropertyCardSection = () => {
    // Sample property data - replace with your actual data
    const properties: Property[] = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
            title: 'Luxury Modern Villa',
            location: 'Palm Jumeirah, Dubai',
            price: 'AED 5,500,000',
            beds: 4,
            baths: 5,
            area: '4,500 sq ft',
            type: 'Villa'
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
            type: 'Apartment'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            title: 'Waterfront Penthouse',
            location: 'Marina, Abu Dhabi',
            price: 'AED 8,900,000',
            beds: 5,
            baths: 6,
            area: '6,800 sq ft',
            type: 'Penthouse'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
            title: 'Modern Townhouse',
            location: 'Arabian Ranches, Dubai',
            price: 'AED 3,200,000',
            beds: 3,
            baths: 4,
            area: '3,100 sq ft',
            type: 'Townhouse'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
            title: 'Elegant Studio',
            location: 'Business Bay, Dubai',
            price: 'AED 850,000',
            beds: 1,
            baths: 1,
            area: '650 sq ft',
            type: 'Studio'
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
            title: 'Luxury Beach House',
            location: 'Saadiyat Island, Abu Dhabi',
            price: 'AED 12,500,000',
            beds: 6,
            baths: 7,
            area: '8,500 sq ft',
            type: 'Villa'
        }
    ];

    return (
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Featured Properties
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Discover our handpicked selection of exceptional properties in prime locations
                    </p>
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {properties.map((property) => (
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

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        View All Properties
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PropertyCardSection;