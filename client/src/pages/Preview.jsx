import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ResumePreview from "../components/ResumePreview";
import { ArrowLeftIcon, Loader } from "lucide-react";
import api from "../configs/api.js";

const Preview = () => {
  const { resumeId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [resumeData, setResumeData] = useState(null);

  // Load public resume data
  const loadResume = async () => {
    try {
      const { data } = await api.get(`/api/resume/public/${resumeId}`);
      setResumeData(data.resume);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadResume();
  }, [resumeId]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin w-12 h-12 text-green-500" />
      </div>
    );
  }

  // Resume not found
  if (!resumeData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-slate-100">
        <p className="text-center text-6xl text-slate-400 font-medium">
          Resume not found
        </p>
        <Link
          to="/"
          className="mt-6 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 h-9 flex items-center ring-1 ring-green-400 transition-colors"
        >
          <ArrowLeftIcon className="mr-2 size-4" /> Go to home page
        </Link>
      </div>
    );
  }

  // Resume preview
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="max-w-3xl mx-auto py-10">
        <ResumePreview
          data={resumeData}
          template={resumeData.template}
          accentColor={resumeData.accentColor}
          classes="py-4 bg-white"
        />
      </div>
    </div>
  );
};

export default Preview;
