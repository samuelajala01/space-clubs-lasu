// Utility function to determine event status based on date
const getEventStatus = (dateString) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set to start of today

  // Clean up the date string and handle different formats
  let cleanDateString = dateString.trim();

  // Parse the date string - handle different formats
  let eventStartDate, eventEndDate;

  try {
    // Handle date ranges with " - " (e.g., "October 5th - 13th, 2025")
    if (cleanDateString.includes(" - ")) {
      const parts = cleanDateString.split(" - ");
      const startPart = parts[0].trim();
      const endPart = parts[1].trim();

      // Extract year (could be in either part)
      const yearMatch = cleanDateString.match(/\b(20\d{2})\b/);
      const year = yearMatch
        ? yearMatch[0]
        : new Date().getFullYear().toString();

      // Get month from start part
      const monthMatch = startPart.match(
        /(January|February|March|April|May|June|July|August|September|October|November|December)/i
      );
      const month = monthMatch ? monthMatch[0] : "";

      // Get start day
      const startDayMatch = startPart.match(/(\d+)(?:st|nd|rd|th)?/);
      const startDay = startDayMatch ? startDayMatch[1] : "";

      // Get end day
      const endDayMatch = endPart.match(/(\d+)(?:st|nd|rd|th)?/);
      const endDay = endDayMatch ? endDayMatch[1] : "";

      if (month && startDay && endDay) {
        eventStartDate = new Date(`${month} ${startDay}, ${year}`);
        eventEndDate = new Date(`${month} ${endDay}, ${year}`);
      }
    }
    // Handle dates with " & " (e.g., "July 15 & 16, 2025")
    else if (cleanDateString.includes(" & ")) {
      const parts = cleanDateString.split(" & ");
      const startPart = parts[0].trim();
      const endPart = parts[1].trim();

      // Extract year
      const yearMatch = cleanDateString.match(/\b(20\d{2})\b/);
      const year = yearMatch
        ? yearMatch[0]
        : new Date().getFullYear().toString();

      // Get month from start part
      const monthMatch = startPart.match(
        /(January|February|March|April|May|June|July|August|September|October|November|December)/i
      );
      const month = monthMatch ? monthMatch[0] : "";

      // Get start day
      const startDayMatch = startPart.match(/(\d+)(?:st|nd|rd|th)?/);
      const startDay = startDayMatch ? startDayMatch[1] : "";

      // Get end day (might include year and comma)
      const endDayMatch = endPart.match(/(\d+)(?:st|nd|rd|th)?/);
      const endDay = endDayMatch ? endDayMatch[1] : "";

      if (month && startDay && endDay) {
        eventStartDate = new Date(`${month} ${startDay}, ${year}`);
        eventEndDate = new Date(`${month} ${endDay}, ${year}`);
      }
    }
    // Handle date ranges like "January (15,17,22,24), 2025"
    else if (cleanDateString.includes("(") && cleanDateString.includes(")")) {
      const yearMatch = cleanDateString.match(/\b(20\d{2})\b/);
      const year = yearMatch
        ? yearMatch[0]
        : new Date().getFullYear().toString();

      const monthMatch = cleanDateString.match(
        /(January|February|March|April|May|June|July|August|September|October|November|December)/i
      );
      const month = monthMatch ? monthMatch[0] : "";

      // Get all days in parentheses
      const daysMatch = cleanDateString.match(/\(([^)]+)\)/);
      if (daysMatch && month) {
        const days = daysMatch[1]
          .split(",")
          .map((day) => day.trim().replace(/(?:st|nd|rd|th)/, ""));
        const firstDay = days[0];
        const lastDay = days[days.length - 1];

        eventStartDate = new Date(`${month} ${firstDay}, ${year}`);
        eventEndDate = new Date(`${month} ${lastDay}, ${year}`);
      }
    }
    // Handle single dates (e.g., "October 9th, 2025" or "21 April, 2024")
    else {
      // Remove ordinal suffixes and parse
      const normalizedDate = cleanDateString.replace(
        /(\d+)(st|nd|rd|th)/g,
        "$1"
      );
      eventStartDate = new Date(normalizedDate);
      eventEndDate = eventStartDate;
    }

    // If parsing failed, try alternative parsing
    if (!eventStartDate || isNaN(eventStartDate)) {
      // Try direct parsing after removing ordinals
      const normalizedDate = cleanDateString.replace(
        /(\d+)(st|nd|rd|th)/g,
        "$1"
      );
      eventStartDate = new Date(normalizedDate);
      eventEndDate = eventStartDate;
    }
  } catch (error) {
    // console.warn(`Error parsing date: ${dateString}`, error);
  }

  // If date parsing failed, return 'upcoming' as default
  if (!eventStartDate || isNaN(eventStartDate)) {
    // console.warn(`Could not parse date: ${dateString}`);
    return "upcoming";
  }

  // Set times to start of day for comparison
  eventStartDate.setHours(0, 0, 0, 0);
  if (eventEndDate) {
    eventEndDate.setHours(23, 59, 59, 999); // End of end date
  } else {
    eventEndDate = new Date(eventStartDate);
    eventEndDate.setHours(23, 59, 59, 999);
  }

  // Determine status based on date comparison
  const now = new Date();

  if (now < eventStartDate) {
    return "upcoming";
  } else if (now >= eventStartDate && now <= eventEndDate) {
    return "ongoing";
  } else {
    return "past";
  }
};

