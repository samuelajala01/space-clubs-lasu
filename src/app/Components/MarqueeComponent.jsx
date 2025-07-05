import { memo } from "react";
import Link from "next/link";

const MarqueeComponent = () => {
  return (
    <div className="bg-[#f65d2a] text-white py-3 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex items-center mx-4">
          <span className="text-sm font-medium">📊 Check out our latest reports and insights</span>
          <Link href="/reports" className="ml-4 text-sm font-semibold underline hover:text-orange-200 transition-colors">
            View Reports →
          </Link>
        </div>
        <div className="flex items-center mx-4">
          <span className="text-sm font-medium">🚀 New space technology research published</span>
          <Link href="/reports" className="ml-4 text-sm font-semibold underline hover:text-orange-200 transition-colors">
            Read More →
          </Link>
        </div>
        <div className="flex items-center mx-4">
          <span className="text-sm font-medium">🌍 Africa's space journey continues - Latest updates</span>
          <Link href="/reports" className="ml-4 text-sm font-semibold underline hover:text-orange-200 transition-colors">
            Learn More →
          </Link>
        </div>
        <div className="flex items-center mx-4">
          <span className="text-sm font-medium">📈 Annual impact report now available</span>
          <Link href="/reports" className="ml-4 text-sm font-semibold underline hover:text-orange-200 transition-colors">
            Download →
          </Link>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
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