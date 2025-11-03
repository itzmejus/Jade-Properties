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
        <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-4 overflow-hidden border-y border-gray-700">
            <div className="relative flex">
                {/* First set of items */}
                <div className="flex animate-scroll whitespace-nowrap">
                    {items.map((item, index) => (
                        <div key={`first-${index}`} className="flex items-center">
                            <span className="text-white font-semibold text-lg px-6">
                                {item}
                            </span>
                            <span className="text-blue-400 text-2xl px-4">/</span>
                        </div>
                    ))}
                </div>

                {/* Duplicate set for seamless loop */}
                <div className="flex animate-scroll whitespace-nowrap" aria-hidden="true">
                    {items.map((item, index) => (
                        <div key={`second-${index}`} className="flex items-center">
                            <span className="text-white font-semibold text-lg px-6">
                                {item}
                            </span>
                            <span className="text-blue-400 text-2xl px-4">/</span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
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