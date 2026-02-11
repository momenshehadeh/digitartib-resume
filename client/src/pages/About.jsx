import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white px-6 md:px-20 py-16">

      {/* Back */}
      <Link
        to="/"
        className="text-sm text-black-700 hover:text-green-900 font-medium"
      >
        ← Back to Home
      </Link>

      {/* HERO */}
      <section className="text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          About DigiTartib
        </h1>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          We believe everyone deserves a professional resume — without stress,
          design skills, or expensive services.
        </p>
      </section>

      {/* STORY */}
      <section className="mt-20 max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg border">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed">
          DigiTartib was created to make resume building easy, beautiful, and intelligent.
          Job seekers often struggle with formatting, structure, and writing strong content.
          We built a platform powered by smart design to guide users step-by-step.
        </p>
      </section>

      {/* VALUES */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          What We Stand For
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">

          <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition bg-white">
            <h3 className="font-semibold text-lg text-green-700">🤝 Accessibility</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Everyone should have access to professional career tools.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition bg-white">
            <h3 className="font-semibold text-lg text-green-700">🧠 Smart Technology</h3>
            <p className="text-gray-600 mt-2 text-sm">
              We use modern design to make resume creation effortless.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition bg-white">
            <h3 className="font-semibold text-lg text-green-700">🚀 Career Growth</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Our goal is to help users get more interviews and better opportunities.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-24">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Ready to build your future?
        </h2>
        <p className="text-gray-600 mb-8">
          Start creating a resume that gets noticed today.
        </p>

        <Link
          to="/app?state=register"
          className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition"
        >
          Build My Resume
        </Link>
      </section>

    </div>
  );
};

export default About;
