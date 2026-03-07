import { Shield, Award, Headphones, Wallet, Clock, Users, Star, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhyChooseUs() {
    const features = [
        {
            icon: Shield,
            title: "Secure Transactions",
            description: "100% safe and transparent property dealings"
        },
        {
            icon: Award,
            title: "Best Market Rates",
            description: "Competitive pricing with no hidden fees"
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            description: "Expert assistance whenever you need"
        },
        {
            icon: Wallet,
            title: "Flexible Financing",
            description: "Multiple payment options available"
        }
    ];

    const stats = [
        { icon: Home, number: "500+", label: "Properties Listed" },
        { icon: Users, number: "1000+", label: "Happy Clients" },
        { icon: Star, number: "4.9/5", label: "Client Rating" },
        { icon: Clock, number: "15+", label: "Years Experience" }
    ];

    return (
        <div className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[#B8960C] text-sm font-semibold tracking-widest uppercase mb-3">
                        Jade Properties & Real Estate
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                        Why Choose Us
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-base">
                        We turn your real estate dreams into reality with exceptional service and unmatched expertise
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group bg-white border border-gray-200 hover:border-[#D4AF37]/60 rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#D4AF37]/10 shadow-sm"
                            >
                                <div className="w-14 h-14 bg-[#FDF8E7] border border-[#D4AF37]/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FAF0C8] transition-all duration-300">
                                    <Icon className="w-7 h-7 text-[#D4AF37]" strokeWidth={2} />
                                </div>
                                <h3 className="text-base font-bold text-black mb-2">{feature.title}</h3>
                                <p className="text-gray-500 text-sm">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12 mb-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="w-14 h-14 bg-[#FDF8E7] border border-[#D4AF37]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-6 h-6 text-[#D4AF37]" strokeWidth={2} />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-1">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-500 text-sm">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Banner — keep gold bg, swap text to black for contrast */}
                <div className="bg-[#D4AF37] rounded-2xl p-8 md:p-12 text-center shadow-xl shadow-[#D4AF37]/20">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
                        Ready to Find Your Dream Property?
                    </h3>
                    <p className="text-black/70 text-base md:text-lg mb-8 max-w-xl mx-auto">
                        Explore our exclusive listings and let our experts guide you to your perfect home
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/properties">
                            <button className="bg-black text-[#D4AF37] hover:bg-gray-900 font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg text-sm">
                                Browse Properties
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="bg-white border-2 border-black text-black hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 text-sm">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}