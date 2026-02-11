import { useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [openBlog, setOpenBlog] = useState(null);
  const toggleBlog = (id) => setOpenBlog(openBlog === id ? null : id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-white px-6 md:px-20 py-16">

      <Link to="/" className="inline-block mb-8 text-sm text-black-600 hover:text-green-800 font-medium">
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-bold text-green-700 mb-4">Career Blogs</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Tips, guides, and expert advice to help you land your dream job faster.
      </p>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Blog 1 */}
        <BlogCard
          id={1}
          openBlog={openBlog}
          toggleBlog={toggleBlog}
          img="https://images.unsplash.com/photo-1554774853-b415df9eeb92"
          title="How to Write an ATS Resume"
          short="Learn how to format your resume so it passes screening systems."
          full="An ATS-friendly resume uses clear headings, keywords, and simple layouts. Avoid graphics and use bullet points with strong action verbs."
        />

        {/* Blog 2 */}
        <BlogCard
          id={2}
          openBlog={openBlog}
          toggleBlog={toggleBlog}
          img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          title="Top Skills Employers Want"
          short="Discover the most in-demand skills companies look for this year."
          full="Employers value communication, adaptability, and digital skills. Technical roles also require AI tools, cloud knowledge, and data analysis."
        />

        {/* Blog 3 */}
        <BlogCard
          id={3}
          openBlog={openBlog}
          toggleBlog={toggleBlog}
          img="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          title="How to Prepare for Job Interviews"
          short="Simple steps to boost confidence before your interview."
          full="Research the company, practice common questions, prepare stories using the STAR method, and dress professionally to make a strong first impression."
        />

        {/* Blog 4 */}
        <BlogCard
          id={4}
          openBlog={openBlog}
          toggleBlog={toggleBlog}
          img="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          title="Remote Work Success Tips"
          short="Stay productive and balanced while working remotely."
          full="Create a dedicated workspace, set daily goals, avoid distractions, and maintain communication with your team to stay efficient."
        />

      </div>
    </div>
  );
};

/* Reusable Blog Card Component */
const BlogCard = ({ id, openBlog, toggleBlog, img, title, short, full }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-xl">
    <img src={img} alt={title} className="w-full h-52 object-cover" />
    <div className="p-6">
      <h3 className="font-semibold text-xl text-slate-800">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">{short}</p>

      {openBlog === id && (
        <p className="text-gray-600 mt-4 text-sm leading-relaxed">{full}</p>
      )}

      <button
        onClick={() => toggleBlog(id)}
        className="mt-4 text-green-600 font-medium hover:underline"
      >
        {openBlog === id ? "Show Less ↑" : "Read More →"}
      </button>
    </div>
  </div>
);

export default Blogs;
