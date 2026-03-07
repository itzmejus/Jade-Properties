import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, MapPin, Bed, Bath, Maximize, ChevronDown, RotateCcw, SlidersHorizontal } from 'lucide-react';
import { useProperties, DEFAULT_FILTERS, type PropertyFilters } from '../hooks/useProperties';
import { formatPrice, getBedroomsLabel, getListingTypeLabel } from '../lib/shopify';
import { BrandedFallback } from './LoadingFallback';

const LISTING_TYPES = [
    { value: '', label: 'All' },
    { value: 'rent', label: 'Rent' },
    { value: 'buy', label: 'Buy' },
    { value: 'off-plan', label: 'Off Plan' },
    { value: 'commercial', label: 'Commercial' },
];
const PROPERTY_TYPES = [
    { value: '', label: 'Any Type' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'villa', label: 'Villa' },
    { value: 'townhouse', label: 'Townhouse' },
    { value: 'penthouse', label: 'Penthouse' },
    { value: 'studio', label: 'Studio' },
];
const BEDROOMS = [
    { value: '', label: 'Any' },
    { value: '0', label: 'Studio' },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5+', label: '5+' },
];
const FURNISHING = [
    { value: '', label: 'Any' },
    { value: 'furnished', label: 'Furnished' },
    { value: 'semi-furnished', label: 'Semi-Furnished' },
    { value: 'unfurnished', label: 'Unfurnished' },
];
const PRICE_RANGES = [
    { value: '', label: 'Any Price' },
    { value: '0-500000', label: 'Under AED 500K' },
    { value: '500000-1000000', label: 'AED 500K – 1M' },
    { value: '1000000-3000000', label: 'AED 1M – 3M' },
    { value: '3000000-5000000', label: 'AED 3M – 5M' },
    { value: '5000000-', label: 'AED 5M+' },
];

function parsePriceRange(val: string) {
    if (!val) return { minPrice: '', maxPrice: '' };
    const [min, max] = val.split('-');
    return { minPrice: min ?? '', maxPrice: max ?? '' };
}

