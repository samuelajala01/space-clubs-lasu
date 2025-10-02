"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, memo } from "react";
import dynamic from "next/dynamic";


const AOS = dynamic(() => import("aos"), { ssr: false });

const ArticleCard = memo(({ article, index }) => {
  return (
    <article className="bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-black/50 transition-all duration-300 p-4 md:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center">
        <div className="relative h-64 w-full sm:h-48 md:h-72 sm:w-1/3 mb-4 sm:mb-0 flex-shrink-0">
          <Image
            src={article.banner}
            alt={article.title}
            fill
            className="object-cover rounded-lg sm:rounded-none"
            sizes="(max-width: 640px) 100vw, 33vw"
            quality={70}
            loading={index < 3 ? "eager" : "lazy"}
            priority={index < 3}
          />
        </div>
        <div className="px-0 sm:px-6 sm:mt-2 w-full sm:w-2/3 flex flex-col h-full">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            {article.title}
          </h2>
          <p className="text-gray-300 mb-4 md:mb-6 flex-grow text-sm md:text-base line-clamp-4">
            {article.description}
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>{article.date}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="text-sm text-gray-400">
                By{" "}
                {article.authors.map((author, idx) => (
                  <span key={author.name}>
                    {author.linkedin ? (
                      <Link
                        href={author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-500 hover:text-orange-400 transition-colors"
                      >
                        {author.name}
                      </Link>
                    ) : (
                      <span className="text-orange-500">{author.name}</span>
                    )}
                    {idx < article.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </div>
              <Link
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 transition-colors text-sm font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
});

ArticleCard.displayName = "ArticleCard";

const Blog = () => {
  // Memoize articles data
  const articles = useMemo(() => [
    {
      id: 100,
      title: "Nigeria's Trillion-Dollar Opportunity: Why Space Education in Universities is Non-Negotiable",
      description: "This article explores the urgent need to integrate space education into Nigerian universities as a critical step toward national development and participation in the global space economy. Drawing from real case studies and global models, the piece outlines key challenges and offers a practical roadmap for policymakers, educators, and students alike. It's a bold call to action—written for the next generation of African space leaders.",
      banner: "/images/blog/agency.jpg",
      authors: [{ name: "Sylvester Agose", linkedin: "https://www.linkedin.com/in/sylvesteragose" }],
      date: "July 17, 2025",
      link: "https://www.linkedin.com/posts/space-clubs-lasu_theorbit-spaceeducation-nigeriainspace-activity-7351362506323329027-zUXh?utm_source=share&utm_medium=member_android&rcm=ACoAADqED0QBNdIb5JahcQKdTsrUQBS4Ikq5mPQ",
    },
    {
      id: 1,
      title: "There is Enough Room in Space: The Uprising of the New Space Race and Africa's Ascent",
      description: "Once merely spectators in the cosmic arena, African nations are now stepping boldly into the evolving space race—no longer about Cold War dominance but about survival, innovation, and sustainability. This article traces the arc from the historical U.S.–Soviet space rivalry to today's inclusive, multipolar race that invites Africa to rise and lead. With new institutions like the African Space Agency and growing local expertise, space is becoming a platform for solving challenges like food insecurity, climate change, and communication gaps. Will Africa claim its place in this new space frontier or risk being left behind again?",
      banner: "/images/blog/agency.jpg",
      authors: [{ name: "Praise Omgbrumaye", linkedin: "https://www.linkedin.com/in/praise-omgbrumaye-76b9aa2a8/" }],
      date: "May 13, 2025",
      link: "https://www.linkedin.com/pulse/theres-enough-room-space-uprising-new-race-africas-ascent-eutcf/?trackingId=zwnAXm1fSlO9It1rzUQsdQ%3D%3D",
    },
    {
      id: 9,
      title: "Space Innovations for Renewable Energies",
      description: "As the demand for energy continues to rise, our planet faces challenges with non-renewable resources. In response, space-based renewable energy offers a groundbreaking solution by harnessing the power of the sun, moon, and even asteroids. From space-based solar power to lunar energy harvesting, these innovations could transform how we generate and consume clean energy. While technical and economic hurdles remain, the potential to provide continuous, sustainable energy both on Earth and in space could revolutionize global energy systems. How can space technology help us secure a cleaner future? Explore the possibilities within this evolving frontier.",
      banner: "/images/blog/satellite.jpg",
      authors: [{ name: "Samuel Adebanjo", linkedin: "https://www.linkedin.com/in/samuel-adebanjo-%F0%9F%94%A5-60256825b/" }],
      date: "January 10, 2025",
      link: "https://www.linkedin.com/pulse/space-innovations-renewable-energies-space-clubs-lasu-gsctf/?trackingId=b70k1AyORM6plAa3eLn1TQ%3D%3D",
    },
    {
      id: 2,
      title: "Sustainable Agriculture with Space Technology",
      description: "Space technology has become a powerful tool in transforming agriculture, helping farmers monitor and manage crops with greater efficiency. By utilizing satellite data, farmers can track soil moisture, weather patterns, and crop health, improving sustainability and reducing environmental impact. However, challenges like cost and access to technology remain, especially for smallholder farmers in developing regions. As we look to the future, the integration of AI, drones, and miniaturized satellites offers exciting possibilities for more sustainable farming practices worldwide.",
      banner: "/images/blog/article 6.jpg",
      authors: [{ name: "Olawale Olaitan", linkedin: "https://www.linkedin.com/in/olawale-olaitan-389bb2228/" }],
      date: "December 20, 2024",
      link: "https://www.linkedin.com/pulse/sustainable-agriculture-space-technology-space-clubs-lasu-yczkf/?trackingId=HIq7cQL2vbfNbHlnH0ZTww%3D%3D",
    },
    {
      id: 3,
      title: "Plasma Propulsion Systems for Aircraft: The Future of Aviation",
      description: "The future of aviation is in jeopardy due to the environmental toll caused by traditional jet engines, which significantly contribute to carbon emissions. Plasma propulsion systems, which are already used in space, could be the solution to reducing air travel's environmental impact. These systems offer cleaner, quieter, and more efficient alternatives by utilizing ionized gases for thrust instead of fossil fuels. While challenges such as high power consumption and material limitations remain, ongoing research shows great promise for transforming aviation, making it more sustainable and energy-efficient.",
      banner: "/images/blog/article 3.jpg",
      authors: [{ name: "Soefllah Idris", linkedin: "https://www.linkedin.com/in/soefllah-idris/" }],
      date: "August 10, 2024",
      link: "https://www.linkedin.com/pulse/plasma-propulsion-systems-aircraft-future-aviation-sylvester-agose-trz1f/?trackingId=gOELh7Kj8EIGmz9zbks2dA%3D%3D",
    },
    {
      id: 4,
      title: "Alternative Propulsion Systems: What are they?",
      description: "As the aerospace industry shifts towards sustainability, alternative propulsion systems have become key to reducing emissions and dependency on fossil fuels. This article explores various propulsion technologies, such as electric, hybrid, and hypersonic systems, and their role in minimizing environmental impact while enhancing space exploration capabilities. With benefits like increased efficiency and reduced pollution, these systems could revolutionize the way we explore space. How might the adoption of these alternatives shape the future of both space travel and our planet's environmental health?",
      banner: "/images/blog/alt_prop.jpg",
      authors: [
        { name: "Kehinde Fodunrin", linkedin: "https://www.linkedin.com/in/kehinde-fodunrin-4a68b7257/" },
        { name: "Gbolahan Balogun", linkedin: "" },
      ],
      date: "June 7, 2024",
      link: "https://www.linkedin.com/pulse/alternative-propulsion-systems-what-space-clubs-lasu-punoc/?trackingId=m5DlbRUUPJj6ZiVgkAR3zw%3D%3D",
    },
    {
      id: 5,
      title: "What Are Moon Phases",
      description: "The moon's phases are a captivating cycle that reveals different faces as it orbits the Earth. Have you ever wondered why the moon appears to change shape throughout the month? From the dark new moon to the bright full moon, each phase brings its own unique energy and symbolism. Understanding how the moon's position in relation to the Earth and Sun shapes its appearance can offer insights into cycles of growth, change, and reflection. Curious about what happens behind this celestial phenomenon?",
      banner: "/images/blog/article 4.jpg",
      authors: [
        { name: "Esther Obasi", linkedin: "https://www.linkedin.com/in/obasi-esther-65b55928b/" },
        { name: "Rahmat Alade", linkedin: "https://www.linkedin.com/in/rahmat-alade/" },
      ],
      date: "June 4, 2024",
      link: "https://www.linkedin.com/pulse/what-moon-phases-space-clubs-lasu-fvi4c/?trackingId=DICT6HP7vuUvMuSn8lqgXw%3D%3D",
    },
    {
      id: 6,
      title: "Africa in Space, Achievable Goal?",
      description: "Africa's journey into space is gaining momentum, with nations investing in satellites and space technology despite significant challenges. From launching satellites to establishing space agencies, Africa is pushing forward, yet financial and technological hurdles remain. As the African Space Agency takes shape and collaborations grow, the continent's space industry could potentially reach new heights. What does the future of African space exploration look like, and can Africa achieve its space ambitions by 2050?",
      banner: "/images/blog/africa.jpg",
      authors: [
        { name: "Abdulganiyy Fashola", linkedin: "" },
        { name: "Omotolani Nusirat Ige", linkedin: "https://www.linkedin.com/in/nusirat-ige-9b706130a/" },
      ],
      date: "May 17, 2024",
      link: "https://www.linkedin.com/pulse/africa-space-achievable-goal-space-clubs-lasu-shzpf/?trackingId=qZw49n4OgBbGJqkarH9Yhg%3D%3D",
    },
    {
      id: 7,
      title: "What Is Sustainability?",
      description: "Sustainability touches all aspects of life, from preserving the environment to fostering economic growth and ensuring social equity. The aviation industry, which has revolutionized global connectivity, now faces the challenge of reducing its environmental impact. As air travel is set to grow, the need for sustainable aviation practices becomes more pressing. Can the industry adopt greener technologies like Sustainable Aviation Fuels (SAF) to balance progress with environmental responsibility? Read on to explore how the aviation sector is working towards a more sustainable future and the hurdles it still faces.",
      banner: "/images/blog/plane.jpg",
      authors: [
        { name: "Seriki Rukayat", linkedin: "https://www.linkedin.com/in/rukayat-seriki-39b262321/" },
        { name: "Olaitan Olawale", linkedin: "https://www.linkedin.com/in/olawale-olaitan-389bb2228/" },
      ],
      date: "May 17, 2024",
      link: "https://www.linkedin.com/pulse/what-sustainability-space-clubs-lasu-oqtif/?trackingId=yjTT89zYnBQx5fDI8O2Nxw%3D%3D",
    },
  ], []);

  useEffect(() => {
   
    import("aos").then((AOSModule) => {
      const AOS = AOSModule.default;
      AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        disable: 'mobile', 
      });
    });

  
    import("aos/dist/aos.css");
  }, []);

  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/home-bg.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={60}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAB//2Q=="
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-center">
          The Orbit
        </h1>
        <p className="text-center text-lg text-gray-300 mb-12">
          Explore our latest articles on space exploration, technology, and the
          future of humanity in space.
        </p>

        <div className="grid grid-cols-1 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;