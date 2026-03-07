import React, { useState } from 'react';
import {
    MapPin, Bed, Bath, Maximize, Building2,
    Phone, Mail, User, MessageSquare, Send, Share2, Heart,
    Check, ChevronLeft, ChevronRight
} from 'lucide-react';

const PropertyDetailPage = () => {
    const [activeImage, setActiveImage] = useState(0);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const property = {
        id: 1,
        title: 'Luxury Modern Villa',
        location: 'Palm Jumeirah, Dubai',
        price: 'AED 5,500,000',
        type: 'Villa',
        status: 'For Sale',
        beds: 4,
        baths: 5,
        area: '4,500 sq ft',
        yearBuilt: 2022,
        furnishing: 'Fully Furnished',
        description: 'Experience luxury living at its finest in this stunning modern villa located in the prestigious Palm Jumeirah. This exceptional property features contemporary architecture, high-end finishes, and breathtaking views of the Arabian Gulf. With spacious living areas, a private pool, and direct beach access, this villa offers an unparalleled lifestyle in one of Dubai\'s most sought-after locations.',
        features: [
            'Private Swimming Pool', 'Beach Access', 'Smart Home System', 'Modern Kitchen',
            'Walk-in Closets', 'Balcony', 'Private Garden', 'Covered Parking',
            'Security System', 'Maid\'s Room', 'Storage Room', 'Laundry Room'
        ],
        images: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200'
        ]
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
    };

    const nextImage = () => setActiveImage((prev) => (prev + 1) % property.images.length);
    const prevImage = () => setActiveImage((prev) => (prev - 1 + property.images.length) % property.images.length);

    const inputClass = "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#D4AF37] focus:bg-white text-black placeholder-gray-400 transition-colors duration-200 text-sm";

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">

                {/* Image Gallery */}
                <div className="mb-8">
                    <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-lg">
                        <img
                            src={property.images[activeImage]}
                            alt={property.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                        {/* Navigation Arrows */}
                        <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black text-black transition-all duration-200 shadow-md">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-black text-black transition-all duration-200 shadow-md">
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Action Buttons */}
                        <div className="absolute top-4 right-4 flex gap-2">
                            <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#D4AF37] text-black transition-all duration-200 shadow-sm">
                                <Share2 className="w-4 h-4" />
                            </button>
                            <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#D4AF37] text-black transition-all duration-200 shadow-sm">
                                <Heart className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4 bg-[#D4AF37] text-black px-4 py-1.5 rounded-lg font-bold text-sm shadow-sm">
                            {property.status}
                        </div>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-1.5 rounded-full text-xs">
                            {activeImage + 1} / {property.images.length}
                        </div>
                    </div>

                    {/* Thumbnails */}
                    <div className="grid grid-cols-5 gap-3 mt-4">
                        {property.images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveImage(index)}
                                className={`h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${activeImage === index ? 'border-[#D4AF37] shadow-md' : 'border-gray-200 hover:border-gray-400'}`}
                            >
                                <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Title & Price */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <div className="flex items-start justify-between mb-5">
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-bold text-black mb-2">{property.title}</h1>
                                    <div className="flex items-center text-gray-500">
                                        <MapPin className="w-4 h-4 mr-2 text-[#B8960C] flex-shrink-0" strokeWidth={2} />
                                        <span className="text-sm">{property.location}</span>
                                    </div>
                                </div>
                                <p className="text-2xl font-bold text-[#D4AF37] whitespace-nowrap ml-4">{property.price}</p>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-5 border-t border-gray-100">
                                {[
                                    { Icon: Bed, label: 'Bedrooms', value: property.beds },
                                    { Icon: Bath, label: 'Bathrooms', value: property.baths },
                                    { Icon: Maximize, label: 'Area', value: property.area },
                                    { Icon: Building2, label: 'Type', value: property.type },
                                ].map(({ Icon, label, value }, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-11 h-11 bg-[#FDF8E7] border border-[#D4AF37]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-5 h-5 text-[#D4AF37]" strokeWidth={2} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-xs">{label}</p>
                                            <p className="text-black font-semibold text-sm">{value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-black mb-3">Description</h2>
                            <p className="text-gray-500 leading-relaxed text-sm">{property.description}</p>
                        </div>

                        {/* Property Details */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-black mb-4">Property Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                                {[
                                    { label: 'Property Type', value: property.type },
                                    { label: 'Year Built', value: property.yearBuilt },
                                    { label: 'Furnishing', value: property.furnishing },
                                    { label: 'Status', value: property.status },
                                ].map(({ label, value }, i) => (
                                    <div key={i} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                                        <span className="text-gray-500 text-sm">{label}</span>
                                        <span className="text-black font-semibold text-sm">{value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-black mb-4">Features & Amenities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {property.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-[#D4AF37] rounded-full flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-black" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-600 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Location Map */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <h2 className="text-xl font-bold text-black mb-4">Location</h2>
                            <div className="h-72 bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.176734276103!2d55.139160315020996!3d25.07725998395127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca7b5d3c3af%3A0x5e1a8c3f4c8a9d23!2sDubai%20Marina!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                                    width="100%" height="100%" style={{ border: 0 }} loading="lazy" title="Property Location"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Enquiry Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24 shadow-sm">
                            {/* Gold accent bar */}
                            <div className="h-1 w-full bg-gradient-to-r from-[#B8960C] via-[#D4AF37] to-[#E5C84A] rounded-full mb-5" />
                            <h2 className="text-xl font-bold text-black mb-5">Send Enquiry</h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                        <User className="w-3.5 h-3.5" /> Full Name
                                    </label>
                                    <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className={inputClass} placeholder="Your name" />
                                </div>

                                <div>
                                    <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                        <Mail className="w-3.5 h-3.5" /> Email Address
                                    </label>
                                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className={inputClass} placeholder="your@email.com" />
                                </div>

                                <div>
                                    <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                        <Phone className="w-3.5 h-3.5" /> Phone Number
                                    </label>
                                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className={inputClass} placeholder="+971 50 123 4567" />
                                </div>

                                <div>
                                    <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                                        <MessageSquare className="w-3.5 h-3.5" /> Message
                                    </label>
                                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={4} className={`${inputClass} resize-none`} placeholder="I'm interested in this property..." />
                                </div>

                                <button type="submit" className="w-full bg-[#D4AF37] hover:bg-[#B8960C] text-black font-bold py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm shadow-sm hover:shadow-md">
                                    <Send className="w-4 h-4" />
                                    Send Enquiry
                                </button>

                                {formStatus === 'success' && (
                                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                        <p className="text-green-700 text-xs text-center font-medium">
                                            ✓ Enquiry sent! We'll contact you soon.
                                        </p>
                                    </div>
                                )}
                            </form>

                            {/* Contact Info */}
                            <div className="mt-6 pt-5 border-t border-gray-100 space-y-3">
                                <p className="text-gray-400 text-xs text-center mb-3">Or contact us directly</p>
                                <a href="tel:+971508872028" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-[#FDF8E7] border border-gray-200 hover:border-[#D4AF37]/40 transition-all duration-200">
                                    <div className="w-9 h-9 bg-[#FDF8E7] border border-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-4 h-4 text-[#D4AF37]" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs">Call us</p>
                                        <p className="text-black font-semibold text-sm">+971 50 887 2028</p>
                                    </div>
                                </a>
                                <a href="mailto:info@jadeprops.com" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-[#FDF8E7] border border-gray-200 hover:border-[#D4AF37]/40 transition-all duration-200">
                                    <div className="w-9 h-9 bg-[#FDF8E7] border border-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-4 h-4 text-[#D4AF37]" strokeWidth={2} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs">Email us</p>
                                        <p className="text-black font-semibold text-sm">info@jadeprops.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailPage;