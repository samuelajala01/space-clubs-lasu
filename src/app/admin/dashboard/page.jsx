"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../Components/Navbar";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });
      window.location.href = "/admin/login";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

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
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Total Members
                      </h3>
                      <p className="text-3xl text-[#f65d2a]">150</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Upcoming Events
                      </h3>
                      <p className="text-3xl text-[#f65d2a]">5</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Pending Applications
                      </h3>
                      <p className="text-3xl text-[#f65d2a]">12</p>
                    </div>
                  </div>
                )}

                {activeTab === "members" && (
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Member Management
                    </h2>
                    <p className="text-gray-300">
                      Member management interface coming soon...
                    </p>
                  </div>
                )}

                {activeTab === "events" && (
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Event Management
                    </h2>
                    <p className="text-gray-300">
                      Event management interface coming soon...
                    </p>
                  </div>
                )}

                {activeTab === "settings" && (
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Settings
                    </h2>
                    <p className="text-gray-300">
                      Settings interface coming soon...
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
