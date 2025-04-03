const Donate = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Support Our Mission
      </h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
        Your contributions help us continue to inspire and educate the next
        generation of space enthusiasts. Every donation makes a difference!
      </p>
      <a
        href="https://payment-gateway-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Donate Now
      </a>
    </div>
  );
};

export default Donate;
