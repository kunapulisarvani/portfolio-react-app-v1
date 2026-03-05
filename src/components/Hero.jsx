export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-slate-900 text-white px-6">
      
      <h1 className="text-5xl font-bold mb-4">
        Hi, I'm Sarvani 👋
      </h1>

      <h2 className="text-2xl text-blue-400 mb-6">
        Full Stack Engineer
      </h2>

      <p className="max-w-xl text-lg text-gray-300">
        I build scalable web applications using React, Spring Boot, and Java,
        focusing on performance, reliability, and clean architecture.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/resume.pdf"
          className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Download Resume
        </a>

        <a
          href="https://github.com/your-github"
          target="_blank"
          className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-800"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}