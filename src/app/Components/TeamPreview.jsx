import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const TeamPreview = () => {
  const previewTeam = [
    {
      name: "Sylvester Agose",
      role: "President",
      image: "/images/team/SylvesterAgose_.jpg",
      bio: "Professor of Astrophysics with 15 years of experience in space research.",
      social: {
        linkedin: "https://linkedin.com/in/sarah-johnson",
        twitter: "https://twitter.com/sarahjohnson",
        email: "sarah.johnson@university.edu",
      },
    },
    {
      name: "David M",
      role: "Vice President",
      image: "/images/team/DavidMuraina.jpg",
      bio: "Organizing space science workshops and public outreach events.",
      social: {
        linkedin: "https://www.linkedin.com/in/muraina-david-017b51157/",
        twitter: "https://twitter.com/alexchen",
        email: "alex.chen@university.edu",
      },
    },
    {
      name: "Kehinde Fodunrin",
      role: "Membership Lead",
      image: "/images/team/KehindeFodunrin_.png",
      bio: "Senior Aerospace Engineering student passionate about space exploration.",
      social: {
        linkedin: "https://www.linkedin.com/in/kehinde-fodunrin-4a68b7257/",
        twitter: "https://twitter.com/mayapatel",
        email: "maya.patel@university.edu",
      },
    },
    {
      name: "Samuel Ajala",
      role: "Project Lead I",
      image: "/images/team/SamuelAjala.jpg",
      bio: "Robotics expert leading our Mars Rover project development",
      social: {
        linkedin: "https://linkedin.com/in/samuelajala01",
        twitter: "https://twitter.com/davidkim",
        email: "david.kim@university.edu",
      },
    },
    {
      name: "Samuel Adebanjo",
      role: "Programs Lead",
      image: "/images/team/Adebanjo_Samuel.jpg",
      bio: "Leading our space research initiatives and data analysis projects.",
      social: {
        linkedin: "https://www.linkedin.com/in/samuel-adebanjo-%F0%9F%94%A5-60256825b/",
        twitter: "https://twitter.com/emmarodriguez",
        email: "emma.rodriguez@university.edu",
      },
    },
    {
      name: "Favour Akinsiku",
      role: "General Secretary",
      image: "/images/team/FAVOURAKINSIKU.jpg",
      bio: "Connecting with schools and communities to spread space science awareness.",
      social: {
        linkedin: "https://www.linkedin.com/in/favourakinsiku/",
        twitter: "https://twitter.com/jameswilson",
        email: "james.wilson@university.edu",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2
         
          className="text-4xl text-white mb-12 text-center"
        >
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {previewTeam.map((member, index) => (
                         <div
                           key={index}
                           className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
                         >
                           <div className="relative h-64">
                             {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div> */}
                             {member.image ? (
                               <Image
                                 src={member.image}
                                 alt={member.name}
                                 className="absolute inset-0 w-full h-full object-cover"
                                 width='100'
                                 height='100'
                               />
                             ) : (
                               <div className="absolute inset-0 flex items-center justify-center">
                                 <span className="text-6xl">👨‍🚀</span>
                               </div>
                             )}
                           </div>
                           <div className="p-6">
                             <h3 className="text-xl font-bold text-white mb-2">
                               {member.name}
                             </h3>
                             <p className="text-[#f65d2a] mb-3">{member.role}</p>
                             <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
         
                             <div className="flex space-x-4">
                               {member.social.linkedin && (
                                 <a
                                   href={member.social.linkedin}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-gray-400 hover:text-white transition-colors"
                                 >
                                   <FaLinkedin className="w-5 h-5" />
                                 </a>
                               )}
                               {member.social.twitter && (
                                 <a
                                   href={member.social.twitter}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="text-gray-400 hover:text-white transition-colors"
                                 >
                                   <FaTwitter className="w-5 h-5" />
                                 </a>
                               )}
                               {member.social.email && (
                                 <a
                                   href={`mailto:${member.social.email}`}
                                   className="text-gray-400 hover:text-white transition-colors"
                                 >
                                   <FaEnvelope className="w-5 h-5" />
                                 </a>
                               )}
                             </div>
                           </div>
                         </div>
                       ))}
     </div>
        
          <Link href="/about#core-team">
            <button className="bg-[#f65d2a] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e54d1a] transition-colors duration-300">
              View All Members
            </button>
          </Link>
    </div>
    </section>
  );
};

export default TeamPreview;
