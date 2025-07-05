"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/Components/Navbar";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log("Checking authentication...");
        console.log("All cookies:", document.cookie);
        
        // First check if token exists in cookies
        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
        console.log("Parsed cookies:", cookies);
        
        const tokenCookie = cookies.find(cookie => 
          cookie.startsWith('admin_token=')
        );
        
        console.log("Token cookie found:", !!tokenCookie);
        console.log("Token cookie value:", tokenCookie);
        
        if (!tokenCookie) {
          console.log("No token cookie found, redirecting to login");
          router.push("/admin/login");
          return;
        }

        const tokenValue = tokenCookie.split('=')[1];
        console.log("Token value extracted:", tokenValue ? "exists" : "empty");
        
        if (!tokenValue || tokenValue === '') {
          console.log("Token cookie exists but is empty, redirecting to login");
          router.push("/admin/login");
          return;
        }

        console.log("Token found, verifying with server...");

        // Verify token with server
        const response = await fetch('/api/admin/verify', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        console.log("Verification response status:", response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log("Authentication successful, response:", data);
          setIsAuthenticated(true);
        } else {
          const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
          console.log("Token verification failed:", errorData);
          console.log("Redirecting to login");
          router.push("/admin/login");
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push("/admin/login");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  // Handle logout
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/admin/logout", { 
        method: "POST",
        credentials: 'include'
      });
      
      if (response.ok) {
        console.log("Logout successful");
      } else {
        console.log("Logout request failed, but proceeding anyway");
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear the cookie manually as backup
      document.cookie = "admin_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      router.push("/admin/login");
    }
  };

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"></div>
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Don't render dashboard content until authenticated
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="pt-48 pb-16">
          <div className="mx-[4vw] px-4">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white">
                  Admin Dashboard
                </h1>
                <button
                  onClick={handleLogout}
                  className="bg-red-500/20 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors"
                >
                  Logout
                </button>
              </div>

              {/* Navigation Tabs */}
              <div className="flex space-x-4 mb-8">
                {["overview", "members", "events", "settings"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeTab === tab
                        ? "bg-[#f65d2a] text-white"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="space-y-6">
                {activeTab === "overview" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard title="Total Members" count={150} />
                    <StatCard title="Upcoming Events" count={5} />
                    <StatCard title="Pending Applications" count={12} />
                  </div>
                )}

                {activeTab === "members" && <Placeholder title="Member Management" />}
                {activeTab === "events" && <Placeholder title="Event Management" />}
                {activeTab === "settings" && <Placeholder title="Settings" />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, count }) {
  return (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-3xl text-[#f65d2a]">{count}</p>
    </div>
  );
}

function Placeholder({ title }) {
  return (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-300">{title} interface coming soon...</p>
    </div>
  );
}