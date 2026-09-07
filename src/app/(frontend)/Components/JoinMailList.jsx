import React, { useState, useEffect } from "react";

const JoinMailList = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (status === "success" || status === "error") {
      setShowNotification(true);
      const timer = setTimeout(() => {
        setShowNotification(false);
        setStatus("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formUrl = `https://docs.google.com/forms/d/e/${process.env.GOOGLE_FORM_ID}/formResponse`;

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `entry.${
          process.env.GOOGLE_FORM_ENTRY_ID
        }=${encodeURIComponent(email)}`,
      });

      setStatus("success");
      setEmail("");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="my-16 text-center">
        <h2 className="text-3xl text-white mb-4">
          Stay Updated with Our Events
        </h2>
        <p className="text-gray-200 mb-6">
          Subscribe to our mailing list to receive updates about upcoming events
          and activities.
        </p>
        <div className="relative">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full border border-white/20 focus:outline-none focus:border-[#f65d2a]"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#f65d2a] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e54d1a] transition-colors duration-300 disabled:opacity-50"
            >
              {status === "sending" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {showNotification && (
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 mt-4 px-6 py-3 rounded-lg shadow-lg transition-all duration-500 ${
                status === "success"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {status === "success" ? (
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Successfully subscribed to the mailing list!</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span>Failed to subscribe. Please try again.</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JoinMailList;
