import Image from "next/image";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import team from '../data/past_team'

const ViewPastTeam = () => {
  return(
    <div className="min-h-screen">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/about-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={60}
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      </div>

      <div className="relative min-h-screen py-16">
        <section className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl text-white mb-12 text-center">
            Past Executives (2023-2025)
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative h-64">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={65}
                      loading={index < 4 ? "eager" : "lazy"}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-[#f65d2a]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12,15A7,7 0 0,1 5,8A7,7 0 0,1 12,1A7,7 0 0,1 19,8A7,7 0 0,1 12,15M12,3A5,5 0 0,0 7,8A5,5 0 0,0 12,13A5,5 0 0,0 17,8A5,5 0 0,0 12,3M12,10.5A2.5,2.5 0 0,0 14.5,8A2.5,2.5 0 0,0 12,5.5A2.5,2.5 0 0,0 9.5,8A2.5,2.5 0 0,0 12,10.5M12,16C12,17.11 12.9,18 14,18H22V20H14A4,4 0 0,1 10,16H12M12,16H10A4,4 0 0,1 6,20H2V18H6C7.11,18 8,17.11 8,16H10H12Z"/>
                      </svg>
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
        </section>
      </div>
    </div>
  )
}

export default ViewPastTeam;