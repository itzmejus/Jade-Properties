export function BrandedFallback() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="text-center">
                {/* Property/Home themed icon animation */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                            className="w-16 h-16 text-blue-400 animate-bounce"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                        </svg>
                    </div>
                    <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 border-4 border-purple-500/20 rounded-full animate-pulse"></div>
                </div>

                {/* Glassy container */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-8 py-6 shadow-xl">
                    <h2 className="text-2xl font-bold text-white mb-2">
                        Jade Properties
                    </h2>
                    <p className="text-gray-300">
                        Loading your properties...
                    </p>

                    {/* Loading dots animation */}
                    <div className="flex justify-center gap-2 mt-4">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}