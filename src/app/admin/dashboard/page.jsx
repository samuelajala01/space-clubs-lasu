"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Navbar from "@/app/Components/Navbar";
import app from "../../../../lib/firebase";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  // Check Firebase authentication on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // console.log("User authenticated:", currentUser.email);
        setUser(currentUser);
      } else {
        // console.log("No user authenticated, redirecting to login");
        router.push("/admin/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [auth, router]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // console.log("Firebase logout successful");
      router.push("/admin/login");
    } catch (error) {
      // console.error('Firebase logout error:', error);
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
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="pt-2 pb-16">
          <div className="mx-[4vw] px-4">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-white">
                    Admin Dashboard
                  </h1>
                  <p className="text-gray-400 text-sm mt-1">
                    Welcome back, {user.email}
                  </p>
                </div>
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