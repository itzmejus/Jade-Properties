import Logo from '../assets/Logo.png';

export function BrandedFallback() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 overflow-hidden">

            {/* Ambient background glows */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 w-64 h-64 bg-[#D4AF37]/6 rounded-full blur-3xl pointer-events-none" />

            <div className="relative text-center px-6">

                {/* Logo with rings */}
                <div className="relative w-28 h-28 mx-auto mb-10 flex items-center justify-center">
                    {/* Outer slow pulse ring */}
                    <div className="absolute inset-0 rounded-full border border-[#D4AF37]/25 animate-ping" style={{ animationDuration: '2.5s' }} />
                    {/* Middle ring */}
                    <div className="absolute inset-3 rounded-full border border-[#D4AF37]/30 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.4s' }} />
                    {/* Static outer circle */}
                    <div className="absolute inset-0 rounded-full border border-[#D4AF37]/20" />
                    {/* Logo container */}
                    <div className="relative z-10 w-20 h-20 bg-white border border-[#D4AF37]/30 rounded-2xl flex items-center justify-center shadow-xl shadow-[#D4AF37]/15">
                        <img
                            src={Logo}
                            alt="Jade Properties Logo"
                            className="h-14 w-auto object-contain"
                        />
                    </div>
                </div>

                {/* Brand name */}
                <p className="text-[#B8960C] text-xs font-bold tracking-[0.3em] uppercase mb-3">
                    Jade Properties & Real Estate
                </p>

                {/* Main message */}
                <h2 className="text-2xl font-bold text-black mb-1">
                    Loading your properties
                </h2>
                <p className="text-gray-400 text-sm mb-10">
                    Preparing the finest listings for you...
                </p>

                {/* Progress bar */}
                <div className="w-56 mx-auto mb-8">
                    <div className="h-0.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#B8960C] to-[#E5C84A] rounded-full animate-progress" />
                    </div>
                </div>

                {/* Loading dots */}
                <div className="flex justify-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce" style={{ animationDelay: '0ms', animationDuration: '1s' }} />
                    <div className="w-1.5 h-1.5 bg-[#D4AF37]/70 rounded-full animate-bounce" style={{ animationDelay: '180ms', animationDuration: '1s' }} />
                    <div className="w-1.5 h-1.5 bg-[#D4AF37]/40 rounded-full animate-bounce" style={{ animationDelay: '360ms', animationDuration: '1s' }} />
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