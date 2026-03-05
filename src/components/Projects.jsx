export default function Projects() {
  const projects = [
    {
      title: "Sports Data Platform",
      desc: "Full stack app using React + Spring Boot with caching, pagination, and API integration.",
      link: "#",
    },
    {
      title: "Event Management System",
      desc: "Backend-heavy system for managing competitions, schedules, and users.",
      link: "#",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="border p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-4">{p.desc}</p>

            <a
              href={p.link}
              className="text-blue-500 font-medium"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}