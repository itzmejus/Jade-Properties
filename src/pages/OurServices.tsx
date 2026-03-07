import { useState } from 'react';
import {
    Home, TrendingUp, Key, BarChart2, Settings, Building,
    ChevronRight, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: Home,
        number: '01',
        title: 'Property Buying Assistance',
        tagline: 'Find more than just a house — discover your future.',
        description:
            'We assist buyers in finding the perfect residential or commercial property, offering curated listings, expert guidance, and smooth negotiations. From luxury villas to high-rise apartments, we help you unlock the lifestyle you desire.',
        includes: [
            'Personalized property matching',
            'Market analysis & neighborhood insights',
            'Legal & financial support through trusted partners',
        ],
    },
    {
        icon: TrendingUp,
        number: '02',
        title: 'Property Selling & Marketing',
        tagline: 'Sell smart. Sell with style.',
        description:
            'Our selling service combines premium marketing, strategic pricing, and an exclusive buyer network to showcase your property at its best and close deals efficiently.',
        includes: [
            'Professional photography & video tours',
            'Online + offline marketing campaigns',
            'Negotiation & sales management',
        ],
    },
    {
        icon: Key,
        number: '03',
        title: 'Property Leasing & Rental Services',
        tagline: 'Connecting tenants with the perfect space.',
        description:
            'Whether you\'re a landlord seeking trustworthy tenants or a tenant looking for a comfortable, well-located space — we simplify the leasing process and ensure both parties get the best deal.',
        includes: [
            'Tenant screening',
            'Lease documentation',
            'Ongoing support',
        ],
    },
    {
        icon: BarChart2,
        number: '04',
        title: 'Investment Advisory',
        tagline: 'Maximize your ROI with smart real estate moves.',
        description:
            'Dubai offers dynamic opportunities for local and international investors. We offer deep market analysis and strategic advice to help you make informed, high-yield investment decisions.',
        includes: [
            'ROI-focused property sourcing',
            'Investment portfolio planning',
            'Off-plan property insights',
        ],
    },
    {
        icon: Settings,
        number: '05',
        title: 'Property Management',
        tagline: 'Hands-off ownership, hassle-free profits.',
        description:
            'For busy landlords and investors, we provide end-to-end property management, handling everything from maintenance to tenant communication.',
        includes: [
            'Rent collection & renewals',
            'Property maintenance coordination',
            'Tenant relations',
        ],
    },
    {
        icon: Building,
        number: '06',
        title: 'Off-Plan Projects & Developer Deals',
        tagline: 'Be part of what\'s next.',
        description:
            'Gain early access to the most promising off-plan projects in Dubai. We collaborate directly with developers to bring you unbeatable deals and exclusive units before they hit the open market.',
        includes: [
            'Priority access to new launches',
            'Project comparison & analysis',
            'Assistance with payment plans & contracts',
        ],
    },
];

export default function OurServices() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="bg-gray-50 pt-28 pb-16 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-16">
                    <p className="text-[#B8960C] text-sm font-semibold tracking-widest uppercase mb-3">
                        Our Services
                    </p>
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
                                Tailored Real Estate Solutions,{' '}
                                <span className="text-[#D4AF37]">Designed for Distinction</span>
                            </h2>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm lg:text-right">
                            Whether you're an investor, homeowner, developer, or tenant — our services are crafted to deliver value, precision, and peace of mind at every step.
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                onClick={() => setActiveIndex(isActive ? null : index)}
                                className={`group relative cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${isActive
                                    ? 'bg-[#D4AF37] border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/25'
                                    : 'bg-white border-gray-200 hover:border-[#D4AF37]/50 hover:shadow-xl hover:shadow-[#D4AF37]/10 shadow-sm'
                                    }`}
                            >
                                <div className="p-6">
                                    {/* Top row */}
                                    <div className="flex items-start justify-between mb-5">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive
                                            ? 'bg-black/10'
                                            : 'bg-[#FDF8E7] border border-[#D4AF37]/30 group-hover:bg-[#FAF0C8]'
                                            }`}>
                                            <Icon
                                                className={`w-6 h-6 transition-colors duration-300 ${isActive ? 'text-black' : 'text-[#D4AF37]'}`}
                                                strokeWidth={1.8}
                                            />
                                        </div>
                                        <span className={`text-xs font-black tracking-widest transition-colors duration-300 ${isActive ? 'text-black/40' : 'text-gray-300'
                                            }`}>
                                            {service.number}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-lg font-bold mb-2 leading-snug transition-colors duration-300 ${isActive ? 'text-black' : 'text-black group-hover:text-[#B8960C]'
                                        }`}>
                                        {service.title}
                                    </h3>

                                    {/* Tagline */}
                                    <p className={`text-sm font-medium italic mb-3 transition-colors duration-300 ${isActive ? 'text-black/70' : 'text-gray-400'
                                        }`}>
                                        {service.tagline}
                                    </p>

                                    {/* Description */}
                                    <p className={`text-sm leading-relaxed mb-5 transition-colors duration-300 ${isActive ? 'text-black/80' : 'text-gray-500'
                                        }`}>
                                        {service.description}
                                    </p>

                                    {/* Divider */}
                                    <div className={`h-px mb-4 transition-colors duration-300 ${isActive ? 'bg-black/15' : 'bg-gray-100'
                                        }`} />

                                    {/* Includes */}
                                    <div className="space-y-2">
                                        <p className={`text-xs font-bold uppercase tracking-widest mb-3 transition-colors duration-300 ${isActive ? 'text-black/60' : 'text-gray-400'
                                            }`}>
                                            Includes
                                        </p>
                                        {service.includes.map((item, i) => (
                                            <div key={i} className="flex items-start gap-2.5">
                                                <CheckCircle2
                                                    className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-colors duration-300 ${isActive ? 'text-black' : 'text-[#D4AF37]'
                                                        }`}
                                                    strokeWidth={2}
                                                />
                                                <span className={`text-sm transition-colors duration-300 ${isActive ? 'text-black/80' : 'text-gray-500'
                                                    }`}>
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-14 text-center">
                    <p className="text-gray-400 text-sm mb-5">
                        Not sure which service fits your needs?
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] hover:bg-[#B8960C] text-black font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#D4AF37]/30 text-sm"
                    >
                        Talk to an Expert
                        <ChevronRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}