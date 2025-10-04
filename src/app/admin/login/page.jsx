"use client";

import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import app from "../../../../lib/firebase";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const auth = getAuth(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      if (isSignUp) {
        // Sign up logic
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log("User signed up:", user);
        setSuccess("Account created successfully! Redirecting to dashboard...");
        // Redirect to dashboard after successful signup
        setLoading(false);
        setTimeout(() => {
          window.location.href = "/admin/dashboard";
        }, 1500);
        return;
      } else {
        // Sign in logic
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log("User signed in:", user);
        setSuccess("Login successful! Redirecting to dashboard...");
        // Redirect to dashboard after successful signin
        setLoading(false);
        setTimeout(() => {
          window.location.href = "/admin/dashboard";
        }, 1500);
        return;
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      // Handle specific Firebase errors
      switch (errorCode) {
        case "auth/user-not-found":
          setError("No user found with this email address.");
          break;
        case "auth/wrong-password":
          setError("Incorrect password.");
          break;
        case "auth/email-already-in-use":
          setError("Email is already registered.");
          break;
        case "auth/weak-password":
          setError("Password should be at least 6 characters.");
          break;
        case "auth/invalid-email":
          setError("Invalid email address.");
          break;
        default:
          setError(errorMessage);
      }
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black relative flex items-center justify-center">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      {/* Background stars effect */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white mb-2 cursor-pointer hover:text-[#f65d2a] transition-colors">
              Space Clubs LASU
            </h1>
          </Link>
          <p className="text-gray-400">
            {isSignUp ? "Create your account" : "Sign in to your account"}
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md text-white placeholder-gray-400 border border-white/20 rounded-lg focus:outline-none focus:border-[#f65d2a] focus:ring-1 focus:ring-[#f65d2a] transition-all"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-md text-white placeholder-gray-400 border border-white/20 rounded-lg focus:outline-none focus:border-[#f65d2a] focus:ring-1 focus:ring-[#f65d2a] transition-all"
                placeholder="Enter your password"
                required
                minLength={6}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3">
                <p className="text-green-400 text-sm">{success}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#f65d2a] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[#e54d1a] focus:outline-none focus:ring-2 focus:ring-[#f65d2a] focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  {isSignUp ? "Creating Account..." : "Signing In..."}
                </div>
              ) : isSignUp ? (
                "Create Account"
              ) : (
                "Sign In"
              )}
            </button>

            {/* Toggle Sign Up/Sign In */}
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError("");
                }}
                className="text-[#f65d2a] hover:text-[#e54d1a] transition-colors text-sm"
              >
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </button>
            </div>

            {/* Forgot Password */}
            {!isSignUp && (
              <div className="text-center">
                <button
                  type="button"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Forgot your password?
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
