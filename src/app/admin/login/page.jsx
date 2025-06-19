"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/Components/Navbar";
import Link from "next/link";

export default function AdminLogin() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });
      
      const body = await res.json();
      
      if (res.ok) {
        console.log("Login successful, waiting for cookie to be set...");
        // Add a small delay to ensure cookie is set, then redirect
        setTimeout(() => {
          window.location.href = "/admin/dashboard"; // Use window.location instead of router.push
        }, 200);
      } else {
        setError(body.message || "Login failed");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="pt-48 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h1 className="text-2xl text-white text-center">
                    Admin Login
                  </h1>
                  
                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg text-center">
                      {error}
                    </div>
                  )}
                  
                  <input
                    type="password"
                    name="adminCode"
                    autoComplete="new-password"
                    placeholder="Enter admin code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                    disabled={loading}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a] disabled:opacity-50"
                  />
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 bg-orange-600 rounded text-white hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Logging in..." : "Login"}
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
}