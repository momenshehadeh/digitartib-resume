import { Link } from "react-router-dom";
import { Shield, FileText, Users, Lock, Settings, RefreshCcw } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white px-4 sm:px-6 md:px-20 py-16">

      {/* Back to Home */}
      <Link
        to="/"
        className="inline-block mb-8 text-sm text-green-700 hover:text-green-900 font-medium"
      >
        ← Back to Home
      </Link>

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-green-700 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your privacy matters to us. This policy explains how DigiTartib collects, uses, and protects your information.
        </p>
      </div>

      {/* Privacy Sections */}
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Information We Collect */}
        <section className="bg-white p-8 rounded-2xl shadow-md border flex flex-col md:flex-row items-start gap-6">
          <Shield className="text-green-600 w-12 h-12 flex-shrink-0"/>
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              We may collect personal information such as your name, email address, and resume content when you create an account or use our services.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We also collect non-personal information like browser type, device information, and usage data to improve our platform.
            </p>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="bg-white p-8 rounded-2xl shadow-md border flex flex-col md:flex-row items-start gap-6">
          <FileText className="text-green-600 w-12 h-12 flex-shrink-0"/>
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>To provide and maintain the services you use.</li>
              <li>To personalize your experience on our platform.</li>
              <li>To send updates, newsletters, and promotional information (you can unsubscribe at any time).</li>
              <li>To analyze usage patterns and improve the website and app functionality.</li>
            </ul>
          </div>
        </section>

        {/* Sharing Your Information */}
        <section className="bg-white p-8 rounded-2xl shadow-md border flex flex-col md:flex-row items-start gap-6">
          <Users className="text-green-600 w-12 h-12 flex-shrink-0"/>
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">3. Sharing Your Information</h2>
            <p className="text-gray-600 leading-relaxed">
              We do not sell, trade, or rent your personal information to others. We may share information with trusted partners to operate the platform, provide services, or comply with the law.
            </p>
          </div>
        </section>

        {/* Data Security */}
        <section className="bg-white p-8 rounded-2xl shadow-md border flex flex-col md:flex-row items-start gap-6">
          <Lock className="text-green-600 w-12 h-12 flex-shrink-0"/>
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">4. Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no online service is completely secure.
            </p>
          </div>
        </section>

        {/* Your Rights */}
        <section className="bg-white p-8 rounded-2xl shadow-md border flex flex-col md:flex-row items-start gap-6">
          <Settings className="text-green-600 w-12 h-12 flex-shrink-0"/>
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">5. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              You can access, update, or delete your personal information at any time by logging into your account. You can also unsubscribe from communications and newsletters.
            </p>
            <p className="text-gray-600 leading-relaxed">
              For privacy concerns, contact us at: <span className="text-green-700 font-medium">support@digitartib.com</span>
            </p>
          </div>
        </section>

        {/* Updates to Policy */}
        <section className="bg-white p-8 rounded-2xl shadow-md border flex flex-col md:flex-row items-start gap-6">
          <RefreshCcw className="text-green-600 w-12 h-12 flex-shrink-0"/>
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">6. Updates to This Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this policy occasionally. The latest version will always be posted on our website. We encourage you to review it periodically.
            </p>
          </div>
        </section>

      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Ready to create your resume?</h2>
        <p className="text-gray-600 mb-6">
          Start building professional resumes that get noticed by employers.
        </p>
        <Link
          to="/app?state=register"
          className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition"
        >
          Get Started
        </Link>
      </div>

    </div>
  );
};

export default Privacy;