// Events data with auto-calculated status
const eventsData = [
  {
    title: "WSW Movie Night",
    date: "October 10th, 2025",
    time: "6:00 PM",
    location: "School buttery, Lagos State University, Epe",
    description: "Over the last 6 days, we've learned, wrote, inspired, innovated, and engaged. Tomorrow? We film! What a week it’s been! Come with your curiosity, laughter, and good vibes as we wrap up this cosmic week in the most fun way possible with a movie that take us beyond Earth and remind us why space truly connects us all.",
    category: "Meetup",
    image: "/images/events/movie_wsw.jpg",
    registerLink: "https://luma.com/x79sib51",
  },
  {
    title: "WSW 25 Article Competition",
    date: "October 5th - 13th, 2025",
    time: "-",
    location: "Virtual",
    description:
      "Space Clubs LASU invites students and space enthusiasts to submit insightful articles on futuristic space themes including habitats, healthcare, and energy systems beyond Earth. Join us in celebrating World Space Week by sharing your ideas.",
    category: "Webinar",
    image: "/images/events/articles_wsw.jpg",
    registerLink:
      "https://www.linkedin.com/posts/space-clubs-lasu_wsw2025-spaceclubslasu-callforarticles-activity-7379900084903292928-In7p",
  },

  {
    title:
      "Space Robotics & AI: How Robotics & AI help astronauts perform tasks",
    date: "October 9th, 2025",
    time: "4:00 PM",
    location: "Virtual",
    description:
      "Join us for a technical webinar on how robotics & AI help astronauts perform tasks in Space.",
    category: "Webinar",
    image: "/images/events/robotics_wsw.jpg",
    registerLink: "https://luma.com/4c67u6uo",
  },
  {
    title: "WSW 25 School Outreach(2)",
    date: "October 8th, 2025",
    time: "10:00 AM",
    location: "Temmrej College, Epe",
    description:
      "As part of World Space Week 2025, Space Clubs LASU will visit Temrej College  to inspire and educate students about space science, technology, and exploration. Join us as we nurture the next generation of young innovators and space leaders!",
    category: "Outreach",
    image: "/images/events/temrej.jpg",
    registerLink: "",
  },
  {
    title: "Astrovate Virtual Hackathon.",
    date: "October 7th, 2025",
    time: "10:00 AM",
    location: "Virtual",
    description:
      "AstroVate Virtual Hackathon is part of our World Space Week 2025 Celebrations, themed “Living in Space.” It’s a platform for innovators and enthusiasts to design solutions for real-world space challenges.Join us on October 7th to showcase creativity, collaboration, and innovation for the future of space.",
    category: "Competition",
    image: "/images/events/astro.jpg",
    status: "past",
    registerLink: "https://lu.ma/q1m9m9ru",
  },
  {
    title: "WSW 25 School Outreach(1)",
    date: "October 6th, 2025",
    time: "12:00 PM",
    location: "Rosenik Private School, Epe",
    description:
      "As part of World Space Week 2025, Space Clubs LASU will visit Rosenik Schools to inspire and educate students about space science, technology, and exploration. Join us as we nurture the next generation of young innovators and space leaders!",
    category: "Outreach",
    image: "/images/events/rosenik.jpg",
    status: "past",
    registerLink: "",
  },

  {
    title: "Space for All: Why Living in Space matters to life on earth ",
    date: "October 4th, 2025",
    time: "4:00 PM",
    location: "Virtual",
    description:
      "Living in space pushes us to develop new technologies for health, energy, and sustainability. The solutions we create for survival beyond Earth often improve daily life right here at home. Exploring how we live in space is ultimately about building a better future for life on Earth.",
    category: "Webinar",
    image: "/images/events/space4all.jpg",
    status: "past",
    registerLink: "https://luma.com/x8t4mphe",
  },
  {
    title:
      "Hello From The Future: A conversation with Dr. Claire A. Nelson, founder of Space Futures Forum.",
    date: "July 31, 2025",
    time: "4:00 PM",
    location: "Virtual",
    description:
      "Join us for a special encounter with renowned futurist and engineer, Dr. Claire A. Nelson, as she shares visionary insights on space development, sustainable innovation, and the future of Africa's cities.",
    category: "Webinar",
    image: "/images/events/futures_event.jpg",
    status: "past",
    registerLink: "https://lu.ma/jyys9w66",
  },
  {
    title: "Space Jam",
    date: "July 26, 2025",
    time: "2:00 PM",
    location: "Engineering Lecture Theatre",
    description:
      "Chill vibes, Space Trivia(with rewards), games, photo ops, recognitions and free snacks...interested in any, come have fun and vibe with other communnity members.",
    category: "Meetup",
    image: "/images/events/space-jam-2025.jpg",
    status: "past",
    registerLink: "https://lu.ma/jd0eb5kf",
  },
  {
    title: "Byte and Build",
    date: "July 15 & 16, 2025",
    time: "2:00 PM",
    location: "Electronics Lab",
    description:
      "Byte and Build is a two-day technical workshop designed to introduce hardware enthusiasts to the exciting world of hardware and robotics.",
    category: "Workshop",
    image: "/images/events/byte_and_build.jpg",
    status: "past",
    registerLink: "https://lu.ma/7g4u8f6z",
  },
  {
    title: "Under The Epe Sky",
    date: "June 12, 2025",
    time: "8:00 PM",
    location: "Lecture Theatre, LASU EPE",
    description:
      "Bringing students together to explore the night sky through telescopes, talks, and cosmic wonder.",
    category: "Observation",
    image: "/images/events/under_the_epe_sky.jpg",
    status: "past",
    registerLink: "https://tix.africa/spaceclubslasu",
  },
  {
    title: "The Yuri's Flight",
    date: "April 27, 2025",
    time: "7:00 PM",
    location: "Virtual",
    description:
      "Get to know about the life of the first man that went to space, the challenges he faced and the mission.",
    category: "Discussion",
    image: "/images/events/yuri.jpg",
    status: "past",
  },
  {
    title: "InterPlanetary travel",
    date: "April 20, 2025",
    time: "7:00 PM",
    location: "Virtual",
    description:
      "Join us for our amazing discussion series to learn about Interplanetary travel, and also get to share your thoughts.",
    category: "Discussion",
    image: "/images/events/interplanetary.jpg",
    status: "past",
  },
  {
    title: "Rocket Propulsion Systems",
    date: "April 6, 2025",
    time: "7:00 PM",
    location: "Virtual",
    description:
      "Learn the Science behind what makes rockets launching into space possible.",
    category: "Discussion",
    image: "/images/events/rocket_propulsion.jpg",
    status: "past",
  },
  {
    title: "Nigeria and Our Space Race Webinar",
    date: "January 25, 2025",
    time: "5:00 PM",
    location: "Virtual",
    description:
      "Together, we'll dive into the role of technology, innovation, and policy in shaping the future of space exploration in Nigeria.",
    category: "Webinar",
    image: "/images/events/space_race.jpg",
    status: "past",
  },
  {
    title: "Learning how to communicate like an Engineer",
    date: "January (15,17,22,24), 2025",
    time: "3:00 PM - 5:00 PM",
    location: "ECE Classroom",
    description:
      "Bringing students together to explore the night sky through telescopes, talks, and cosmic wonder.",
    category: "Bootcamp",
    image: "/images/events/comm_bootcamp.jpg",
    status: "past",
  },
  {
    title: "End of The Year Club Mixer",
    date: "December 29, 2024",
    time: "5:00 PM",
    location: "Virtual",
    description:
      "A movie night event where you watch a movie to mark the end of space week 2024.",
    category: "Meetup",
    image: "/images/events/club_mixer.jpg",
    status: "past",
  },
  {
    title: "Space Week Movie Night",
    date: "October 8, 2024",
    time: "8:00 PM",
    location: "LASU EPE Campus buttery",
    description:
      "A movie night event where you watch a movie to mark the end of space week 2024.",
    category: "Meetup",
    image: "/images/events/space_week.jpg",
    status: "past",
  },
  {
    title:
      "The future of climate-smart agriculture: Leveraging drones for sustainable farming",
    date: "October 8, 2024",
    time: "6:00 PM",
    location: "Virtual",
    description:
      "Dive into the innovative world of drone technology and discover how it is revolutionizing sustainable farming practices across the globe.",
    category: "Webinar",
    image: "/images/events/climate_agric.jpg",
    status: "past",
  },
  {
    title: "Monitoring the Planet: How Satellites are Combating Climate Change",
    date: "October 4, 2024",
    time: "6:00 PM",
    location: "Virtual",
    description:
      "From tracking deforestation to disaster management, this webinar will showcase how space technology is shaping the future of environmental sustainability.",
    category: "Webinar",
    image: "/images/events/monitoring_the_planet.jpg",
    status: "past",
  },
  {
    title: "Space Clubs Onboarding session",
    date: "21 April, 2024",
    time: "6:00 PM",
    location: "Virtual",
    description:
      "From tracking deforestation to disaster management, this webinar will showcase how space technology is shaping the future of environmental sustainability.",
    category: "Webinar",
    image: "/images/events/sc_onboard.jpg",
  },
];

// Export events with automatically calculated status
export const allEvents = eventsData.map((event) => ({
  ...event,
  status: getEventStatus(event.date),
}));
