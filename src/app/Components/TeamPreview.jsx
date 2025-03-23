import React from "react";
import Link from "next/link";

const TeamPreview = () => {
  const previewTeam = [
    {
      name: "Dr. Sarah Johnson",
      role: "Faculty Advisor",
      image: "/images/team/sarah.jpg",
      bio: "Professor of Astrophysics with 15 years of experience in space research.",
    },
    {
      name: "Alex Chen",
      role: "Club President",
      image: "/images/team/alex.jpg",
      bio: "Senior Aerospace Engineering student passionate about space exploration.",
    },
    {
      name: "Maya Patel",
      role: "Technical Lead",
      image: "/images/team/maya.jpg",
      bio: "Robotics expert leading our Mars Rover project development.",
    },
    {
      name: "David Kim",
      role: "Events Coordinator",
      image: "/images/team/david.jpg",
      bio: "Organizing space science workshops and public outreach events.",
    },
    {
      name: "Emma Rodriguez",
      role: "Research Lead",
      image: "/images/team/emma.jpg",
      bio: "Leading our space research initiatives and data analysis projects.",
    },
    {
      name: "James Wilson",
      role: "Outreach Director",
      image: "/images/team/james.jpg",
      bio: "Connecting with schools and communities to spread space science awareness.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl text-white mb-12 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewTeam.map((member, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">👨‍🚀</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-[#f65d2a] mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/about#core-team">
            <button className="bg-[#f65d2a] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e54d1a] transition-colors duration-300">
              View All Members
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
