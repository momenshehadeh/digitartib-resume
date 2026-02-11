import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  { q: "Is this resume builder free?", a: "Yes, you can create resumes for free with basic features." },
  { q: "Can I download my resume as PDF?", a: "Absolutely. All resumes can be exported as PDF." },
  { q: "Is my data private?", a: "Your resumes remain private unless you choose to make them public." },
  { q: "Can I edit my resume later?", a: "Yes, you can log in anytime and update your resume." },
  { q: "Are the resumes ATS-friendly?", a: "Yes. All templates are designed to pass Applicant Tracking Systems." },
  { q: "Do I need design skills?", a: "Not at all. The builder guides you step-by-step." },
  { q: "Can I use this on mobile?", a: "Yes, DigiTartib works smoothly on all devices." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white px-4 sm:px-6 md:px-20 py-16 sm:py-20">

      {/* Back */}
      <Link
        to="/"
        className="inline-block mb-8 text-sm text-black-700 hover:text-green-900 font-medium"
      >
        ← Back to Home
      </Link>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-green-800 mb-12">
        Frequently Asked Questions
      </h1>

      <div className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto space-y-4">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl overflow-hidden transition"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center p-4 sm:p-6 text-left"
            >
              <h3 className="font-semibold text-lg sm:text-xl text-green-700">{item.q}</h3>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === i ? "rotate-180 text-green-600" : ""
                }`}
              />
            </button>

            {openIndex === i && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
