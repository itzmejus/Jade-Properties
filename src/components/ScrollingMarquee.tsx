const ScrollingMarquee = () => {
    const items = [
        'Buy, Sell & Rent',
        'Prime Locations',
        'Family Communities',
        'Real Estate Experts',
        'Abu Dhabi Properties',
        'Dubai Real Estate',
        'Waterfront Villas',
        'Investment Properties',
        'Commercial Spaces',
        'Off-Plan Projects'
    ];

    return (
        <div className="w-full bg-white border-y border-[#D4AF37]/30 py-3.5 overflow-hidden">
            <div className="relative flex">
                <div className="flex animate-scroll whitespace-nowrap">
                    {items.map((item, index) => (
                        <div key={`first-${index}`} className="flex items-center">
                            <span className="text-black font-semibold text-sm px-6 tracking-wide">
                                {item}
                            </span>
                            <span className="text-[#D4AF37] text-base px-2">•</span>
                        </div>
                    ))}
                </div>
                <div className="flex animate-scroll whitespace-nowrap" aria-hidden="true">
                    {items.map((item, index) => (
                        <div key={`second-${index}`} className="flex items-center">
                            <span className="text-black font-semibold text-sm px-6 tracking-wide">
                                {item}
                            </span>
                            <span className="text-[#D4AF37] text-base px-2">•</span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default ScrollingMarquee;