"use client";
import { useEffect } from "react";

const SuccessModal = ({ isOpen, onClose }) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent background scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-md mx-4 animate-fadeIn">
        {/* Success Animation */}
        <div className="text-center mb-6">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
            <div className="relative w-20 h-20 bg-green-500/30 rounded-full flex items-center justify-center border-2 border-green-400">
              <svg 
                className="w-10 h-10 text-green-400 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="3" 
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-3">
            Application Submitted Successfully!
          </h2>
          
          <p className="text-gray-200 mb-4">
            Thank you for your interest in joining Space Clubs LASU! 
          </p>
          
          <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 border border-white/10 mb-6">
            
            
            <div className="border-t border-white/10 pt-4">
              <p className="text-gray-300 text-sm mb-3">Follow us on social media:</p>
              <div className="flex justify-center space-x-4">
                {/* Instagram Icon */}
                <a 
                  href="https://instagram.com/lasu_space" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg hover:scale-110 transition-transform duration-300"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* LinkedIn Icon */}
                <a 
                  href="https://linkedin.com/company/lasu-space" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-blue-600 p-2 rounded-lg hover:scale-110 transition-transform duration-300 hover:bg-blue-700"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>

                {/* Twitter Icon */}
                <a 
                  href="https://twitter.com/lasu_space" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-sky-500 p-2 rounded-lg hover:scale-110 transition-transform duration-300 hover:bg-sky-600"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-[#f65d2a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e54d1a] transition-colors duration-300"
          >
            Continue
          </button>
          <button
            onClick={() => {
              window.location.href = '/';
            }}
            className="flex-1 bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-300 border border-white/20"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;