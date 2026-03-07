import { useEffect, useState } from 'react';
import { MapPin, Bed, Bath, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchAllProperties, type ShopifyProperty, formatPrice, getBedroomsLabel, getListingTypeLabel } from '../lib/shopify';
import { BrandedFallback } from './LoadingFallback';

const PropertyCardSection = () => {
    const [properties, setProperties] = useState<ShopifyProperty[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchAllProperties()
            .then(all => {
                // Show first 6 properties as featured
                setProperties(all.slice(0, 6));
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <BrandedFallback />;

    if (error) return (
        <section className="py-16 px-4 md:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-red-500 font-semibold">Failed to load properties</p>
                <p className="text-gray-400 text-sm mt-1">{error}</p>
            </div>
        </section>
    );

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
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Discover our handpicked selection of exceptional properties in prime locations
                    </p>
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {properties.map((property) => {
                        const heroImage = property.images.edges[0]?.node.url
                            ?? 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800';
                        const price = property.priceRange.minVariantPrice.amount;

                        return (
                            <div
                                key={property.id}
                                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-[#D4AF37]/15 transition-all duration-300 hover:-translate-y-1 border border-gray-200 hover:border-[#D4AF37]/40"
                            >
                                {/* Property Image */}
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src={heroImage}
                                        alt={property.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                    {/* Listing type badge */}
                                    {property.listingType && (
                                        <div className="absolute top-4 left-4 bg-[#D4AF37] text-black px-3 py-1 rounded-md text-xs font-bold">
                                            {getListingTypeLabel(property.listingType)}
                                        </div>
                                    )}

                                    {/* Property type badge */}
                                    {property.propertyType && (
                                        <div className="absolute top-4 right-4 bg-white/85 backdrop-blur-sm text-black px-2.5 py-1 rounded-md text-xs font-semibold capitalize">
                                            {property.propertyType}
                                        </div>
                                    )}

                                    {/* Price Tag */}
                                    <div className="absolute bottom-4 left-4">
                                        <p className="text-lg font-bold text-white drop-shadow-lg">
                                            {formatPrice(price)}
                                        </p>
                                    </div>
                                </div>

                                {/* Property Details */}
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-black mb-2 group-hover:text-[#B8960C] transition-colors duration-200 line-clamp-1">
                                        {property.title}
                                    </h3>

                                    {property.location && (
                                        <div className="flex items-center text-gray-500 mb-4">
                                            <MapPin className="w-4 h-4 mr-1.5 text-[#B8960C] flex-shrink-0" strokeWidth={2} />
                                            <span className="text-sm line-clamp-1">{property.location}</span>
                                        </div>
                                    )}

                                    {/* Property Features */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        {property.bedrooms !== null && (
                                            <div className="flex items-center gap-1.5">
                                                <Bed className="w-4 h-4 text-[#B8960C]" strokeWidth={2} />
                                                <span className="text-sm text-gray-700 font-medium">
                                                    {getBedroomsLabel(property.bedrooms)}
                                                </span>
                                            </div>
                                        )}
                                        {property.bathrooms !== null && (
                                            <div className="flex items-center gap-1.5">
                                                <Bath className="w-4 h-4 text-[#B8960C]" strokeWidth={2} />
                                                <span className="text-sm text-gray-700 font-medium">{property.bathrooms}</span>
                                            </div>
                                        )}
                                        {property.areaSqft && (
                                            <div className="flex items-center gap-1.5">
                                                <Maximize className="w-4 h-4 text-[#B8960C]" strokeWidth={2} />
                                                <span className="text-sm text-gray-700 font-medium">{property.areaSqft}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* View Details Button */}
                                    <Link to={`/properties/${property.handle}`}>
                                        <button className="mt-5 w-full bg-[#D4AF37] hover:bg-[#B8960C] text-black font-semibold py-3 rounded-lg transition-all duration-200 text-sm shadow-sm hover:shadow-md">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
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