import React, { useState } from 'react';
import {
    MapPin, Bed, Bath, Maximize, Building2, 
    Phone, Mail, User, MessageSquare, Send, Share2, Heart,
    Check, ChevronLeft, ChevronRight} from 'lucide-react';

const PropertyDetailPage = () => {
    const [activeImage, setActiveImage] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Sample property data
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
            'Private Swimming Pool',
            'Beach Access',
            'Smart Home System',
            'Modern Kitchen',
            'Walk-in Closets',
            'Balcony',
            'Private Garden',
            'Covered Parking',
            'Security System',
            'Maid\'s Room',
            'Storage Room',
            'Laundry Room'
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
        // Simulate form submission
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
    };

    const nextImage = () => {
        setActiveImage((prev) => (prev + 1) % property.images.length);
    };

    const prevImage = () => {
        setActiveImage((prev) => (prev - 1 + property.images.length) % property.images.length);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 pt-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
                {/* Image Gallery */}
                <div className="mb-8">
                    <div className="relative h-[500px] rounded-2xl overflow-hidden group">
                        <img
                            src={property.images[activeImage]}
                            alt={property.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>

                        {/* Action Buttons */}
                        <div className="absolute top-4 right-4 flex gap-3">
                            <button className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200">
                                <Share2 className="w-5 h-5 text-white" />
                            </button>
                            <button className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200">
                                <Heart className="w-5 h-5 text-white" />
                            </button>
                        </div>

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold">
                            {property.status}
                        </div>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                            {activeImage + 1} / {property.images.length}
                        </div>
                    </div>

                    {/* Thumbnail Gallery */}
                    <div className="grid grid-cols-5 gap-3 mt-4">
                        {property.images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveImage(index)}
                                className={`h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 ${activeImage === index
                                        ? 'border-blue-500 scale-105'
                                        : 'border-white/20 hover:border-white/40'
                                    }`}
                            >
                                <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Property Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Title & Price */}
                        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-xl">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                        {property.title}
                                    </h1>
                                    <div className="flex items-center text-gray-300">
                                        <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                                        <span>{property.location}</span>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-3xl font-bold text-white">{property.price}</p>
                                </div>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/20">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-blue-600/20 border border-blue-400/30 rounded-lg flex items-center justify-center">
                                        <Bed className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Bedrooms</p>
                                        <p className="text-white font-semibold">{property.beds}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-purple-600/20 border border-purple-400/30 rounded-lg flex items-center justify-center">
                                        <Bath className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Bathrooms</p>
                                        <p className="text-white font-semibold">{property.baths}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-indigo-600/20 border border-indigo-400/30 rounded-lg flex items-center justify-center">
                                        <Maximize className="w-6 h-6 text-indigo-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Area</p>
                                        <p className="text-white font-semibold">{property.area}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-violet-600/20 border border-violet-400/30 rounded-lg flex items-center justify-center">
                                        <Building2 className="w-6 h-6 text-violet-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-sm">Type</p>
                                        <p className="text-white font-semibold">{property.type}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
                            <p className="text-gray-300 leading-relaxed">{property.description}</p>
                        </div>

                        {/* Additional Details */}
                        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-4">Property Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex justify-between py-3 border-b border-white/10">
                                    <span className="text-gray-400">Property Type</span>
                                    <span className="text-white font-semibold">{property.type}</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-white/10">
                                    <span className="text-gray-400">Year Built</span>
                                    <span className="text-white font-semibold">{property.yearBuilt}</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-white/10">
                                    <span className="text-gray-400">Furnishing</span>
                                    <span className="text-white font-semibold">{property.furnishing}</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-white/10">
                                    <span className="text-gray-400">Status</span>
                                    <span className="text-white font-semibold">{property.status}</span>
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-4">Features & Amenities</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {property.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-gray-300">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Location Map */}
                        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-xl">
                            <h2 className="text-2xl font-bold text-white mb-4">Location</h2>
                            <div className="h-80 bg-gray-700 rounded-xl overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.176734276103!2d55.139160315020996!3d25.07725998395127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6ca7b5d3c3af%3A0x5e1a8c3f4c8a9d23!2sDubai%20Marina!5e0!3m2!1sen!2sae!4v1234567890123!5m2!1sen!2sae"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    title="Property Location"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Enquiry Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-xl sticky top-24">
                            <h2 className="text-2xl font-bold text-white mb-6">Send Enquiry</h2>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                                        <User className="inline w-4 h-4 mr-1" />
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition-colors duration-200"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                                        <Mail className="inline w-4 h-4 mr-1" />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition-colors duration-200"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                                        <Phone className="inline w-4 h-4 mr-1" />
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition-colors duration-200"
                                        placeholder="+971 50 123 4567"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                                        <MessageSquare className="inline w-4 h-4 mr-1" />
                                        Message
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition-colors duration-200 resize-none"
                                        placeholder="I'm interested in this property..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                                >
                                    <Send className="w-5 h-5" />
                                    Send Enquiry
                                </button>

                                {formStatus === 'success' && (
                                    <div className="p-4 bg-green-600/20 border border-green-400/30 rounded-lg">
                                        <p className="text-green-400 font-medium text-sm text-center">
                                            ✓ Enquiry sent successfully! We'll contact you soon.
                                        </p>
                                    </div>
                                )}
                            </form>

                            {/* Contact Info */}
                            <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
                                <p className="text-gray-400 text-sm text-center mb-4">Or contact us directly</p>
                                <a
                                    href="tel:+971508872028"
                                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                                >
                                    <div className="w-10 h-10 bg-blue-600/20 border border-blue-400/30 rounded-lg flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Call us</p>
                                        <p className="text-white font-semibold">+971 50 887 2028</p>
                                    </div>
                                </a>
                                <a
                                    href="mailto:info@jadeprops.com"
                                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                                >
                                    <div className="w-10 h-10 bg-purple-600/20 border border-purple-400/30 rounded-lg flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Email us</p>
                                        <p className="text-white font-semibold">info@jadeprops.com</p>
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