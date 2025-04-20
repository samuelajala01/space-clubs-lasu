"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../Components/Navbar";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Redirect to admin dashboard on success
      window.location.href = "/admin/dashboard";
    } catch (err) {
      setError(err.message);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen relative">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"></div>
      {/* Starry Background */}
      {/* <div className="fixed inset-0 z-0">
        <Image
          src="/images/starry.jpg"
          alt="Starry background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div> */}

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="pt-48 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
                <h1 className="text-3xl font-bold text-white mb-8 text-center">
                  Admin Login
                </h1>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg mb-6">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#f65d2a] text-white py-3 rounded-lg font-semibold hover:bg-[#e54d1a] transition-colors duration-300"
                  >
                    Login
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link
                    href="/"
                    className="text-white hover:text-orange-200 transition-colors"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
