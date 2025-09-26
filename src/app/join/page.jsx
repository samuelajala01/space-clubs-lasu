"use client";
import Image from "next/image";
import Link from "next/link";
import JoinMailList from "../Components/JoinMailList";
import { useRef } from "react";

const JoinPage = () => {
  const mailListRef = useRef(null);
  // Set this to true when accepting applications
  const isAcceptingApplications = false;

  const scrollToMailList = () => {
    mailListRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const NotAcceptingMessage = () => (
    <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 bg-[#f65d2a] rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl">🚀</span>
        </div>
      </div>
      <h1 className="text-5xl md:text-[4vw] text-white mb-8">
        Applications Currently Closed
      </h1>
      <p className="text-gray-200 text-lg mb-8 leading-relaxed max-w-2xl">
        We're currently not accepting new members for this term. Our next
        application window will open at the start of the next academic semester.
        Follow us on social media or join our newsletter to be notified when
        applications reopen!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link href="/">
          <button className="bg-[#f65d2a] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e54d1a] transition-colors duration-300">
            Back to Home
          </button>
        </Link>
        <button
          onClick={scrollToMailList}
          className="bg-white/10 backdrop-blur-md text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors duration-300"
        >
          Join Newsletter
        </button>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
          <h3 className="text-white text-xl mb-3">Follow Updates</h3>
          <p className="text-gray-300">
            Stay informed about our next application window and club activities.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
          <h3 className="text-white text-xl mb-3">Prepare</h3>
          <p className="text-gray-300">
            Learn about our club activities and requirements for the next
            intake.
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
          <h3 className="text-white text-xl mb-3">Get Involved</h3>
          <p className="text-gray-300">
            Attend our public events and connect with current members.
          </p>
        </div>
      </div>
    </div>
  );

  const ApplicationForm = () => (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-[4vw] text-white mb-8 text-center">
        Join Our Space Community
      </h1>
      <form className="space-y-8">
        {/* Personal Information */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2">First Name *</label>
              <input
                type="text"
                required
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Last Name *</label>
              <input
                type="text"
                required
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Email *</label>
              <input
                type="email"
                required
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Phone *</label>
              <input
                type="tel"
                required
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Date of Birth *</label>
              <input
                type="date"
                required
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Gender</label>
              <select 
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white'
                }}
              >
                <option value="" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>Select Gender</option>
                <option value="male" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>Male</option>
                <option value="female" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>Female</option>
                <option value="other" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>Other</option>
                <option value="prefer-not-to-say" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>Prefer not to say</option>
              </select>
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">
            Academic Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2">Campus *</label>
              <select 
                required
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white'
                }}
              >
                <option value="LASU MAIN CAMPUS" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>LASU Ojo Main Campus</option>
                <option value="LASUCOM" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>LASUCOM</option>
                <option value="LASU EPE" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>LASU EPE</option>
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">Department *</label>
              <select
                required
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white'
                }}
              >
                {[
                  { value: "", label: "Select Department" },
                  { value: "Accounting", label: "Accounting" },
                  { value: "Agricultural Science", label: "Agricultural Science" },
                  { value: "Architecture", label: "Architecture" },
                  { value: "Biochemistry", label: "Biochemistry" },
                  { value: "Biology", label: "Biology" },
                  { value: "Business Administration", label: "Business Administration" },
                  { value: "Chemical Engineering", label: "Chemical Engineering" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Civil Engineering", label: "Civil Engineering" },
                  { value: "Computer Engineering", label: "Computer Engineering" },
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Dentistry", label: "Dentistry" },
                  { value: "Economics", label: "Economics" },
                  { value: "Electrical Engineering", label: "Electrical Engineering" },
                  { value: "English", label: "English" },
                  { value: "Environmental Science", label: "Environmental Science" },
                  { value: "Geography", label: "Geography" },
                  { value: "Geology", label: "Geology" },
                  { value: "History", label: "History" },
                  { value: "Law", label: "Law" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Mechanical Engineering", label: "Mechanical Engineering" },
                  { value: "Medicine", label: "Medicine" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Nursing", label: "Nursing" },
                  { value: "Pharmacy", label: "Pharmacy" },
                  { value: "Physics", label: "Physics" },
                  { value: "Political Science", label: "Political Science" },
                  { value: "Sociology", label: "Sociology" }
                ].map((dept) => (
                  <option 
                    key={dept.value} 
                    value={dept.value} 
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}
                  >
                    {dept.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">Level *</label>
              <select
                required
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white'
                }}
              >
                <option value="" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>Select Level</option>
                <option value="100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>100 Level</option>
                <option value="200" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>200 Level</option>
                <option value="300" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>300 Level</option>
                <option value="400" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>400 Level</option>
                <option value="500" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>500 Level</option>
                <option value="postgraduate" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>Postgraduate</option>
                <option value="diploma" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white' }}>Diploma</option>
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">
                Matriculation/Student ID *
              </label>
              <input
                type="text"
                required
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">
            Social Media Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2">
                LinkedIn Profile *
              </label>
              <input
                type="url"
                required
                placeholder="https://linkedin.com/in/your-profile"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">
                Twitter Profile (Optional)
              </label>
              <input
                type="url"
                placeholder="https://twitter.com/your-profile"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">
                GitHub Profile (Optional)
              </label>
              <input
                type="url"
                placeholder="https://github.com/your-profile"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
          </div>
        </div>

        {/* Areas of Interest */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">
            Areas of Interest
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Astronomy",
              "Space Advocacy",
              "Rocketry",
              "Space Science",
              "Robotics",
              "Astrophysics",
              "Astrophotography",
              "Space Engineering",
              "Satellite Technology",
              "Space Policy",
              "Space Law",
              "Space Medicine",
              "Planetary Science",
              "Space Education",
            ].map((interest) => (
              <label key={interest} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-[#f65d2a] rounded border-gray-300 focus:ring-[#f65d2a]"
                />
                <span className="text-white">{interest}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Personal Statement */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">
            Personal Statement
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-white mb-2">
                Why do you want to join Space Clubs LASU? *
              </label>
              <textarea
                required
                rows="4"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
                placeholder="Tell us about your motivation for joining..."
              ></textarea>
            </div>
            <div>
              <label className="block text-white mb-2">
                What skills or experiences can you bring to the club? *
              </label>
              <textarea
                required
                rows="4"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
                placeholder="Describe your relevant skills and experiences..."
              ></textarea>
            </div>
            <div>
              <label className="block text-white mb-2">
                What are your future aspirations in space *
              </label>
              <textarea
                required
                rows="4"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
                placeholder="Share your future goals and aspirations..."
              ></textarea>
            </div>
          </div>
        </div>
         
         <div className="bg-white/5 backdrop-blur-md rounded-xl px-6 py-2 border border-white/10">
          <input
            type="checkbox"
            required
            className="form-checkbox h-5 w-5 text-[#f65d2a] rounded border-gray-300 focus:ring-[#f65d2a] mr-3"
          />
          <span className="text-white text-sm">Note: By ticking this box or submitting your Application, you agree to paying a membership fee of #2000 upon acceptance.</span>
        </div>


        <button
          type="submit"
          className="w-full bg-[#f65d2a] text-white py-3 rounded-lg font-semibold hover:bg-[#e54d1a] transition-colors duration-300"
        >
          Submit Application
        </button>
      </form>
    </div>
  );

  return (
    <div className="" id="join-page">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/join-bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="">
        <div className="pt-20 pb-16">
          <div className="mx-auto px-4">
            {isAcceptingApplications ? (
              <ApplicationForm />
            ) : (
              <NotAcceptingMessage />
            )}
          </div>
        </div>
      </div>
      <div ref={mailListRef}>
        <JoinMailList />
      </div>
    </div>
  );
};

export default JoinPage;
