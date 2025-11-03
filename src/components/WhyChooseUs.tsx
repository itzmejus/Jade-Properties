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
        {
            icon: Home,
            number: "500+",
            label: "Properties Listed"
        },
        {
            icon: Users,
            number: "1000+",
            label: "Happy Clients"
        },
        {
            icon: Star,
            number: "4.9/5",
            label: "Client Rating"
        },
        {
            icon: Clock,
            number: "15+",
            label: "Years Experience"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Why Choose Jade Properties
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
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
                                className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 text-center shadow-lg"
                            >
                                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Stats Section */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8 md:p-12 mb-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-400/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-7 h-7 text-blue-400" strokeWidth={2} />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-300 font-medium text-sm">
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl border border-blue-500/30">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                        Ready to Find Your Dream Property?
                    </h3>
                    <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Explore our exclusive listings and let our experts guide you to your perfect home
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/properties">
                            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                                Browse Properties
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}