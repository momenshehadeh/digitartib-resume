import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white">

      {/* Top Navigation Back */}
      <div className="px-6 md:px-20 pt-10">
        <Link
          to="/"
          className="text-sm text-black-700 hover:text-green-900 font-medium"
        >
          ← Back to Home
        </Link>
      </div>

      {/* HERO */}
      <section className="text-center px-6 md:px-20 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          We Build Careers, Not Just Resumes
        </h1>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          DigiTartib helps job seekers transform their experience into powerful,
          ATS-optimized resumes that open doors to opportunities.
        </p>
      </section>

      {/* MISSION + VISION */}
      <section className="px-6 md:px-20 pb-20">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          <div className="bg-white p-8 rounded-2xl shadow-lg border">
            <h2 className="text-xl font-semibold text-green-700 mb-3">🎯 Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To simplify the job application process by providing smart tools
              that help users create professional resumes quickly and confidently.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border">
            <h2 className="text-xl font-semibold text-green-700 mb-3">🚀 Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              We envision a world where every talented person can present
              themselves professionally without needing design skills or expensive services.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
          Why DigiTartib?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">

          <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-green-700">⚡ Fast & Easy</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Build a complete resume in minutes with guided steps.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-green-700">📄 ATS Optimized</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Designed to pass resume screening software used by employers.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="font-semibold text-lg text-green-700">🎨 Smart Design</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Professional templates that highlight your strengths clearly.
            </p>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Your Career Journey Starts Here
        </h2>
        <p className="text-gray-600 mb-8">
          Join thousands of job seekers building better futures with DigiTartib.
        </p>

        <Link
          to="/app?state=register"
          className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition"
        >
          Start Building Your Resume
        </Link>
      </section>

    </div>
  );
};

export default Company;