export default function AllProperties() {
    const [searchParams] = useSearchParams();

    // Read URL params passed from HomePage search
    const priceParam = searchParams.get('price') ?? '';
    const { minPrice, maxPrice } = parsePriceRange(priceParam);

    const [filters, setFilters] = useState<PropertyFilters>({
        listingType: searchParams.get('listingType') ?? '',
        location: searchParams.get('location') ?? '',
        bedrooms: searchParams.get('bedrooms') ?? '',
        propertyType: searchParams.get('propertyType') ?? '',
        furnishing: searchParams.get('furnishing') ?? '',
        minPrice,
        maxPrice,
    });
    const [searchInput, setSearchInput] = useState(searchParams.get('location') ?? '');
    const [priceRange, setPriceRange] = useState(priceParam);

    const { properties, allProperties, loading, error } = useProperties(filters);

    const handleSearch = () => setFilters(f => ({ ...f, location: searchInput }));
    const handlePriceChange = (val: string) => {
        setPriceRange(val);
        setFilters(f => ({ ...f, ...parsePriceRange(val) }));
    };
    const handleReset = () => {
        setFilters(DEFAULT_FILTERS);
        setSearchInput('');
        setPriceRange('');
    };

    const hasActiveFilters =
        filters.listingType || filters.location || filters.minPrice ||
        filters.bedrooms || filters.propertyType || filters.furnishing;

    if (loading) return <BrandedFallback />;
    if (error) return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <p className="text-red-500 font-semibold mb-2">Failed to load properties</p>
                <p className="text-gray-400 text-sm">{error}</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Header */}
            <div className="bg-white border-b border-gray-200 pt-24 pb-8">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <p className="text-[#B8960C] text-xs font-bold tracking-widest uppercase mb-2">Jade Properties & Real Estate</p>
                    <h1 className="text-3xl md:text-4xl font-bold text-black mb-1">Explore Our Properties</h1>
                    <p className="text-gray-500 text-sm">
                        {properties.length} of {allProperties.length} properties
                        {filters.listingType && ` · ${getListingTypeLabel(filters.listingType)}`}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">

                {/* Filter Panel */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden mb-8">
                    <div className="h-1 bg-gradient-to-r from-[#B8960C] via-[#D4AF37] to-[#E5C84A]" />
                    <div className="p-5 md:p-6">

                        {/* Search row */}
                        <div className="flex flex-col md:flex-row gap-3 mb-5">
                            <div className="flex items-center flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 focus-within:border-[#D4AF37] focus-within:bg-white transition-all duration-200">
                                <MapPin className="w-4 h-4 text-[#B8960C] mr-2 flex-shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Search by name or location..."
                                    value={searchInput}
                                    onChange={e => setSearchInput(e.target.value)}
                                    onKeyDown={e => e.key === 'Enter' && handleSearch()}
                                    className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-300 text-sm"
                                />
                            </div>
                            <button onClick={handleSearch} className="px-6 py-3 bg-[#D4AF37] hover:bg-[#B8960C] text-black font-bold rounded-xl text-sm flex items-center gap-2 transition-all">
                                <Search className="w-4 h-4" /> Search
                            </button>
                            {hasActiveFilters && (
                                <button onClick={handleReset} className="px-4 py-3 bg-black text-[#D4AF37] font-semibold rounded-xl text-sm flex items-center gap-2 hover:bg-gray-900 transition-colors">
                                    <RotateCcw className="w-3.5 h-3.5" /> Reset
                                </button>
                            )}
                        </div>

                        {/* Listing type pills */}
                        <div className="flex flex-wrap gap-2 mb-5">
                            {LISTING_TYPES.map(lt => (
                                <button key={lt.value}
                                    onClick={() => setFilters(f => ({ ...f, listingType: lt.value }))}
                                    className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${filters.listingType === lt.value ? 'bg-[#D4AF37] text-black' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                                    {lt.label}
                                </button>
                            ))}
                        </div>

                        {/* Filter dropdowns */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">Price</label>
                                <div className="relative">
                                    <select value={priceRange} onChange={e => handlePriceChange(e.target.value)}
                                        className="w-full px-3 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none text-gray-700 text-sm appearance-none cursor-pointer font-medium">
                                        {PRICE_RANGES.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#D4AF37] pointer-events-none" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">Bedrooms</label>
                                <div className="flex flex-wrap gap-1">
                                    {BEDROOMS.map(b => (
                                        <button key={b.value}
                                            onClick={() => setFilters(f => ({ ...f, bedrooms: b.value }))}
                                            className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg border transition-all ${filters.bedrooms === b.value ? 'bg-[#D4AF37] text-black border-[#D4AF37]' : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-[#D4AF37]/50'}`}>
                                            {b.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">Property Type</label>
                                <div className="relative">
                                    <select value={filters.propertyType} onChange={e => setFilters(f => ({ ...f, propertyType: e.target.value }))}
                                        className="w-full px-3 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none text-gray-700 text-sm appearance-none cursor-pointer font-medium">
                                        {PROPERTY_TYPES.map(pt => <option key={pt.value} value={pt.value}>{pt.label}</option>)}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#D4AF37] pointer-events-none" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">Furnishing</label>
                                <div className="relative">
                                    <select value={filters.furnishing} onChange={e => setFilters(f => ({ ...f, furnishing: e.target.value }))}
                                        className="w-full px-3 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:outline-none text-gray-700 text-sm appearance-none cursor-pointer font-medium">
                                        {FURNISHING.map(fn => <option key={fn.value} value={fn.value}>{fn.label}</option>)}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#D4AF37] pointer-events-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results grid */}
                {properties.length === 0 ? (
                    <div className="bg-white border border-gray-200 rounded-2xl p-16 text-center">
                        <SlidersHorizontal className="w-10 h-10 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-black mb-1">No Properties Found</h3>
                        <p className="text-gray-400 text-sm mb-5">Try adjusting your filters or search query</p>
                        <button onClick={handleReset} className="px-5 py-2.5 bg-black text-[#D4AF37] font-semibold rounded-xl text-sm hover:bg-gray-900 transition-colors">
                            Clear All Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {properties.map(property => {
                            const heroImage = property.images.edges[0]?.node.url
                                ?? 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800';
                            const price = property.priceRange.minVariantPrice.amount;
                            return (
                                <div key={property.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#D4AF37]/40 transition-all duration-300 group">
                                    <div className="relative h-52 overflow-hidden">
                                        <img src={heroImage} alt={property.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        {property.listingType && (
                                            <span className="absolute top-3 left-3 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full">
                                                {getListingTypeLabel(property.listingType)}
                                            </span>
                                        )}
                                        {property.propertyType && (
                                            <span className="absolute top-3 right-3 bg-white/85 backdrop-blur-sm text-black text-xs font-semibold px-2.5 py-1 rounded-full capitalize">
                                                {property.propertyType}
                                            </span>
                                        )}
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-black text-base mb-1 group-hover:text-[#B8960C] transition-colors line-clamp-1">{property.title}</h3>
                                        {property.location && (
                                            <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3">
                                                <MapPin className="w-3.5 h-3.5 text-[#B8960C] flex-shrink-0" />
                                                <span className="line-clamp-1">{property.location}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                                            {property.bedrooms !== null && (
                                                <div className="flex items-center gap-1">
                                                    <Bed className="w-4 h-4 text-[#B8960C]" />
                                                    <span className="font-medium">{getBedroomsLabel(property.bedrooms)}</span>
                                                </div>
                                            )}
                                            {property.bathrooms !== null && (
                                                <div className="flex items-center gap-1">
                                                    <Bath className="w-4 h-4 text-[#B8960C]" />
                                                    <span className="font-medium">{property.bathrooms}</span>
                                                </div>
                                            )}
                                            {property.areaSqft && (
                                                <div className="flex items-center gap-1">
                                                    <Maximize className="w-4 h-4 text-[#B8960C]" />
                                                    <span className="font-medium">{property.areaSqft}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <p className="text-[#B8960C] font-bold text-lg">{formatPrice(price)}</p>
                                            <Link to={`/properties/${property.handle}`}
                                                className="px-4 py-2 bg-black text-[#D4AF37] text-xs font-bold rounded-lg hover:bg-gray-900 transition-colors">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}