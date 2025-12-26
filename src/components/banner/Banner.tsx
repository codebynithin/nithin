import React, { useMemo, useState } from 'react';

const Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const bannerContent = useMemo(() => {
    const today = new Date();
    const month = today.getMonth(); // 0-indexed (0 = January, 11 = December)
    const day = today.getDate();
    const year = today.getFullYear();

    // December 31st
    if (month === 11 && day === 31) {
      return {
        show: true,
        message: `Goodbye ${year}`,
        subMessage: 'Thank you for the memories! 🎆',
        type: 'goodbye' as const,
      };
    }

    // January 1st
    if (month === 0 && day === 1) {
      return {
        show: true,
        message: `Happy New Year ${year}`,
        subMessage: 'Wishing you joy and success! 🎉',
        type: 'newyear' as const,
      };
    }

    return { show: false, message: '', subMessage: '', type: null };
  }, []);

  if (!bannerContent.show || !isVisible) {
    return null;
  }

  const bgGradient =
    bannerContent.type === 'goodbye'
      ? 'from-slate-900 via-purple-900 to-slate-900'
      : 'from-indigo-950 via-purple-900 to-pink-900';

  return (
    <div
      className={`fixed inset-0 w-screen h-screen flex items-center justify-center z-50 overflow-hidden bg-gradient-to-br ${bgGradient}`}
    >
      {/* Animated Background Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Floating Confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${-10 + Math.random() * 20}%`,
              backgroundColor: [
                '#ff6b6b',
                '#feca57',
                '#48dbfb',
                '#ff9ff3',
                '#54a0ff',
                '#5f27cd',
                '#ffd700',
              ][Math.floor(Math.random() * 7)],
              borderRadius: Math.random() > 0.5 ? '50%' : '2px',
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `fall ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        {/* Sparkle Icons */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 text-6xl animate-bounce">
          ✨
        </div>

        {/* Main Title */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 bg-gradient-to-r from-yellow-300 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse"
          style={{
            textShadow: '0 0 60px rgba(255, 215, 0, 0.5)',
          }}
        >
          {bannerContent.message}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 font-light tracking-wide animate-fade-in">
          {bannerContent.subMessage}
        </p>

        {/* Decorative Emojis */}
        <div className="flex justify-center gap-4 text-4xl md:text-5xl mb-12">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>
            🎊
          </span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>
            🎉
          </span>
          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>
            🥳
          </span>
          <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>
            🎆
          </span>
          <span className="animate-bounce" style={{ animationDelay: '0.8s' }}>
            🎇
          </span>
        </div>

        {/* Skip Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="group relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-transparent"
        >
          <span className="flex items-center gap-2">
            Continue to Website
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* Custom CSS for falling animation */}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
