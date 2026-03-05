import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B1120] text-white overflow-x-hidden">

      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-blue-900 via-[#0B1120] to-purple-900 animate-gradient" />

      {/* Mouse Glow */}
      <div
        className="pointer-events-none fixed w-96 h-96 rounded-full bg-blue-500/20 blur-3xl -z-10"
        style={{
          top: mousePosition.y - 200,
          left: mousePosition.x - 200,
        }}
      />

      <Navbar />

      <Section id="home">
        <Hero />
      </Section>

      <Section id="about">
        <About />
      </Section>

      <Section id="skills">
        <Skills />
      </Section>

      <Section id="experience">
        <Experience />
      </Section>

      <Section id="projects">
        <Projects />
      </Section>

      <Section id="contact">
        <Connect />
      </Section>
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
      sections.forEach((sec) => {
        const element = document.getElementById(sec);
        if (
          element &&
          window.scrollY >= element.offsetTop - 200 &&
          window.scrollY < element.offsetTop + element.offsetHeight
        ) {
          setActive(sec);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="font-bold">Sarvani</div>
        <div className="flex gap-6 text-sm">
          {["home", "about", "skills", "experience", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`capitalize transition ${
                active === item ? "text-blue-400" : "text-gray-400"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative">

      <motion.h1
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-5xl font-extrabold tracking-tight mb-6"
      >
      Senior Software Engineer
      </motion.h1>

  <p className="max-w-3xl text-lg text-gray-300 leading-relaxed">
    Building scalable streaming systems, distributed data architectures, and high-impact production platforms.
  </p>

      <FloatingBadges />

      <div className="flex gap-8 mt-8 text-3xl">
  <a
    href="https://github.com/ksarvani2000"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition"
  >
    <FaGithub className="cursor-pointer" />
  </a>

  <a
    href="https://www.linkedin.com/in/sarvani-kunapuli-903094190/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition"
  >
    <FaLinkedin className="cursor-pointer" />
  </a>
</div>
    </div>
  );
}

/* ---------------- FLOATING TECH ---------------- */

function FloatingBadges() {
  const tech = ["Java", "Typescript", "React", "Spring Boot", "AWS", "Microservices", "AdTech"];

  return (
    <div className="flex gap-4 mt-10 flex-wrap justify-center">
      {tech.map((t, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3 + i, repeat: Infinity }}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm"
        >
          {t}
        </motion.div>
      ))}
    </div>
  );
}

/* ---------------- ABOUT ---------------- */

function About() {
  return (
    <ContentBlock title="About Me">
      Senior Software Engineer specializing in distributed systems, streaming platforms, and AdTech monetization at global scale. I’ve led zero-downtime data migrations, post-acquisition system integrations, and cross-platform ad architectures across Web and CTV ecosystems. My work has powered 600+ competition migrations, 60M+ monthly ad impressions, and measurable revenue growth. I focus on building reliable, scalable systems that drive real business impact.
    </ContentBlock>
  );
}

/* ---------------- SKILLS ---------------- */

function Skills() {
  return (
    <ContentBlock title="Skills">
      React • TypeScript • Vite • Java • Spring Boot • AWS • Oracle • CI/CD • On-Prem • RMQ • Hibernate • JUnit 
    </ContentBlock>
  );
}

/* --- experience ----- */


function Experience() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Experience
      </h2>

      <div className="space-y-24">

        <CompanyTimeline
          company="DAZN"
          subtitle="Global sports streaming platform serving OTT content for sport fans."
          roles={[
            {
              title: "Senior Software Engineer",
              duration: "2025 – 2026",
              points: [
                "Migrated FIFA+ sport data into DAZN core services ensuring zero disruption to existing production systems.",
                "Improved observability reducing production incidents by 80%",
                "Fixed Google Ad Manager API integration in on-prem services for a better Ad engagement"
              ],
              tech: ["Java", "Spring Boot", "AWS ECS", "Microservices", "React", "GAM", "Oracle"]
            },
            {
              title: "Software Engineer",
              duration: "2024 – 2025",
              points: [
                "Migrated 600+ competitions from StatsPerform using distributed event-driven systems ensuring zero-downtime while maintaining production stability",
                "Built a Spring Boot microservices-based integration bridge to deliver critical streaming metrics and data flows to Foxtel Kayo & Binge platforms.",
                "Worked on Integrating Multiple 3rd party services like Amagi, Amagi-linear, Data Miner for booking"
              ],
              tech: ["Java", "Spring Boot", "On-prem", "RMQ", "AWS", "Oracle"]
            },
            {
              title: "Associate Software Engineer",
              duration: "Nov 2022 – 2024",
              points: [
                "Developed banner ad placements across Web + CTV devices using GPT + GAM",
                "Integrated HLS/DASH streaming across web and living-room platforms (Tizen, webOS, SkyQ, Xbox,Panasonic, Vidaa",
                "Implemented client-side ad solutions (GAM, GPT, VAST)"
              ],
              tech: ["React", "TypeScript", "Spring MVC", "AdTech"]
            }
          ]}
        />

        <CompanyTimeline
          company="Publicis Sapient"
          roles={[
            {
              title: "Junior Associate Technology",
              duration: "May 2022 – Oct 2022",
              points: [
                "Developed Spring Boot microservices improving performance by 40%",
                "Implemented monitoring using Prometheus & Grafana",
                "Contributed to full-stack React + Spring features"
              ],
              tech: ["Spring Boot", "React", "SQL", "Prometheus"]
            }
          ]}
        />

        <CompanyTimeline
          company="Virtusa"
          roles={[
            {
              title: "Intern",
              duration: "Jan 2022 – April 2022",
              points: [
                "Built full-stack Employee Management System",
                "Designed REST APIs and optimized SQL queries",
                "Contributed to modular microservices architecture"
              ],
              tech: ["Spring Boot", "React", "SQL"]
            }
          ]}
        />

      </div>
    </div>
  );
}

function CompanyTimeline({ company, subtitle, roles }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      <h3 className="text-2xl font-semibold text-blue-400 mb-2">
        {company}
      </h3>

      {subtitle && (
        <p className="text-sm text-gray-400 mb-8">
          {subtitle}
        </p>
      )}

      {/* Vertical Line */}
      <div className="absolute left-3 top-16 bottom-0 w-[2px] bg-gradient-to-b from-blue-400 to-purple-500" />

      <div className="space-y-16 pl-12">
        {roles.map((role, index) => (
          <motion.div
            key={index}
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Dot */}
            <div className="absolute -left-[38px] top-4 w-4 h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50" />

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:border-blue-400/40 hover:-translate-y-1 transition duration-300">

              <h4 className="text-lg font-semibold">
                {role.title}
              </h4>

              <p className="text-sm text-gray-400 mb-4">
                {role.duration}
              </p>

              {/* Impact Points */}
              <ul className="space-y-2 text-gray-300 text-sm mb-6">
                {role.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {role.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-blue-500/10 border border-blue-400/20 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ---------------- PROJECTS ---------------- */

function Projects() {
  const projectList = [
    {
      title: "Foxtel-Won Integration Bridge",
      description:
        "Designed and implemented a Spring Boot microservices integration bridge to synchronize DAZN event metadata with Kayo’s Airtable planning system post-acquisition, ensuring seamless cross-platform event planning and operational continuity",
      tech: ["Java", "Spring Boot", "Microservices", "Airtable Integration", "On-Prem deployment", "Oracle"],
      // github: "#",
      impact: "Enabled reliable metric synchronization across streaming platforms."
    },
    {
      title: "SportRadar Migration System",
      description:
        "Implemented a zero-downtime migration of 600+ competitions from Stats Perform to SportRadar, preserving downstream system stability. Built a React + Spring Boot full-stack management tool to support CRUD operations, validation, and operational oversight during the transition.",
      tech: ["Java", "Spring Boot", "AWS", "Event-Driven Systems"],
      // github: "#",
      impact: "Designed schema mapping and validation mechanisms to ensure accurate competition data alignment across distributed services."
    },
    {
      title: "Google Ad-manager Integration",
      description:
        "Architected and delivered Google Ad Manager (GAM) SDK & API integration for client-side ad calls across web and connected TV platforms (Tizen, webOS, Vidaa, Xbox One, SkyQ), driving a 60% uplift in ad impressions and revenue globally.",
      tech: ["React", "JavaScript", "AdTech", "Google Ad Manager"],
      // github: "#",
      impact: "Increased Ad Impressions & Ad revenue by 60%"
    },
    {
      title: "Banner Ads Integration",
      description:
        "Engineered cross-platform banner ad placements across Web and Connected TV (Tizen, webOS, Vidaa, Xbox, SkyQ) using Google Publisher Tag (GPT) and Google Ad Manager (GAM), supporting multi-model campaigns enabling scalable monetization without disrupting user experience.",
      tech: ["React", "Typescript", "GPT", "GAM"],
      // github: "#",
      impact: "Enabled new monetization surfaces supporting CPM, CPC, and CPA campaigns while preserving seamless video playback and viewer retention"
    },
    {
      title: "Sponsorship Ads Integration",
      description:
        "Designed and Implemented region-targeted sponsorship ad placements across home and sub-pages on CTV(Tizen, webOS, Vidaa, Xbox, SkyQ) and Web platforms, integrating Google IMA SDK to deliver ~60M monthly impressions without impacting video playback experience.",
      tech: ["React", "Typescript", "GPT", "GAM"],
      // github: "#",
      impact: "Improved ad engagement by 30% and increased sponsorship revenue by 15% through strategic"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="group bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl transition duration-300 hover:border-blue-400/40"
          >
            <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {project.description}
            </p>

            <p className="text-sm text-blue-300 mb-6">
              {project.impact}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-blue-500/10 border border-blue-400/20 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="text-blue-400 text-sm hover:underline"
              >
                View Code →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- CONTACT ---------------- */

function Connect() {
  return (
    <section className="py-32 px-6 bg-black/30 backdrop-blur-md border-t border-white/10">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Let’s Connect
        </h2>

        {/* Subtext */}
        <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
          I’m open to impactful engineering opportunities across streaming,
          distributed systems, and high-scale Web + CTV platforms.
        </p>

        {/* Contact Info */}
        <div className="space-y-4 text-lg mb-10">
          <a
            href="mailto:saisarvani.kunapuli@gmail.com"
            className="block hover:text-blue-400 transition"
          >
            📩 saisarvani.kunapuli@gmail.com
          </a>

          <p className="text-gray-400">
            📍 Hyderabad, India
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="https://www.linkedin.com/in/sarvani-kunapuli-903094190/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 hover:border-violet-400 hover:text-violet-400 transition font-medium"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/ksarvani2000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 hover:border-blue-400 hover:text-blue-400 transition font-medium"
          >
            GitHub
          </a>

          <a
            href="/Sarvani_Kunapuli_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 hover:border-purple-400 hover:text-purple-400 transition font-medium"
          >
            View My Resume
          </a>

        </div>
      </div>
    </section>
  );
}

/* ---------------- REUSABLE ---------------- */

function Section({ children, id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-32"
    >
      {children}
    </motion.section>
  );
}

function ContentBlock({ title, children }) {
  return (
    <div className="max-w-4xl mx-auto text-center px-6">
      <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed">{children}</p>
    </div>
  );
}