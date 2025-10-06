import { memo, useState } from "react";
import Link from "next/link";

const MarqueeComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-[#7194ee16] text-white py-3 overflow-hidden relative">
     
      <button
        onClick={handleClose}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-1 transition-colors"
        aria-label="Close marquee"
      >
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="flex animate-marquee whitespace-nowrap pr-12">
        <div className="flex items-center mx-4">
          <span className="text-lg font-semibold">
           It's World Space Week !!!   It's World Space Week!!!
          </span>
          <Link
            href="/events"
            className="ml-4 text-sm font-semibold underline hover:text-orange-200 transition-colors"
          >
            Our Events →
          </Link>
        </div>
      
  
        <div className="flex items-center mx-4">
          <span className="text-lg font-semibold ">
            It's World Space Week !!!   It's World Space Week!!!
          </span>
          <Link
            href="/events"
            className="ml-4 text-sm font-semibold underline hover:text-orange-200 transition-colors"
          >
            Our events →
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default memo(MarqueeComponent);
