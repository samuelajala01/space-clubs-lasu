"use client";

import { useState } from "react";
import Image from "next/image";

const Reports = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const reports = [
    {
      id: 1,
      title: "SPACE CLUBS LASU Annual Report 2024",
      category: "annual",
      description:
        "Comprehensive overview of all activities, events, and achievements of Space Clubs LASU throughout 2024.",
      fileSize: "3.6 MB",
      fileType: "PDF",
      downloadCount: 15,
      date: "2024-12-31",
      fileName: "SPACE CLUBS LASU Annual Report 2024.pdf",
    },
    {
      id: 2,
      title: "WORLD SPACE WEEK REPORT 2024 - SPACE CLUBS LASU",
      category: "events",
      description:
        "Detailed report covering the successful Space Week celebration including workshops, competitions, and community engagement.",
      fileSize: "2.0 MB",
      fileType: "PDF",
      downloadCount: 89,
      date: "2024-10-15",
      fileName: "WORLD SPACE WEEK REPORT 2024 - SPACE CLUBS LASU.pdf",
    },
    {
      id: 3,
      title: "Under The Epe Sky Impact Report",
      category: "events",
      description:
        "Impact report from the Under The Epe Sky event showcasing community engagement and educational outcomes.",
      fileSize: "10 MB",
      fileType: "PDF",
      downloadCount: 25,
      date: "2025-07-03",
      fileName: "Under The Epe Sky Impact Report.pdf",
    },
  ];

  const categories = [
    { id: "all", name: "All Reports", count: reports.length },
    {
      id: "annual",
      name: "Annual Reports",
      count: reports.filter((r) => r.category === "annual").length,
    },
    {
      id: "events",
      name: "Event Reports",
      count: reports.filter((r) => r.category === "events").length,
    },
  ];

  const filteredReports = reports.filter((report) => {
    const matchesCategory =
      selectedCategory === "all" || report.category === selectedCategory;
    const matchesSearch =
      report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (report) => {
    const link = document.createElement("a");
    link.href = `/reports/${report.fileName}`;
    link.download = report.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-bg.jpg"
            alt="Reports Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Reports & Publications
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Access comprehensive reports, research findings, and publications
            from Space Clubs LASU. Download detailed insights into our
            activities, events, and contributions to space education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
              <span className="text-white font-medium">
                {reports.length} Reports Available
              </span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3">
              <span className="text-white font-medium">
                {reports.reduce(
                  (total, report) => total + report.downloadCount,
                  0
                )}{" "}
                Total Downloads
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-black min-h-screen py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
              {/* Search Bar */}
              <div className="relative w-full lg:w-96">
                <input
                  type="text"
                  placeholder="Search reports..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#f65d2a] transition-colors"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {/* Results Count */}
              <div className="text-gray-400">
                {filteredReports.length} of {reports.length} reports found
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-[#f65d2a] text-white"
                      : "bg-white/10 backdrop-blur-md text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Reports Grid */}
          {filteredReports.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReports.map((report) => (
                <div
                  key={report.id}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                >
                  {/* Report Thumbnail */}
                  <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-[#f65d2a]/20 to-purple-500/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-[#f65d2a]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Report Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-[#f65d2a]/20 text-[#f65d2a] text-xs font-medium rounded-full">
                        {report.category.charAt(0).toUpperCase() +
                          report.category.slice(1)}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {formatDate(report.date)}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white line-clamp-2">
                      {report.title}
                    </h3>

                    <p className="text-gray-400 text-sm line-clamp-3">
                      {report.description}
                    </p>

                    {/* File Details */}
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <span>{report.fileSize}</span>
                        <span className="bg-white/10 px-2 py-1 rounded text-xs">
                          {report.fileType}
                        </span>
                      </div>
                      <span>{report.downloadCount} downloads</span>
                    </div>

                    {/* Download Button */}
                    <button
                      onClick={() => handleDownload(report)}
                      className="w-full bg-[#f65d2a] text-white py-3 px-4 rounded-xl font-medium hover:bg-[#e04c1a] transition-colors flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Download Report
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* No Results State */
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No reports found
              </h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search terms or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="bg-[#f65d2a] text-white px-6 py-3 rounded-xl hover:bg-[#e04c1a] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Reports;
