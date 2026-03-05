export default function Skills() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="font-semibold mb-3">Frontend</h3>
          <ul className="space-y-1">
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML / CSS</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Backend</h3>
          <ul className="space-y-1">
            <li>Java</li>
            <li>Spring Boot</li>
            <li>REST APIs</li>
            <li>Microservices</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Database</h3>
          <ul className="space-y-1">
            <li>SQL</li>
            <li>PostgreSQL</li>
            <li>Oracle DB</li>
            <li>Database Design</li>
          </ul>
        </div>

      </div>
    </section>
  );
}