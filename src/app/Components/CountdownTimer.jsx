"use client";
import { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsExpired(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    // Calculate initial time
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isExpired) {
    return (
      <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-6 border border-red-500/30 mb-8">
        <div className="flex items-center justify-center text-center">
          <div className="text-red-400 mr-3 text-2xl">⏰</div>
          <div>
            <h3 className="text-red-400 font-semibold text-xl">Applications Closed</h3>
            <p className="text-red-300">The application deadline has passed.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[#f65d2a]/20 to-orange-600/20 backdrop-blur-md rounded-xl p-6 border border-orange-500/30 mb-8">
      <div className="text-center">
        <h3 className="text-white font-semibold text-xl mb-2 flex items-center justify-center">
          {/* <span className="mr-2"></span> */}
          Application Deadline
        </h3>
        <p className="text-gray-200 mb-4">Applications close on October 17, 2025</p>
        
        <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-[#f65d2a]">
              {timeLeft.days.toString().padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-gray-300 uppercase">Days</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-[#f65d2a]">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-gray-300 uppercase">Hours</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-[#f65d2a]">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-gray-300 uppercase">Minutes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold text-[#f65d2a]">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-gray-300 uppercase">Seconds</div>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-center text-sm text-gray-300">
          {/* <span className="animate-pulse mr-2">🚀</span> */}
          <span>Don't miss your chance to join Space Clubs LASU!</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;