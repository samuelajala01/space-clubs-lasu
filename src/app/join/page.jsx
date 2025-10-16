"use client";
import Image from "next/image";
import Link from "next/link";
import JoinMailList from "../Components/JoinMailList";
import CountdownTimer from "../Components/CountdownTimer";
import SuccessModal from "../Components/SuccessModal";
import { useRef, useState, useEffect } from "react";
import { useForm } from "@formspree/react";


const JoinPage = () => {
  const mailListRef = useRef(null);
  const formRef = useRef(null);
  const [state, handleFormSubmit] = useForm("myznerza");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [socialMediaError, setSocialMediaError] = useState("");

  // Set this to true when accepting applications
  const isAcceptingApplications = false;

  const scrollToMailList = () => {
    mailListRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCustomFormSubmit = (e) => {
    
    setSocialMediaError("");
    
    // Get form data
    const formData = new FormData(e.target);
    const linkedin = formData.get("linkedin")?.trim();
    const twitter = formData.get("twitter")?.trim(); 
    const github = formData.get("github")?.trim();
    
    
    if (!linkedin && !twitter && !github) {
      e.preventDefault();
      setSocialMediaError("Please provide at least one social media profile (LinkedIn, Twitter, or GitHub)");
      
      const socialMediaSection = document.querySelector('[data-section="social-media"]');
      if (socialMediaSection) {
        socialMediaSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
    
    
    handleFormSubmit(e);
  };

 
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessModal(true);
      formRef.current?.reset();
      setSocialMediaError(""); 
    }
  }, [state.succeeded]);


  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const handleInputChange = () => {
      if (socialMediaError) {
        setSocialMediaError("");
      }
    };

    const socialMediaInputs = form.querySelectorAll('input[name="linkedin"], input[name="twitter"], input[name="github"]');
    socialMediaInputs.forEach(input => {
      input.addEventListener('input', handleInputChange);
    });

    return () => {
      socialMediaInputs.forEach(input => {
        input.removeEventListener('input', handleInputChange);
      });
    };
  }, [socialMediaError]);

  const handleCloseModal = () => {
    setShowSuccessModal(false);
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
        Application Window is closed and will reopen next academic session.
        Follow us on social media or join our newsletter to be notified when
        applications are open!
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
      <div>
        <h1 className="text-5xl md:text-[4vw] text-white mb-8 text-center">
        Applications are Open
      </h1>
      </div>

      {/* Countdown Timer */}
      <CountdownTimer targetDate="October 14, 2025 23:59:59 GMT+0100" />

      <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-16">
        <p>We receive many outstanding applications for limited spots, but We carefully review all applications 
          and select members who demonstrate strong potential and genuine enthusiasm for our mission. We encourage you 
          to put your best foot forward.</p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleCustomFormSubmit}
        className="space-y-8"
      >
        {/* Personal Information */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2">First Name *</label>
              <input
                type="text"
                name="firstName"
                required
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Last Name *</label>
              <input
                type="text"
                name="lastName"
                required
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Phone *</label>
              <input
                name="phone"
                type="tel"
                required
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Date of Birth *</label>
              <input
                type="date"
                name="dateOfBirth"
                required
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Gender *</label>
              <select
                name="gender"
                required
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                }}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">Academic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2">Campus *</label>
              <select
                required
                name="campus"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                }}
              >
                <option value="">Select Campus</option>
                <option value="LASU Ojo Main Campus">LASU Ojo Main Campus</option>
                <option value="LASUCOM">LASUCOM</option>
                <option value="LASU EPE">LASU EPE</option>
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">Department *</label>
              <select
                required
                name="department"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                }}
              >
                {[
                  { value: "", label: "Select Department" },
                  { value: "Accounting", label: "Accounting" },
                  { value: "Aerospace Engineering", label: "Aerospace Engineering" },
                  { value: "Agricultural Science", label: "Agricultural Science" },
                  { value: "Anaesthesia", label: "Anaesthesia" },
                  {value: "Anatomy", label: "Anatomy" },
                  { value: "Architecture", label: "Architecture" },
                  { value: "Banking and Finance", label: "Banking and Finance" },
                  { value: "Biochemistry", label: "Biochemistry" },
                  { value: "Building", label: "Building" },
                  { value: "Business Administration", label: "Business Administration" },
                  { value: "Chemical Engineering", label: "Chemical Engineering" },
                  { value: "Chemical Pathology", label: "Chemical Pathology" },
                  { value: "Chemistry", label: "Chemistry" },
                  { value: "Civil Engineering", label: "Civil Engineering" },
          
                  { value: "Computer Science", label: "Computer Science" },
                  { value: "Dentistry", label: "Dentistry" },
                  { value: "Economics", label: "Economics" },
                  { value: "Electronics and Computer Engineering", label: "Electronics and Computer Engineering" },
                  { value: "English", label: "English" },
                  { value: "Environmental Management", label: "Environmental Management" },
                  { value: "Estate Management", label: "Estate Management" },
                  { value: "Fisheries and Aquatic Science", label: "Fisheries and Aquatic Science" },
                  { value: "Geography", label: "Geography" },
                  { value: "History", label: "History" },
                  { value: "Human Kinetics", label: "Human Kinetics" },
                  { value: "Industrial Design", label: "Industrial Design" },
                  { value: "Industrial Engineering", label: "Industrial Engineering" },
                  { value: "Industrial Relations", label: "Industrial Relations" },
                  { value: "Insurance", label: "Insurance" },
                  { value: "Law", label: "Law" },
                  { value: "Mass Communication", label: "Mass Communication" },
                  { value: "Marketing", label: "Marketing" },
                  { value: "Mathematics", label: "Mathematics" },
                  { value: "Mechanical Engineering", label: "Mechanical Engineering" },
                  { value: "Medicine and Surgery", label: "Medicine and Surgery" },
                  { value: "Medical Microbiology", label: "Medical Microbiology" },
                  { value: "Microbiology", label: "Microbiology" },
                  { value: "Nursing", label: "Nursing" },
                  { value: "Obstetrics and Gynaecology", label: "Obstetrics and Gynaecology" },
                  { value: "Pathology and Forensic Medicine", label: "Pathology and Forensic Medicine" },
                  { value: "Pharmacology", label: "Pharmacology" },
                  { value: "Philosophy", label: "Philosophy" },
                  { value: "Physics", label: "Physics" },
                  { value: "Physics Education", label: "Physics Education" },
                  { value: "Political Science", label: "Political Science" },
                  
                  { value: "Physiology and Medical Biochemistry", label: "Physiology and Medical Biochemistry" },
                  { value: "Psychology", label: "Psychology" },
                  { value: "Quantity Surveying", label: "Quantity Surveying" },
                  { value: "Radiology", label: "Radiology" },
                  { value: "Restorative Dentistry", label: "Restorative Dentistry" },
                  { value: "Science Laboratory Technology", label: "Science Laboratory Technology" },
                  { value: "Sociology", label: "Sociology" },
                  { value: "Survey and Geoinformatics", label: "Survey and Geoinformatics" },
                  { value: "Urban and Regional Planning", label: "Urban and Regional Planning" },
                ].map((dept) => (
                  <option key={dept.value || dept.label} value={dept.value}>
                    {dept.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">Level *</label>
              <select
                required
                name="level"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                }}
              >
                <option value="">Select Level</option>
                <option value="100">100 Level</option>
                <option value="200">200 Level</option>
                <option value="300">300 Level</option>
                <option value="400">400 Level</option>
                <option value="500">500 Level</option>
                <option value="600">600 Level</option>
                <option value="Postgraduate">Postgraduate</option>
                <option value="Diploma">Diploma</option>
                <option value="Pre-Degree">Pre-Degree</option>
              </select>
            </div>
            <div>
              <label className="block text-white mb-2">Matriculation/Student ID *</label>
              <input
                type="text"
                name="matricNumber"
                required
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10" data-section="social-media">
          <h2 className="text-2xl font-bold text-white mb-6">Social Media Links</h2>
          <p className="text-gray-300 text-sm mb-4">
            <span className="text-[#f65d2a]">*</span> Please provide at least one social media profile
          </p>
          
          {socialMediaError && (
            <div className="bg-red-500/20 backdrop-blur-md rounded-lg p-3 border border-red-500/30 mb-4">
              <p className="text-red-400 text-sm flex items-center">
                <span className="mr-2">⚠️</span>
                {socialMediaError}
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2">LinkedIn Profile</label>
              <input
                type="url"
                name="linkedin"
                placeholder="https://linkedin.com/in/your-profile"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">Twitter Profile</label>
              <input
                name="twitter"
                type="url"
                placeholder="https://twitter.com/your-profile"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
            <div>
              <label className="block text-white mb-2">GitHub Profile</label>
              <input
                name="github"
                type="url"
                placeholder="https://github.com/your-profile"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
              />
            </div>
          </div>
        </div>

        {/* Areas of Interest (checkboxes) */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">Areas of Interest</h2>
          <p className="text-gray-300 text-sm mb-4">We recommend picking at most 3</p>
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
                {/* Use the same name so multiple checked values are submitted as repeated fields */}
                <input
                  type="checkbox"
                  name="areasOfInterest"
                  value={interest}
                  className="form-checkbox h-5 w-5 text-[#f65d2a] rounded border-gray-300 focus:ring-[#f65d2a]"
                />
                <span className="text-white">{interest}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Personal Statement */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6">Personal Statement</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-white mb-2">Why do you want to join Space Clubs LASU? *</label>
              <textarea
                required
                name="motivation"
                rows="4"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
                placeholder="Tell us about your motivation for joining..."
              ></textarea>
            </div>
            <div>
              <label className="block text-white mb-2">What skills or experiences can you bring to the club? *</label>
              <textarea
                required
                name="skillsExperience"
                rows="4"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
                placeholder="Describe your relevant skills and experiences..."
              ></textarea>
            </div>
            <div>
              <label className="block text-white mb-2">What are your future aspirations in space *</label>
              <textarea
                required
                name="aspirations"
                rows="4"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#f65d2a]"
                placeholder="Share your future goals and aspirations..."
              ></textarea>
            </div>

            <div className="space-y-4 my-8">
              <p>Pick one or more of the following skills you are proficient in</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Programming",
                  "Simulation and Modeling",
                  "Graphics Design",

                  "Electronics and Circuit Design",
                  "Computer-Aided Design (CAD)",
                  "UI/UX Design",
                  "Project Management",
                  "Web development",
                  "Research and Technical Writing",
                  "Data Analysis",
                  "Photography or Videography",

                ].map((skill) => (
                  <label key={skill} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="skills"
                      value={skill}
                      className="form-checkbox h-5 w-5 text-[#f65d2a] rounded border-gray-300 focus:ring-[#f65d2a]"
                    />
                    <span className="text-white">{skill}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl px-6 py-4 border border-white/10 items-center flex">
          <input
            type="checkbox"
            name="agreeRules"
            value="yes"
            required
            className="form-checkbox h-5 w-5 text-[#f65d2a] rounded border-gray-300 focus:ring-[#f65d2a] mr-3"
          />
          <span className="text-white text-xs">By submitting this application, I confirm that the information provided is accurate, and I agree to abide by the rules and regulations of SPACE CLUBS LASU.</span>
        </div>
        <div className="bg-white/5 backdrop-blur-md rounded-xl px-6 py-2 border border-white/10 items-center flex">
          <input
            type="checkbox"
            name="agreeFee"
            value="yes"
            required
            className="form-checkbox h-5 w-5 text-[#f65d2a] rounded border-gray-300 focus:ring-[#f65d2a] mr-3"
          />
          <span className="text-white text-xs">Note: By ticking this box or submitting your Application, you agree to paying a membership fee of #2000 upon acceptance.</span>
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full bg-[#f65d2a] text-white py-3 rounded-lg font-semibold hover:bg-[#e54d1a] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {state.submitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : state.succeeded ? (
            "Submitted Successfully ✓"
          ) : (
            "Submit Application"
          )}
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
      
      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default JoinPage;
