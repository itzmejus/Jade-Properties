import Logo from '../assets/Logo.png';

export function BrandedFallback() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-950 overflow-hidden">

            {/* Ambient background glows */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative text-center px-6">

                {/* Logo with rings */}
                <div className="relative w-28 h-28 mx-auto mb-10 flex items-center justify-center">
                    {/* Outer slow pulse ring */}
                    <div className="absolute inset-0 rounded-full border border-yellow-400/15 animate-ping" style={{ animationDuration: '2.5s' }} />
                    {/* Middle ring */}
                    <div className="absolute inset-3 rounded-full border border-yellow-400/20 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.4s' }} />
                    {/* Static outer circle */}
                    <div className="absolute inset-0 rounded-full border border-yellow-400/10" />
                    {/* Logo container */}
                    <div className="relative ">
                        <img
                            src={Logo}
                            alt="Jade Properties Logo"
                            className="h-16 w-auto object-contain"
                        />
                    </div>
                </div>

                {/* Brand name */}
                <p className="text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
                    Jade Properties & Real Estate
                </p>

                {/* Main message */}
                <h2 className="text-2xl font-bold text-white mb-1">
                    Loading your properties
                </h2>
                <p className="text-gray-500 text-sm mb-10">
                    Preparing the finest listings for you...
                </p>

                {/* Progress bar */}
                <div className="w-56 mx-auto mb-8">
                    <div className="h-0.5 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full animate-progress" />
                    </div>
                </div>

                {/* Loading dots */}
                <div className="flex justify-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0ms', animationDuration: '1s' }} />
                    <div className="w-1.5 h-1.5 bg-yellow-400/70 rounded-full animate-bounce" style={{ animationDelay: '180ms', animationDuration: '1s' }} />
                    <div className="w-1.5 h-1.5 bg-yellow-400/40 rounded-full animate-bounce" style={{ animationDelay: '360ms', animationDuration: '1s' }} />
                </div>
            </div>

            <style>{`
                @keyframes progress {
                    0% { width: 0%; margin-left: 0%; }
                    50% { width: 70%; margin-left: 10%; }
                    100% { width: 0%; margin-left: 100%; }
                }
                .animate-progress {
                    animation: progress 1.8s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}