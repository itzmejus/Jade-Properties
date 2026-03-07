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
    const properties: Property[] = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
            title: 'Luxury Modern Villa',
            location: 'Palm Jumeirah, Dubai',
            price: 'AED 5,800,000',
            beds: 4, baths: 5, area: '4,800 sq ft', type: 'Villa'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            title: 'Contemporary Apartment',
            location: 'Downtown Dubai',
            price: 'AED 2,800,000',
            beds: 3, baths: 3, area: '2,200 sq ft', type: 'Apartment'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            title: 'Waterfront Penthouse',
            location: 'Marina, Abu Dhabi',
            price: 'AED 8,900,000',
            beds: 5, baths: 6, area: '6,800 sq ft', type: 'Penthouse'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
            title: 'Modern Townhouse',
            location: 'Arabian Ranches, Dubai',
            price: 'AED 3,200,000',
            beds: 3, baths: 4, area: '3,100 sq ft', type: 'Townhouse'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
            title: 'Elegant Studio',
            location: 'Business Bay, Dubai',
            price: 'AED 850,000',
            beds: 1, baths: 1, area: '650 sq ft', type: 'Studio'
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
            title: 'Luxury Beach House',
            location: 'Saadiyat Island, Abu Dhabi',
            price: 'AED 12,800,000',
            beds: 6, baths: 7, area: '8,800 sq ft', type: 'Villa'
        }
    ];

    return (
        <section className="py-16 px-4 md:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-[#B8960C] text-sm font-semibold tracking-widest uppercase mb-3">
                        Jade Properties & Real Estate
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                        Featured Properties
                    </h2>
                    <p className="text-gray-800 max-w-xl mx-auto text-black">
                        Discover our handpicked selection of exceptional properties in prime locations
                    </p>
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {properties.map((property) => (
                        <div
                            key={property.id}
                            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#D4AF37]/15 transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-[#D4AF37]/40"
                        >
                            {/* Property Image */}
                            <div className="relative h-60 overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-800"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                                {/* Property Type Badge */}
                                {property.type && (
                                    <div className="absolute top-4 left-4 bg-[#D4AF37] text-black px-3 py-1 rounded-md text-xs font-bold">
                                        {property.type}
                                    </div>
                                )}

                                {/* Price Tag */}
                                <div className="absolute bottom-4 left-4">
                                    <p className="text-lg font-bold text-white drop-shadow-lg">{property.price}</p>
                                </div>
                            </div>

                            {/* Property Details */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#B8960C] transition-colors duration-200">
                                    {property.title}
                                </h3>

                                <div className="flex items-center text-gray-800 mb-4">
                                    <MapPin className="w-4 h-4 mr-1.5 text-[#B8960C] flex-shrink-0" strokeWidth={2} />
                                    <span className="text-sm">{property.location}</span>
                                </div>

                                {/* Property Features */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    {property.beds && (
                                        <div className="flex items-center gap-1.5">
                                            <Bed className="w-4 h-4 text-gray-700" strokeWidth={2} />
                                            <span className="text-sm text-gray-800">{property.beds} Beds</span>
                                        </div>
                                    )}
                                    {property.baths && (
                                        <div className="flex items-center gap-1.5">
                                            <Bath className="w-4 h-4 text-gray-700" strokeWidth={2} />
                                            <span className="text-sm text-gray-800">{property.baths} Baths</span>
                                        </div>
                                    )}
                                    {property.area && (
                                        <div className="flex items-center gap-1.5">
                                            <Maximize className="w-4 h-4 text-gray-700" strokeWidth={2} />
                                            <span className="text-sm text-gray-800">{property.area}</span>
                                        </div>
                                    )}
                                </div>

                                {/* View Details Button */}
                                <Link to="/property">
                                    <button className="mt-5 w-full bg-[#D4AF37] hover:bg-[#B8960C] text-black font-semibold py-3 rounded-lg transition-all duration-200 text-sm shadow-sm hover:shadow-md">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link to="/properties">
                        <button className="px-8 py-3.5 bg-black hover:bg-gray-800 text-[#D4AF37] font-semibold rounded-lg transition-all duration-200 text-sm shadow-lg hover:shadow-xl">
                            View All Properties
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PropertyCardSection;