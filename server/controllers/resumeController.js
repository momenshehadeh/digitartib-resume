import image_kit from "../configs/imageKit.js";
import Resume from "../models/Resume.js";
import fs from "fs";

// ==============================
// Create a New Resume
// POST: /api/resumes/create
// ==============================
export const createResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { title } = req.body;

    const newResume = await Resume.create({ userId, title });

    return res.status(201).json({
      message: "Resume created successfully",
      resume: newResume,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// ==============================
// Delete a Resume
// DELETE: /api/resumes/delete/:resumeId
// ==============================
export const deleteResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    await Resume.findOneAndDelete({ userId, _id: resumeId });

    return res.status(200).json({ message: "Resume deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// ==============================
// Get User Resume by ID
// GET: /api/resume/get/:resumeId
// ==============================
export const getResumeById = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    const resume = await Resume.findOne({ userId, _id: resumeId });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    // Remove unnecessary fields
    const { __v, createdAt, updatedAt, ...cleanedResume } = resume.toObject();

    return res.status(200).json({ resume: cleanedResume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// ==============================
// Get Public Resume by ID
// GET: /api/resumes/public/:resumeId
// ==============================
export const getPublicResumeById = async (req, res) => {
  try {
    const { resumeId } = req.params;

    const resume = await Resume.findOne({ public: true, _id: resumeId });

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    return res.status(200).json({ resume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// ==============================
// Update a Resume
// PUT: /api/resumes/update
// ==============================
export const updateResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId, resumeData, removeBackground } = req.body;
    const image = req.file;

    // Parse or clone resumeData
    let updatedData;
    if (typeof resumeData === "string") {
      updatedData = JSON.parse(resumeData);
    } else {
      updatedData = structuredClone(resumeData);
    }

    // Handle image upload if provided
    if (image) {
      const imageStream = fs.createReadStream(image.path);
      const response = await image_kit.files.upload({
        file: imageStream,
        fileName: "resume.png",
        folder: "user-resumes",
        transformation: {
          pre:
            "w-300,h-300,fo-face,z-0.75" +
            (removeBackground ? ",e-bgremove" : ""),
        },
      });

      updatedData.personal_info = updatedData.personal_info || {};
      updatedData.personal_info.image = response.url;
    }

    // Update the resume in the database
    const resume = await Resume.findOneAndUpdate(
      { userId, _id: resumeId },
      updatedData,
      { new: true }
    );

    return res.status(200).json({ message: "Saved successfully", resume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
