import { MapPin, ArrowRight, Star, Award, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900">
            {/* Hero Section */}
            <div className="pt-24 pb-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-semibold">
                        About Jade Properties & Real Estate
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Your Trusted Partner in
                        <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Finding Perfect Properties
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        We make it easy to find, buy, and rent exceptional properties across the UAE with unmatched expertise and personalized service
                    </p>
                </div>
            </div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/15 transition-all transform hover:-translate-y-2 shadow-lg">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                            <MapPin className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Prime Locations</h3>
                        <p className="text-sm text-gray-300">Properties in the most sought-after areas of Dubai and Abu Dhabi</p>
                    </div>

                    <div className="p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/15 transition-all transform hover:-translate-y-2 shadow-lg">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                            <Award className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Expert Guidance</h3>
                        <p className="text-sm text-gray-300">Professional agents with deep market knowledge to guide you</p>
                    </div>

                    <div className="p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/15 transition-all transform hover:-translate-y-2 shadow-lg">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                            <Shield className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">Secure Transactions</h3>
                        <p className="text-sm text-gray-300">Safe and transparent property dealings you can trust</p>
                    </div>

                    <div className="p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/15 transition-all transform hover:-translate-y-2 shadow-lg">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                            <Clock className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">24/7 Support</h3>
                        <p className="text-sm text-gray-300">Always available to answer your questions and concerns</p>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="py-16 px-6 my-12">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 md:p-12 shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-lg mb-4">
                                    <h2 className="text-2xl font-bold text-blue-400">Our Mission</h2>
                                </div>
                                <p className="text-lg text-gray-200 leading-relaxed">
                                    To provide exceptional real estate services that exceed expectations. We're committed to helping you find not just a property, but your perfect home or investment opportunity.
                                </p>
                            </div>
                            <div>
                                <div className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-400/30 rounded-lg mb-4">
                                    <h2 className="text-2xl font-bold text-purple-400">Our Vision</h2>
                                </div>
                                <p className="text-lg text-gray-200 leading-relaxed">
                                    To become the most trusted real estate agency in the UAE, known for integrity, innovation, and creating lasting relationships with our clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Why Choose Jade Properties & Real Estate?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4 p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/15 transition-all shadow-lg">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                            <Star className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-2 text-lg">Verified Properties</h3>
                            <p className="text-gray-300">All listings are thoroughly verified and legally compliant</p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/15 transition-all shadow-lg">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                            <Star className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-2 text-lg">Best Market Rates</h3>
                            <p className="text-gray-300">Competitive pricing with complete transparency on fees</p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/15 transition-all shadow-lg">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                            <Star className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-2 text-lg">Personalized Service</h3>
                            <p className="text-gray-300">Tailored solutions based on your specific needs and budget</p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/15 transition-all shadow-lg">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                            <Star className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-2 text-lg">End-to-End Support</h3>
                            <p className="text-gray-300">Complete assistance from property search to final handover</p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/15 transition-all shadow-lg">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                            <Star className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-2 text-lg">Market Insights</h3>
                            <p className="text-gray-300">Regular updates on market trends and investment opportunities</p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 hover:bg-white/15 transition-all shadow-lg">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                            <Star className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-2 text-lg">Flexible Viewing</h3>
                            <p className="text-gray-300">Schedule property viewings at your convenience</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 px-6 my-12">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-12 shadow-2xl">
                        <div className="grid md:grid-cols-4 gap-8 text-center">
                            <div>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">500+</h3>
                                <p className="text-gray-300 font-semibold">Properties Listed</p>
                            </div>
                            <div>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">1000+</h3>
                                <p className="text-gray-300 font-semibold">Happy Clients</p>
                            </div>
                            <div>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">50+</h3>
                                <p className="text-gray-300 font-semibold">Expert Agents</p>
                            </div>
                            <div>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">15+</h3>
                                <p className="text-gray-300 font-semibold">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl border border-blue-500/30">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        Let our expert team help you discover the perfect property that matches your needs and budget
                    </p>
                    <Link
                        to="/properties"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
                    >
                        Browse Properties <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>

            {/* Contact Section */}
            <div className="py-16 px-6 mb-12">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold text-white mb-8 text-center">Get in Touch</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 text-center hover:bg-white/15 transition-all shadow-lg">
                            <h4 className="font-bold text-white mb-2">Email</h4>
                            <a href="mailto:info@jadeprops.com" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                                info@jadeprops.com
                            </a>
                        </div>
                        <div className="p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 text-center hover:bg-white/15 transition-all shadow-lg">
                            <h4 className="font-bold text-white mb-2">Phone</h4>
                            <a href="tel:+971508872028" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                                +971 50 887 2028
                            </a>
                        </div>
                        <div className="p-6 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 text-center hover:bg-white/15 transition-all shadow-lg">
                            <h4 className="font-bold text-white mb-2">Support</h4>
                            <p className="text-gray-300">Available 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}