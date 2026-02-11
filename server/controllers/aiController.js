import Resume from "../models/Resume.js";
import ai from "../configs/ai.js";

// ==============================
// Enhance Professional Summary
// POST: /api/ai/enhance-pro-sum
// ==============================
export const enhanceProfessionalSummary = async (req, res) => {
  try {
    const { userContent } = req.body;
    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const response = await ai.interactions.create({
      model: process.env.AI_MODEL,
      message: [
        {
          role: "system",
          content: `
            You are an expert in resume writing. 
            Enhance the professional summary of a resume in 1-2 sentences, highlighting key skills, experience, and career objectives. 
            Make it compelling and ATS-friendly. Only return plain text.
          `,
        },
        { role: "user", content: userContent },
      ],
    });

    const enhancedContent = response.choices[0].message.content;
    return res.status(200).json({ enhancedContent });

  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// ==============================
// Enhance Job Description
// POST: /api/ai/enhance-job-desc
// ==============================
export const enhanceJobDescription = async (req, res) => {
  try {
    const { userContent } = req.body;
    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const response = await ai.interactions.create({
      model: process.env.AI_MODEL,
      message: [
        {
          role: "system",
          content: `
            You are an expert in resume writing. 
            Enhance the job description in 1-2 sentences, highlighting key responsibilities and achievements. 
            Use action verbs and quantifiable results. Make it ATS-friendly. Only return plain text.
          `,
        },
        { role: "user", content: userContent },
      ],
    });

    const enhancedContent = response.choices[0].message.content;
    return res.status(200).json({ enhancedContent });

  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// ==============================
// Upload Resume to Database
// POST: /api/ai/upload-resume
// ==============================
export const uploadResume = async (req, res) => {
  try {
    const { resumeText, title } = req.body;
    const userId = req.userId;

    if (!resumeText) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const systemPrompt = `
      You are an expert AI Agent to extract data from resumes. 
      Extract all information and provide it in JSON format exactly as requested.
    `;

    const userPrompt = `
      Extract data from this resume: ${resumeText}
      Provide data in the following JSON format with no additional text before or after:
      {
        professional_summary: { type: String, default: "" },
        skills: [{ type: String }],
        personal_info: {
          image: { type: String, default: "" },
          full_name: { type: String, default: "" },
          profession: { type: String, default: "" },
          email: { type: String, default: "" },
          phone: { type: String, default: "" },
          location: { type: String, default: "" },
          linkedin: { type: String, default: "" },
          website: { type: String, default: "" }
        },
        experience: [{
          company: { type: String },
          position: { type: String },
          start_date: { type: String },
          end_date: { type: String },
          description: { type: String },
          is_current: { type: Boolean }
        }],
        project: [{
          name: { type: String },
          type: { type: String },
          description: { type: String }
        }],
        education: [{
          institution: { type: String },
          degree: { type: String },
          field: { type: String },
          graduation_date: { type: String },
          gpa: { type: String }
        }]
      }
    `;

    const interaction = await ai.interactions.create({
      model: process.env.AI_MODEL,
      input: [
        { role: "model", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    const extractedText = interaction.output_text || interaction.outputs?.[1]?.text;
    console.log("extractedText", extractedText);

    const parsedData = JSON.parse(extractedText);
    console.log("parsedData", parsedData);

    const newResume = await Resume.create({
      userId,
      title,
      ...parsedData,
    });

    return res.status(201).json({ resumeId: newResume._id });

  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
};
