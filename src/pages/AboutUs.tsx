import { MapPin, ArrowRight, Star, Award, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    const features = [
        { icon: MapPin, title: 'Prime Locations', desc: 'Properties in the most sought-after areas of Dubai and Abu Dhabi' },
        { icon: Award, title: 'Expert Guidance', desc: 'Professional agents with deep market knowledge to guide you' },
        { icon: Shield, title: 'Secure Transactions', desc: 'Safe and transparent property dealings you can trust' },
        { icon: Clock, title: '24/7 Support', desc: 'Always available to answer your questions and concerns' },
    ];

    const whyUs = [
        { title: 'Verified Properties', desc: 'All listings are thoroughly verified and legally compliant' },
        { title: 'Best Market Rates', desc: 'Competitive pricing with complete transparency on fees' },
        { title: 'Personalized Service', desc: 'Tailored solutions based on your specific needs and budget' },
        { title: 'End-to-End Support', desc: 'Complete assistance from property search to final handover' },
        { title: 'Market Insights', desc: 'Regular updates on market trends and investment opportunities' },
        { title: 'Flexible Viewing', desc: 'Schedule property viewings at your convenience' },
    ];

    const stats = [
        { number: '500+', label: 'Properties Listed' },
        { number: '1000+', label: 'Happy Clients' },
        { number: '50+', label: 'Expert Agents' },
        { number: '15+', label: 'Years Experience' },
    ];

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <div className="pt-28 pb-16 px-6 bg-gray-50 border-b border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-[#B8960C] text-sm font-semibold tracking-widest uppercase mb-4">
                        About Jade Properties & Real Estate
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                        Your Trusted Partner in
                        <span className="block mt-2 text-[#D4AF37]">
                            Finding Perfect Properties
                        </span>
                    </h1>
                    <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
                        We make it easy to find, buy, and rent exceptional properties across the UAE with unmatched expertise and personalized service
                    </p>
                </div>
            </div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map(({ icon: Icon, title, desc }, i) => (
                        <div key={i} className="group p-6 bg-white border border-gray-200 hover:border-[#D4AF37]/50 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/10 shadow-sm">
                            <div className="w-12 h-12 bg-[#FDF8E7] border border-[#D4AF37]/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#FAF0C8] transition-all duration-300">
                                <Icon className="w-6 h-6 text-[#D4AF37]" strokeWidth={2} />
                            </div>
                            <h3 className="text-base font-bold text-black mb-2">{title}</h3>
                            <p className="text-sm text-gray-500">{desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="py-4 px-6 pb-16">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-10">
                            <div>
                                <div className="inline-block px-4 py-1.5 bg-[#FDF8E7] border border-[#D4AF37]/30 rounded-lg mb-4">
                                    <h2 className="text-lg font-bold text-[#B8960C]">Our Mission</h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    To provide exceptional real estate services that exceed expectations. We're committed to helping you find not just a property, but your perfect home or investment opportunity.
                                </p>
                            </div>
                            <div>
                                <div className="inline-block px-4 py-1.5 bg-[#FDF8E7] border border-[#D4AF37]/30 rounded-lg mb-4">
                                    <h2 className="text-lg font-bold text-[#B8960C]">Our Vision</h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    To become the most trusted real estate agency in the UAE, known for integrity, innovation, and creating lasting relationships with our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="max-w-7xl mx-auto px-6 pb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 text-center">
                    Why Choose <span className="text-[#D4AF37]">Jade Properties?</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-5">
                    {whyUs.map(({ title, desc }, i) => (
                        <div key={i} className="flex gap-4 p-5 bg-white border border-gray-200 hover:border-[#D4AF37]/40 rounded-xl transition-all duration-200 hover:shadow-md shadow-sm">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FDF8E7] border border-[#D4AF37]/30 flex items-center justify-center">
                                <Star className="w-4 h-4 text-[#D4AF37]" strokeWidth={2} />
                            </div>
                            <div>
                                <h3 className="font-bold text-black mb-1 text-sm">{title}</h3>
                                <p className="text-gray-500 text-sm">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-4 px-6 pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10 md:p-12 shadow-sm">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            {stats.map(({ number, label }, i) => (
                                <div key={i}>
                                    <h3 className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">{number}</h3>
                                    <p className="text-gray-500 text-sm font-medium">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto px-6 pb-16">
                <div className="bg-[#D4AF37] rounded-2xl p-8 md:p-12 text-center shadow-xl shadow-[#D4AF37]/20">
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Ready to Find Your Dream Property?</h2>
                    <p className="text-black/70 text-base mb-8 max-w-xl mx-auto">
                        Let our expert team help you discover the perfect property that matches your needs and budget
                    </p>
                    <Link
                        to="/properties"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-black text-[#D4AF37] rounded-lg font-bold text-sm hover:bg-gray-900 transition-all duration-200 hover:scale-105 shadow-lg"
                    >
                        Browse Properties <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Contact Section */}
            <div className="py-4 px-6 pb-16 bg-gray-50 border-t border-gray-100">
                <div className="max-w-4xl mx-auto pt-12">
                    <h3 className="text-2xl font-bold text-black mb-8 text-center">Get in Touch</h3>
                    <div className="grid md:grid-cols-3 gap-5">
                        {[
                            { label: 'Email', value: 'info@jadeprops.com', href: 'mailto:info@jadeprops.com' },
                            { label: 'Phone', value: '+971 50 887 2028', href: 'tel:+971508872028' },
                            { label: 'Support', value: 'Available 24/7', href: null },
                        ].map(({ label, value, href }, i) => (
                            <div key={i} className="p-5 bg-white border border-gray-200 hover:border-[#D4AF37]/40 rounded-xl text-center transition-all duration-200 hover:shadow-md shadow-sm">
                                <h4 className="font-bold text-black mb-2 text-sm">{label}</h4>
                                {href ? (
                                    <a href={href} className="text-[#B8960C] hover:text-[#D4AF37] transition-colors text-sm font-medium">{value}</a>
                                ) : (
                                    <p className="text-gray-500 text-sm">{value}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}