import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const socials = [
  {
    name: "Instagram",
    icon: <Instagram size={28} />,
    url: "https://www.instagram.com/digitartib.resume",
    desc: "Daily career tips & resume advice."
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={28} />,
    url: "http://linkedin.com/company/digitartib",
    desc: "Professional updates and networking."
  },
  {
    name: "YouTube",
    icon: <Youtube size={28} />,
    url: "https://www.youtube.com/@digitartib",
    desc: "In-depth career guides and tutorials."
  }
];

const Community = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white px-6 md:px-20 py-16">

      {/* Back */}
      <Link to="/" className="text-sm text-black-700 hover:text-green-900 font-medium">
        ← Back to Home
      </Link>

      {/* Header */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Join Our Community 🌍
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Connect with thousands of job seekers, share success stories,
          and grow your career with the DigiTartib community.
        </p>
      </div>

      {/* Social Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center group"
          >
            <div className="text-green-600 group-hover:scale-110 transition">
              {social.icon}
            </div>
            <h3 className="mt-4 font-semibold text-lg text-slate-800">
              {social.name}
            </h3>
            <p className="text-gray-500 text-sm mt-2">{social.desc}</p>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">
          Be part of something bigger
        </h2>
        <p className="text-gray-600 mb-6">
          Follow us, learn with us, and grow together 🚀
        </p>
        <Link
          to="/app?state=register"
          className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition"
        >
          Create Your Resume Now
        </Link>
      </div>

    </div>
  );
};

export default Community;
