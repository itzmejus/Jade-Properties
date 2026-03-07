import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    MapPin, Bed, Bath, Maximize, Building2,
    Phone, Mail, MessageSquare, Send, ChevronLeft, ChevronRight,
    X, Check, ArrowLeft
} from 'lucide-react';
import { fetchPropertyByHandle, type ShopifyProperty, formatFullPrice, getBedroomsLabel, getListingTypeLabel } from '../lib/shopify';
import { BrandedFallback } from './LoadingFallback';

export default function PropertyDetailPage() {
    const { handle } = useParams<{ handle: string }>();
    const [property, setProperty] = useState<ShopifyProperty | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeImage, setActiveImage] = useState(0);
    const [showGallery, setShowGallery] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        if (!handle) return;
        setLoading(true);
        fetchPropertyByHandle(handle)
            .then(p => { setProperty(p); setLoading(false); })
            .catch(e => { setError(e.message); setLoading(false); });
    }, [handle]);

    if (loading) return <BrandedFallback />;

    if (error || !property) return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
                <p className="text-xl font-bold text-black mb-2">Property Not Found</p>
                <p className="text-gray-400 text-sm mb-6">{error ?? 'This property may have been removed.'}</p>
                <Link to="/properties" className="px-5 py-2.5 bg-[#D4AF37] text-black font-semibold rounded-xl text-sm">
                    Browse All Properties
                </Link>
            </div>
        </div>
    );

    const images = property.images.edges.map(e => e.node.url);
    // fallback if no images
    if (images.length === 0) images.push('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200');

    const price = property.priceRange.minVariantPrice.amount;

    const handleEnquiry = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await new Promise(res => setTimeout(res, 1200)); // simulate
            setFormStatus('success');
        } catch {
            setFormStatus('error');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Back nav */}
            <div className="bg-white border-b border-gray-200 pt-20 pb-4">
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center gap-3">
                    <Link to="/properties" className="flex items-center gap-1.5 text-gray-500 hover:text-black text-sm font-medium transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Properties
                    </Link>
                    {property.referenceNo && (
                        <span className="text-gray-300 text-sm">·</span>
                    )}
                    {property.referenceNo && (
                        <span className="text-xs text-gray-400 font-mono">{property.referenceNo}</span>
                    )}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">

                {/* Title + price row */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            {property.listingType && (
                                <span className="bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded-full">
                                    {getListingTypeLabel(property.listingType)}
                                </span>
                            )}
                            {property.propertyType && (
                                <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full capitalize">
                                    {property.propertyType}
                                </span>
                            )}
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-black">{property.title}</h1>
                        {property.location && (
                            <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
                                <MapPin className="w-4 h-4 text-[#B8960C]" />
                                {property.location}
                            </div>
                        )}
                    </div>
                    <div className="text-right">
                        <p className="text-3xl font-bold text-[#B8960C]">{formatFullPrice(price)}</p>
                        {property.furnishing && (
                            <p className="text-xs text-gray-400 capitalize mt-1">{property.furnishing}</p>
                        )}
                    </div>
                </div>

                {/* Image Gallery */}
                <div className="mb-8">
                    <div className="relative rounded-2xl overflow-hidden h-64 md:h-[480px] bg-gray-100 cursor-pointer" onClick={() => setShowGallery(true)}>
                        <img src={images[activeImage]} alt={property.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-colors" />

                        {/* Nav arrows */}
                        {images.length > 1 && (
                            <>
                                <button onClick={e => { e.stopPropagation(); setActiveImage(i => (i - 1 + images.length) % images.length); }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all">
                                    <ChevronLeft className="w-5 h-5 text-black" />
                                </button>
                                <button onClick={e => { e.stopPropagation(); setActiveImage(i => (i + 1) % images.length); }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition-all">
                                    <ChevronRight className="w-5 h-5 text-black" />
                                </button>
                            </>
                        )}

                        {/* Image counter */}
                        <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                            {activeImage + 1} / {images.length}
                        </div>
                    </div>

                    {/* Thumbnails */}
                    {images.length > 1 && (
                        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                            {images.map((img, i) => (
                                <button key={i} onClick={() => setActiveImage(i)}
                                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${activeImage === i ? 'border-[#D4AF37] shadow-md' : 'border-gray-200 opacity-70 hover:opacity-100'
                                        }`}>
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Main content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left column */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Quick stats */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { Icon: Bed, label: 'Bedrooms', value: getBedroomsLabel(property.bedrooms) },
                                    { Icon: Bath, label: 'Bathrooms', value: property.bathrooms ? `${property.bathrooms}` : '—' },
                                    { Icon: Maximize, label: 'Area', value: property.areaSqft ?? '—' },
                                    { Icon: Building2, label: 'Type', value: property.propertyType ?? '—' },
                                ].map(({ Icon, label, value }, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#FDF8E7] border border-[#D4AF37]/30 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-5 h-5 text-[#B8960C]" strokeWidth={2} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs">{label}</p>
                                            <p className="text-black font-semibold text-sm capitalize">{value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-black mb-3">Description</h2>
                            {property.descriptionHtml ? (
                                <div className="text-gray-600 text-sm leading-relaxed prose max-w-none"
                                    dangerouslySetInnerHTML={{ __html: property.descriptionHtml }} />
                            ) : (
                                <p className="text-gray-400 text-sm">No description available.</p>
                            )}
                        </div>

                        {/* Property Details */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-black mb-4">Property Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                                {[
                                    { label: 'Listing Type', value: getListingTypeLabel(property.listingType) },
                                    { label: 'Property Type', value: property.propertyType },
                                    { label: 'Bedrooms', value: getBedroomsLabel(property.bedrooms) },
                                    { label: 'Bathrooms', value: property.bathrooms ? `${property.bathrooms}` : null },
                                    { label: 'Area', value: property.areaSqft },
                                    { label: 'Year Built', value: property.yearBuilt ? `${property.yearBuilt}` : null },
                                    { label: 'Furnishing', value: property.furnishing },
                                    { label: 'Location', value: property.location },
                                    { label: 'Emirate', value: property.emirate },
                                    { label: 'Reference No', value: property.referenceNo },
                                ].filter(d => d.value).map(({ label, value }, i) => (
                                    <div key={i} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                                        <span className="text-gray-400 text-sm">{label}</span>
                                        <span className="text-black text-sm font-semibold capitalize">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        {property.features.length > 0 && (
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                <h2 className="text-xl font-bold text-black mb-4">Features & Amenities</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {property.features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <div className="w-5 h-5 bg-[#FDF8E7] border border-[#D4AF37]/30 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-[#B8960C]" strokeWidth={2.5} />
                                            </div>
                                            {f}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Map */}
                        {property.mapEmbed && (
                            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                                <div className="p-5 border-b border-gray-100">
                                    <h2 className="text-xl font-bold text-black">Location</h2>
                                </div>
                                <iframe
                                    src={property.mapEmbed}
                                    className="w-full h-72"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Property location"
                                />
                            </div>
                        )}
                    </div>

                    {/* Right column — Enquiry form */}
                    <div className="space-y-5">
                        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden sticky top-24">
                            <div className="h-1 bg-gradient-to-r from-[#B8960C] via-[#D4AF37] to-[#E5C84A]" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-black mb-1">Send Enquiry</h3>
                                <p className="text-gray-400 text-xs mb-5">We'll get back to you within 24 hours</p>

                                {formStatus === 'success' ? (
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                                            <Check className="w-5 h-5 text-green-600" />
                                        </div>
                                        <p className="text-green-700 font-semibold text-sm">✓ Enquiry sent! We'll contact you soon.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleEnquiry} className="space-y-4">
                                        {[
                                            { key: 'name', label: 'Full Name', type: 'text', Icon: MessageSquare },
                                            { key: 'email', label: 'Email Address', type: 'email', Icon: Mail },
                                            { key: 'phone', label: 'Phone Number', type: 'tel', Icon: Phone },
                                        ].map(({ key, label, type, Icon }) => (
                                            <div key={key}>
                                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">{label}</label>
                                                <div className="relative">
                                                    <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                    <input
                                                        type={type}
                                                        required={key !== 'phone'}
                                                        value={formData[key as keyof typeof formData]}
                                                        onChange={e => setFormData(d => ({ ...d, [key]: e.target.value }))}
                                                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:bg-white focus:outline-none text-sm text-black transition-all"
                                                    />
                                                </div>
                                            </div>
                                        ))}

                                        <div>
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">Message</label>
                                            <textarea
                                                rows={3}
                                                value={formData.message}
                                                onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                                                placeholder={`I'm interested in ${property.title}...`}
                                                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#D4AF37] focus:bg-white focus:outline-none text-sm text-black transition-all resize-none"
                                            />
                                        </div>

                                        {formStatus === 'error' && (
                                            <p className="text-red-500 text-xs">Something went wrong. Please try again.</p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="w-full py-3.5 bg-[#D4AF37] hover:bg-[#B8960C] disabled:opacity-60 text-black font-bold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm"
                                        >
                                            <Send className="w-4 h-4" />
                                            {submitting ? 'Sending...' : 'Send Enquiry'}
                                        </button>
                                    </form>
                                )}

                                {/* Direct contact */}
                                <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Or contact us directly</p>
                                    <a href="tel:+97100000000" className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-[#FDF8E7] border border-gray-200 hover:border-[#D4AF37]/30 rounded-xl transition-all duration-200 group">
                                        <div className="w-8 h-8 bg-[#FDF8E7] border border-[#D4AF37]/30 rounded-lg flex items-center justify-center">
                                            <Phone className="w-4 h-4 text-[#B8960C]" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400">Call us</p>
                                            <p className="text-sm font-semibold text-black">+971 00 000 0000</p>
                                        </div>
                                    </a>
                                    <a href="mailto:info@jadeproperties.ae" className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-[#FDF8E7] border border-gray-200 hover:border-[#D4AF37]/30 rounded-xl transition-all duration-200 group">
                                        <div className="w-8 h-8 bg-[#FDF8E7] border border-[#D4AF37]/30 rounded-lg flex items-center justify-center">
                                            <Mail className="w-4 h-4 text-[#B8960C]" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400">Email us</p>
                                            <p className="text-sm font-semibold text-black">info@jadeproperties.ae</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen gallery */}
            {showGallery && (
                <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
                    <button onClick={() => setShowGallery(false)} className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                        <X className="w-5 h-5 text-white" />
                    </button>
                    <button onClick={() => setActiveImage(i => (i - 1 + images.length) % images.length)}
                        className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <img src={images[activeImage]} alt="" className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl" />
                    <button onClick={() => setActiveImage(i => (i + 1) % images.length)}
                        className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                    <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">{activeImage + 1} / {images.length}</p>
                </div>
            )}
        </div>
    );
}